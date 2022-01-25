<template>
  <div class="task-list">
    <Loader v-if="loading"/>
    <template v-else-if="list_has_values">
      <TaskListElement v-for="task in task_list" :key="task.id" :task="task"/>
    </template>
    <EmptyTaskList v-else/>
  </div>
</template>

<script>
import callApi from '@/api'
import endpoints from '@/api/endpoints'
import Loader from '@/components/Loader'
import EmptyTaskList from '@/components/task-list/EmptyTaskList'
import TaskListElement from '@/components/task-list/TaskListElement'

export default {
  components: { Loader, EmptyTaskList, TaskListElement },
  data() {
    return {
      loading: true,
      task_list: [],
    };
  },
  computed: {
    list_has_values() {
      return this.task_list?.length
    },
  },
  methods: {
    async fetchTaskList() {
      this.task_list = await callApi(endpoints.TASK)
      this.loading = false
    },
  },
  mounted() {
    this.fetchTaskList()
  },
}
</script>
