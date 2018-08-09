<template>
  <div class="">
    <b-container fluid class="cover">
      <b-row>
        <b-col cols="12" md="6">
          <b-img :src="require('@/assets/watchs.jpg')" />
        </b-col>
        <b-col cols="12"md="6">
          <h5>TERNDING COLLECTION</h5>
          <h2><span style="color:orange;">BRAND</span>WATCH</h2>
          <P>This watch is a good quality</p>
          <span>Price:</span><span style="font-size:150%;">$220</span><br>
          <b-btn class="btn">BuyNow</b-btn>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="popular-products">
      <b-row>
        <b-col cols="6" md="4">
          <h1>01</h1>
          <h5 class="line">24/7 CUSTOMER CARE</h5>
          <p>good products</p>
        </b-col>
        <b-col cols="6" md="4">
          <h1>02</h1>
          <h5 class="line">SAFE PAYMENT</h5>
          <p>good products</p>
        </b-col>
        <b-col cols="6" md="4">
          <h1>03</h1>
          <h5 class="line">COLLECTION</h5>
          <p>good products</p>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="products col-12">
      <b-row>
        <b-col>
          <h1>PROPULAR PRODUCTS</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-img :src="require('@/assets/owl.jpg')" />
          <p>Products of bag</p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <p><b>$190.50</b></p>
        </b-col>
        <b-col>
          <img src="@/assets/hat.jpg" />
          <p>Products of hat</p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <p><b>$190.50</b></p>
        </b-col>
        <b-col>
          <img src="@/assets/shose.jpg" />
          <p>Products of shose</p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <p><b>$190.50</b></p>
        </b-col>
        <b-col>
          <img src="@/assets/slimbag.jpg" />
          <p>Products of bag</p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <p><b>$190.50</b></p>
        </b-col>
      </b-row>
    </b-container>
    <div class="more">
      <b-btn name="button" type="button">More..</b-btn>
    </div>
    <b-container fluid class="overlap">
      <b-row>
        <b-col>
          <h3>Discout Products</h3>
          <p>This products get 20% off</p>
          <b-btn name="button" type="button">BuyNow</b-btn>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row align-h="center">
       <b-col cols="12" md="6" lg="8" class="waterfall">
          <waterfall :line-gap="200" :watch="items" >
                <waterfall-slot
                  v-for="(item, index) in items"
                  :width="item.width"
                  :height="item.height"
                  :order="index"
                  :key="item.id"
                >
                  <img :src="getImgUrl(item.path)" v-bind:alt="item.path" class="img-fluid"/>
                </waterfall-slot>
            </waterfall>
      </b-col>
     </b-row>
  </b-container>
  <div>
    <b-container class="last-products">
      <b-row>
        <b-col>
          <h1>PROPULAR PRODUCTS</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-img :src="require('@/assets/owl.jpg')" />
          <p>Products of bag</p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <p><b>$190.50</b></p>
        </b-col>
        <b-col>
          <img src="@/assets/hat.jpg" />
          <p>Products of hat</p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <p><b>$190.50</b></p>
        </b-col>
        <b-col>
          <img src="@/assets/shose.jpg" />
          <p>Products of shose</p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <p><b>$190.50</b></p>
        </b-col>
        <b-col>
          <img src="@/assets/slimbag.jpg" />
          <p>Products of bag</p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <p><b>$190.50</b></p>
        </b-col>
      </b-row>
    </b-container>
  </div>
 </div>
</template>
<script>
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
export default {
  components: {
    Waterfall,
    WaterfallSlot
  },
  data () {
    return {
      items: [
        {height: 150, width: 200, path: 'coupleHat.jpg'},
        {height: 100, width: 100, path: 'LadyShose.jpg'},
        {height: 100, width: 100, path: 'engineer.jpg'},
        {height: 200, width: 100, path: 'brand.jpg'}
      ]
    }
  },
  methods: {
    getImgUrl (pic) {
      return require('../../assets/' + pic)
    }
  }
}
</script>
<style scoped>
 .cover {
   background: honeydew;
   padding: 20px;
 }
 .cover .row div:nth-child(1){
   text-align: right;
 }
 .btn{
   border-radius: 20px;
   background: white;
   color: black;
   padding: 8px 30px;
   font-size: 14px;
   outline: none;
   display: inline;
   text-decoration: none;
 }
 .line{
   positoion: relative;
   display: inline-block;
   padding-bottom:  20px;
   }
  .line::after{
     content:'';
     height: 3px;
     width:20%;
     background: orange;
     position:absolute;
     left:calc(15% - 10%);
     bottom: 50px;
  }
  .products .row div h1{
    text-align: center;
  }
  .products .row div h1::after{
     content:"";
     position:absolute;
     width:100px;
     border-bottom:3px solid orange;
     bottom:0;
     left:50%;
     margin-left:-50px;
  }
  .more{
    text-align: center;
  }
  .checked{
    color: orange;
  }
  .img-fluid{
    text-align: center;
  }
  .overlap{
    background: #f1f1f1;
    padding: 50px;
    font-family: cursive;
    position: relative;
    display: inline-block;
    margin-bottom: 300px;
  }
  .waterfall{
    content: '';
    position: absolute;
    top: 1030px;
    right: 50;
    width: 500px;
    height: 50px;
    bottom: 100px;
}
.new-container{
  background: red;
}
</style>
