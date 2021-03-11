<template>
  <div class="hdp-uf hdp-uf-hc hdp-uf-vc hdp-w-100 contact-us" id="contact">
    <p>
      <img
        class="hdp-img-1"
        src="@/assets/image/contact-bg.png"
        alt="contact-bg"
      />
    </p>
    <div class="contact-content">
      <div class="hdp-uf hdp-uf-hc hdp-uf-vc">
        <div class="hdp-uf hdp-color-3 contact-content-text">
          <div class="hdp-uf hdp-uf-vc hdp-uf-dc">
            <div class="contact-tit">即刻体验德勤CDP平台</div>
            <div class="contact-actions">
              <el-button
                type="primary"
                style="width: 185px"
                @click="openContactUs"
                >联系我们</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  computed: {},
  methods: {
    init() {
      console.log("Contact 组件渲染完成");
    },
    openContactUs() {
      this.$emit("openContactUs", "");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contact-us {
  margin-bottom: -5px;
  .contact-content {
    top: auto;
    left: 0;
    position: absolute;
    width: 100%;

    .contact-tit {
      font-size: 24px;
      color: #ffffff;
      line-height: 2.5rem;
      font-weight: 600;
    }

    .contact-actions {
      margin-top: 10px;
    }
  }
}
</style>
