<template>
  <div id="header">
    <el-container id="wrapper">
      <el-header id="indexHeader">
        <div id="headerTitle">江西软件大学-新型图书管理系统</div>
        <div id="headerFunction">
          <el-button type="primary"
            ><router-link to="/sign1"> 系统登录</router-link></el-button
          >
          <el-button type="primary"
            ><router-link to="/navigation">工作中心</router-link></el-button
          >
          <el-button type="primary"
            ><router-link to="/Student">学生信息查询</router-link></el-button
          >
          <el-button type="primary"
            ><router-link to="/Work">图书信息查询</router-link></el-button
          >
          <router-link to="/cnnode">
            <el-button>node论坛</el-button></router-link
          >
          <el-button type="primary"
            ><router-link to="/SVIP"> VIP用户</router-link></el-button
          >
        </div>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "head1",
  data() {
    return {
      message: "江西软件大学-新型图书管理系统",
    };
  },
};
</script>

<style scope>
#indexHeader {
  background-color: #244152;
}
#headerTitle {
  color: white;
  float: left;
  height: 100%;
  width: 400px;
  line-height: 60px;
  font-size: 24px;
  font-weight: bolder;
  display: inline-block;
}
#headerFunction {
  float: right;
  display: inline-block;
  height: 60px;
}
#headerFunction > .el-button {
  display: inline-block;
  margin-top: 10px;
  background-color: #0a9588;
  border-color: #0a9588;
}
</style>