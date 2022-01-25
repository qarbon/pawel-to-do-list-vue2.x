<template>
  <div class="modal-header">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <Button color="primary" @click="clearSelectedTask">x</Button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
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
    ...mapActions('task-list', ['clearSelectedTask']),
  },
}
</script>
