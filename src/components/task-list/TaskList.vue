<template>
  <div class="task-list">
    <Loader v-if="loading"/>
    <template v-else-if="list_has_values">
      <TaskListHeader :selected_ids="selected_ids" @taskRemoved="clearSelectedIds"/>
      <TaskListElement v-for="task in task_list" :key="task.id" :task="task" @check="handleTaskCheck"/>
    </template>
    <EmptyTaskList v-else/>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import EmptyTaskList from '@/components/task-list/EmptyTaskList'
import TaskListElement from '@/components/task-list/TaskListElement'
import TaskListHeader from '@/components/task-list/TaskListHeader'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { TaskListHeader, Loader, EmptyTaskList, TaskListElement },
  data() {
    return {
      loading: true,
      selected_ids: [],
    };
  },
  computed: {
    ...mapGetters('task-list', ['task_list']),
    list_has_values() {
      return this.task_list?.length
    },
  },
  methods: {
    ...mapActions('task-list', ['getTaskList', 'clearTaskList']),
    async fetchTaskList() {
      await this.getTaskList()
      this.loading = false
    },
    handleTaskCheck(task_id) {
      if (!this.selected_ids.includes(task_id)) {
        this.selected_ids.push(task_id)
        return
      }
      this.selected_ids = this.selected_ids.filter(id => id !== task_id)
    },
    clearSelectedIds() {
      this.selected_ids = []
    },
  },
  beforeDestroy() {
    this.clearTaskList();
  },
  mounted() {
    this.fetchTaskList()
  },
}
</script>
