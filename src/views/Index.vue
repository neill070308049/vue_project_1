<template>
  <div>
    <el-menu :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
            <template slot="title">投资促进局</template>
                <el-menu-item index="2-1">入园协议</el-menu-item>
                <el-menu-item index="2-2">入园审批</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">经济发展局</template>
                <el-menu-item index="3-1">固定资产投资项目备案</el-menu-item>
                <el-menu-item index="3-2">项目核准</el-menu-item>
                <el-submenu index="3-3">
                    <template slot="title">审批</template>
                        <el-menu-item index="3-3-1">项目建议书</el-menu-item>
                        <el-menu-item index="3-3-2">可行性研究报告</el-menu-item>
                        <el-menu-item index="3-3-3">初步设计</el-menu-item>
                </el-submenu>
        </el-submenu>
    </el-menu>
    123
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>