<template>
  <div class="">
    <b-container fluid class="popular-items">
      <b-row>
          <b-col class="text-center" cols="12" sm="4" md="4" lg="5" xl="5">
            <!-- <img src="@/assets/logo.png" alt=""> -->
            <b-img src="https://fashion-entertainments.com/img/product/lineup_b/01.png" />
          </b-col>
          <b-col cols="12" sm="8" md="8" lg="7" xl="7">
            <h5>COLLECTION</h5>
            <h1>Vue Vue</h1>
            <p>vue vue vuevue vue vuevue vue vuevue vue vuevue vue vue vue vue
              vuevue vue vuevue vue vuevue vue vuevue vue vuevue vue vue</p>
            <h5>Price: <span>$555</span></h5>
            <b-button class="buy-now mt-2">Buy Now</b-button>
          </b-col>
      </b-row>
    </b-container>

    <b-container>
      <b-row align-h="center">
        <b-col cols="12" sm="12" md="6" lg="6">
          <waterfall :line-gap="200" :watch="items">
            <!-- each component is wrapped by a waterfall slot -->
            <waterfall-slot
              v-for="(item, index) in items"
              :width="item.width"
              :height="item.height"
              :order="index"
              :key="index"
              move-class="item-move"
              class="p-2"
              >
              <b-img :src="item.path" fluid/>
              <!-- <img v-bind:src="getImgUrl(item.src)" /> -->
            </waterfall-slot>
          </waterfall>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
/* in xxx.vue */

import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

/*
 * or use ES5 code (vue-waterfall.min.js) :
 * import { Waterfall, WaterfallSlot } from 'vue-waterfall'
 */

export default {
  components: {
    Waterfall,
    WaterfallSlot
  },
  data () {
    return {
      items: [
        {
          width: 100,
          height: 80,
          path: 'http://joombig.com/demo-extensions1/images/gallery_slider/Swan_large.jpg',
          src: 'logo.png'
        },
        {
          width: 100,
          height: 70,
          path: 'https://www.w3schools.com/w3css/img_lights.jpg',
          src: 'logo.png'
        },
        {
          width: 100,
          height: 80,
          path: 'https://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk=',
          src: 'logo.png'
        },
        {
          width: 100,
          height: 100,
          path: 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg',
          src: 'logo.png'
        }
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

<style lang="css">
.popular-items {
  background: #d8d8d8;
  padding: 30px;
}
.buy-now {
  display: block;
  background: #fff;
  color: #000;
  border-radius: 20px;
  border: 1px solid #000;
}
.buy-now:hover {
  background: #000;
}
.item-move {
  transition: all .5s cubic-bezier(.55,0,.1,1);
  -webkit-transition: all .5s cubic-bezier(.55,0,.1,1);
}
</style>
