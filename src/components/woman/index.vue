<template>
  <div class="woman">
    <b-container>
      <b-row>
        <b-col cols="8" md="3" class="header">
          <h3>Shop by</h3>
          <ul>
            <li @click="all()">All</li>
            <li @click="jacket()">Jackets</li>
            <li @click="tank()">Tank tops</li>
            <li @click="New()">New Arrivals</li>
            <li @click="best()">Best Seller</li>
          </ul>
         </b-col>
         <b-col v-for="(result,index) in result" :key="index" cols="8" md="3" class="product">
             <div class="card">
               <div class="hoverimage">
                 <b-img :src="getImgUrl(result.image)" fluid alt="Responsive image" />
                 <div class="overlay">
                   <h4 @click="detail(index)" v-b-modal.modal1 class="viewDetail" >View Detail</h4>
                 </div>
                </div>
                 <div class="card-body">
                   <h4>{{ result.name }}</h4>
                   <div><span>$</span>{{ result.price }}</div>
                 </div>
                 <div class="text-block">
                   <h4>{{result.status}}</h4>
                 </div>
              </div>
         </b-col>
      </b-row>
      <b-modal ref="myModal" hide-footer id="modal1" centered :title="modal.name">
          <b-row>
          <b-col>
            <b-img  v-if="modal.image" :src="getImgUrl(modal.image)" fluid alt="Responsive image"/>
          </b-col>
          <b-col>
            <h4>{{modal.status}}</h4>
            <h4>${{modal.price}}</h4>
             <input type="number" name="quantity" min='1' max='20' v-model="value"><br>
             <b-btn type="button" class="btn" @click="Cart()">Add to Cart</b-btn>
           </b-col>
          </b-row>
        </b-modal>
    </b-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      result: [],
      image: '',
      name: '',
      price: '',
      status: '',
      select: null,
      value: 1,
      modal: {
        image: null,
        name: null,
        status: null,
        price: null
      },
      likeItem: {
        title: '',
        status: '',
        price: 0,
        picked: 'product',
        quantity: '',
        url: null
      },
      womanArr: [
        {Id: 1, name: 'Jacket', image: 'jacket.png', price: 10, status: 'New Arrivals'},
        {Id: 2, name: 'Jacket', image: 'jacket1.png', price: 11, status: 'Best Seller'},
        {Id: 3, name: 'Jacket', image: 'jacket3.png', price: 33, status: 'New Arrivals'},
        {Id: 4, name: 'Tank Top', image: 'tank.png', price: 15, status: 'New Arrivals'},
        {Id: 5, name: 'Tank Top', image: 'tank1.png', price: 20, status: 'New Arrivals'},
        {Id: 6, name: 'Tank Top', image: 'tank2.png', price: 30, status: 'Best Seller'},
        {Id: 7, name: 'Tank Top', image: 'tank3.png', price: 25, status: 'Best Seller'}
      ]
    }
  },
  mounted () {
    this.result = this.womanArr
  },
  methods: {
    getImgUrl (path) {
      return require('@/assets/' + path)
    },
    all () {
      this.result = this.womanArr
    },
    jacket () {
      this.select = 'Jacket'
      var sef = this
      if (this.select) {
        var val = this.womanArr.filter(function (e) {
          if (e.name === sef.select) {
            return e
          }
        })
        this.result = val
      }
    },
    tank () {
      this.select = 'Tank Top'
      var sef = this
      if (this.select) {
        var val = this.womanArr.filter(function (e) {
          if (e.name === sef.select) {
            return e
          }
        })
        this.result = val
      }
    },
    New () {
      this.select = 'New Arrivals'
      var sef = this
      if (this.select) {
        var val = this.womanArr.filter(function (e) {
          if (e.status === sef.select) {
            return e
          }
        })
        this.result = val
      }
    },
    best () {
      this.select = 'Best Seller'
      var sef = this
      if (this.select) {
        var val = this.womanArr.filter(function (e) {
          if (e.status === sef.select) {
            return e
          }
        })
        this.result = val
      }
    },
    detail (index) {
      this.modal.name = this.result[index].name
      this.modal.status = this.result[index].status
      this.modal.image = this.result[index].image
      this.modal.price = this.result[index].price
      this.likeItem.url = this.modal.image
    },
    Cart () {
      // this.likeItem.picked = this.picked
      // console.log(this.likeItem.picked)
      this.likeItem.title = this.modal.name
      this.likeItem.status = this.modal.status
      this.likeItem.price = this.modal.price
      this.likeItem.quantity = this.value
      if (typeof (Storage) !== 'undefined') {
        var orderLists = []
        var checkItems = JSON.parse(localStorage.getItem('cartItem'))
        if (typeof checkItems === 'undefined' || checkItems === null) {
          orderLists[0] = this.likeItem
          localStorage.setItem('cartItem', JSON.stringify(orderLists))
          checkItems = 0
        } else {
          checkItems[checkItems.length] = this.likeItem
          // localStorage.removeItem('cartItem')
          localStorage.setItem('cartItem', JSON.stringify(checkItems))
          checkItems = checkItems.length
        }
        this.$router.push({ path: '/woman?' + checkItems++ })
      } else {
        console.log('no support')
      }
      this.$refs.myModal.hide()
    }
  }
}
</script>

<style lang="scss" scoped>
.woman{
  .header {
    color: #f1f1f1;
    background: black;
    font-family: sans-serif;
    text-align: left;
     h3 {
        border-bottom: 1px solid #f1f1f1;
        padding: 10px;
        text-align: center;
      }
      ul{
        li{
          list-style: none;
          padding: 10px;
          cursor: pointer;
          &:hover{
            color: grey;
          }
        }
      }
  }
  .product{
    .card{
      .hoverimage{
        width: 100%;
        position: relative;
      }
      .overlay{
        position: absolute;
        bottom: 0;
        width: 100%;
        background: #1d1d1d3b;
        transition: .5s ease;
        opacity:0;
        color: white;
        font-size: 20px;
        padding: 10px;
        text-align: center;
        .viewDetail{
          cursor: pointer;
        }
      }
      .hoverimage:hover .overlay {
          opacity: 1;
      }
      .card-body{
        background: #ec9207c7;
      }
      .container {
        position: relative;
        width: 100%;
      }
      .text-block {
        position: absolute;
        top: 20px;
        left: 20px;
        background-color: #ec9207c7;
        color: black;
        padding-left: 20px;
        padding-right: 20px;
        font-family: sans-serif;
      }
    }
  }
  .btn{
    margin-top: 10px;
  }
}
</style>
