<template>
  <div class="modal-header">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <Button color="transparent">x</Button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    is_edit: {
      type: String,
      default: '',
    },
  },
}
</script>
