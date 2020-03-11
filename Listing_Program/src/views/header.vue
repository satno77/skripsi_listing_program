<template>

<!--<nav class="navbar navbar-expand-lg navbar-light bg-light"> -->
  <nav class="navbar navbar-expand-lg navbar-light bg-primary text-white">
  <a class="navbar-brand text-bold" href="#">SENI PERTUNJUKAN INDONESIA</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/">
        <button type="button" class="btn text-white" style="padding-left:20px;">Home</button>
        </router-link>
      </li>

    <div class="dropdown">
    <button class="btn text-white dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Pertunjukan
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <div class="nav-link" v-for="(i,index) in classOfSeni" :key="index">
     <span v-if="i.labelIndividu.value == 'Wayang'">
     <router-link to="/wayang" class="nav-link">
        <button class="dropdown-item" type="button" v-if="i.labelIndividu">{{i.labelIndividu.value}}</button>
    </router-link></span>

    <span v-if="i.labelIndividu.value == 'TariTarian'">
     <router-link to="/taritarian" class="nav-link">
        <button class="dropdown-item" type="button" v-if="i.labelIndividu">{{i.labelIndividu.value}}</button>
    </router-link></span>

    <span v-if="i.labelIndividu.value == 'Teater'">
     <router-link to="/teater" class="nav-link">
        <button class="dropdown-item" type="button" v-if="i.labelIndividu">{{i.labelIndividu.value}}</button>
    </router-link></span>

    <span v-if="i.labelIndividu.value == 'Dramatari'">
     <router-link to="/dramatari" class="nav-link">
        <button class="dropdown-item" type="button" v-if="i.labelIndividu">{{i.labelIndividu.value}}</button>
    </router-link></span>
    </div>
  </div>
  </div>   <!-- end of dropdown pertunjukan -->
      
      <li class="nav-item active">
        <router-link to="/upacara">
        <button type="button" class="btn text-white" style="padding-left:20px;">Upacara</button>
        </router-link>
      </li>
      <li class="nav-item active">
        
        <div class="dropdown" >
              <button class="btn text-white dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Daerah
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2" >
              <router-link to="/moreInfo" class="nav-link" v-for="(i,index) in individualDaerah" :key="index">
              <button class="dropdown-item" type="button" v-if="i.labelIndividu" v-on:click="moreInfoDaerah(i.labelIndividu.value),dbpediaDaerah(i.dboDaerah.value)">{{i.labelIndividu.value}}</button>
              </router-link>
            </div>
            </div>
        
      </li>
      <li class="nav-item active">
        <router-link to="/visualisasi">
        <button type="button" class="btn text-white" style="padding-left:20px;">Visualisasi</button>
        </router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/about">
        <button type="button" class="btn text-white" style="padding-left:20px;">About</button>
        </router-link>
      </li>


      
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" v-model="pencarian" type="text" placeholder="Search" aria-label="Search">
      <router-link to="/pencarian">
      <button @click.prevent="cari" class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
       </router-link>
    </form>

  </div>
</nav>
    
</template>

<script>
import {mapState} from 'vuex'
import {mapActions} from 'vuex'

export default {

  mounted(){
     this.$store.dispatch('individualDaerah'),
     this.$store.dispatch('classOfSeni')
  },
  computed:{
      ...mapState([
        `individualDaerah`,
        `classOfSeni`
      ])
  },
  methods:{
      ...mapActions([
         `moreInfoDaerah`,
         `dbpediaDaerah`,
         `search`
         
      ]),
      getIconPath(iconName){
        return iconName ? require(`../assets/img/${iconName}`) : ''
      },
      cari(){
        if(this.pencarian.length > 2){
          this.search(this.pencarian)
          this.$router.push('/pencarian')
        }
      }
  },
  data(){
    return{
          pencarian:' '
    }
  }

}
</script>

<style scoped>
li{
  font-family: "Times New Roman", Times, serif;
}

.navbar-brand{
  font-family: "Times New Roman", Times, serif;
}
button{
  font-family: "Times New Roman", Times, serif;
}

.dropdown-menu{
    max-height: 400px;
    overflow-y: auto;
}



</style>