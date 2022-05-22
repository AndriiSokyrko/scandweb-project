<template>
  <div id="app">
    <h1 class="mb-5">Scandiweb Test assignment</h1>
    <router-view></router-view>
    <h8>Scandiweb Test assignment</h8>
  </div >
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  display: flex;
  width: 1170px;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 60px;

}
#app img {
  display: block;
  margin: 0 auto;
}


</style>
