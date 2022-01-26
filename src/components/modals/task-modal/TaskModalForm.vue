<template>
  <form @submit.prevent="handleSubmit" class="task-form">
    <TextInput
        label="Title:"
        v-model.trim="body.title"
        :error="error.title"
    />
    <TextInput
        label="Description:"
        v-model.trim="body.description"
        :error="error.description"
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
    <TextInput
        label="Comment:"
        v-model.trim="body.comment"
        :error="error.comment"
    />
    <Button color="primary" class="task-form__submit-button" :disabled="is_button_disabled">
      {{ button_label }}
    </Button>
  </form>
</template>

<script>
import { callApiPost, callApiPut } from '@/api'
import endpoints from '@/api/endpoints'
import { priority_enum, priority_names } from '@/enums/priority'
import errorMixin from '@/mixins/error'
import { mapActions } from 'vuex'

const body_factory = () => ({
  title: null,
  description: null,
  due_date: null,
  priority: 1,
  comment: null,
})

export default {
  name: 'TaskModalForm',
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
      comments: '',
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
      const response = this.is_edit
          ? await callApiPut(endpoints.TASK, this.body.id, { ...this.body, comment: undefined })
          : await callApiPost(endpoints.TASK, { ...this.body, comment: undefined })

      if (response.id) {
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
