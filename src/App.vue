<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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

</style>
