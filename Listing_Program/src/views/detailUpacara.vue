<template>
<div class="wrapper">
 

<!-- Side Nav Bar -->

<div class="main" >
   
    <div class="row" v-for="(i,index) in fullDetailUpacara" :key="index">
       <div class="col-11" v-if="i.labelIndividu">
          <h1 class="judul">{{i.labelIndividu.value}}</h1>
       </div>
    </div>

    <div class="row" >
      <div class="col-sm-9">

      <div class="col-sm-auto">
        <span v-for="(i,index) in fullDetailUpacara" :key="index">
            <p class="deskripsi" style="text-align:justify;" v-if="i.deskripsi">
                {{i.deskripsi.value}}
            </p>
        </span>
        <br><br><br>
        <div v-for="(i,index) in fullDetailUpacara" :key="index">
          <span><p v-if="i.sumberBuku">{{i.sumberBuku.value}}</p></span>
        </div>
      </div>

      </div> <!-- end of wrapper for deskripsi -->
       
       <div class="col-sm-auto" v-if="cekImage()== true"> 
         <span v-for="(i,index) in getImage" :key="index">
            <img v-if="i.image" class="img-thumbnail" style="display:block; width: 250px; height:200px; margin-left:auto;  margin-right:auto;" v-bind:src="getIconPath(i.image.value)"  alt="...">
            <a v-bind:href="i.linkGambar.value" target="_blank"><p style="text-align:center;">&copy; {{i.SumberGambar.value}}</p></a>
         </span> 
       </div>
       <div>
         <span >
            <img class="img-thumbnail" style="display:block; width: 250px; height:200px; margin-left:auto;  margin-right:auto;" src="http://placehold.it/250x300"  alt="...">
         </span>
      </div>
      </div>   <!-- end of deskripsi and image -->

    <hr>

    <div class="row" >
         <div class="col-sm-2">
            <h6> <b> Asal Daerah : </b></h6>
         </div>
         <div class="col-sm-2" >
           <div class="Daerah">
            <span v-for="(i,index) in fullDetailUpacara" :key="index">
               <router-link to="/moreInfo" >
                <p v-if="i.labelDaerah" style="padding-left:30px;" v-on:click="moreInfoDaerah(i.labelDaerah.value),dbpediaDaerah(i.dboDaerah.value)">
                    {{i.labelDaerah.value}}
                </p>
                </router-link>
                 <router-view/>
              <!-- ,getAbstractDbpedia(i.dboDaerah.value) -->
            </span>
            </div> 
         </div> 
      </div> <!-- end of Daerah -->
      <hr>

    <h2>PROSESI UPACARA</h2>

    <hr>
    
    <div class="row">
      <div class="col-sm-12" v-for="(i,index) in fullDetailUpacara" :key="index">
           <div>
             <p v-if="i.prosesiUpacara" v-html="i.prosesiUpacara.value"></p>
           </div>
      </div> </div>
      <hr>
    

      <div class="row">
        <div class="col-sm-4">
            <div class="col-sm-4" >
                  <p>Properti :</p>
            </div>
      </div>  

      <div class="col-sm-4" >
                  <p>Makanan :</p>
      </div>
    </div> <!-- end class detail prosesi upacara -->
    <hr>
    <br>

    </div> <!-- eo CLASS MAIN -->

    
</div>  <!-- end of class wrapper -->

</template>

<script>

import {mapState} from 'vuex'
import {mapActions} from 'vuex'

export default {

  mounted(){
    this.$store.dispatch('fullDetailUpacara', this.$route.params.id)
  },
  computed:{
      ...mapState([
       `getDaerah`,
       `getDeskripsi`,
       `getImage`,
       `tahapanUpacara`,
       'fullDetailUpacara',
       'getAbstractDbpedia'
          
      ])
  },
  methods:{
      ...mapActions([
        'moreInfoDaerah',
        'dbpediaDaerah',
        'getAbstractDbpedia'
      ]),
      getIconPath(iconName){
        return iconName ? require(`../assets/img/${iconName}`) : ''
      },
      cek(){
      return this.$store.state.tahapanUpacara.length != 0
      },
      cekImage(){
        return this.$store.state.getImage.length != 0
      },cekDbpedia(){
        return this.$store.state.getAbstractDbpedia.length != 0
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









</style>