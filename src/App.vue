<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: Arial, "微软雅黑", "SF Pro SC", "HanHei SC", "SF Pro Text",
    "Myriad Set Pro", "SF Pro Icons", "PingFang SC", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  font-size: 14px;
}
</style>
