<template>
  <div class="task-list-element" :class="{ 'task-list-element--done': task.status === task_status.done }">
    <div class="task-list-element__checkbox">
      <Checkbox :value="is_checked" @input="handleCheck"/>
    </div>
    <p class="task-list-element__title">{{ task.title }}</p>
    <div class="task-list-element__date">
      <InlineSvg :src="calendarIcon" class="task-list-element__date-icon"/>
      <p>{{ task.due_date }}</p>
    </div>
    <Button color="icon" @click="handleOpenModal">
      <InlineSvg :src="chatIcon"/>
    </Button>
    <Button color="icon" @click="() => handleOpenModal(true)">
      <InlineSvg :src="pencilIcon"/>
    </Button>
    <ChangeStatusButton :task="task"/>
  </div>
</template>

<script>
import calendarIcon from '@/assets/icons/calendar.svg'
import chatIcon from '@/assets/icons/chat.svg'
import pencilIcon from '@/assets/icons/pencil.svg'
import ChangeStatusButton from '@/components/ChangeStatusButton'
import { mapActions } from 'vuex'
import { task_status } from '@/enums/task'

export default {
  components: { ChangeStatusButton },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      is_checked: false,
      chatIcon,
      pencilIcon,
      calendarIcon,
      task_status,
    }
  },
  methods: {
    ...mapActions('task-list', ['setSelectedTask']),
    handleOpenModal(is_edit = false) {
      this.setSelectedTask({ task: this.task, is_edit })
    },
    handleCheck() {
      this.is_checked = !this.is_checked
      this.$emit('check', this.task.id)
    },
  },
}
</script>
