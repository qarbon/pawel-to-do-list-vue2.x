<template>
  <div class="comment-list">
    <div class="comment-list__wrapper" ref="comment_list_wrapper">
      <SingleComment v-for="comment in filtered_comment_list" :key="comment.id" :comment="comment"/>
    </div>
    <AddCommentInput :task_id="task_id" @messageSent="handleScrollToBottom"/>
  </div>
</template>

<script>
import AddCommentInput from '@/components/comment-list/AddCommentInput'
import SingleComment from '@/components/comment-list/SingleComment'
import { mapGetters } from 'vuex'

export default {
  components: { AddCommentInput, SingleComment },
  props: {
    task_id: {
      type: String,
      default: null,
      required: true,
    },
  },
  computed: {
    ...mapGetters('task-list', ['comment_list']),
    filtered_comment_list() {
      return this.comment_list.filter(comment => comment.task_id === this.task_id)
    },
  },
  methods: {
    handleScrollToBottom() {
      const scroller = this.$refs.comment_list_wrapper;
      scroller.scrollTo({ top: scroller.scrollHeight, behavior: 'smooth' })
    },
  },
  mounted() {
    this.handleScrollToBottom()
  }
}
</script>
