<template>
  <el-container class="home_container">
    <el-header>
      <div>
        <img src="" alt="" />
        <!-- <span>管理系统</span> -->
      </div>
      <el-button type="info" @click="logout" class="button_logout"
        >退出</el-button
      >
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <!-- 是否收起 -->
        <div @click="toggleCollapse" class="toggle_button">
          <i :class="collapseIcon"></i>
        </div>
        <el-menu
          background-color="#2B3137"
          text-color="#fff"
          active-text-color="#409EFF"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-submenu
            :index="item.id.toString()"
            v-for="item in menuList"
            :key="item.id"
          >
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveActivePath(subItem.path)"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ subItem.name }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>
          <div>
            <a
              target="_blank"
              style="color: #5c6b77"
              href="https://beian.miit.gov.cn"
              >互联网ICP备案：陕ICP备2020017210号-1</a
            >&nbsp;
          </div>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          id: 1,
          name: '用户管理',
          path: '',
          children: [{ id: 2, name: '用户列表', path: '/users', children: [] }]
        },
        {
          id: 3,
          name: '权限管理',
          path: '',
          children: [
            { id: 4, name: '角色列表', path: '/rules', children: [] },
            { id: 5, name: '权限列表', path: '/auths', children: [] }
          ]
        },
        {
          id: 6,
          name: '商品管理',
          path: '',
          children: [
            { id: 7, name: '商品列表', path: '/goods', children: [] },
            { id: 8, name: '分类参数', path: '/categorys', children: [] },
            { id: 9, name: '商品分类', path: '/goodsCategorys', children: [] }
          ]
        },
        {
          id: 10,
          name: '订单管理',
          path: '',
          children: [
            { id: 11, name: '订单列表', path: '/orders', children: [] }
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
      collapseIcon: 'el-icon-s-fold',
      activePath: ''
    }
  },

  created() {
    // todo 获取菜单树
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },

  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    getMenuList() {
      // todo 获取菜单树
      // this.$http.get('menus')
    },
    // 是否收起，并切换图标
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
      this.collapseIcon = this.isCollapse
        ? 'el-icon-s-unfold'
        : 'el-icon-s-fold'
    },
    saveActivePath(activePath) {
      this.activePath = activePath
      window.sessionStorage.setItem('activePath', activePath)
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
  cursor: pointer;
}
.button_logout {
  letter-spacing: 0.2em;
  background: rgba(34, 34, 34, 0.5);
}
.el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-size: 5px;
}
</style>
