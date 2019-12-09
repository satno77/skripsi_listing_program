<template>
<div class="wrapper">
  

<!-- main -->
<div class="main">
    <h1 class="judul">DRAMATARI</h1>
    <hr>
    <hr>


 
  <div class="dropdown text-center">
  <button class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Pilih Kategori --
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <button class="dropdown-item" href="#" style="text-align:center;" v-scroll-to="'#DramatariTopeng'">Dramatari Bertopeng</button>
    <button class="dropdown-item" href="#" style="text-align:center;" v-scroll-to="'#DramatariTanpaTopeng'">Dramatari Tanpa Topeng</button>
    <button class="dropdown-item" href="#" style="text-align:center;" v-scroll-to="'#DramatariOpera'">Dramatari Opera</button>
    <button class="dropdown-item" href="#" style="text-align:center;" v-scroll-to="'#Sendratari'">Sendratari</button>
  </div>
  </div>
  
  <br>
  <br>

  

<div class="dramataribertopeng">
      <h2 id="DramatariTopeng">Dramatari Bertopeng</h2>
    <div class="row">
      <div class="col-sm-2" v-for="(i,index) in individualDramatariBertopeng" :key="index" >
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
              <router-link :to="{ name: 'details', params: { id: i.labelIndividu.value }}" >
                   <button class="btn btn-info btn-block" v-on:click="fullDetail(i.labelIndividu.value),getAbstractDbpedia(i.dboDbpedia.value),getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                                            individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                                            individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">
                         {{i.labelIndividu.value}} 
                    </button>
              </router-link>
              </span>

              <span v-else>
              <router-link :to="{ name: 'details', params: { id: i.labelIndividu.value }}" >
                    <button class="btn btn-info btn-block" v-on:click="fullDetail(i.labelIndividu.value),getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                                            individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                                            individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">
                         {{i.labelIndividu.value}} 
                    </button>
              </router-link>
              </span>
              <router-view/>
           </p>
        </div>
    </div>
    </div>
    </div>
    </div> <!-- EO dramatari bertopeng -->

<hr>
<hr>


 

 <div class="dramataritanpatopeng">
      <h2 id="DramatariTanpaTopeng">Dramatari Tanpa Topeng</h2>
    <div class="row">
      <div class="col-sm-2" v-for="(i,index) in individualDramatariTanpaTopeng" :key="index" >
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
              <router-link :to="{ name: 'details', params: { id: i.labelIndividu.value }}" >
                   <button class="btn btn-info btn-block" v-on:click="fullDetail(i.labelIndividu.value),getAbstractDbpedia(i.dboDbpedia.value),getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                                            individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                                            individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">
                         {{i.labelIndividu.value}} 
                    </button>
              </router-link>
              </span>

              <span v-else>
              <router-link :to="{ name: 'details', params: { id: i.labelIndividu.value }}" >
                    <button class="btn btn-info btn-block" v-on:click="fullDetail(i.labelIndividu.value),getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                                            individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                                            individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">
                         {{i.labelIndividu.value}} 
                    </button>
              </router-link>
              </span>
              <router-view/>
           </p>
        </div>
    </div>
    </div>
    </div>
    </div> <!-- EO dramataritanpatopeng -->



<hr>
<hr>

<div class="dramataritanpatopeng">
      <h2 id="DramatariOpera">Dramatari Opera</h2>
      <br>
    <div class="row">
      <div class="col-sm-2" v-for="(i,index) in individualDramatariOpera" :key="index" >
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
              <router-link :to="{ name: 'details', params: { id: i.labelIndividu.value }}" >
                   <button class="btn btn-info btn-block" v-on:click="fullDetail(i.labelIndividu.value),getAbstractDbpedia(i.dboDbpedia.value),getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                                            individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                                            individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">
                         {{i.labelIndividu.value}} 
                    </button>
              </router-link>
              </span>

              <span v-else>
              <router-link :to="{ name: 'details', params: { id: i.labelIndividu.value }}" >
                    <button class="btn btn-info btn-block" v-on:click="fullDetail(i.labelIndividu.value),getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                                            individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                                            individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">
                         {{i.labelIndividu.value}} 
                    </button>
              </router-link>
              </span>
              <router-view/>
           </p>
        </div>
    </div>
    </div>
    </div>
    </div> <!-- EO dramataritanpatopeng -->

    <div class="sendra tari">
      <h2 id="Sendratari">Sendra Tari</h2>
      <hr>
      <hr>
      <br>
    <div class="row">
      <div class="col-sm-2" v-for="(i,index) in individualSendratari" :key="index" >
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
              <router-link :to="{ name: 'details', params: { id: i.labelIndividu.value }}" >
                   <button class="btn btn-info btn-block" v-on:click="fullDetail(i.labelIndividu.value),getAbstractDbpedia(i.dboDbpedia.value),getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                                            individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                                            individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">
                         {{i.labelIndividu.value}} 
                    </button>
              </router-link>
              </span>

              <span v-else>
              <router-link :to="{ name: 'details', params: { id: i.labelIndividu.value }}" >
                    <button class="btn btn-info btn-block" v-on:click="fullDetail(i.labelIndividu.value),getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                                            individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                                            individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">
                         {{i.labelIndividu.value}} 
                    </button>
              </router-link>
              </span>
              <router-view/>
           </p>
        </div>
    </div>
    </div>
    </div>
    </div> <!-- EO sendratari -->



<hr>
<hr>

</div><!-- end of main -->
</div> <!-- end of .wrapper -->
</template>

<script>
import {mapState} from 'vuex'
import {mapActions} from 'vuex'


export default {



  mounted(){
    this.$store.dispatch('individualDramatariBertopeng'),
    this.$store.dispatch('individualDramatariOpera'),
    this.$store.dispatch('individualDramatariTanpaTopeng'),
     this.$store.dispatch('individualSendratari')
   
        
  },
  computed:{
      ...mapState([
        `individualDramatariBertopeng`,
        `individualDramatariOpera`,
        `individualDramatariTanpaTopeng`,
        `individualSendratari`
        
        
                
      ])
  },
  methods:{
      ...mapActions([
         'getAbstractDbpedia',
          'fullDetail',
          `getImage`,
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
@import url('https://fonts.googleapis.com/css?family=Vollkorn&display=swap');
.judul{
  font-family: 'Vollkorn', serif;
}
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

h2{
  font-family: "Times New Roman", Times, serif;
  text-align: center;
}
.wrapper{
  background-color: white;
}
.row{
  /*border-style: double; */
  background-color:white;
}



</style>