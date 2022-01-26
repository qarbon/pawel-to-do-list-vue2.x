<template>
  <div class="modal__header">
    <div class="flex-gap">
      <h1>{{ title }}</h1>
      <Button color="transparent" @click="() => setIsEdit(true)" v-if="is_edit">Edit task</Button>
    </div>
    <Button color="primary" @click="clearSelectedTask">x</Button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TaskModalHeader',
  props: {
    title: {
      type: String,
      default: '',
    },
    is_edit: {
      type: String,
      default: '',
    },
  },
  methods: {
    ...mapActions('task-list', ['clearSelectedTask', 'setIsEdit']),
  },
}
</script>
