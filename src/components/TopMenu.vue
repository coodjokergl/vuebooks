<template>
  <el-menu
    :mode="horizontal"
    :default-active="this.$store.activeIndex"
    @select="selectMenu"
  >
    <el-submenu
      v-for="(submenus, index) in menus"
      :index="index + 1"
      :key="submenus.path"
    >
      <template slot="title"
        >submenus.name</template
      >
      <el-menu-item
        v-for="(item, subIndex) in submenus.Childs"
        :index="index + 1 + '-' + (subIndex + 1)"
        :key="index + 1 + '-' + (subIndex + 1)"
        >{{ item.name }}</el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "TopMenu",
  data() {
    return {
      menus: this.$store.routers
    }
  },
  methods: {
    selectMenu(key, path) {
      log(key, path)
    }
  }
}
</script>

<style lang="scss" scoped>
lab {
  border: none;
}
</style>
