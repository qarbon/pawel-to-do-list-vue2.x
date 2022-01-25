<template>
  <div class="task-list-element">
    <Checkbox v-model="is_checked"/>
    <p class="task-list-element-title">{{ task.title }}</p>
    <p>{{ task.todo_date }}</p>
    <Button color="primary" class="square-button" @click="handleOpenModal">p</Button>
    <Button color="primary" class="square-button" @click="() => handleOpenModal(true)">e</Button>
  </div>
</template>

<script>
import { modal_mode } from '@/enums/modal'
import { mapActions } from 'vuex'

export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      is_checked: false,
      modal_mode,
    }
  },
  methods: {
    ...mapActions('task-list', ['setSelectedTask']),
    handleOpenModal(is_edit = false) {
      this.setSelectedTask({ task: this.task, is_edit })
    }
  },
}
</script>
