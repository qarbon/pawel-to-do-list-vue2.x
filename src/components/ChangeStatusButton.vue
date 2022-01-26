<template>
  <Button
      color="icon" :class="{ 'button--red': task.status === task_status.done, 'button--green': task.status === task_status.todo }"
      :disabled="button_disabled"
      @click="handleChangeStatus"
  >
    <InlineSvg :src="task.status === task_status.done ? crossIcon : checkIcon"/>
  </Button>
</template>

<script>
import { callApiPut } from '@/api'
import endpoints from '@/api/endpoints'
import { task_status } from '@/enums/task'
import checkIcon from '@/assets/icons/check.svg'
import crossIcon from '@/assets/icons/cross.svg'
import { mapActions } from 'vuex'

export default {
  props: {
    task: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      task_status,
      button_disabled: false,
      checkIcon,
      crossIcon,
    }
  },
  methods: {
    ...mapActions('task-list', ['getTaskList']),
    async handleChangeStatus() {
      this.button_disabled = true
      const body = { ...this.task, status: this.task.status === task_status.todo ? task_status.done : task_status.todo }

      const response = await callApiPut(endpoints.TASK, body.id, body)

      if (response.id) {
        await this.getTaskList()
      }
      this.button_disabled = false
    },
  },
}
</script>
