<template>
  <div class="hdp-uf hdp-uf-hc hdp-w-100 product-value" id="productValue">
    <div class="hdp-uf hdp-w-70 section-container">
      <div class="hdp-uf hdp-uf-vc hdp-uf-dc tabs-content">
        <div class="hdp-uf tabs-list">
          <div
            v-for="(item, index) in valuesData"
            :key="`value_${index}`"
            class="hdp-uf hdp-uf-hc tab-item"
            @click="changeTab(item.tabName)"
          >
            <div
              class="hdp-uf hdp-uf-vc hdp-uf-dc tab-icon-text"
              :class="activeTab === item.tabName ? 'tab-icon-text-on' : ''"
            >
              <div class="hdp-uf">
                <img
                  class="item-image"
                  :src="activeTab === item.tabName ? item.iconOn : item.icon"
                  alt=""
                />
              </div>
              <div
                class="tab-title"
                :class="activeTab === item.tabName ? 'tab-title-on' : ''"
              >
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="currentTabData && Object.keys(currentTabData).length > 0"
          class="hdp-uf hdp-uf tab-item-content"
        >
          <div class="hdp-uf hdp-uf-hsb hdp-w-100">
            <div class="hdp-uf hdp-uf-dc content-left">
              <p class="content-tit">数据源管理</p>
              <div class="hdp-uf hdp-uf-dc content-list">
                <div
                  v-for="(item, index) in currentTabData.content"
                  :key="`value_content_${index}`"
                  class="hdp-uf hdp-uf-dc content-item"
                >
                  <div class="hdp-uf hdp-uf-vc item-tit">
                    <p>
                      <img
                        class="item-icon-right"
                        src="@/assets/image/triangle-right.png"
                        alt="triangle-right"
                      />
                    </p>
                    <div class="hdp-uf item-tit-text">{{ item.title }}</div>
                  </div>
                  <div class="hdp-uf item-summary">
                    {{ item.summary }}
                  </div>
                </div>
              </div>
            </div>
            <div class="hdp-uf content-right">
              <p>
                <img
                  class="content-image"
                  :src="currentTabData.contentImage"
                  alt="data-source-content"
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
  name: "ProductValue",
  data() {
    return {
      activeTab: "",
      currentTabData: {},
      valuesData: [
        {
          tabName: "dataSource",
          title: "数据源管理",
          icon: require("@/assets/image/data-source.png"),
          iconOn: require("@/assets/image/data-source-on.png"),
          content: [
            {
              title: "唯一真实客户数据源",
              summary: "整合多渠道客户多ID间映射关系"
            },
            {
              title: "灵活客户数据接入",
              summary: "连接多渠道客户数据来源"
            },
            {
              title: "主客体数据映射",
              summary:
                "针对非客户主体与其他客体数据管理，如产品、门店、销售人员"
            }
          ],
          contentImage: require("@/assets/image/data-source-content.png")
        },
        {
          tabName: "tag",
          title: "客户标签管理",
          icon: require("@/assets/image/tag.png"),
          iconOn: require("@/assets/image/tag-on.png"),
          content: [
            {
              title: "客户主数据+标签+行为一体管理",
              summary:
                "根据优先级从不同数据源中提取用户属性与行为数据，自定义配置标签规则"
            },
            {
              title: "丰富的行业标签",
              summary:
                "支持客户标签、产品标签、门店标签标签互联，甚至针对行业定制标签类型，如为汽车行业定制车辆标签、经销商标签"
            },
            {
              title: "灵活的建模形式",
              summary:
                "内置多种模型算法， 如RFM用户价值细分模型、AIPL品牌认知模型、用户兴趣度模型、自定义公式模型等"
            }
          ],
          contentImage: require("@/assets/image/tag-content.png")
        },
        {
          tabName: "annlysis",
          title: "分析与决策",
          icon: require("@/assets/image/analysis.png"),
          iconOn: require("@/assets/image/analysis-on.png"),
          content: [
            {
              title: "360个人画像",
              summary:
                "可配置的展示客户的属性画像，标签画像和行为画像，全方位了解客户"
            },
            {
              title: "行为以及标签分析",
              summary:
                "对人群进行单维度特征分析，透视分析和行为指标分布分析，了解人群特征"
            },
            {
              title: "深入挖掘业务指标",
              summary: "利用自定义指标和计算方式配置行为指标，深挖用户行为模式"
            }
          ],
          contentImage: require("@/assets/image/analysis-content.png")
        },
        {
          tabName: "personalizedService",
          title: "个性化服务",
          icon: require("@/assets/image/personalized-service.png"),
          iconOn: require("@/assets/image/personalized-service-on.png"),
          content: [
            {
              title: "智能营销与推荐",
              summary: "基于标签体系配置推送规则个性化产品推荐"
            },
            {
              title: "下游数据对接",
              summary:
                "平台具备灵活可配置的数据开放接口，对接多种渠道实现数据交换"
            }
          ],
          contentImage: require("@/assets/image/personalized-content.png")
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
      console.log("ProductValue 组件渲染完成");
      // 初始化数据和选中项
      this.changeTab("dataSource");
    },
    changeTab(value) {
      if (value !== this.activeTab) {
        this.activeTab = value;
        const filterData = this.valuesData.filter(
          item => item.tabName === this.activeTab
        );
        this.currentTabData = filterData[0];
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product-value {
  background: #ffffff;
  margin-top: -5px;

  .section-container {
    padding-top: 2rem;
    .tabs-content {
      width: 100%;
      .tabs-list {
        width: 100%;
        border-bottom: 1px solid #e7e7e7;
        .tab-item {
          width: 25%;
          height: 75px;
          cursor: pointer;
          .tab-icon-text {
            padding: 0 15px;
            .item-image {
              width: 30px;
              height: auto;
            }
            .tab-title {
              font-size: 16px;
              color: #748099;
              padding: 10px 0;
            }
            .tab-title-on {
              color: #4d87fc;
            }
          }
          .tab-icon-text-on {
            border-bottom: 2px solid #4d87fc;
          }
        }
      }
      .tab-item-content {
        width: 90%;
        min-height: 430px;
        padding: 30px 10px;
        .content-left {
          width: 40%;
          .content-tit {
            font-size: 20px;
            font-weight: 500;
          }
          .content-list {
            .content-item {
              margin-top: 20px;
              .item-tit {
                font-size: 16px;
                .item-icon-right {
                  width: 6px;
                  height: 11px;
                }
                .item-tit-text {
                  padding-left: 5px;
                }
              }
              .item-summary {
                color: #727272;
                padding-left: 11px;
              }
            }
          }
        }
        .content-right {
          width: 50%;
          .content-image {
            width: 90%;
            height: auto;
          }
        }
      }
    }
  }
}
</style>
