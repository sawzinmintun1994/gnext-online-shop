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
                   <h4 @click="detail()">View Detail</h4>
                 </div>
                </div>
                 <div class="card-body">
                   <h4>{{ result.name }}</h4>
                   <div>{{ result.price }}</div>
                 </div>
                 <div class="text-block">
                   <h4>{{result.status}}</h4>
                 </div>
              </div>
         </b-col>
      </b-row>
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
      womanArr: [
        {Id: 1, name: 'Jacket', image: 'jacket.png', price: '$10', status: 'New Arrivals'},
        {Id: 2, name: 'Jacket', image: 'jacket1.png', price: '$15', status: 'Best Seller'},
        {Id: 3, name: 'Jacket', image: 'jacket3.png', price: '$71', status: 'New Arrivals'},
        {Id: 4, name: 'Tank Top', image: 'tank.png', price: '$22', status: 'New Arrivals'},
        {Id: 5, name: 'Tank Top', image: 'tank1.png', price: '$43', status: 'New Arrivals'},
        {Id: 6, name: 'Tank Top', image: 'tank2.png', price: '$19', status: 'Best Seller'},
        {Id: 7, name: 'Tank Top', image: 'tank3.png', price: '$29', status: 'Best Seller'}
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
    detail () {

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
}
</style>
