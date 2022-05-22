<template>
  <div class="col-3 d-flex justify-content-between">
    <div class = "p-3 border bg-light" >
      <input type = "checkbox" class="delete-checkbox" @click="setToMassDelete(card.id)">
      <h2 class="mt-3">{{ card.name }}</h2 >
      <h3 >{{ card.typeProduct }}</h3 >
      <div>{{card.price}} $</div>
      <div v-if="card.size ">
        {{card.size+' MB'}}
      </div>
      <div v-if="card.weight">
        {{card.weight +'KG'}}
      </div>
      <div v-if="card.height">
        <div>Dimension {{card.height}}x{{card.width}}x{{card.length}}</div>
      </div>

    </div >
  </div >
</template>

<script>
export default {
name: "AppCard",
  props: [
    'card'
  ],
  data() {
    return {
    }
  },
  methods:{
    setToMassDelete(id){
      this.$store.dispatch('addToMassDelete', id)
    }
  }

}
</script>

<style scoped>

.wrapper--cards_card h2{
  margin-bottom: 10px;
}
.wrapper--cards_card h3{
  margin-bottom: 10px;
}
a{
  text-decoration: none;
}
.bg-light{
  position: relative;
}
.delete-checkbox{
  position: absolute;
  top: 10px;
  left: 10px;
  text-align: left;
}
</style>