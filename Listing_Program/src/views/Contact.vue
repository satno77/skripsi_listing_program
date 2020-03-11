<template>
  <div class="contact">
      <p>Test</p>
      <p v-for="(contoh,index) in detailUpacara" :key="index">
      
        <br>
        <span v-if="contoh.labelDaerah">
          <p v-html="contoh.labelDaerah.value">
          </p>
        </span>
      </p>
  </div>
</template>


<script>
import {mapState} from 'vuex'
import {mapActions} from 'vuex'



export default {
   mounted(){
  //this.$store.dispatch('detailUpacara')
  },

  computed:{
      ...mapState([
        `detailUpacara`
          //`contohPengukuhan`,
          //`contohKematian`
          
      ])
  },
  methods:{
      ...mapActions([
          //`detailUpacara`
      ])
  },
  data(){
    return{
      selectComponent: 'Contoh Upacara',
    }
  }


}
</script>

<style>

</style>