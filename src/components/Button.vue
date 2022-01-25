<template>
  <button class="button" :class="get_classes" @click="handleClick">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    color: {
      type: String,
    }
  },
  computed: {
    get_classes() {
      return { [`${this.color}-button`]: this.color }
    },
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>
