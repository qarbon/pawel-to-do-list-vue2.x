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
import Loader from '@/components/Loader'
import EmptyTaskList from '@/components/task-list/EmptyTaskList'
import TaskListElement from '@/components/task-list/TaskListElement'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { Loader, EmptyTaskList, TaskListElement },
  data() {
    return {
      loading: true,
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
  },
  beforeDestroy() {
    this.clearTaskList();
  },
  mounted() {
    this.fetchTaskList()
  },
}
</script>
