<template>
  <div>
    <!-- 面包屑区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <!-- 搜索与添加区域 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
      <!-- 用户列表区域 -->
      <el-table :data="userList" border stripe>
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="电话" prop="mobile"></el-table-column>
        <el-table-column label="角色" prop="rule"></el-table-column>
        <el-table-column label="状态">
          <!-- 作用域插槽会覆盖上面的prop属性 -->
          <template slot-scope="scope">
            <el-switch v-model="scope.row.state"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="small"></el-button>
            <el-button type="danger" icon="el-icon-delete" size="small"></el-button>
            <el-tooltip class="item" effect="dark" content="修改角色" placement="top">
              <el-button type="warning" icon="el-icon-setting" size="small"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryInfo: {
        query: '',
        pageCurrent: 1,
        pageSize: 10
      },
      userList: [
        { name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: false },
        { name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: false },
        { name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: false },
        { name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true }
      ],
      total: 0
    }
  },
  created() {
    this.getUserList();
  },
  methods: {
    getUserList() {
      // todo 获取用户列表数据
    }
  }
}
</script>

<style lang="less" scoped>
</style>