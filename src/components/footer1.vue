<template>
  <div id="footer1">
    <el-container id="wrapper">
      <el-footer id="indexFooter">
        <div id="footerContent">
          <div id="tip1">
            通信地址：江西省南昌市湾里区江西软件大学 邮编：330041
          </div>
          <div id="tip2">&copy; 版权属于江西软件大学 2020-2021</div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "footer1",
  data() {},
};
</script>
<style scoped>
#indexFooter {
 position: absolute;
 height: 50px;
 bottom: 0;

}
#footerContent {
  text-align: center;
}
</style>