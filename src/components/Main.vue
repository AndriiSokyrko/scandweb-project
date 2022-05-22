<template> 
<div>

  <div class="main--menu" >
    <router-link :to = "{name:'add'}" >Add card</router-link >
    <router-lick to = "#" @click="massDelete">Mass delete</router-lick >
  </div >
  <div class="wrapper--cards mb-5">
    <div class="container">
      <div class="row gx-3 gy-3 text-center">
          <app-card v-for="card in getAllCards" :key="card.id" :card ="card"/>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import AppCard from "@/components/Card";
export default {
  name: 'AppMain',

  computed: {
    getAllCards() {
      return this.$store.getters.getCardAll;
    }
  },
  methods:{
    massDelete(e){
      e.preventDefault();
      this.$store.dispatch('massDelete')
    }
  },
    components: {
    AppCard
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
 .main--menu{
   margin-bottom: 25px;
 }


a{
  padding: 10px;
  cursor: pointer;
  margin-right: 25px;
  margin-bottom: 25px;
  text-decoration: none;
}

</style>
