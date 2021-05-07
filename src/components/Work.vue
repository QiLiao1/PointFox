<template>
  <div id="book1">
    <el-container id="wrapper">
      <el-main>
        <el-select v-model="value" placeholder="图书">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-input
          v-model="input"
          placeholder="请输入图书信息，例如书名、摘要、作者等关键词"
          style="width: 600px"
          clearable
        >
        </el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-main>
      
     
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return (
      {
        input: "",
      },
      {
        options: [
          {
            value: "选项1",
            label: "期刊",
          },
          {
            value: "选项2",
            label: "音像电子",
          },
          {
            value: "选项3",
            label: "报纸",
          },
          {
            value: "选项4",
            label: "连环画",
          },
          {
            value: "选项5",
            label: "杂志",
          },
        ],
        value: "",
      }
    );
  }
  
    
     
};
</script>

<style>
</style>