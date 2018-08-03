<template>
  <b-container class="header">
      <b-row>
          <b-col cols='12' sm='2' md='3' lg='6' xl='6'>Logo</b-col>
          <b-col cols='12' sm='10' md='9' lg='6' xl='6' class="menu">
            <ul>
              <router-link to="/"><li class="menu-home">Home</li></router-link>
              <router-link to="/man"><li class="menu-man">Man</li></router-link>
              <router-link to="/woman"><li class="menu-woman">Woman</li></router-link>
              <router-link to="/kids"><li class="menu-kids">Kids</li></router-link>
              <router-link to="/cart"><li class="menu-cart" v-if="order">Cart {{ count() }}</li></router-link>
            </ul>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      order: localStorage.getItem('orderItems') || null
    }
  },
  watch: {
    $route () {
      this.order = localStorage.getItem('orderItems')
    }
  },
  methods: {
    count: function () {
      return this.order
    }
  }
}
</script>

<style lang="css">
.header .row {
  background: #f1f1f1;
  padding: 20px;
}
.menu {

}
.menu ul {
  margin: 0;
  padding: 0;
}
.menu ul li {
  list-style-type: none;
  display: inline;
  padding: 19px 20px;
  cursor: pointer;
}
.menu ul a {
  color: #000;
  text-decoration: none;
}
.menu ul a.router-link-exact-active {
  border-bottom: 4px solid #000;
  font-weight: bold;
  padding-bottom: 20px;
}
</style>
