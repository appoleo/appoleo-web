<template>
  <div>
    <!-- 面包屑区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-row>
        <el-col>
          <el-button type="primary">添加角色</el-button>
        </el-col>
      </el-row>

      <!-- 角色列表 -->
      <el-table :data="roleList" border stripe>
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row :class="['bdbottom', i1 === 0 ? 'bdtop' : '', 'vcenter']" v-for="(item1, i1) in scope.row.children" :key="item1.id">
              <el-col :span="5">
                <el-tag closable @close="removeAuthById(scope.row, item1.id)">{{item1.authName}}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <el-col :span="19">
                <el-row :class="[i2 === 0 ? '' : 'bdtop', 'vcenter']" v-for="(item2, i2) in item1.children" :key="item2.id">
                  <el-col :span="6">
                    <el-tag type="success" closable @close="removeAuthById(scope.row, item2.id)">{{item2.authName}}</el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="18">
                    <el-tag type="warning" v-for="(item3, i3) in item2.children" :key="item3.id" closable @close="removeAuthById(scope.row, item3.id)">{{item3.authName}}</el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column label="角色名称" prop="roleName"></el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
        <el-table-column label="操作" width="300px">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" icon="el-icon-edit">编辑</el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
            <el-button size="mini" type="warning" icon="el-icon-setting">分配权限</el-button>
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
      roleList: [{
        id: 1, roleDesc: '技术负责人', roleName: '主管', children: [
          {
            id: 100, authName: '商品管理', children: [
              {
                id: 1000, authName: '商品列表', children: [
                  { id: 10000, authName: '添加商品' },
                  { id: 10001, authName: '商品修改' },
                  { id: 10002, authName: '商品删除' },
                  { id: 10003, authName: '更新商品图片' },
                  { id: 10004, authName: '更新商品属性' },
                  { id: 10005, authName: '更新商品状态' },
                  { id: 10006, authName: '获取商品详情' }
                ]
              }, {
                id: 1001, authName: '分类参数', children: [
                  { id: 10007, authName: '获取参数列表' },
                  { id: 10008, authName: '创建商品参数' },
                  { id: 10009, authName: '删除商品参数' }
                ]
              }, {
                id: 1002, authName: '商品分类', children: [
                  { id: 10010, authName: '添加分类' },
                  { id: 10011, authName: '删除分类' },
                  { id: 10012, authName: '获取分类详情' }
                ]
              }
            ]
          }, {
            id: 101, authName: '订单管理', children: [
              {
                id: 1003, authName: '订单列表', children: [
                  { id: 10013, authName: '添加订单' },
                  { id: 10014, authName: '订单更新' },
                  { id: 10015, authName: '获取订单详情' }
                ]
              }
            ]
          }, {
            id: 102, authName: '权限管理', children: [
              {
                id: 1004, authName: '角色列表', children: [
                  { id: 10016, authName: '添加角色' },
                  { id: 10017, authName: '删除角色' },
                  { id: 10018, authName: '角色授权' },
                  { id: 10019, authName: '取消角色授权' },
                  { id: 10020, authName: '获取角色列表' },
                  { id: 10021, authName: '获取角色详情' },
                  { id: 10022, authName: '更新角色信息' },
                  { id: 10023, authName: '更新角色权限' }
                ]
              }, {
                id: 1005, authName: '权限列表', children: [
                  { id: 10024, authName: '查看权限' }
                ]
              }
            ]
          }
        ]
      }]
    }
  },

  methods: {
    removeAuthById(role, id) {
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
</script>

<style lang="less" scoped>
.el-tag {
  margin: 7px;
}

.bdtop {
  border-top: 1px solid #eee;
}

.bdbottom {
  border-bottom: 1px solid #eee;
}

.vcenter {
  display: flex;
  align-items: center;
}
</style>