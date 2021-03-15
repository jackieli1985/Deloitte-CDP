<template>
  <div class="hdp-uf hdp-uf-hc hdp-w-100 solution" id="solution">
    <div class="hdp-uf hdp-uf-vc hdp-uf-dc hdp-w-100 section-container">
      <div class="section-tittle wow animate__animated animate__fadeInUp">
        定制全链路行业解决方案
      </div>
      <div class="section-summary wow animate__animated animate__fadeInUp">
        赋能不同行业客户，实现针对性需求解决方案
      </div>
      <div
        class="hdp-uf hdp-uf-vc hdp-uf-dc tabs-content wow animate__animated animate__fadeInUp"
      >
        <div class="hdp-uf tabs-list">
          <div
            v-for="(item, index) in solutionData"
            :key="`value_${index}`"
            class="hdp-uf hdp-uf-hc tab-item"
            @click="changeTab(item.tabName, index)"
          >
            <div
              class="hdp-uf hdp-uf-hc tab-icon-text"
              :class="activeTab === item.tabName ? 'tab-icon-text-on' : ''"
            >
              <div
                class="hdp-uf hdp-uf-vc tab-title"
                :class="activeTab === item.tabName ? 'tab-title-on' : ''"
              >
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
        <div class="hdp-uf hdp-uf tab-item-content">
          <div class="hdp-uf hdp-uf-hsb hdp-w-100">
            <el-carousel
              :interval="6000"
              :autoplay="isAutoplay"
              arrow="always"
              :type="screenWidth > 1044 ? 'card' : ''"
              :height="screenWidth > 1044 ? '320px' : '600px'"
              ref="solutionCards"
              @change="handleCardChange"
            >
              <el-carousel-item
                v-for="(item, index) in solutionData"
                :key="`solution_${index}`"
              >
                <div class="hdp-uf card-content">
                  <div
                    class="hdp-uf card-left"
                    :class="screenWidth < 1044 ? 'hdp-uf-hc' : ''"
                  >
                    <img class="item-image" v-lazy="item.contentImage" alt="" />
                  </div>
                  <div class="hdp-uf hdp-uf-dc card-right">
                    <div class="hdp-uf hdp-uf-dc card-summary">
                      <div class="item-right-title">{{ item.title }}</div>
                      <div class="item-right-list">
                        <ul>
                          <li
                            v-for="(cardItem, cardIndex) in item.content"
                            :key="`solution_cardItem_${cardIndex}`"
                            class="list-item"
                          >
                            {{ cardItem.summary }}
                          </li>
                        </ul>
                      </div>
                      <div class="hdp-uf hdp-uf-hfe card-actions">
                        <el-button type="primary" @click="openContactUs"
                          >了解详情<i
                            class="el-icon-arrow-right el-icon--right"
                          ></i
                        ></el-button>
                      </div>
                    </div>
                    <div class="hdp-uf hdp-uf-dc card-footer">
                      <div class="card-footer-title">能力推荐</div>
                      <div class="card-footer-list">
                        <span
                          v-for="(recommendedTag,
                          tagIndex) in item.recommendedTags"
                          :key="`solution_cardItem_recommendedTag_${tagIndex}`"
                        >
                          {{ recommendedTag }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Solution",
  data() {
    return {
      activeTab: "",
      currentTabData: {},
      isAutoplay: true,
      screenWidth: document.body.clientWidth,
      solutionData: [
        {
          tabName: "automobile",
          title: "汽车行业",
          content: [
            {
              summary: "汽车厂商将车辆也作为服务主体，针对车辆提供增值服务"
            },
            {
              summary: "经销商作为重要业务方，对权限控制提出更复杂的要求"
            }
          ],
          recommendedTags: [
            "定制经销商标签",
            "车辆标签",
            "人车映射关系等模型标签"
          ],
          contentImage: require("@/assets/image/automobile.png")
        },
        {
          tabName: "financial",
          title: "金融行业",
          content: [
            {
              summary: "金融行业对于数据时效性和预测能力要求较高"
            },
            {
              summary: "客户数据统一管理和客户关系维护至关重要"
            }
          ],
          recommendedTags: [
            "实时标签",
            "高强度算法标签与机器学习建模应对复杂的预测逻辑需求"
          ],
          contentImage: require("@/assets/image/financial.png")
        },
        {
          tabName: "commodity",
          title: "快消/日用品行业",
          content: [
            {
              summary: "业态多元，产品线丰富，同时客户与品牌互动渠道复杂"
            },
            {
              summary: "行业竞争激烈，差异化营销是重要的业务手段"
            }
          ],
          recommendedTags: [
            "定制门店标签",
            "产品标签",
            "行为关系标签等实现个性化服务需求"
          ],
          contentImage: require("@/assets/image/commodity.png")
        },
        {
          tabName: "luxury",
          title: "奢侈品行业",
          content: [
            {
              summary: "行业竞争呈现上升趋势，品牌与消费者间缺乏有效互动"
            },
            {
              summary: "缺乏统一完整的客户数据视角，难以实现差异化营销"
            }
          ],
          recommendedTags: [
            "利用客户行为轨迹",
            "个人360度标签",
            "群组分析与产品标签实现客户价值最大化"
          ],
          contentImage: require("@/assets/image/luxury.png")
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
      console.log("Solution 组件渲染完成");
      const that = this;
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth;
          that.screenWidth = window.screenWidth;
        })();
      };
      // 初始化数据和选中项
      this.changeTab("automobile", 0);
    },
    changeTab(value, index) {
      if (value !== this.activeTab) {
        if (this.activeTab) {
          this.isAutoplay = false;
        }
        this.activeTab = value;
        const filterData = this.solutionData.filter(
          item => item.tabName === this.activeTab
        );
        this.currentTabData = filterData[0];
        this.$refs.solutionCards.setActiveItem(index);
      }
    },
    handleCardChange(value) {
      if (this.solutionData[value]) {
        this.currentTabData = this.solutionData[value];
        this.activeTab = this.currentTabData.tabName;
      }
    },
    openContactUs() {
      this.$emit("openContactUs", "");
    }
  }
};
</script>

<style lang="scss">
.solution
  .tab-item-content
  .el-carousel
  .el-carousel__container
  .el-carousel__arrow {
  background-color: #ffffff;
  color: #4d87fc;
}
.solution
  .tab-item-content
  .el-carousel
  .el-carousel__container
  .el-carousel__arrow.el-carousel__arrow--left {
  left: 20%;
  .el-icon-arrow-left {
    font-size: 14px;
    font-weight: 500;
  }
  .el-icon-arrow-left::before {
    content: "\2190";
  }
}
.solution
  .tab-item-content
  .el-carousel
  .el-carousel__container
  .el-carousel__arrow.el-carousel__arrow--right {
  right: 20%;
  .el-icon-arrow-right {
    font-size: 14px;
    font-weight: 500;
  }
  .el-icon-arrow-right::before {
    content: "\2192";
  }
}
.solution
  .tab-item-content
  .el-carousel
  .el-carousel__container
  .el-carousel__item
  .el-carousel__mask {
  opacity: 0.4;
}
@media only screen and (max-width: 1044px) {
}

@media only screen and (max-width: 768px) {
  .solution
    .tab-item-content
    .el-carousel
    .el-carousel__container
    .el-carousel__arrow.el-carousel__arrow--left {
    left: 5%;
  }
  .solution
    .tab-item-content
    .el-carousel
    .el-carousel__container
    .el-carousel__arrow.el-carousel__arrow--right {
    right: 5%;
  }
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.solution {
  background: #4d87fc;

  .section-container {
    padding-top: 3rem;
    .section-tittle {
      font-size: 24px;
      color: #ffffff;
    }
    .section-summary {
      color: #ffffff;
      margin-top: 10px;
    }
    .tabs-content {
      width: 100%;
      margin-top: 50px;
      .tabs-list {
        width: 70%;
        border-bottom: 1px solid rgba(122, 166, 255, 0.81);
        .tab-item {
          width: 25%;
          height: 50px;
          cursor: pointer;
          .tab-icon-text {
            padding: 0 15px;
            .tab-title {
              font-size: 16px;
              color: rgba(255, 255, 255, 0.56);
              padding: 10px 0;
            }
            .tab-title-on {
              color: #ffffff;
            }
          }
          .tab-icon-text-on {
            border-bottom: 1px solid #ffffff;
          }
        }
      }
      .tab-item-content {
        width: 100%;
        min-height: 400px;
        padding: 30px 0;
        .el-carousel {
          width: 100%;
        }

        .el-carousel__item:nth-child(2n) {
          background-color: #162155;
        }

        .el-carousel__item:nth-child(2n + 1) {
          background-color: #162155;
        }

        .card-content {
          height: 100%;
          .card-left {
            width: 50%;
            height: 100%;
            .item-image {
              width: auto;
              height: 100%;
              overflow-x: hidden;
            }
          }
          .card-right {
            width: 50%;
            padding: 20px 30px;
            color: #ffffff;
            .card-summary {
              border-bottom: 1px solid rgba(255, 255, 255, 0.17);
              padding-bottom: 10px;
              .item-right-title {
                font-size: 16px;
                font-weight: 500;
              }
              .item-right-list {
                margin-top: 8px;
                .list-item {
                  position: relative;
                  color: #afb7dc;
                  line-height: 24px;
                  padding-left: 10px;
                  &::before {
                    content: " ";
                    position: absolute;
                    left: 0;
                    top: 10px;
                    width: 3px;
                    height: 3px;
                    background-color: #ffffff;
                    border-radius: 1.5px;
                  }
                }
              }
              .card-actions {
                margin-top: 20px;
              }
            }
            .card-footer {
              padding-top: 10px;
              .card-footer-title {
                font-size: 12px;
                color: #6571ac;
                line-height: 25px;
              }
              .card-footer-list {
                font-size: 12px;
                color: #afb7dc;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1044px) {
  .solution {
    .section-container {
      width: 100%;
      padding: 2rem 0;
    }
  }

  .solution .section-container .section-tittle {
    font-size: 18px;
  }

  .solution .section-container .tabs-content {
    margin-top: 1rem;
  }

  .solution .section-container .tabs-content .tabs-list {
    width: 100%;
  }

  .solution
    .section-container
    .tabs-content
    .tabs-list
    .tab-item
    .tab-icon-text
    .tab-title {
    font-size: 12px;
  }

  .solution .section-container .tabs-content .tab-item-content .card-content {
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
  }
  .solution
    .section-container
    .tabs-content
    .tab-item-content
    .card-content
    .card-left {
    width: 100%;
    height: auto;
  }
  .solution
    .section-container
    .tabs-content
    .tab-item-content
    .card-content
    .card-right {
    width: 100%;
  }
}
</style>
