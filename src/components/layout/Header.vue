<template>
  <header>
    <h1>PawaTask</h1>
    <Button color="primary" @click="handleOpenModal">Add a new task</Button>
  </header>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  methods: {
    ...mapActions('task-list', ['setSelectedTask']),
    handleOpenModal() {
      this.setSelectedTask({ task: {}, is_edit: true})
    }
  },
}
</script>
