<template>
  <div class="task-preview">
    <div class="task-preview__content">
      <pre class="task-preview__description">{{ selected_task.description }}</pre>
      <div class="task-preview__info">
        <p><span class="strong-text">Date: </span>{{ selected_task.due_date }}</p>
        <p><span class="strong-text">Priority: </span>{{ get_priority }}</p>
      </div>
    </div>
    <CommentList :task_id="selected_task.id"/>
  </div>
</template>

<script>
import CommentList from '@/components/comment-list/CommentList'
import { priority_names } from '@/enums/priority'

export default {
  name: 'TaskModalPreview',
  components: { CommentList },
  props: {
    selected_task: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    get_priority() {
      return priority_names[this.selected_task.priority]
    },
  },
}
</script>
