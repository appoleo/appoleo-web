<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 登录表单区 -->
      <el-form :model="loginForm" label-width="0px" class="login_form">
        <el-form-item>
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item class="btns">
            <el-button type="primary">登录</el-button>
            <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            // 登录表单数据对象
            loginForm: {
                username: '',
                password: ''
            }
        }
    },
};
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background: rgba(34, 34, 34, 0.5);
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(0, -50%);
}
.login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
.btns {
    display: flex;
    justify-content: flex-end;
}
</style>