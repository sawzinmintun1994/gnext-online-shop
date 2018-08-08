<template lang="html">
  <div class="Cart">
    {{order}}
    {{SubTotal}}
    <b-modal ref="cartmodal">
      <div slot="modal-header">
        <h5>Sweet Art Shopping..</h5>
      </div>
        <body>
          <div>
            <ul>
              <li v-for="(items,index) in order" :key="index">
                <b-row>
                  <b-col md="2"> <img class="resize" :src="getSRC(items.url)"> </b-col>
                  <b-col md="6"> <h6>{{items.picked}} {{items.title}} </h6> {{items.status}} product</b-col>
                  <b-col md="2"> <input type="text" style="width:45px ; text-align:center" v-model="items.quantity"></input> </b-col>
                  <b-col md="2">${{items.price}}</b-col>
                </b-row>
              </li>
              <li>Subtotal <span>{{SubTotal}}</span> </li>
              <li>Tax:(5%) <span>{{tax}}</span></li>
              <li>Shipping <span> Free </span></li>
              <li>Total <span>{{SumTotal}}</span></li>
            </ul>
          </div>
        </body>
    </b-modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      orderlist: null || parseInt(localStorage.getItem('total')),
      order: JSON.parse(localStorage.getItem('cartItem')) || null,
      total: 0
    }
  },
  mounted () {
    this.$refs.cartmodal.show()
  },
  watch: {
    $route () {
      // this.orderlist = localStorage.getItem('total')
      // this.order = localStorage.getItem('cartItem')
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
      this.order.forEach(function (e) {
        vm.total = vm.total + (e.price * e.quantity)
      })
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
    }
  }

}
</script>
<style lang="css">
img.resize{
  width: 60px;
  height: 60px
}
.modal-body{
  background-color: orange
}
.modal-header {
  background-color: black;
  color: white;
  height: 30px;
}

</style>
