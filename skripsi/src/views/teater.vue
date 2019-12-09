<template>
<div class="wrapper">


<div class="main">
<br>
<h1 class="judul">TEATER</h1>


<div class="dramataribertopeng">
     
    <div class="row">
      <div class="col-sm-2" v-for="(i,index) in individualTeater" :key="index" >
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
</div><!-- end of main -->
</div><!-- end of wrapper -->
</template>

<script>
import {mapState} from 'vuex'
import {mapActions} from 'vuex'

export default {

  mounted(){
    this.$store.dispatch('individualTeater')
    
        
  },
  computed:{
      ...mapState([
        `individualTeater`,
                
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