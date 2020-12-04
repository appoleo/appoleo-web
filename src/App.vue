<template>
  <div id="app">
    <router-view />
    <div class="beian">
      <a target="_blank" style="color: #5c6b77" href="http://www.beian.miit.gov.cn">陕ICP备2020017210号-1</a>&nbsp;
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  height: 100%;
}
.beian {
  position: fixed;
  text-align: center;
  bottom: 0px;
  margin-bottom: 15px;
  width: 100%;
  color: #5c6b77;
}
</style>
