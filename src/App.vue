<template>
  <div id="app">
    <el-container>
      <el-header>
        <top-menu></top-menu>
      </el-header>
      <el-main>
        <hello-world></hello-world>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"
import TopMenu from "./components/TopMenu"
export default {
  name: "app",
  components: {
    HelloWorld,
    TopMenu
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
