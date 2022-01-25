<template>
  <header>
    <h1>PawaTask</h1>
    <Button color="primary" @click="handleOpenModal">Add a new task</Button>
  </header>
</template>

<script>
import { mapActions } from 'vuex';
import { modal_mode } from '@/enums/modal'

export default {
  name: 'Header',
  data() {
    return {
      modal_mode,
    }
  },
  methods: {
    ...mapActions('task-list', ['setSelectedTask']),
    handleOpenModal() {
      this.setSelectedTask({ task: {}, is_edit: true})
    }
  },
}
</script>
