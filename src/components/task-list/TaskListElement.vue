<template>
  <div class="task-list-element">
    <Checkbox v-model="is_checked"/>
    <p class="task-list-element-title">{{ task.title }}</p>
    <p>{{ task.due_date }}</p>
    <Button color="primary" class="square-button" @click="handleOpenModal">p</Button>
    <Button color="primary" class="square-button" @click="() => handleOpenModal(true)">e</Button>
  </div>
</template>

<script>
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
