<template>
  <b-container>
    <b-row class="mt-4 p-4 bg-success">
      <b-col>
        <b-form-select v-model="manSelected" :options="manOptions" />
      </b-col>
      <b-col>
        <b-form-input v-model="search"
                  type="text"
                  placeholder="Enter your name"></b-form-input>
      </b-col>
      <b-col>
        <b-button  @click="findData()">Search</b-button>
        <div v-if="orderDataLists">
          {{ JSON.parse(orderDataLists).length }}
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-4 p-4 bg-info">
      <b-col v-for="(v,index) in resultData" :key="index" lg="3" md="4" sm="6" cols="12" class="p-2 lists">
        <div class="bg-warning">
          <b-img :src="v.path" fluid />
          <div class="p-2">
            <span>{{v.type}}</span>
            <h4>{{v.title}}</h4>
          </div>
          <b-row class="p-2">
            <b-col>{{v.price}}</b-col>
            <b-col><b-button class="btn-sm bg-success">Add to cart</b-button></b-col>
          </b-row>
          <b-row class="p-2 view-detail text-white text-center mx-0" v-b-modal.modal-center @click="viewDetail(index)">
            <b-col>View Details</b-col>
          </b-row>
        </div>
      </b-col>
      <b-col v-if="resultData && resultData.length == 0">
        <b-alert :show="dismissCountDown"
                 dismissible
                 variant="warning"
                 @dismissed="dismissCountDown=0"
                 @dismiss-count-down="countDownChanged">
          <p>This alert will dismiss after {{dismissCountDown}} seconds...</p>
          <b-progress variant="warning"
                      :max="dismissSecs"
                      :value="dismissCountDown"
                      height="4px">
          </b-progress>
        </b-alert>
      </b-col>
    </b-row>
    <!-- Modal Component -->
    <b-modal id="modal-center" centered :title="modal.title">
      <b-row>
        <b-col><b-img :src="modal.path" fluid /></b-col>
        <b-col>
          <h2>{{modal.description}}</h2>
          <b-button class="btn-sm bg-success" @click="addToCart()">Add to cart</b-button>
          <b-button class="btn-sm bg-danger" @click="removeCart(modal.id)">Remove Cart</b-button>
        </b-col>
      </b-row>
    </b-modal>
  </b-container>
</template>
<script>

export default {
  data () {
    return {
      manSelected: null,
      manOptions: [
        { value: null, text: 'Please select an option' },
        { value: 'man', text: 'Man' },
        { value: 'b', text: 'Selected Option' },
        { value: {'C': '3PO'}, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      data: [
        {
          id: '1001',
          size: 'small',
          description: 'small small small',
          type: 'man',
          title: 'aa',
          price: '10000',
          path: 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
        },
        {
          id: '1002',
          size: 'small',
          description: 'small small small',
          type: 'man',
          title: 'aa',
          price: '10000',
          path: 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
        },
        {
          id: '1003',
          size: 'small',
          description: 'small small small',
          type: 'man',
          title: 'title',
          price: '10000',
          path: 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
        },
        {
          id: '1004',
          size: 'small',
          description: 'small small small',
          type: 'man',
          title: 'aa',
          price: '10000',
          path: 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
        },
        {
          id: '1005',
          size: 'small',
          description: 'small small small',
          type: 'man',
          title: 'titles',
          path: 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg'
        }
      ],
      resultData: null,
      search: null,
      dismissSecs: 10,
      dismissCountDown: 10,
      showDismissibleAlert: false,
      modal: {
        id: null,
        size: null,
        description: null,
        type: null,
        title: null,
        path: null
      },
      orderItems: false,
      orderDataLists: null,
      count: 0,
      localItem: localStorage.getItem('orderItems') || null
    }
  },
  watch: {
    $route ({params, query}) {
      this.localItem = localStorage.getItem('orderItems')
    }
  },
  mounted () {
    this.resultData = this.data
  },
  methods: {
    findData: function () {
      if (this.search === '' || this.search === null && !this.manSelected) {
        this.resultData = this.data
        this.dismissCountDown = 10
      } else if (this.manSelected && this.search) {
        this.resultData = this.getData(this.manSelected, this.search)
      } else if (this.manSelected || this.search) {
        this.resultData = this.getData(this.manSelected, this.search)
      }
    },
    getData: function (selected, search) {
      if (selected && search) {
        var result = this.data.filter(function (e) {
          if (selected === e.type && search === e.title) {
            return e
          }
        })
      } else if (selected || search) {
        result = this.data.filter(function (e) {
          if (selected === e.type || search === e.title) {
            return e
          }
        })
      }
      return result
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
      if (this.dismissCountDown === 0) {
        this.search = ''
      }
    },
    viewDetail: function (key) {
      console.log(localStorage.getItem('orderItems'))
      localStorage.removeItem('orderItems')
      var activeResult = this.resultData[key]
      this.modal.id = activeResult.id
      this.modal.size = activeResult.size
      this.modal.title = activeResult.title
      this.modal.type = activeResult.type
      this.modal.path = activeResult.path
      this.modal.description = activeResult.description
    },
    checkInclude: function () {
      if (localStorage.getItem('orderItems') !== null) {
        console.log(localStorage.getItem('orderItems'))
        var result = localStorage.getItem('orderItems').filter(function (e) {
          if (this.modal.id === e.id) {
            return e
          }
        })
        console.log(result)
      } else {
        return true
      }
    },
    addToCart: function () {
      var orderLists = []
      var checkItems = JSON.parse(this.localItem)
      if (typeof checkItems === 'undefined' || checkItems === null) {
        orderLists[0] = this.modal
        localStorage.setItem('orderItems', JSON.stringify(orderLists))
      } else {
        checkItems[checkItems.length] = this.modal
        localStorage.setItem('orderItems', JSON.stringify(checkItems))
      }
      this.$router.push({ path: '/man?' + this.count++ })
    },
    removeCart: function (id) {
      var itemsData = JSON.parse(localStorage.getItem('orderItems')) // updated

      for (var i = 0; i < itemsData.length; i++) {
        var items = itemsData[i]
        if (items.id === id) {
          itemsData.splice(i, 1)
        }
      }

      itemsData = JSON.stringify(itemsData) // updated

      // localStorage.setItem('orderItems', itemsData)
      this.orderItems = false
      this.orderDataLists = JSON.stringify(itemsData)
      // this.checkInclude()
    }
  }
}
</script>

<style lang="css">
.lists {
  position: relative;
  cursor: pointer;
}
.view-detail {
  display: none;
}
.lists:hover .view-detail {
  position: absolute;
  display: block;
  width: 94%;
  margin-top: -40px;
  background: #191919c7;
}
</style>
