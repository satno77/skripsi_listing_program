<template>
  <div>
    <web-header></web-header>
    <!--<router-link to="/contact">contact</router-link>-->
    <router-view/>
    <!--<web-content/>-->
    <web-footer/>

    
    
  </div>
 
</template>

<script>

import header from './views/header.vue'
import footer from './views/footer.vue'
import content from './views/content.vue'



export default {
  name: 'App',

  components: {
    'web-header':header,
    'web-footer': footer,
    'web-content':content
  },

  data(){
    return{
      
    }
  }

 
}
</script>
