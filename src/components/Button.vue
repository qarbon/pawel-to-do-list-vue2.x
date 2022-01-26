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
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    get_classes() {
      return { [`button--${this.color}`]: this.color, 'button--disabled': this.disabled }
    },
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>
