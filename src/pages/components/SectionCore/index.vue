<template>
  <div class="hdp-uf hdp-uf-hc hdp-w-100 section-core" id="core">
    <div class="hdp-uf hdp-uf-vc hdp-uf-dc hdp-w-70 section-container">
      <div class="section-tittle">三大功能</div>
      <div class="section-summary">
        “三核心”加“双引擎”，驱动快速高效的业务决策
      </div>
      <div class="hdp-uf hdp-uf-hc hdp-uf-hsb hdp-w-100 section-content">
        <div
          v-for="(item, index) in coreData"
          :key="`core_${index}`"
          class="hdp-uf hdp-uf-hsb hdp-uf-dc hdp-w-30 content-item"
          :class="index === 1 ? 'content-item-shadow' : ''"
        >
          <div class="hdp-uf hdp-uf-dc">
            <div class="item-tit">{{ item.title }}</div>
            <div class="hdp-uf hdp-w-80 item-text">
              {{ item.summary }}
            </div>
          </div>
          <div class="hdp-uf hdp-uf-vc hdp-uf-hsb">
            <div>
              <el-button
                >了解详情<i class="el-icon-arrow-right el-icon--right"></i
              ></el-button>
            </div>
            <div class="hdp-uf">
              <p>
                <img
                  class="item-image"
                  :src="item.icon"
                  alt="section-core-01"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionCore",
  data() {
    return {
      coreData: [
        {
          title: "标签与建模",
          summary: "灵活配置、高强度模型算法全方位精准打造用户标签体系",
          icon: require("@/assets/image/section-core-01.png")
        },
        {
          title: "用户与群组分析",
          summary:
            "利用多渠道数据全方位洞察客户，为业务提供事实和数据导向的决策基础",
          icon: require("@/assets/image/section-core-02.png")
        },
        {
          title: "个性化服务",
          summary:
            "强大且高度灵活的规则引擎帮助业务部门快速锁定目标人群，原个性化推荐服务，精准提升用户体验",
          icon: require("@/assets/image/section-core-03.png")
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  computed: {},
  methods: {
    init() {
      console.log("section-core 组件渲染完成");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section-core {
  background: #f1f5fc;

  .section-container {
    padding: 3rem 0;
    .section-tittle {
      font-size: 24px;
    }
    .section-summary {
      margin-top: 10px;
    }

    .section-content {
      margin: 3rem 0;

      .content-item {
        background: #ffffff;
        height: 260px;
        padding: 20px 28px;

        .item-image {
          width: 100px;
          height: auto;
        }

        .item-tit {
          font-size: 20px;
          color: #333333;
        }

        .item-text {
          color: #727272;
          margin-top: 8px;
        }
      }

      .content-item-shadow {
        box-shadow: 0 0 25px 10px rgba(203, 219, 243, 0.5);
      }
    }
  }
}
</style>
