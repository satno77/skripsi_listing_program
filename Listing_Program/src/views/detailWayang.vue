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

<div class="main" >

 <!-- <div v-for="(contoh,index) in getDeskripsi" :key="index">
   <h2>{{contoh.idU}}</h2> 
  </div> -->
<div class="row" v-for="(contoh,index) in getFullDbpedia" :key="index">
  <div class="col-11" v-if="contoh.namaLabel">
    <h1 v-html="contoh.namaLabel.value"></h1>
  </div>

</div>

<br>
 
<div class="row">
    <div class="col-4" v-if="cekImage()== true">
               <div v-for="(contoh,index) in getImage" :key="index">
                   <span v-if="contoh.image">
                    <img class="img-thumbnail" style="display:block; width: 700px; height:300px; margin-left:auto;  margin-right:auto;" v-bind:src="getIconPath(contoh.image.value)"  alt="...">
                    </span>
               </div>
    
                            
  </div>
               
  <div class="col-4" v-else>
          <span>
                <img class="img-thumbnail" style="display:block; width: 80%; height:80%; margin-left:auto;  margin-right:auto;" src="http://placehold.it/250x300"  alt="...">
          </span>
  </div>
</div>
<hr>

<div class="row">
  <div class="col-2">DESKRIPSI :</div>
      
  <div class="col-10" v-if="cekDbpedia()==true">
          <div v-for="(contoh,index) in getDeskripsiDbpedia" :key="index">
              <div v-if="contoh.deskripsi">
                  <p v-html="contoh.deskripsi.value" style="text-align:justify"></p>
              </div>
          </div>
  </div>

  <div class="col-10" v-else-if="cekDeskripsi()==true">
          <div v-for="(contoh,index) in getDeskripsi" :key="index">
          <div v-if="contoh.deskripsi">
              <p v-html="contoh.deskripsi.value"></p>
          </div>
          </div>
  </div>

  <div class="col-10" v-else>
          
              <p>Data tidak tersedia</p>
          
  </div>
</div>
<hr>

    <div class="row">
      <div class="col-2">ASAL DAERAH :</div>
      <div class="col"><ul v-for="(contoh,index) in getDaerah" :key="index">
                        <li>
                            <!--<p v-html="contoh.labelDaerah.value"></p> -->
                            <div class="row">
                              <div class="col-7">
                                  <router-link to="/detailInfo">
                                      <p v-html="contoh.labelDaerah.value"></p>
                                  </router-link>
                                  <router-view/>
                              </div>
                            </div>  
                        </li>
                        <hr>
                        </ul>
      </div>
    </div>
    <hr>

<!-- cerita -->
<div class="row">
  <div class="col-2">TEMA CERITA :</div>

    <div class="col-4" v-if="cekFull()== true">
               <div v-for="(contoh,index) in getFullDbpedia" :key="index">
                   <span v-if="contoh.cerita">
                    <router-link to="/moreinfo">
                    <p v-html="contoh.cerita.value"></p>
                    </router-link>
                    <router-view/>
                    </span>
               </div>
    
                            
</div>



  <div class="col-4" v-else>
          <span>
                <p>Data tidak tersedia</p>
          </span>
  </div>

  <div class="col-2">TOKOH :</div>

  <div class="col-4">
               <div v-for="(contoh,index) in getFullDbpedia" :key="index">
                   <span v-if="contoh.tokoh">
                    <router-link to="/moreinfo">
                    <p v-html="contoh.tokoh.value"></p>
                    </router-link>
                    <router-view/>
                    </span>
               </div>
    
                            
</div>


</div>
<hr>

<!-- Properti -->
<div class="row">
  <div class="col-2">PROPERTI :</div>

    <div class="col-4" v-if="cekFull()== true"> 
    
               <div  v-for="(contoh,index) in getFullDbpedia" :key="index">
                   <span v-if="contoh.properti">
                    <router-link to="/moreinfo">
                    <p v-on:click="getDeskripsiDbpedia(contoh.properti.value)">{{contoh.properti.value}}</p>
                    </router-link>
                    <router-view/>
                   </span>
    </div>
    
                        
  </div>
              
 <div class="col-4" v-else>
          <span>
                <p>Data tidak tersedia</p>
          </span>
  </div>
  <hr>
</div>


    <div class="row">
      <div class="col-2">External Link :</div>
    </div> 
   
    
  </div> <!-- eo CLASS MAIN -->

</div>
</template>

<script>

import {mapState} from 'vuex'
import {mapActions} from 'vuex'

export default {

  mounted(){
    
   
  },
  computed:{
      ...mapState([
       `getDaerah`,
       `getDeskripsi`,
       `getImage`,
       `getDeskripsiDbpedia`,
       `getFullDbpedia`,
       `contohWayangKuli`
      
          
      ])
  },
  methods:{
      ...mapActions([
         `getDeskripsiDbpedia`
      ]),
      getIconPath(iconName){
        return iconName ? require(`../assets/img/${iconName}`) : ''
      },
      cekImage(){
        return this.$store.state.getImage.length != 0
      },
      cekDaerah(){
        return this.$store.state.getDaerah.length != 0
      },
      cekDbpedia(){
        return this.$store.state.getDeskripsiDbpedia.length != 0
      },
      cekDeskripsi(){
        return this.$store.state.getDeskripsi.length != 0
      },
      cekFull(){
          return this.$store.state.getFullDbpedia.length != 0
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
  height:100%;
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

td{
  padding-right: 10px;
  border:2px black;
}

th{
  padding-left: 20px;
  text-align: left;
  border:2px black;
}

h1{
  font-family: "Times New Roman", Times, serif;
  text-align: center;
}







</style>