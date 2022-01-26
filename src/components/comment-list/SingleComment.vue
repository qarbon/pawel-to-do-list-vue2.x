<template>
  <div class="comment" v-if="comment">
    <p><span class="comment__author-name">{{ comment.author_name }}</span><span
        class="comment__created-at"
    >{{ get_created_at }}</span></p>
    <pre class="comment__message">{{ comment.message }}</pre>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    comment: {
      type: Object,
      default: null,
    },
  },
  computed: {
    get_created_at() {
      const date = dayjs(this.comment.created_at)
      if (date.isToday()) return `Today at ${date.format('hh:mma')}`
      return `${date.format('DD/MM/YYYY')} at ${date.format('hh:mma')}`
    },
  },
}
</script>

