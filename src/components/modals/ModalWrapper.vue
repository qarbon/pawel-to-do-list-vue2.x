<template>
  <div class="modal__wrapper" :class="{ 'modal__wrapper--visible': modal_visible }" @click.self="handleCloseModal">
    <div class="modal__content">
      <slot/>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    modal_visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleCloseModal() {
      this.$emit('close')
    },
  },
}
</script>
