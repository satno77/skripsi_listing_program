<template>
  <div class="wrapper">
      <div class="main">

  <div class="home_rand()">
    <br>
    <h2>SENI PERTUNJUKAN</h2>
      <br>
      <br>
      <br>
    <div class="row" >
      <div class="col-sm-2" v-for="(i,index) in homeQueryRand" :key="index" >
          <span v-if="i.image">
              <img class="img-thumbnail" style="display:block; width: 250px; height:250px; margin-left:auto;  margin-right:auto;" v-bind:src="getIconPath(i.image.value)"  alt="...">
          </span>
          <span v-else>
              <img class="img-thumbnail" style="display:block; width: 250px; height:250px; margin-left:auto;  margin-right:auto;" src="http://placehold.it/250x300"  alt="...">
          </span>
    <div class="d-flex justify-content-between">
        <div class="card-body">
            <p class="card-text">
              <span v-if="i.linkdata">
              <router-link to="/details" >
                    <p style="text-align:center;" v-on:click="fullDetail(i.labelClass.value),getAbstractDbpedia(i.linkdata.value)" >
                         {{i.labelClass.value}} 
                    </p>
              </router-link>
              </span>

              <span v-else>
              <router-link to="/details" >
                    <p style="text-align:center;" v-on:click="fullDetail(i.labelClass.value)">
                         {{i.labelClass.value}} 
                    </p>
              </router-link>
              </span>
              <router-view/>
           </p>
        </div>
    </div>
    </div>
    </div>
    </div> <!-- EO home rand -->

    
      
    


</div> <!-- end of .main -->
</div> <!-- end of .wrapper -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

//export default {
//  name: 'home',
  
//}
import {mapState} from 'vuex'
import {mapActions} from 'vuex'

export default {

  mounted(){
    this.$store.dispatch('homeQueryRand')
  },
  computed:{
      ...mapState([
        `homeQueryRand`
               
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
</script>
