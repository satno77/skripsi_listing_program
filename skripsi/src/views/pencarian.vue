<template>
<div class="wrapper">



<div class="main">
  <h1 class="judul">HASIL PENCARIAN</h1><hr><br><br>

  <div v-for="(i,index) in search" :key="index" class="text-center">
      <span v-if="i.label_class.value == 'TariRakyat' || i.label_class.value === 'TariKreasiBaru' || i.label_class.value === 'TariKlasik' ">
        <router-link :to="{ name: 'detailsTari', params: { id: i.labelIndividu.value}}">
            <p  style="text-align:center;" v-if="i.dbolinkdata" v-on:click="fullDetail(i.labelIndividu.value),getAbstractDbpedia(i.dbolinkdata.value),getImage(i.labelIndividu.value),
                    alatMusik(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                    individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)" >
                         {{i.labelIndividu.value}}
            </p>

            <p  style="text-align:center;" v-else v-on:click="fullDetail(i.labelIndividu.value),getImage(i.labelIndividu.value),
                    alatMusik(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                    individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)" >
                         {{i.labelIndividu.value}} 
            </p>

        </router-link>
        <router-view/>
      
      </span>


      <span v-else>
          <router-link :to="{ name: 'details', params: { id: i.labelIndividu.value }}">
            <p style="text-align:center;" v-if="i.dbolinkdata" v-on:click="fullDetail(i.labelIndividu.value),getAbstractDbpedia(i.linkdata.value),getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                                            individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                                            individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">
                         {{i.labelIndividu.value}} 
            </p>

            <p style="text-align:center;" v-else v-on:click="fullDetail(i.labelIndividu.value),getImage(i.labelIndividu.value),individualTokoh(i.labelIndividu.value),alatMusik(i.labelIndividu.value),
                                            individualCerita(i.labelIndividu.value),individualProperti(i.labelIndividu.value),
                                            individualAksesoris(i.labelIndividu.value),individualGerakTari(i.labelIndividu.value)">
                         {{i.labelIndividu.value}} 
            </p>

          </router-link>
          <router-view/>
       
      </span>

     
    
  </div>

</div>  <!-- end of main -->

</div> <!-- end of wrapper -->
</template>

<script>

import {mapState} from 'vuex'
import {mapActions} from 'vuex'

export default {

  mounted(){
    this.$store.dispatch('search')
     
  },
  computed:{
      ...mapState([
       `search`
        
          //`contohKematian`
          
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
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Vollkorn&display=swap');
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap');
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
  text-align: center;
}









</style>