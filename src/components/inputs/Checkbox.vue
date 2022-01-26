<template>
  <div class="checkbox" :class="{ 'checkbox--has-value': value }" @click="handleOnChange">
    <InlineSvg :src="checkIcon" class="checkbox__icon" :class="{ 'checkbox__icon--has-value': value }"/>
  </div>
</template>

<script>
import checkIcon from '@/assets/icons/check.svg'

export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checkIcon,
    }
  },
  methods: {
    handleOnChange() {
      this.$emit('input', !this.value);
    },
  },
}
</script>
