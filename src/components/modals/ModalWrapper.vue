<template>
  <div class="modal-wrapper" :class="{ 'modal-wrapper-visible': selected_task && selected_task.task }" @click.self="clearSelectedTask">
    <div class="modal-content">
      <ModalHeader :title="get_title"/>
      <TaskFormModal :selected_task="selected_task.task" v-if="is_edit"/>
      <TaskPreviewModal :selected_task="selected_task.task" v-else/>
    </div>
  </div>
</template>

<script>
import ModalHeader from '@/components/modals/ModalHeader'
import TaskPreviewModal from '@/components/modals/TaskPreviewModal'
import { mapActions, mapGetters } from 'vuex'
import TaskFormModal from '@/components/modals/TaskFormModal'

export default {
  components: {
    ModalHeader,
    TaskFormModal,
    TaskPreviewModal,
  },
  computed: {
    ...mapGetters('task-list', ['selected_task']),
    is_edit() {
      return this.selected_task?.is_edit;
    },
    get_title() {
      return this.selected_task.task?.title || 'New task';
    },
  },
  methods: {
    ...mapActions('task-list', ['setSelectedTask', 'clearSelectedTask']),
  },
}
</script>
