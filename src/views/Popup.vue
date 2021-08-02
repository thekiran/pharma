<template>
  <div class="container">

    <div class="headline">
          <headline />
    </div>
    <div class="pop">
          <pop />
    </div>

  </div>
</template>
 

<script>
import headline from '../assets/popup/headline.vue'
import pop from '../components/pop.vue'

export default {
  name: 'Popup',
  components: {
    pop,
    headline
  }
}
</script>
 
 <style scoped>
  .container{
    max-width:1000px;
    max-height:1000px;
    margin: 3em auto 0 auto;

  }
  .headline{
   max-width:1000px;
   margin: 1em auto;
  }
</style>
