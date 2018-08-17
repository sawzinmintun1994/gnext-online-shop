<template id="">
  <div class="header">
    <!-- <div v-bind:class="[CartView ? blurClass :'', bkClass]"> -->
    <div id='overlay'></div>
    <div class="Slidenav" id="mySidenav" lg="6">
        <button type="button" class="close-btn" @click="Hide()" name="button">&times</button>
        <table class="mt-5">
          <tbody>
            <tr v-for="(item,key) in order" :key="key">
              <td><img :src='getSRC(item.url)' class="resize" /></td>
              <td>Code : {{ item.id }}</td>
              <td>{{ item.picked }}</td>
              <td>{{ item.title }}</td>
              <td><input type="number" min="1" class="QtyInput" name="" v-model="item.quantity"></td>
              <td>{{ item.price }}</td>
            </tr>
            <ul>
              <li> <span>Subtotal</span> ${{SubTotal}}</li>
              <li>Tax: (5%) <span> {{tax}} </span> </li>
              <li>Total: {{SumTotal}} </li>
            </ul>
          </tbody>
        </table>
    </div>
    <b-container fluid >
      <b-row cols="12">
        <b-col cols="2" sm="2" md="3" lg="6">
          Logo
        </b-col>
        <b-col class="menu" cols="8" sm="8" md="8" lg="5">
              <ul>
               <router-link to="/"><li>Home</li></router-link>
               <router-link to="/man"><li>Man</li></router-link>
               <router-link to="/woman"><li>Woman</li></router-link>
               <router-link to="/kids"><li>Kids</li></router-link>
             </ul>
        </b-col>
        <b-col v-if="order" cols="2" sm="2" md="1" lg="1"><span class="icon" @click="Show()"><i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i><span class="count" v-if="order.length">{{order.length}}</span></span> </b-col>
      </b-row>
    </b-container>
</div>
</template>
<script>
export default {
  data () {
    return {
      order: null || JSON.parse(localStorage.getItem('cartItem')),
      total: 0,
      bkClass: 'bk',
      blurClass: 'blur',
      count: JSON.parse(localStorage.getItem('cartItem')) || 0
    }
  },
  watch: {
    $route () {
      this.order = JSON.parse(localStorage.getItem('cartItem'))
      this.count = this.order
    },
    order: {
      handler: function (newVal) {
        this.total = 0
        this.SubTotal
      },
      deep: true
    }
  },
  computed: {
    SubTotal () {
      var vm = this
      if (this.order) {
        this.order.forEach(function (e) {
          vm.total = vm.total + (e.price * e.quantity)
        })
      }
      return vm.total
    },
    tax () {
      var ans = 0.05 * this.total
      return ans
    },
    SumTotal () {
      var ans = this.tax + this.SubTotal
      return ans
    }
  },
  methods: {
    getSRC (pic) {
      return require('../../assets/' + pic)
    },
    Show () {
      this.order = JSON.parse(localStorage.getItem('cartItem'))
      document.getElementById('overlay').style.display = 'block'
      document.getElementById('mySidenav').style.width = '500px'
    },
    Hide () {
      document.getElementById('mySidenav').style.width = '0px'
      document.getElementById('overlay').style.display = 'none'
    },
    Cancel (k) {
      this.order.splice(k, 1)
      var neworder = this.order
      localStorage.setItem('cartItem', JSON.stringify(neworder))
    }
  }
}
</script>
<style lang="scss" scoped>
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

.header {
  margin-bottom: 62px;
  .row{
    padding: 15px;
    background: linear-gradient(to right, #076585 , #fff);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;

  }
}

.Slidenav {
  position: fixed;
  z-index: 3;
  top: 54px;
  right: 0;
  background: #111;
  color: grey;
  font-weight: bold;
  width: 0px;
  overflow-y: auto;
  height: 100%;
  max-height: 94%;
  transition: 0.8s;
  .close-btn {
    position: absolute;
    top: 0;
    margin-left: 90%;
    background-color: black;
    color: grey;
    padding-left: 5px;
    font-size: 2em;
    border:0;
  }
  table {
    td {
      img {
        &.resize {
          width: 70px;
          height: 60px;
        }
      }
    }
  }
}
.QtyInput {
  width: 50px;
  background: black;
  border: 0;
  outline: solid green;
  color: green;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
}
#overlay {
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    top: 54px;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
    transition: 0.8s;
    overflow-x: hidden;
    cursor: pointer;
}
.count {
  color: red;
  font-weight: bold;
  font-style: italic;
}
.icon {
  color: #4c90a7;
  font-weight: bold;
  cursor: pointer;
}

</style>
