<template>
  <div class="hdp-uf hdp-uf-hc hdp-w-100 section-advantages" id="advantages">
    <div class="hdp-uf hdp-uf-vc hdp-uf-dc hdp-w-70 section-container">
      <div class="section-tittle">为什么选择德勤CDP</div>
      <div class="hdp-uf hdp-uf-hc hdp-uf-hsb hdp-w-100 section-content">
        <!-- advantages left list -->
        <div class="hdp-uf hdp-uf-dc hdp-w-30 content-list">
          <div
            v-for="(item, index) in advantagesData.leftData"
            :key="`advantages_${index}`"
            class="hdp-uf hdp-uf-dc hdp-w-100 content-item"
          >
            <div class="hdp-uf">
              <img
                class="item-image"
                :src="item.icon"
                alt="advantages-icon-01"
              />
            </div>
            <div class="hdp-uf hdp-uf-dc">
              <div class="item-tit">{{ item.title }}</div>
              <div class="hdp-uf item-text">
                {{ item.summary }}
              </div>
            </div>
          </div>
        </div>
        <!-- advantages image -->
        <div class="hdp-uf hdp-uf-vc hdp-uf-hc hdp-w-40">
          <div class="hdp-uf hdp-uf-hc">
            <img
              class="advantages-image"
              src="@/assets/image/advantages.png"
              alt="advantages"
            />
          </div>
        </div>
        <!-- advantages right list -->
        <div class="hdp-uf hdp-uf-dc hdp-w-30 content-list">
          <div
            v-for="(item, index) in advantagesData.rightData"
            :key="`advantages_${index}`"
            class="hdp-uf hdp-uf-dc hdp-w-100 content-item"
          >
            <div class="hdp-uf">
              <img
                class="item-image"
                :src="item.icon"
                alt="advantages-icon-01"
              />
            </div>
            <div class="hdp-uf hdp-uf-dc">
              <div class="item-tit">{{ item.title }}</div>
              <div class="hdp-uf item-text">
                {{ item.summary }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Advantages",
  data() {
    return {
      advantagesData: {
        leftData: [
          {
            title: "标签与建模",
            summary: "灵活配置、高强度模型算法全方位精准打造用户标签体系",
            icon: require("@/assets/image/advantages-icon-01.png")
          },
          {
            title: "丰富的行业咨询与落地实施经验",
            summary:
              "基于德勤丰富的咨询和实施经验，为不同行业客户提供最佳解决方案",
            icon: require("@/assets/image/advantages-icon-02.png")
          },
          {
            title: "强大的CDP产品功能",
            summary:
              "数据建模、客户洞察、个性化接口与服务等核心产品功能帮助提升业务价值应用",
            icon: require("@/assets/image/advantages-icon-03.png")
          }
        ],
        rightData: [
          {
            title: "全方位、全链路经验",
            summary: "战略、组织管理、实施、运营等全链路服务，整合提升业务价值",
            icon: require("@/assets/image/advantages-icon-04.png")
          },
          {
            title: "高质量、可定制的服务跟踪和效果体验",
            summary:
              "灵活功能配置组合，帮助企业构建完整的契合自身需求的客户数据管理能力",
            icon: require("@/assets/image/advantages-icon-05.png")
          },
          {
            title: "与时俱进的模式，增创品牌价值",
            summary:
              "以数据为驱动，以创新为支撑，以客户为中心，致力运用最新技术提供卓越服务",
            icon: require("@/assets/image/advantages-icon-06.png")
          }
        ]
      }
    };
  },
  mounted() {
    this.init();
  },
  computed: {},
  methods: {
    init() {
      console.log("Advantages 组件渲染完成");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section-advantages {
  background: #ffffff;

  .section-container {
    padding: 3rem 0;
    .section-tittle {
      font-size: 24px;
    }

    .section-content {
      margin: 3rem 0;

      .advantages-image {
        width: 80%;
        height: auto;
      }

      .content-item {
        background: #ffffff;
        height: 150px;
        padding: 20px 28px;

        .item-image {
          width: 42px;
          height: auto;
        }

        .item-tit {
          font-size: 16px;
          line-height: 30px;
          font-weight: 500;
        }

        .item-text {
          color: #727272;
        }
      }
    }
  }
}
</style>
