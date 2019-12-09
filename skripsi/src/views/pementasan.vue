<template>
<div class="wrapper">
  <div class="parent">
   <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <router-link to="/pementasan">Pementasan</router-link>
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        <ul>
          <li><router-link to="/pementasan">Wayang</router-link></li>
          <li><router-link to="/pementasan">Sendra Tari</router-link></li>
          <li><router-link to="/pementasan">Teater</router-link></li>
        </ul>
        <router-view/>
      </div>
    </div>

    
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <router-link to="/taritarian">Tari-tarian</router-link>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
       <ul>
          <li><router-link to="/taritarian">Tari Klasik</router-link></li>
          <li><router-link to="/taritarian">Sendra Kreasi Baru</router-link></li>
          <li><router-link to="/taritarian">Tari Rakyat</router-link></li>
        </ul>
        <router-view/>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <router-link to="/upacara">Upacara</router-link>
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
       <ul>
          <li><router-link to="/upacara">Pernikahan</router-link></li>
          <li><router-link to="/upacara">Kematian</router-link></li>
          <li><router-link to="/upacara">Khitanan</router-link></li>
          <li><router-link to="/upacara">Pengukuhan</router-link></li>
          <li><router-link to="/upacara">Pernikahan</router-link></li>
        </ul>
        <router-view/>
      </div>
    </div>
  </div>
</div>
  
</div>

<!-- Side Nav Bar -->

<div class="main">
  
     <h2 style="text-align: center;">PEMENTASAN</h2>
     <br>
     <hr>
     
    <h2 style="text-align: center;">Wayang Kulit</h2>
    <hr>
     
<div class="wayangKulit">
    <div class="row">
      <div class="col-sm-3" v-for="(contoh,index) in contohWayangKulit" :key="index" >
          <span v-if="contoh.image">
              <img class="img-thumbnail" style="display:block; width: 250px; height:300px; margin-left:auto;  margin-right:auto;" v-bind:src="getIconPath(contoh.image.value)"  alt="...">
          </span>
          <span v-else>
              <img class="img-thumbnail" style="display:block; width: 80%; height:80%; margin-left:auto;  margin-right:auto;" src="http://placehold.it/250x300"  alt="...">
          </span>
    <!-- <img v-bind:src="../assets/getIconPath(contoh.namaGambar.value)" class="img-fluid" style="width: 100%; height:100%; object-fit: cover;" alt="..."> -->

    <div class="d-flex justify-content-between">
        <div class="card-body">
            <p class="card-text">
              <span v-if="contoh.dboDbpedia">
              <router-link to="/detailWayang" >
              <p style="text-align:center;" v-on:click="getDeskripsi(contoh.namaWayangK.value),getDaerah(contoh.namaWayangK.value),getImage(contoh.namaWayangK.value),getDeskripsiDbpedia(contoh.dboDbpedia.value),getFullDbpedia(contoh.namaWayangK.value)">
                 {{contoh.namaWayangK.value}} 
                
              </p>
              </router-link>
              </span>

              <span v-else>
              <router-link to="/detailWayang" >
              <p style="text-align:center;" v-on:click="getDeskripsi(contoh.namaWayangK.value),getDaerah(contoh.namaWayangK.value),getImage(contoh.namaWayangK.value),getFullDbpedia(contoh.namaWayangK.value)">
                 {{contoh.namaWayangK.value}} 
                
              </p>
              </router-link>
              </span>
              <router-view/>
           </p>
        </div>
    </div>
    </div>
    </div>
</div> <!-- EO wayang kulit -->
    
    <hr>
<!-- -------------------------------------------------------------------- -->
    <h2 style="text-align: center;">Wayang Kayu</h2>
    <hr>
<div class="wayangKayu">
    <div class="row">
    <div class="col-sm-3" v-for="(contoh,index) in contohWayangKayu" :key="index" >
        <span v-if="contoh.image">
            <img class="img-thumbnail" style="display:block; width: 250px; height:300px; margin-left:auto;  margin-right:auto;" v-bind:src="getIconPath(contoh.image.value)"  alt="...">
        </span>
        <span v-else>
            <img class="img-thumbnail" style="display:block; width: 80%; height:80%; margin-left:auto;  margin-right:auto;" src="http://placehold.it/250x300"  alt="...">
        </span>

    <div class="d-flex justify-content-between">
    <div class="card-body">
      <p class="card-text">
              <span v-if="contoh.dboDbpedia">
              <router-link to="/detailWayang" >
              <p style="text-align:center;" v-on:click="getDeskripsi(contoh.namaWayangKy.value),getDaerah(contoh.namaWayangKy.value),getImage(contoh.namaWayangKy.value),getDeskripsiDbpedia(contoh.dboDbpedia.value),getFullDbpedia(contoh.namaWayangKy.value)">
                 {{contoh.namaWayangKy.value}} 
                
              </p>
              </router-link>
              </span>

              <span v-else>
              <router-link to="/detailWayang" >
              <p style="text-align:center;" v-on:click="getDeskripsi(contoh.namaWayangKy.value),getDaerah(contoh.namaWayangKy.value),getImage(contoh.namaWayangKy.value),getFullDbpedia(contoh.namaWayangKy.value)">
                 {{contoh.namaWayangKy.value}} 
                
              </p>
              </router-link>
              </span>
              <router-view/>
           </p>
    </div>
    </div>
    </div>
    </div>
</div> <!-- EO wayang kayu -->

<hr>
<h2 style="text-align: center;">Sendra Tari</h2>
    <hr>
    <div class="sendraTari">
    <div class="row">
    <div class="col-sm-3" v-for="(contoh,index) in contohSendraTari" :key="index" >
     <span v-if="contoh.image">
   <img class="img-thumbnail" style="display:block; width: 250px; height:300px; margin-left:auto;  margin-right:auto;" v-bind:src="getIconPath(contoh.image.value)"  alt="...">
    </span>
    <span v-else>
   <img class="img-thumbnail" style="display:block; width: 80%; height:80%; margin-left:auto;  margin-right:auto;" src="http://placehold.it/250x300"  alt="...">
    </span>
    <div class="d-flex justify-content-between">
    <div class="card-body">
      <p class="card-text">
        <router-link to="/contact" >
          <p style="text-align:center;" v-on:click="contohSendraTari(contoh.namaSendraTari.value)"> {{contoh.namaSendraTari.value}} </p>
        </router-link>
        <router-view/>
      </p>
    </div>
    </div>
</div>
    </div>
    </div> <!-- EO sendra tari -->

    <hr>
    <h2 style="text-align: center;">Teater</h2>
    <hr>
    <div class="teater">
    <div class="row">
    <div class="col-sm-3" v-for="(contoh,index) in contohTeater" :key="index" >
     <span v-if="contoh.image">
   <img class="img-thumbnail" style="display:block; width: 250px; height:300px; margin-left:auto;  margin-right:auto;" v-bind:src="getIconPath(contoh.image.value)"  alt="...">
    </span>
    <span v-else>
   <img class="img-thumbnail" style="display:block; width: 80%; height:80%; margin-left:auto;  margin-right:auto;" src="http://placehold.it/250x300"  alt="...">
    </span>
    <div class="d-flex justify-content-between">
    <div class="card-body">
      <p class="card-text">
        <router-link to="/contact" >
          <p style="text-align:center;" v-on:click="contohTeater(contoh.namaTeater.value)"> {{contoh.namaTeater.value}} </p>
        </router-link>
        <router-view/>
      </p>
    </div>
    </div>
</div>
    </div>
    </div> <!-- EO Teater -->
      
    
  </div>

</div>
</template>

<script>

import {mapState} from 'vuex'
import {mapActions} from 'vuex'

export default {

  mounted(){
    this.$store.dispatch('contohWayangKulit'),
     this.$store.dispatch('contohWayangKayu'),
     this.$store.dispatch('contohSendraTari'),
     this.$store.dispatch('contohTeater'),
     this.$store.dispatch('getDeskripsiDbpedia'),
     this.$store.dispatch('getFullDbpedia')
     
    
  },
  computed:{
      ...mapState([
        `contohWayangKulit`,
        `contohWayangKayu`,
        `contohSendraTari`,
        `contohTeater`
       
       
          //`contohKematian`
          
      ])
  },
  methods:{
      ...mapActions([
          `getDeskripsi`,
          `getDaerah`,
          `getImage`,
          `getDeskripsiDbpedia`,
          `getFullDbpedia`
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

h2{
  font-family: "Times New Roman", Times, serif;
}









</style>