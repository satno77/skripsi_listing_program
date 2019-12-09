<template>
  <div class="wrapper">
  

<!-- main -->
<div class="main">

    <h1 class="judul">WAYANG</h1>
    <hr>
    <hr>

    <div class="dropdown text-center sticky">
          <button class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Pilih Kategori --
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button class="dropdown-item" href="#" style="text-align:center;" v-scroll-to="'#WayangKulit'">Wayang Kulit</button>
            <button class="dropdown-item" href="#" style="text-align:center;" v-scroll-to="'#WayangKayu'">Wayang Kayu</button>
            <button class="dropdown-item" href="#" style="text-align:center;" v-scroll-to="'#WayangOrang'">Wayang Orang</button>
          </div>
      </div>

      <br>
      <br>
    <div class="wayangKulit">
      <h2 id="WayangKulit">Wayang Kulit</h2> 
      <br>


    <div class="row">
      <div class="col-sm-2" v-for="(i,index) in individualWayangKulit" :key="index" >
          <span v-if="i.image">
              <img class="img-thumbnail" style="display:block; width: 200px; height:200px; margin-left:auto;  margin-right:auto;" v-bind:src="getIconPath(i.image.value)"  alt="...">
          </span>
          <span v-else>
              <img class="img-thumbnail" style="display:block; width: 200px; height:200px; margin-left:auto;  margin-right:auto;" src="http://placehold.it/250x300"  alt="...">
          </span>
    <div class="d-flex justify-content-between">
        <div class="card-body">
            <p class="card-text">
              <span v-if="i.dboDbpedia">
               
                   <router-link :to="{ name: 'details', params: { id: i.labelIndividu.value }}" >
                     <button class="btn btn-info btn-block" v-on:click="fullDetail(i.labelIndividu.value),getAbstractDbpedia(i.dboDbpedia.value)
                                            ,getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                                            individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                                            individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">
                         {{i.labelIndividu.value}} 
                     </button>
                     </router-link>
              </span>

              <span v-else>
             <router-link :to="{ name: 'details', params: { id: i.labelIndividu.value }}" >
                    <button class="btn btn-info btn-block" v-on:click="fullDetail(i.labelIndividu.value)
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
    </div> <!-- EO wayang kulit -->

   <!-- Horizontal line -->
      <hr>
      <hr>
  <!-- End of Horizontal line -->
      

    <div class="wayangKayu">
      <h2 id="WayangKayu">Wayang Kayu</h2>
      <br>
    <div class="row">
      <div class="col-sm-2" v-for="(i,index) in individualWayangKayu" :key="index" >
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
    </div> <!-- EO wayang kayu -->
    <!-- Horizontal line -->
      <hr>
      <hr>
  <!-- End of Horizontal line -->

    <div class="wayangOrang">
      <h2 id="WayangOrang">Wayang Orang</h2>
      <br>
    <div class="row">
      <div class="col-sm-2" v-for="(i,index) in individualWayangOrang" :key="index" >
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
    </div> <!-- EO wayang orang -->

<!-- Horizontal line -->
      <hr>
      <hr>
<!-- End of Horizontal line -->




</div><!-- end of main -->
</div><!-- end of wrapper -->



</template>


<script>
import {mapState} from 'vuex'
import {mapActions} from 'vuex'

export default {

  mounted(){
    this.$store.dispatch('individualWayangKulit'),
    this.$store.dispatch('individualWayangKayu'),
    this.$store.dispatch('individualWayangOrang'),
    this.$store.dispatch('fullDetail'),
    this.$store.dispatch('getAbstractDbpedia')    
  },
  computed:{
      ...mapState([
        `individualWayangKulit`,
        `individualWayangKayu`,
        `individualWayangOrang`         
      ])
  },
  methods:{
      ...mapActions([
          'getAbstractDbpedia',
          'fullDetail',
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
</script> <!-- End of script -->

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

h2{
  font-family: "Times New Roman", Times, serif;
  text-align: center;
}

</style>