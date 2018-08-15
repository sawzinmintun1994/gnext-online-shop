<template>
  <div class="kids">
    <b-col cols=12 class="fadeletter">
      <h3 class="w3-animate-fading"  style="width:100%">
        Get 10% Off -Happy 2018-
      </h3>
    </b-col>
      <div cols="3"><h1>~H a p p y K i d s~</h1></div>
    <ul>
      <li @click="boy()"><i class="left"></i>Boy</li>
      <li @click="all()">All</li>
      <li @click="baby()">Girl<i class="right"></i></li>
    </ul>
    <h1 class="collection">Our Collection</h1>
    <b-container>
      <b-row>
        <b-col v-for="result in result" :key="result.id" class="products">
            <div class="card">
              <b-img :src="getImgUrl(result.image)" fluid alt="Responsive image" />
            <div class="card-body">
              <h4>{{result.name}}</h4>
              <div>{{result.price}}</div>
            </div>
            <div class="text-block">
              <span>{{result.status}}</span>
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
      select: null,
      kid: [
        {Id: 1, name: 'Shirt', image: 'boy.jpg', price: '$10', status: 'New Arrivals'},
        {Id: 2, name: 'Shirt', image: 'boy1.jpg', price: '$11', status: 'Best Seller'},
        {Id: 3, name: 'Shirt', image: 'boy2.jpg', price: '$15', status: 'New Arrivals'},
        {Id: 4, name: 'Dress', image: 'girls.jpg', price: '$20', status: 'New Arrivals'},
        {Id: 5, name: 'Dress', image: 'girl1.jpg', price: '$22', status: 'Best Seller'},
        {Id: 6, name: 'Dress', image: 'girl2.jpg', price: '$17', status: 'Best Seller'}
      ]
    }
  },
  mounted () {
    this.result = this.kid
  },
  methods: {
    getImgUrl (path) {
      return require('@/assets/' + path)
    },
    all () {
      this.result = this.kid
    },
    boy () {
      var sef = this
      this.select = 'Shirt'
      if (this.select) {
        var val = this.kid.filter(function (e) {
          if (e.name === sef.select) {
            return e
          }
        })
        this.result = val
      }
    },
    baby () {
      var sef = this
      this.select = 'Dress'
      if (this.select) {
        var val = this.kid.filter(function (e) {
          if (e.name === sef.select) {
            return e
          }
        })
        this.result = val
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.kids{
  .fadeletter{
    background: #a2a0a0ba;
    h3{
      text-align: center;
      padding: 7px;
      font-family: serif;
      color: #1f7491;
    }
  }
  ul{
    text-align: center;
    border-bottom: 1px solid #1f7491;
    padding: 20px;
    li{
      display: inline;
      list-style: none;
      font-size: 2em;
      padding: 20px;
      cursor: pointer;
      color: #1f7491;
      &:not(:last-child):after{
        content: "I";
        margin: 0 5px 0 50px;
        color: black;
      }
      &:hover{
        color: #04d2e8cc;
      }
      i{
        border: solid #1f7491;
        border-width: 0 5px 5px 0;
        display: inline-block;
        padding: 3px;
        &:hover{
          color: #353232cc;
        }
      }
      .left{
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
        width:15px;
        height:15px;
      }
      .right{
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        width:15px;
        height:15px;
      }
    }
  }
  h1{
    font-family: cursive;
    padding: 20px;
    text-align: center;
    color: #1f7491;
  }
  .collection{
    color: #1f7491;
    font-family: sans-serif;
  }
  p{
    color: black;
    font-family: "Courier";
    font-size: 20px;
    margin: 10px 0 0 10px;
    white-space: nowrap;
    overflow: hidden;
    width: 30em;
    animation: type 4s steps(60, end);
  }
  .products{
    .card{
      .card-body{
        background: #1f7491;
      }
      .container{
        position: relative;
        width: 100%;
      }
      .text-block{
        position: absolute;
        top: 20px;
        left: 20px;
        background-color: #0765856e;
        color: black;
        padding-left: 20px;
        padding-right: 20px;
        font-family: sans-serif;
      }
    }
  }
}
@keyframes type{
  from { width: 0; }
}
</style>
