<template>
  <div class="hdp-uf hdp-uf-hc hdp-uf-vc banner">
    <div>
      <img class="hdp-img-1" v-lazy="lazyImages.bannerUrl" alt="banner" />
    </div>
    <div class="banner-content">
      <div class="hdp-uf hdp-uf-hc hdp-uf-vc">
        <div class="hdp-uf hdp-color-3 banner-content-text">
          <div
            class="hdp-uf hdp-uf-vc hdp-uf-dc animate__animated animate__fadeInDown"
          >
            <div class="banner-tit">Deloitte CDP</div>
            <div class="banner-summary">
              以事实和数据洞察驱动快速高效的业务决策
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banners",
  data() {
    return {
      lazyImages: {
        bannerUrl: require("@/assets/image/banner.png")
      }
    };
  },
  mounted() {
    this.init();
  },
  computed: {},
  methods: {
    init() {
      new this.$wow.WOW().init();
      console.log("Banners 组件渲染完成");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .banner-content {
    top: auto;
    left: 0;
    position: absolute;
    width: 100%;
    color: #fff;

    .banner-tit {
      font-size: 60px;
      line-height: 3rem;
      font-weight: 600;
      // letter-spacing: 0.35rem;
    }

    .banner-summary {
      font-size: 20px;
      line-height: 3rem;
      letter-spacing: 0.35rem;
      margin-top: 15px;
    }
  }
}

@media only screen and (max-width: 1080px) {
  .banner {
    height: auto;
  }
}

@media only screen and (max-width: 768px) {
  .banner {
    .banner-content {
      .banner-tit {
        font-size: 30px;
      }
      .banner-summary {
        font-size: 16px;
        letter-spacing: 0.1rem;
      }
    }
  }
}
</style>
