<template>
  <div id="app">
    <Layout/>
    <ModalWrapper/>
  </div>
</template>

<script>
import '@/styles/index.css';
import ModalWrapper from '@/components/modals/task-modal/TaskModalWrapper'
import Layout from '@/layouts/Layout'

export default {
  name: 'App',
  components: { ModalWrapper, Layout },
}
</script>

