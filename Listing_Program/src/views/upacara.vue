<template>
<div class="wrapper">
  

<div class="main">
  
   
     <h2 class="judul" style="text-align: center;">UPACARA</h2>
     <hr>

    

  <div class="dropdown text-center">
  <button class="btn btn-block btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Pilih Kategori --
  </button>
  <div class="dropdown-menu btn-block" aria-labelledby="dropdownMenuButton" style="text-align: center;">
  <button class="dropdown-item btn-block" href="#" style="text-align:center;" v-scroll-to="'#Pengukuhan'">Pengukuhan</button>
  <button class="dropdown-item btn-block" href="#" style="text-align:center;" v-scroll-to="'#Pernikahan'">Pernikahan</button>
  <button class="dropdown-item btn-block" href="#" style="text-align:center;" v-scroll-to="'#UpacaraTradisi'">UpacaraTradisi</button>
    
  </div>
  </div>

    <hr>
  
      
    <h2 style="text-align: center;">Pengukuhan</h2>
     <hr>
     <div class="row" id="Pengukuhan">
      <div class="col-sm-2" v-for="(i,index) in individualPengukuhan" :key="index" >
          <span v-if="i.image">
              <img class="img-thumbnail" style="display:block; width: 200px; height:200px; margin-left:auto;  margin-right:auto;" v-bind:src="getIconPath(i.image.value)"  alt="...">
          </span>
          <span v-else>
              <img class="img-thumbnail" style="display:block; width: 2000px; height:200px; margin-left:auto;  margin-right:auto;" src="http://placehold.it/250x300"  alt="...">
          </span>
    <div class="d-flex justify-content-between">
        <div class="card-body">
            <p class="card-text">
              <span v-if="i.dboDbpedia">
               
                   <router-link :to="{ name: 'detailUpacara', params: { id: i.labelIndividu.value }}" >
                     <button class="btn btn-info btn-block" v-on:click="fullDetailUpacara(i.labelIndividu.value),getAbstractDbpedia(i.dboDbpedia.value)
                                            ,getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                                            individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                                            individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">
                         {{i.labelIndividu.value}} 
                     </button>
                     </router-link>
              </span>

              <span v-else>
             <router-link :to="{ name: 'detailUpacara', params: { id: i.labelIndividu.value }}" >
                    <button class="btn btn-info btn-block" v-on:click="fullDetailUpacara(i.labelIndividu.value)
                          ,getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                          individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                          individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">
                         {{i.labelIndividu.value}} 
                    </button>
              </router-link>
              <router-view></router-view>
              </span>
              
           </p>
        </div>
    </div>
    </div>
    </div>
    <br> 
    <hr>


    <h2 style="text-align: center;">Pernikahan</h2>
     <hr>
     <div class="row" id="Pernikahan">
      <div class="col-sm-2" v-for="(i,index) in individualPernikahan" :key="index" >
          <span v-if="i.image">
              <img class="img-thumbnail" style="display:block; width: 200px; height:200px; margin-left:auto;  margin-right:auto;" v-bind:src="getIconPath(i.image.value)"  alt="...">
          </span>
          <span v-else>
              <img class="img-thumbnail" style="display:block; width: 2000px; height:200px; margin-left:auto;  margin-right:auto;" src="http://placehold.it/250x300"  alt="...">
          </span>
    <div class="d-flex justify-content-between">
        <div class="card-body">
            <p class="card-text">
              <span v-if="i.dboDbpedia">
               
                   <router-link :to="{ name: 'detailUpacara', params: { id: i.labelIndividu.value }}" >
                     <button class="btn btn-info btn-block" v-on:click="fullDetailUpacara(i.labelIndividu.value),getAbstractDbpedia(i.dboDbpedia.value)
                                            ,getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                                            individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                                            individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">
                         {{i.labelIndividu.value}} 
                     </button>
                     </router-link>
              </span>

              <span v-else>
             <router-link :to="{ name: 'detailUpacara', params: { id: i.labelIndividu.value }}" >
                    <button class="btn btn-info btn-block" v-on:click="fullDetailUpacara(i.labelIndividu.value)
                          ,getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                          individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                          individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">
                         {{i.labelIndividu.value}} 
                    </button>
              </router-link>
              <router-view></router-view>
              </span>
              
           </p>
        </div>
    </div>
    </div>
    </div>
    <br>  

     <h2 style="text-align: center;">Upacara Tradisi</h2>
     <hr>
     <div class="row" id="UpacaraTradisi">
      <div class="col-sm-2" v-for="(i,index) in individualTradisi" :key="index" >
          <span v-if="i.image">
              <img class="img-thumbnail" style="display:block; width: 200px; height:200px; margin-left:auto;  margin-right:auto;" v-bind:src="getIconPath(i.image.value)"  alt="...">
          </span>
          <span v-else>
              <img class="img-thumbnail" style="display:block; width: 2000px; height:200px; margin-left:auto;  margin-right:auto;" src="http://placehold.it/250x300"  alt="...">
          </span>
    <div class="d-flex justify-content-between">
        <div class="card-body">
            <p class="card-text">
              <span v-if="i.dboDbpedia">
               
                   <router-link :to="{ name: 'detailUpacara', params: { id: i.labelIndividu.value }}" >
                     <button class="btn btn-info btn-block" v-on:click="fullDetailUpacara(i.labelIndividu.value),getAbstractDbpedia(i.dboDbpedia.value)
                                            ,getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                                            individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                                            individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">
                         {{i.labelIndividu.value}} 
                     </button>
                     </router-link>
              </span>

              <span v-else>
             <router-link :to="{ name: 'detailUpacara', params: { id: i.labelIndividu.value }}" >
                    <button class="btn btn-info btn-block" v-on:click="fullDetailUpacara(i.labelIndividu.value)
                          ,getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                          individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                          individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">
                         {{i.labelIndividu.value}} 
                    </button>
              </router-link>
              <router-view></router-view>
              </span>
              
           </p>
        </div>
    </div>
    </div>
    </div>
    <br> 

  </div> <!-- end of class main -->

</div>
</template>

<script>

import {mapState} from 'vuex'
import {mapActions} from 'vuex'

export default {

  mounted(){
    this.$store.dispatch('individualUpacara'),
    this.$store.dispatch('individualPengukuhan'),
    this.$store.dispatch('individualPernikahan'),
    this.$store.dispatch('individualTradisi'),
    this.$store.dispatch('fullDetail'),
    this.$store.dispatch('getAbstractDbpedia')
    
  },
  computed:{
      ...mapState([
        'individualUpacara',
        'individualPengukuhan',
        'individualPernikahan',
        'individualTradisi'
          //`contohKematian`
          
      ])
  },
  methods:{
      ...mapActions([
          `detailUpacara`,
          `getDeskripsi`,
          `getDaerah`,
          `getImage`,
          `tahapanUpacara`,
          'getAbstractDbpedia',
          'fullDetailUpacara',
          'getImage',
          'individualTokoh',
          `alatMusik`,
          `individualCerita`,
          'individualProperti',
          'individualAksesoris',
          'individualGerakTari'
      ]),
      getIconPath(iconName){
        return iconName ? require(`../assets/img/${iconName}`) : ''
      }
      
  },
  data(){
    return{
      selectComponent: 'Contoh Upacara',
    }
  }

}
</script>

<style>
.wrapper{
display: table;
	width: 100%;
	height: 100%;
}
.parent{
  display: table-cell;
	width: 15%;
	vertical-align: top;
  height: 100%;
  background-color:dimgray;
}

.main{
  display: table-cell;
	width: 85%;
	vertical-align: top;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}
.card{
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, .125)
}

html {
	height: 100%;
}

body {
	margin: 0;
	height: 100%;
}










</style>