<template>
<div class="wrapper">
  

<div class="main" >
    <div class="row">
        <div class="col-sm-12" v-for="(i,index) in moreInfoProperti.slice(moreInfoProperti,1)" :key="index">
            <h1 class="judul" v-if="i.labelProperti">{{i.labelProperti.value}}</h1>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-12" v-for="(i,index) in moreInfoProperti.slice(moreInfoProperti,1)" :key="index">
            
            <p style="text-align:center" v-if="i.comment">{{i.comment.value}}</p>
           
        </div>
    </div> 

    <hr>
    <div class="row">
        <div class="col-sm-12" v-for="(i,index) in moreInfoProperti.slice(moreInfoProperti,1)" :key="index">
            <strong><p style="text-align:center;">Berikut ini merupakan list seni pertunjukan yang menggunakan {{i.labelProperti.value}}</p></strong>
        </div>
    </div>
    <hr> 

    <br>

    <div class="row">
        <div class="col-sm-12" v-for="(i,index) in moreInfoProperti" :key="index">
          <span v-if="i.linkdata">
            <router-link :to="{ name: 'detailsTari', params: { id: i.labelIndividu.value}}" v-if="i.label_class.value == 'TariRakyat' || i.label_class.value === 'TariKreasiBaru' || i.label_class.value === 'TariKlasik' ">
            <p style="text-align:center" v-if="i.labelIndividu" v-on:click="fullDetail(i.labelIndividu.value),getAbstractDbpedia(i.linkdata.value),getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                                            individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                                            individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">{{i.labelIndividu.value}}</p>
            </router-link>

            <router-link :to="{ name: 'details', params: { id: i.labelIndividu.value }}" v-else>
            <p style="text-align:center" v-if="i.labelIndividu" v-on:click="fullDetail(i.labelIndividu.value),getAbstractDbpedia(i.linkdata.value),getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                                            individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                                            individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">{{i.labelIndividu.value}}</p>
            </router-link>
          </span>

          <span v-else>
            <router-link :to="{ name: 'detailsTari', params: { id: i.labelIndividu.value}}" v-if="i.label_class.value == 'TariRakyat' || i.label_class.value === 'TariKreasiBaru' || i.label_class.value === 'TariKlasik' ">
            <p style="text-align:center" v-if="i.labelIndividu" v-on:click="fullDetail(i.labelIndividu.value),getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                                            individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                                            individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">{{i.labelIndividu.value}}</p>
            </router-link>

            <router-link :to="{ name: 'details', params: { id: i.labelIndividu.value }}" v-else>
            <p style="text-align:center" v-if="i.labelIndividu" v-on:click="fullDetail(i.labelIndividu.value),getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                                            individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                                            individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">{{i.labelIndividu.value}}</p>
            </router-link>
          </span>
        </div>
       
    </div> <!-- end of individual for daerah -->
    
</div> <!-- eo CLASS MAIN -->

</div>
</template>

<script>

import {mapState} from 'vuex'
import {mapActions} from 'vuex'

export default {

  mounted(){
   //this.$store.dispatch('moreInfoProperti')
   this.$store.dispatch('fullDetail'),
   this.$store.dispatch('getAbstractDbpedia')
   
  },
  computed:{
      ...mapState([
       'moreInfoProperti'
       //`getDeskripsiDbpedia`,
       //`moreInfoProperti`
       
      
          
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
      },
      
      cekDaerah(){
        return this.$store.state.moreInfoDaerah.length != 0
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
    font-family: "Courier";
}







</style>