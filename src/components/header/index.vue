<template id="">
  <div class="header">
  <div class="Slidenav">
      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Kid</li>
      </ul>
  </div>
  <b-container fluid >
    <b-row cols="12">
      <b-col cols="2" sm="2" md="3" lg="6">
        Logo
      </b-col>
      <b-col class="menu" cols="10" sm="10" md="9" lg="5">
            <ul>
             <router-link to="/"><li>Home</li></router-link>
             <router-link to="/men"><li>Men</li></router-link>
             <router-link to="/women"><li>Women</li></router-link>
             <router-link to="/kids"><li>Kids</li></router-link>
             <router-link to="/addcart"><li>Cart <span></span></li></router-link>
           </ul>
      </b-col>
      <b-col><span>&#9776</span> </b-col>
    </b-row>
  </b-container>
  <b-modal ref="cart"> <h1>hello</h1> </b-modal>
</div>
</template>
<script>
export default {
  methods: {
    Showing () {
    }
  }
}
</script>
<style scoped>
.menu ul li{
  display: inline;
  padding: 20px;
  list-style-type: none;
}
.header {
    margin-bottom: 55px;
}
.header .row{
  padding: 15px;
  background-color:Beige ;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

}
.menu ul a {
  color: #000;
  text-decoration: none;
}
.menu ul {
  margin: 0;
  padding: 0;
}
a.router-link-exact-active{
  border-bottom: 4px solid black;
  font-weight: bold;
  padding-bottom: 15px;
}
.Slidenav {
  position: absolute;
  z-index: 3;
  top: 0;
  background: black;
}

</style>
