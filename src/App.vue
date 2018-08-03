<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <main-header/>
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '@/components/header/index'
export default {
  name: 'app',
  components: {
    MainHeader
  }
}
</script>

<style>
body {
  background: #e8e8e8;
}
</style>
