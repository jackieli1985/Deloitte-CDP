<template>
  <div class="hdp-uf CDPFooter">
    <div class="hdp-uf hdp-uf-hc hdp-uf-vc hdp-w-100">
      <div class="content">
        © 2020-2021 德勤勤跃科技有限公司 All Rights Reserved. 渝公网安备
        31010402005170号 渝ICP备15038423号-1
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CDPFooter",
  props: [], // 调用组件传递过来的相关参数
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  computed: {},
  methods: {
    init() {},
    actionBack() {
      this.$emit("act");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.CDPFooter {
  background: #101a48;
  color: #adb1c3;
  width: 100%;
  height: 60px;
  .content {
    font-size: 12px;
  }
}
</style>
