<template>
  <div class="layout">
    <Header/>
    <router-view class="layout-body"/>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'

export default {
  components: { Header },
}
</script>
