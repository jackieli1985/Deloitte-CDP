<template>
  <div class="hdp-uf hdp-uf-hc hdp-uf-vc hdp-w-100 contact-us" id="contact">
    <p class="contact-bg">
      <img
        class="hdp-img-1"
        v-lazy="lazyImages.contactBgUrl"
        alt="contact-bg"
      />
    </p>
    <div class="contact-content">
      <div class="hdp-uf hdp-uf-hc hdp-uf-vc">
        <div class="hdp-uf hdp-color-3 contact-content-text">
          <div class="hdp-uf hdp-uf-vc hdp-uf-dc contact-tit-actions">
            <div class="contact-tit wow animate__animated animate__fadeInUp">
              即刻体验德勤CDP平台
            </div>
            <div
              class="contact-actions wow animate__animated animate__fadeInUp"
            >
              <el-button
                type="primary"
                style="width: 185px"
                :size="screenWidth > 768 ? 'small' : 'mini'"
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
    return {
      screenWidth: document.body.clientWidth,
      lazyImages: {
        contactBgUrl: require("@/assets/image/contact-bg.png")
      }
    };
  },
  mounted() {
    this.init();
  },
  computed: {},
  methods: {
    init() {
      console.log("Contact 组件渲染完成");
      const that = this;
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth;
          that.screenWidth = window.screenWidth;
        })();
      };
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

@media only screen and (max-width: 1080px) {
  .contact-us {
    height: 150px;
    background: rgba(15, 22, 77, 1);
  }
  .contact-bg {
    display: none;
  }
}

@media only screen and (max-width: 768px) {
  .contact-us .contact-content .contact-tit {
    font-size: 16px;
  }
  .contact-us .contact-content .contact-actions {
    margin-top: 0;
    margin-left: 10px;
  }
}
</style>
