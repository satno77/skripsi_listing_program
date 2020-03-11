<template>
    <div class="wrapper">


<!-- main -->
<div class="main">
<div class="sendra tari">
      <h2 class="judul">Sendra Tari</h2>
      <hr>
      <hr>
      <br>
    <div class="row">
      <div class="col-sm-2" v-for="(i,index) in individualSendratari" :key="index" >
          <!--<span v-if="i.image">
              <img class="img-thumbnail" style="display:block; width: 200px; height:200px; margin-left:auto;  margin-right:auto;" v-bind:src="getIconPath(i.image.value)"  alt="...">
          </span>
          <span v-else> -->
              <img class="img-thumbnail" style="display:block; width: 130px; height:120px; margin-left:auto;  margin-right:auto;" src="http://placehold.it/250x300"  alt="...">
          
    <div class="d-flex justify-content-between">
        <div class="card-body">
            <p class="card-text">
              <span v-if="i.dboDbpedia">
              <router-link to="/details" >
                    <p style="text-align:center;" v-on:click="fullDetail(i.labelIndividu.value),getAbstractDbpedia(i.dboDbpedia.value)">
                         {{i.labelIndividu.value}} 
                    </p>
              </router-link>
              </span>
              
              <span v-else>
              <router-link to="/details" >
                    <p style="text-align:center;" v-on:click="fullDetail(i.labelIndividu.value)">
                         {{i.labelIndividu.value}} 
                    </p>
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
</div><!-- end of wrapper -->
</template>

<script>
import {mapState} from 'vuex'
import {mapActions} from 'vuex'

export default {

  mounted(){
    this.$store.dispatch('individualSendratari'),
    this.$store.dispatch('fullDetail'),
    this.$store.dispatch('getAbstractDbpedia') 
        
  },
  computed:{
      ...mapState([
        `individualSendratari`,
                
      ])
  },
  methods:{
      ...mapActions([
          'getAbstractDbpedia',
          'fullDetail'
         
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
</script> <!-- end of script -->

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
</style>