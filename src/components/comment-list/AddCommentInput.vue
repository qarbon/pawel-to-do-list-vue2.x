<template>
  <div class="comment-list__footer">
    <TextInput v-model="message" placeholder="Write a comment..." hide_error/>
    <Button color="primary" @click="sendMessage" :disabled="!(message && task_id)">{{ is_sending ? 'Sending...' : 'Add Comment' }}</Button>
  </div>
</template>

<script>
import { callApiPost } from '@/api'
import endpoints from '@/api/endpoints'
import fake_user from '@/api/fake_user'
import dayjs from 'dayjs'
import { mapActions } from 'vuex'

export default {
  props: {
    task_id: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      message: '',
      is_sending: false,
    }
  },
  methods: {
    ...mapActions('task-list', ['getCommentList']),
    async sendMessage() {
      if (!this.message) {
        return
      }
      this.is_sending = true
      const response = await callApiPost(endpoints.COMMENT, {
        message: this.message,
        created_at: dayjs().toISOString(),
        author_name: fake_user.name,
        task_id: this.task_id,
      })

      if (response.id) {
        await this.getCommentList()
        this.message = ''
        this.$emit('messageSent')
      }
      this.is_sending = false
    },
  },
}
</script>
