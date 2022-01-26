<template>
  <ModalWrapper :modal_visible="!!(selected_task && selected_task.task)" @close="clearSelectedTask">
    <ModalHeader :title="get_title" :is_edit="is_edit"/>
    <TaskFormModal :selected_task="selected_task.task" v-if="selected_task.task && is_edit"/>
    <TaskPreviewModal :selected_task="selected_task.task" v-else-if="selected_task.task"/>
  </ModalWrapper>
</template>

<script>
import ModalWrapper from '@/components/modals/ModalWrapper'
import TaskFormModal from '@/components/modals/task-modal/TaskModalForm'
import ModalHeader from '@/components/modals/task-modal/TaskModalHeader'
import TaskPreviewModal from '@/components/modals/task-modal/TaskModalPreview'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TaskModalWrapper',
  components: {
    ModalWrapper,
    ModalHeader,
    TaskFormModal,
    TaskPreviewModal,
  },
  computed: {
    ...mapGetters('task-list', ['selected_task']),
    is_edit() {
      return this.selected_task?.is_edit
    },
    get_title() {
      return this.selected_task.task?.title || 'New task'
    },
  },
  methods: {
    ...mapActions('task-list', ['setSelectedTask', 'clearSelectedTask']),
  },
}
</script>
