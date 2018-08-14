<template id="">
  <div >
    <b-container class="search">
      <b-row >
        <b-col lg="3">
          <b-form-select v-model="selected" :options="options" />
        </b-col>
        <b-col lg="3">
          <b-form-input type="text" v-model="Search_key" placeholder="Search Key"/>
        </b-col>
        <b-col>
          <b-button variant="outline-success" @click="Find()">Search</b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row >
        <b-col lg="3" v-for="(result,index) in result" class="item-class" :key="index" >
          <div  class="relative">
            <div class="backhover">
              <img  :src="getSRC(result.photo)">
              <div class="overlay" v-b-modal.modal-center @click="ShowDetail(index)">View Detail</div>
            </div>
            <h6 class="absolute" v-if="result.status">{{result.status}}</h6>
            <div>
              <h6>Price</h6>
              {{result.price}}
            </div>
          </div>
        </b-col>
      </b-row>
      <b-modal ref="MyModal" id="modal-center" @hide="Auto_Fill()" centered :title="modal.title">
        <b-row>
          <b-col v-if="modal.mpath">
            <div class="box">
              <img v-if="modal.def" :src="getSRC(modal.mpath)" alt=""/>
              <img v-if="modal.one" :src="getSRC(modal.mphoto_one)" alt=""/>
              <img v-if="modal.two" :src="getSRC(modal.mphoto_two)" alt=""/>
            </div>
          </b-col>
          <b-col>
            <h1 >{{modal.mstatus}}</h1>
            <h2>{{modal.mprice}}</h2>
            <div>Color : </div>
              <input type="radio" @change="ChangeDafault()" id="daf" name="color_btn"  value="original" v-model="picked"/>
              <label for="daf">Original color</label>
              <input type="radio" @change="ChangeOne()" id="white" name="color_btn" :value='modal.mwhite' v-model="picked"/>
              <label for="white">{{modal.mwhite}}</label> <br>
              <input type="radio" @change="ChangeTwo()" id="blue" name="color_btn" :value="modal.mblue" v-model="picked"/>
              <label for="blue">{{modal.mblue}}</label>
            <p>Quantity: <input type="number" min="1" max="5" v-model="value"/></p>
          </b-col>
        </b-row>
        <div slot="modal-footer" class="w-100">
          <b-button size="sm" variant="danger" v-if="showBtn" @click="removeOrder(modal.id)">Remove Order</b-button>
          <b-button size="sm" class="float-right" @click="Cart()">Add to cart</b-button>
        </div>
      </b-modal>
    </b-container>
</div>
  </div>
</template>
<script>
import cart from '../../components/AddCart/index.vue'
export default{
  components: {
    cart
  },
  data () {
    return {
      picked: 'original',
      show: false,
      Search_key: '',
      result: [],
      value: 1,
      showBtn: false,
      likeItem: {
        title: '',
        status: '',
        price: 0,
        picked: '',
        quantity: '',
        url: null,
        id: null
      },
      modal: {
        def: true,
        one: null,
        two: null,
        title: null,
        mpath: null,
        mprice: null,
        mstatus: null,
        mphoto_one: null,
        mphoto_two: null,
        mblue: null,
        mwhite: '',
        id: null
      },
      selected: null,
      options: [
        {value: null, text: 'Select'},
        {value: 'Jean', text: 'Jean'},
        {value: 'Hoodie', text: 'Best Hoodie'},
        {value: 'Shirt', text: 'Shirt'}
      ],
      shopcart: [{name: '', src: '', status: '', colour: '', price: '', quantity: 0, total: ''}],
      items: [
                {id: 'man_001', product: 'Jean', status: 'Best Seller', photo: 'man/man1.jpg', photo_one: 'man/white.jpg', photo_two: 'man/blue.jpg', white: 'White', blue: 'Blue', price: 1000},
                {id: 'man_002', product: 'Hoodie', status: 'New', photo: 'man/man2.jpg', photo_one: 'man/white.jpg', photo_two: 'man/blue.jpg', white: 'White', blue: 'Blue', price: 1000},
                {id: 'man_003', product: 'Shirt', status: 'Sale', photo: 'man/man3.jpg', photo_one: 'man/white.jpg', photo_two: 'man/blue.jpg', white: 'White', blue: 'Blue', price: 1000},
                {id: 'man_004', product: 'Hoodie', status: 'Sale', photo: 'man/man4.jpg', photo_one: 'man/white.jpg', photo_two: 'man/blue.jpg', white: 'White', blue: 'Blue', price: 1000},
                {id: 'man_005', product: 'Jean', status: null, photo: 'man/man5.jpg', photo_one: 'man/white.jpg', photo_two: 'man/blue.jpg', white: 'White', blue: 'Blue', price: 1000},
                {id: 'man_006', product: 'Shirt', status: null, photo: 'man/man6.jpg', photo_one: 'man/white.jpg', photo_two: 'man/blue.jpg', white: 'White', blue: 'Blue', price: 1000},
                {id: 'man_007', product: 'Shirt', status: 'Sale', photo: 'man/man7.jpg', photo_one: 'man/white.jpg', photo_two: 'man/blue.jpg', white: 'White', blue: 'Blue', price: 3000},
                {id: 'man_008', product: 'Hoodie', status: 'New', photo: 'man/man8.jpg', photo_one: 'man/white.jpg', photo_two: 'man/blue.jpg', white: 'White', blue: 'Blue', price: 2000},
                {id: 'man_009', product: 'Jean', status: 'Best Seller', photo: 'man/man9.jpg', photo_one: 'man/white.jpg', photo_two: 'man/blue.jpg', white: 'White', blue: 'Blue', price: 500},
                {id: 'man_010', product: 'Hoodie', status: 'New', photo: 'man/man10.jpg', photo_one: 'man/white.jpg', photo_two: 'man/blue.jpg', white: 'White', blue: 'Blue', price: 2000},
                {id: 'man_011', product: 'Shirt', status: null, photo: 'man/man1.jpg', photo_one: 'man/white.jpg', photo_two: 'man/blue.jpg', white: 'White', blue: 'Blue', price: 4000},
                {id: 'man_012', product: 'Hoodie', status: 'Sale', photo: 'man/man2.jpg', photo_one: 'man/white.jpg', photo_two: 'man/blue.jpg', white: 'White', blue: 'Blue', price: 900},
                {id: 'man_013', product: 'Jean', status: null, photo: 'man/man3.jpg', photo_one: 'man/white.jpg', photo_two: 'man/blue.jpg', white: 'White', blue: 'Blue', price: 3000},
                {id: 'man_014', product: 'Shirt', status: null, photo: 'man/man4.jpg', photo_one: 'man/white.jpg', photo_two: 'man/blue.jpg', white: 'White', blue: 'Blue', price: 3000},
                {id: 'man_015', product: 'Shirt', status: null, photo: 'man/man5.jpg', photo_one: 'man/white.jpg', photo_two: 'man/blue.jpg', white: 'White', blue: 'Blue', price: 7000},
                {id: 'man_016', product: 'Hoodie', status: 'New', photo: 'man/man6.jpg', photo_one: 'man/white.jpg', photo_two: 'man/blue.jpg', white: 'White', blue: 'Blue', price: 800}
      ]
    }
  },
  watch: {
    SelectAndSearch: function (before, after) {
    },
    Search_key: function (newKey, old) {
      var vm = this
      vm.Find()
    },
    selected: function (newitem) {
      this.Find()
    }

  },
  mounted () {
    this.result = this.items
  },
  methods: {
    removeOrder: function (id) {
      var checkItems = JSON.parse(localStorage.getItem('cartItem'))
      for (var i = 0; i < checkItems.length; i++) {
        if (id === checkItems[i].id) {
          checkItems.splice(i, 1)
        }  /* Check already exit item */
      }
      localStorage.removeItem('cartItem')
      localStorage.setItem('cartItem', JSON.stringify(checkItems))
      this.$refs.MyModal.hide()
      this.showBtn = false
      this.$router.push({ path: '/man?' + this.$route.query.coutn++ })
    },
    Auto_Fill () {
      this.picked = 'original'
      this.ChangeDafault()
      this.value = 1
    },
    Cart () {
      this.likeItem.id = this.modal.id
      this.likeItem.title = this.modal.title
      this.likeItem.status = this.modal.mstatus
      this.likeItem.price = this.modal.mprice
      this.likeItem.picked = this.picked
      this.likeItem.quantity = this.value
      if (typeof (Storage) !== 'undefined') {
        var orderLists = []
        var checkItems = JSON.parse(localStorage.getItem('cartItem'))
        if (typeof checkItems === 'undefined' || checkItems === null) {
          orderLists[0] = this.likeItem
          localStorage.setItem('cartItem', JSON.stringify(orderLists))
          checkItems = 0
        } else {
          var vm = this
          for (var i = 0; i < checkItems.length; i++) {
            if (vm.likeItem.id === checkItems[i].id) {
              checkItems.splice(i, 1)
            }  /* Check already exit item */
          }
          checkItems[checkItems.length] = this.likeItem
          localStorage.setItem('cartItem', JSON.stringify(checkItems))
          checkItems = checkItems.length
        }
        this.$router.push({ path: '/man?coutn=' + checkItems++ })
      } else {
        console.log('no support')
      }
      this.$refs.MyModal.hide()
      this.Auto_Fill()
    },
    ChangeDafault () {
      this.modal.def = true
      this.modal.one = false
      this.modal.two = false
      this.likeItem.url = this.modal.mpath
    },
    ChangeOne () {
      this.modal.one = true
      this.modal.def = false
      this.modal.two = false
      this.likeItem.url = this.modal.mphoto_one
    },
    ChangeTwo () {
      this.modal.two = true
      this.modal.def = false
      this.modal.one = false
      this.likeItem.url = this.modal.mphoto_two
    },
    ShowDetail (index) {
      var cartItem = JSON.parse(localStorage.getItem('cartItem'))
      var id = this.result[index].id
      for (var i = 0; i < cartItem.length; i++) {
        if (id === cartItem[i].id) {
          this.showBtn = true
          this.modal.title = cartItem[i].title
          this.modal.mstatus = cartItem[i].status
          this.modal.mprice = cartItem[i].price
          this.modal.mpath = cartItem[i].url
          this.value = cartItem[i].quantity
          this.picked = cartItem[i].picked
          this.modal.StartImg = true
          this.modal.id = cartItem[i].id
          this.likeItem.url = this.modal.mpath
        } else {
          this.modal.title = this.result[index].product
          this.modal.mstatus = this.result[index].status
          this.modal.mprice = this.result[index].price
          this.modal.mpath = this.result[index].photo
          this.modal.mphoto_one = this.result[index].photo_one
          this.modal.mphoto_two = this.result[index].photo_two
          this.modal.mblue = this.result[index].blue
          this.modal.mwhite = this.result[index].white
          this.modal.StartImg = true
          this.modal.id = this.result[index].id
          this.likeItem.url = this.modal.mpath
        }
      }
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
      if (this.dismissCountDown === 0) {
        this.Search_key = ''
      }
    },
    getSRC (pic) {
      return require('../../assets/' + pic)
    },
    Find () {
      var self = this
      if (this.selected === null && this.Search_key === '') {
        this.result = this.items
      } else if (this.selected && this.Search_key) {
        var val = this.items.filter(function (e) {
          if (e.product === self.selected && e.status === self.Search_key) {
            return e
          }
        })
        this.result = val
      } else if ((this.selected && this.Search_key === '') || (this.Search_key && this.selected === null)) {
        val = this.items.filter(function (e) {
          if (e.product === self.selected || e.status === self.Search_key) {
            console.log(self.selected)
            console.log(self.Search_key)
            return e
          }
        })
        this.result = val
      }
    }
  }
}
</script>
<style lang="scss">

.search {
  background: #dbe8ed;
  border-radius: 3px;
  padding: 20px;
}
.relative{
  position: relative;
  border: 1px solid #287a95;
  padding: 12px;
  margin-top: 12px;
  border-radius: 3px;
}

.absolute{
  padding: 10px;
  background: #096686;
  border-radius: 2px;
  position: absolute;
  top:10px;
  left: 12px;
  color: white;
}

.overlay {
  position: absolute;
  bottom: 0;
  background: rgba(219, 232, 237, 0.5); /* Black see-through */
  width: 100%;
  transition: .5s ease;
  opacity:0;
  color: #096686;
  font-size: 20px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}

.backhover {
  position: relative;
  img {
    height: 230px;
  }
  &:hover {
    .overlay {
      opacity: 1;
    }
  }
}

.box {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50% , -50%);
  width: 240px;
  height: 300px;
  overflow: hidden;
}
.box img {
  transition: 1.5s;
  width: 100%;
}
.box:hover img {
  transform: scale(1.2);
}
.modal-body {
  padding-bottom: 45px;
}
</style>
