<template>
<div class="wrapper">
   

<div class="main">
    <div class="row" v-for="(i,index) in fullDetail.slice(fullDetails,1)" :key="index">
       <div class="col-11" v-if="i.labelIndividu">
          <h1 class="judul">{{$route.params.id}}</h1>
       </div>
    </div>

    <div class="row" >
      <div class="col-sm-9"> <!-- start wrapper for deskripsi -->
      <div class="col-sm-auto" v-if="cekDbpedia()== true">
        <div v-for="(i,index) in getAbstractDbpedia" :key="index">
           <span><p class="deskripsi" style="text-align:justify;" v-if="i.abstract">{{i.abstract.value}}</p></span>
        </div>
      </div>

      <div class="col-sm-auto" v-else>
        <span v-for="(i,index) in fullDetail" :key="index">
            <p class="deskripsi" style="text-align:justify;" v-if="i.deskripsi">
                {{i.deskripsi.value}}
            </p>
        </span>
      </div>

      </div> <!-- end of wrapper for deskripsi -->
       
     <div class="col-sm-auto" v-for="(i,index) in getImage" :key="index"> 
         <span v-if="i.image">
            <img class="img-thumbnail" style="display:block; width: 250px; height:200px; margin-left:auto;  margin-right:auto;" v-bind:src="getIconPath(i.image.value)"  alt="...">
            <p v-if="i.linkGambar" style="text-align:center;font-size:14px;"><a v-bind:href="i.linkGambar.value" target="_blank">&copy; {{i.SumberGambar.value}}</a></p> 
            <p v-else style="text-align:center;">&copy; {{i.SumberGambar.value}}</p> 
         </span> 
         <span v-else>
            <img class="img-thumbnail" style="display:block; width: 200px; height:200px; margin-left:auto;  margin-right:auto;" src="http://placehold.it/250x300"  alt="...">
         </span>
      </div> 
       
    </div>

    <div class="moreDetail">
      <hr>
      

      <div class="row" >
         <div class="col-sm-2">
            <h6> <b> Asal Daerah : </b></h6>
         </div>
         <div class="col-sm-4" >
           <div class="Daerah">
            <span v-for="(i,index) in fullDetail" :key="index">
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

      <h3> PEMENTASAN </h3> <hr>


      <div class="row" >
        <!-- propeti -->
         <div class="col-sm-2" >
           <div class="Properti">
             <h6> <b> Properti : </b></h6>
           </div>
         </div> 

         <div class="col-sm-2" >
           <div class="properti">
             <span v-if="individualProperti.length">
                <router-link to="/detailProperti" v-for="(i,index) in individualProperti" :key="index">
                <p v-if="i.labelProperti" style="padding-left:30px;" v-on:click="moreInfoProperti(i.labelProperti.value)">
                    {{i.labelProperti.value}}
                </p>
                </router-link>
                 <router-view/>
            </span>

            <span v-else><p>Data tidak ditemukan</p></span>
           </div>
         </div> <!-- end of properti -->

        <!-- alat musik -->
         <div class="col-sm-2" >
           <div class="AlatMusik">
             <h6> <b> Alat musik : </b></h6>
           </div>
         </div> 

          <div class="col-sm-2" >
           <div class="alatmusik">
             <span v-if="alatMusik.length">
                  
                  <p v-for="(i,index) in alatMusik" :key="index"><a v-if="i.labelPengiring" v-bind:href="`https://app.alunalun.info/alatmusik/details?id_item=`+i.labelPengiring.value+`&id=`+i.labelPengiring.value+`&id_link=`" target="_blank">{{i.labelPengiring.value}}</a>
                  </p>    
                  <!--<p v-if="i.labelPengiring">{{i.labelPengiring.value}}</p>-->
              </span>

              <span v-else><p>Data tidak ditemukan</p></span>
              
           </div>
         </div> <!-- alat musik -->

        <!-- gaksesoris -->
         <div class="col-sm-2" >
           <div class="Aksesoris">
             <h6> <b> Aksesoris : </b></h6>
           </div>
         </div> 

         <div class="col-sm-2" >
           <div class="aksesoris">
             <div >
             <span v-if="individualAksesoris.length">
                <router-link to="/detailAksesoris" v-for="(i,index) in individualAksesoris" :key="index">
                <p v-if="i.labelAksesoris" style="padding-left:30px;" v-on:click="moreInfoAksesoris(i.labelAksesoris.value)">
                    {{i.labelAksesoris.value}}
                </p>
                </router-link>
                 <router-view/>     
             </span>

             <span v-else><p>Data tidak ditemukan</p></span>
             </div>
             
            
           </div>
         </div> <!-- end of aksesoris -->
         
      </div> <!-- end of row -->
       <hr>

       <div class="row">
          <!-- gerak tari -->
         <div class="col-sm-2" >
           <div class="GerakTari">
             <h6> <b> Gerak tari : </b></h6>
           </div>
         </div> 

         <div class="col-sm-6" >
           <div class="gerakTari">
             <span v-if="individualGerakTari.length">
                <router-link to="/detailGerakTari" v-for="(i,index) in individualGerakTari" :key="index">
                <p v-if="i.labelGerakTari" style="padding-left:30px;" v-on:click="moreInfoGerakTari(i.labelGerakTari.value)">
                        {{i.labelGerakTari.value}}   
                </p>
                </router-link>
                 <router-view/>
            </span>

            <span v-else><p>Data tidak ditemukan</p></span>

           </div>
         </div> <!-- end of geraktari -->

         <div class="col-sm-6">
           <div class="LinkTo">
             

           </div>

         </div>
       </div> <!-- end of row -->
    
    </div> <!-- end of modeDetail -->

</div> <!-- end of main -->

</div> <!-- end of .wrapper -->
</template>

<script>
import {mapState} from 'vuex'
import {mapActions} from 'vuex'

export default {

  mounted(){
    this.$store.dispatch('dbpediaDaerah'),
    this.$store.dispatch('alatMusik'),
    this.$store.dispatch('fullDetail', this.$route.params.id),
    this.$store.dispatch('getImage', this.$route.params.id),
    this.$store.dispatch('individualProperti', this.$route.params.id),
     this.$store.dispatch('alatMusik', this.$route.params.id),
     this.$store.dispatch('individualAksesoris', this.$route.params.id),
    this.$store.dispatch('individualGerakTari', this.$route.params.id)
    
     
  },
  computed:{
      ...mapState([
        'fullDetail',
        'getAbstractDbpedia',
        `getImage`,
        `alatMusik`,
        'individualProperti',
        'individualAksesoris',
        'individualGerakTari'
        
           
      ])
  },
  methods:{
      ...mapActions([
        'moreInfoDaerah',
        'moreInfoAksesoris',
        'moreInfoTokoh',
        'moreInfoCerita',
        'moreInfoProperti',
        'moreInfoGerakTari',
        'getAbstractDbpedia',
        'dbpediaDaerah',
        `alatMusik`,
        `individualWayangKulit`

         
         
      ]),
      getIconPath(iconName){
        return iconName ? require(`../assets/img/${iconName}`) : ''
      },
      cekDbpedia(){
        return this.$store.state.getAbstractDbpedia.length != 0
      },
      showMusik(x){
      this.alatMusik(x)
      
    }
  },
  data(){
    return{
      selectComponent: 'Contoh Upacara',
    }
  },
  /*created() {
            this.id = this.$route.params.id;
            if(this.$route.query.debug) {
                this.debug = this.$route.query.debug;
            }
  }*/


}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Vollkorn&display=swap');
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap');
.judul{
  font-family: 'Vollkorn', serif;
}
.deskripsi{
  font-family: 'IBM Plex Serif', serif;
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

h1{
  font-family: "Courier";
}

h6{
  /*font-family: "Times New Roman", Times, serif; */
  font-family: "Courier";
  padding-left: 25px;
  font-weight: bold;
}

p{
  /*font-family: "Times New Roman", Times, serif; */
  font-family: 'Courier New';
  
}
h3{
  font-family: 'Courier New';
  text-align: center;
}

h4 {
   width: 100%; 
   text-align: center; 
   border-bottom: 1px solid #000; 
   line-height: 0.1em;
   margin: 10px 0 20px; 
} 

h4 span { 
    background:#fff; 
    padding:0 10px; 
}



#listHorizontal{
  display: inline;
}

</style>