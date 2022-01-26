<template>
  <div class="task-list-element">
    <div class="task-list-element__checkbox">
      <Button
          color="icon"
          :disabled="is_disabled"
          @click="handleRemove"
          v-if="!loading"
      >
        <InlineSvg :src="trashIcon"/>
      </Button>
      <div class="loader loader--small" v-else/>
    </div>
    <p class="task-list-element__title">Task title</p>
    <p class="task-list-element__date">Due date</p>
    <p class="task-list-element__header-actions">Actions</p>
  </div>
</template>

<script>
import { callApiDelete } from '@/api'
import endpoints from '@/api/endpoints'
import trashIcon from '@/assets/icons/trash-can.svg'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      trashIcon,
      loading: false,
    }
  },
  props: {
    selected_ids: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    is_disabled() {
      return !this.selected_ids.length
    },
  },
  methods: {
    ...mapActions('task-list', ['getTaskList']),
    async handleRemove() {
      this.loading = true
      await Promise.all(this.selected_ids.map((task_id) => callApiDelete(endpoints.TASK, task_id)))
      this.$emit('taskRemoved')
      await this.getTaskList()
      this.loading = false
    },
  },
}
</script>
