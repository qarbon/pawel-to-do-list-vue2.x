<template>
  <form @submit.prevent="handleSubmit" class="task-form">
    <TextInput
        label="Title:"
        v-model.trim="body.title"
        :error="error.title"
        maxlength="100"
    />
    <Textarea
        label="Description:"
        v-model.trim="body.description"
        :error="error.description"
        maxlength="255"
    />
    <DateInput
        class="partial-width-input"
        label="Set due date:"
        v-model="body.due_date"
        :error="error.due_date"
    />
    <Select
        label="Priority:"
        v-model="body.priority"
        :error="error.priority"
        :options="get_priority_options"
        class="partial-width-input"
    />
    <Textarea
        label="Comment:"
        v-model.trim="body.message"
        :error="error.message"
        maxlength="255"
    />
    <Button color="primary" class="task-form__submit-button" :disabled="is_button_disabled">
      {{ button_label }}
    </Button>
  </form>
</template>

<script>
import { callApiPost, callApiPut } from '@/api'
import endpoints from '@/api/endpoints'
import fake_user from '@/api/fake_user'
import Textarea from '@/components/inputs/Textarea'
import { priority_enum, priority_names } from '@/enums/priority'
import { task_status } from '@/enums/task'
import errorMixin from '@/mixins/error'
import dayjs from 'dayjs'
import { mapActions } from 'vuex'

const body_factory = () => ({
  title: null,
  description: null,
  due_date: null,
  priority: 1,
  message: null,
})

export default {
  name: 'TaskModalForm',
  components: { Textarea },
  props: {
    selected_task: {
      type: Object,
      default: () => ({}),
    },
  },
  mixins: [errorMixin('task_form')],
  data() {
    return {
      button_disabled: false,
      body: body_factory(),
      body_copy: body_factory(),
      message: '',
    }
  },
  computed: {
    button_label() {
      return this.is_edit ? 'Edit task' : 'Add a new task'
    },
    get_priority_options() {
      return Object.values(priority_enum).map(value => ({ id: value, label: priority_names[value] }))
    },
    is_edit() {
      return !!this.selected_task.id
    },
    is_button_disabled() {
      return this.form_has_error || this.button_disabled
    },
  },
  methods: {
    ...mapActions('task-list', ['clearSelectedTask', 'getTaskList']),
    async addComment({ message, task_id }) {
      if (!message) {
        return
      }
      await callApiPost(endpoints.COMMENT, {
        message,
        created_at: dayjs().toISOString(),
        author_name: fake_user.name,
        task_id,
      })
    },
    async handleSubmit() {
      this.button_disabled = true
      if (this.form_has_error) {
        this.button_disabled = false
        return
      }
      this.validateAll()
      if (this.form_has_error) {
        this.button_disabled = false
        return
      }

      const message = this.body.message
      const body = { ...this.body, message: undefined }

      const response = this.is_edit
          ? await callApiPut(endpoints.TASK, body.id, body)
          : await callApiPost(endpoints.TASK, { ...body, status: task_status.todo })

      if (response.id) {
        await this.addComment({ message, task_id: response.id })
        await this.getTaskList()
        this.clearSelectedTask()
      }
      this.button_disabled = false
    },
  },
  mounted() {
    if (this.is_edit) {
      this.body = { ...this.selected_task }
    }
  },
}
</script>
