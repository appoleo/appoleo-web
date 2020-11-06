<template>
  <div id="app">
    <img src="./assets/index_o.jpg">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app,img {
  height: 100%;
  width: 100%;
}
</style>
