<template>
  <input type="checkbox" :value="value" @input="handleOnChange" />
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleOnChange() {
      this.$emit('input', !this.value);
    },
  },
}
</script>
