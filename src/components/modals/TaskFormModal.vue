<template>
  <form @submit.prevent="handleSubmit" class="task-form">
    <TextInput
        label="Title:"
        v-model="body.title"
        :error="error.title"
    />
    <TextInput
        label="Description:"
        v-model="body.description"
        :error="error.description"
    />
    <DateInput
        class="partial-width-input"
        label="Set due date:"
        v-model="body.due_date"
        :error="error.due_date"
    />
    <Select
        label="Priority"
        v-model="body.priority"
        :error="error.priority"
        :options="get_priority_options"
        class="partial-width-input"
    />
    <TextInput
        label="Comment:"
        v-model="body.comment"
        :error="error.comment"
    />
    <Button color="primary" class="task-form__submit-button">
      {{ is_edit ? 'Edit task' : 'Add a new task' }}
    </Button>
  </form>
</template>

<script>

import { priority_enum, priority_names } from '@/enums/priority'
import errorMixin from '@/mixins/error'

const body_factory = () => ({
  title: null,
  description: null,
  due_date: null,
  priority: 1,
  comment: null,
})

export default {
  name: 'TaskFormModal',
  props: {
    selected_task: {
      type: Object,
      default: () => ({}),
    },
  },
  mixins: [errorMixin('task_create')],
  data() {
    return {
      body: body_factory(),
      comments: '',
    }
  },
  computed: {
    get_priority_options() {
      return Object.values(priority_enum).map(value => ({ id: value, label: priority_names[value] }))
    },
    is_edit() {
      return !!this.selected_task.id
    },
  },
  methods: {
    handleSubmit() {
      this.validateAll()
    },
  },
}
</script>
