<template>
  <div class="empty-task-list">
    <p>You do not have any tasks <Button color="transparent" @click="handleOpenModal">add a new task</Button></p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('task-list', ['setSelectedTask']),
    handleOpenModal() {
      this.setSelectedTask({ task: {}, is_edit: true})
    }
  },
}
</script>
