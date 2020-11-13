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
          <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="getUserList">
            <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
        </el-col>
      </el-row>
      <!-- 用户列表区域 -->
      <el-table :data="userList" border stripe>
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column label="姓名" prop="name" width="120px"></el-table-column>
        <el-table-column label="邮箱" prop="email" width="200px"></el-table-column>
        <el-table-column label="电话" prop="mobile"></el-table-column>
        <el-table-column label="角色" prop="rule"></el-table-column>
        <el-table-column label="状态">
          <!-- 作用域插槽会覆盖上面的prop属性 -->
          <template slot-scope="scope">
            <el-switch v-model="scope.row.state" @change="stateChanged(scope.row)"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="220px">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="small"></el-button>
            <el-button type="danger" icon="el-icon-delete" size="small"></el-button>
            <el-tooltip class="item" effect="dark" content="分配角色" placement="top" :enterable="false">
              <el-button type="warning" icon="el-icon-setting" size="small"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryInfo.pageCurrent" :page-sizes="[5, 10, 20, 40]" :page-size="queryInfo.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
      <!-- 添加对话框 -->
      <el-dialog title="提示" :visible.sync="addDialogVisible" width="30%">
        <el-form :model="addUserFormData" :rules="addUserFormRules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="addUserFormData.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="addUserFormData.password"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="addUserFormData.email"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="addUserFormData.mobile"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
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
        { id: 1, name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { id: 2, name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { id: 3, name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { id: 4, name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { id: 5, name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { id: 6, name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: false },
        { id: 7, name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { id: 8, name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { id: 9, name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { id: 10, name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: false },
        { id: 11, name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { id: 12, name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: false },
        { id: 13, name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { id: 14, name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { id: 15, name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { id: 16, name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true },
        { id: 17, name: '王', email: 'appoleo@163.com', mobile: '18740394051', rule: '管理员', state: true }
      ],
      total: 0,
      addDialogVisible: false,
      addUserFormData: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      // 登录表单校验规则
      addUserFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在3-10个字符之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在6-15个字符之间', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.getUserList();
  },
  methods: {
    getUserList() {
      // todo 获取用户列表数据
      console.log("获取用户列表")
    },
    handleSizeChange(newSize) {
      this.queryInfo.pageSize = newSize;
      this.getUserList();
    },
    handleCurrentChange(newCurrent) {
      this.queryInfo.pageCurrent = newCurrent;
      this.getUserList();
    },
    stateChanged(userInfo) {
      console.log(userInfo);
      //  todo 更新状态
    }
  }
}
</script>

<style lang="less" scoped>
</style>