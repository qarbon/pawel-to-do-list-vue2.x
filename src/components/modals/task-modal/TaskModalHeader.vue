<template>
  <div class="modal__header">
    <div class="flex-gap">
      <h1>{{ title }}</h1>
      <Button color="transparent" @click="() => setIsEdit(true)" v-if="!is_edit">Edit task</Button>
    </div>
    <Button color="icon-transparent" @click="clearSelectedTask">
      <InlineSvg :src="crossIcon"/>
    </Button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import crossIcon from '@/assets/icons/cross.svg'

export default {
  name: 'TaskModalHeader',
  props: {
    title: {
      type: String,
      default: '',
    },
    is_edit: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions('task-list', ['clearSelectedTask', 'setIsEdit']),
  },
  data() {
    return {
      crossIcon,
    }
  },
}
</script>
