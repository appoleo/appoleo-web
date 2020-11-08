<template>
  <el-container class="home_container">
    <el-header>
      <div>
        <img src="" alt="">
        <span>管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <!-- 是否收起 -->
        <div @click="toggleCollapse" class="toggle_button">
          <i :class="collapseIcon"></i>
        </div>
        <el-menu background-color="#2B3137" text-color="#fff" active-text-color="#ffd04b" unique-opened :collapse="isCollapse" :collapse-transition="false">
          <!-- 一级菜单 -->
          <el-submenu :index="item.id.toString()" v-for="item in menuList" :key="item.id">
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{item.name}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="subItem.id.toString()" v-for="subItem in item.children" :key="subItem.id">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{subItem.name}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          id: 1, name: '用户管理', path: '', children: [
            { id: 2, name: '用户列表', path: '', children: [] }
          ]
        },
        {
          id: 3, name: '权限管理', path: '', children: [
            { id: 4, name: '角色列表', path: '', children: [] },
            { id: 5, name: '权限列表', path: '', children: [] }
          ]
        },
        {
          id: 6, name: '商品管理', path: '', children: [
            { id: 7, name: '商品列表', path: '', children: [] },
            { id: 8, name: '分类参数', path: '', children: [] },
            { id: 9, name: '商品分类', path: '', children: [] }
          ]
        },
        {
          id: 10, name: '订单管理', path: '', children: [
            { id: 11, name: '订单列表', path: '', children: [] }
          ]
        },
        { id: 12, name: '数据统计', path: '', children: [] }
      ],
      iconsObj: {
        1: 'el-icon-user-solid',
        3: 'el-icon-s-check',
        6: 'el-icon-s-goods',
        10: 'el-icon-s-order',
        12: 'el-icon-s-data'
      },
      isCollapse: false,
      collapseIcon: 'el-icon-s-fold'
    }
  },

  created() {
    this.getMenuList();
  },

  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    getMenuList() {
      // 获取菜单树
      // this.$http.get('menus')
    },
    // 是否收起，并切换图标
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
      this.collapseIcon = this.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    }
  }
}
</script>

<style lang="less" scoped>
.home_container {
  height: 100%;
}
.el-header {
  background-color: #24292e;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.el-aside {
  background-color: #2b3137;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #fff;
}
.toggle_button {
  background-color: #2b3137;
  line-height: 32px;
  text-align: center;
  color: #909399;
  font-size: 20px;
}
</style>
