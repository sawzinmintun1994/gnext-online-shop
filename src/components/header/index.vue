<template id="">
  <div class="header">
    <b-container fluid >
      <b-row cols="12">
        <b-col cols="2" sm="2" md="3" lg="6">
            Logo
        </b-col>
        <b-col class="menu" cols="10" sm="10" md="9" lg="6">
          <ul>
            <router-link to="/"><li>Home</li></router-link>
            <router-link to="/man"><li>Men</li></router-link>
            <router-link to="/woman"><li>Women</li></router-link>
            <router-link to="/kids"><li>Kids</li></router-link>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      order: null || localStorage.getItem('orderitem'),
      sta: null
    }
  },
  watch: {
    $route () {
      this.order = localStorage.orderitem
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
    margin-bottom: 55px;
    .row {
      padding: 15px;
      background-color:Beige ;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1;
    }
    .menu {
      ul {
        margin: 0;
        padding: 0;
        li {
          display: inline;
          padding: 20px;
          list-style-type: none;
        }
        a {
          color: #000;
          text-decoration: none;
          &.router-link-exact-active {
            border-bottom: 4px solid black;
            font-weight: bold;
            padding-bottom: 15px;
          }
        }
      }
    }
}

</style>
