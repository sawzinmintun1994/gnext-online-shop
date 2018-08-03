<template>
  <b-container>
    <b-row class="mt-4 p-4 bg-success" v-for="(v,index) in orderData" :key="index">
      <b-col>
        <b-img :src="v.path" fluid />
      </b-col>
      <b-col>
        {{ v.title }}
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      orderData: null
    }
  },
  mounted () {
    this.orderData = JSON.parse(localStorage.getItem('orderItems'))
  }
}
</script>

<style lang="css">
</style>
