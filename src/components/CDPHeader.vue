<template>
  <div
    class="hdp-uf CDPHeader"
    id="CDPHeader"
    :style="{ background: opacityBgStyle.bgStyle, color: opacityBgStyle.color }"
  >
    <nav class="nav">
      <div class="hdp-uf hdp-uf-hc hdp-uf-vc">
        <!-- pc header展示 -->
        <div class="hdp-uf hdp-uf-vc hdp-uf-hsb nav-content nav-content-pc">
          <div class="hdp-uf hdp-uf-vc hdp-w-20">
            <img
              class="logo_deloitte"
              :src="deloitteLogo"
              alt="logo_deloitte"
            />
          </div>
          <div class="hdp-uf hdp-uf-hfe hdp-w-80">
            <ul class="hdp-uf hdp-uf-vc">
              <li class="hdp-uf menu-item-li" @click="returnTo('productValue')">
                <div class="nav-menu-item">产品价值</div>
              </li>
              <li class="hdp-uf menu-item-li" @click="returnTo('core')">
                <div class="nav-menu-item">产品功能</div>
              </li>
              <li class="hdp-uf menu-item-li" @click="returnTo('solution')">
                <div class="nav-menu-item">解决方案</div>
              </li>
              <li class="hdp-uf menu-item-li" @click="returnTo('advantages')">
                <div class="nav-menu-item">优势特色</div>
              </li>
              <li class="hdp-uf">
                <div class="hdp-uf nav-btn-content">
                  <div
                    class="hdp-uf hdp-uf-hc hdp-uf-vc actionBtn"
                    :style="{
                      color: opacityBgStyle.btnColor,
                      borderColor: opacityBgStyle.btnColor
                    }"
                    @click="openContactUs"
                  >
                    联系我们
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- app header展示 -->
        <div class="hdp-uf hdp-uf-vc hdp-uf-hsb nav-content nav-content-app">
          <div class="hdp-uf hdp-uf-vc">
            <img
              class="logo_deloitte"
              src="../assets/image/logo_deloitte_white.png"
              alt="logo_deloitte"
            />
          </div>
          <el-dropdown trigger="click" placement="bottom-start">
            <span class="el-dropdown-link">
              <div class="hdp-uf font-awesome-icon-content">
                <i class="fa fa-bars fa-fw" aria-hidden="true"></i>
              </div>
            </span>
            <el-dropdown-menu
              slot="dropdown"
              style="
                width: 10rem;
                background: rgba(0, 0, 0, 0.8);
                border: none;
                margin-top: 1.5rem;
              "
            >
              <el-dropdown-item style="color: #ffffff"
                ><div>首页</div></el-dropdown-item
              >
              <el-dropdown-item style="color: #ffffff"
                ><div>反馈意见</div></el-dropdown-item
              >
              <el-dropdown-item style="color: #ffffff"
                ><div>登录</div></el-dropdown-item
              >
              <el-dropdown-item style="color: #ffffff"
                ><div>注册</div></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "CDPHeader",
  data() {
    return {
      opacityBgStyle: {
        bgStyle: "rgba(255,255,255,0)",
        color: "#f5f5f7",
        btnColor: "#f5f5f7"
      }
    };
  },
  computed: {
    deloitteLogo() {
      return require(this.opacityBgStyle.color === "#f5f5f7"
        ? "@/assets/image/logo_deloitte_white.png"
        : "@/assets/image/logo_deloitte_black.png");
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    init() {
      window.addEventListener("scroll", this.handleScroll);
    },
    // 然后在方法中，添加这个handleScroll方法来获取滚动的位置
    handleScroll() {
      var scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 60) {
        let opacity = scrollTop / 400;
        opacity = opacity > 1 ? 1 : opacity; // 渐变色从0到1
        this.opacityBgStyle = {
          bgStyle: `rgba(255,255,255,${opacity})`,
          color: "#333333",
          btnColor: "rgba(21, 102, 251)"
        };
      } else {
        this.opacityBgStyle = {
          bgStyle: "rgba(255,255,255,0)",
          color: "#f5f5f7",
          btnColor: "#f5f5f7"
        };
      }
    },
    openContactUs() {
      this.$emit("openContactUs", "");
    },
    returnTo(id) {
      this.$emit("returnTo", id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#CDPHeader {
  position: fixed;
  z-index: 9999;
  width: 100%;
  min-width: 1024px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.23);
  // -webkit-backdrop-filter: saturate(180%) blur(20px);
  // backdrop-filter: saturate(180%) blur(20px);
  a {
    color: #f5f5f7;
    text-decoration: none;
  }
  .nav {
    top: 0;
    right: 0;
    left: 0;
    display: block;
    margin: 0;
    width: 100%;
    height: 60px;
    max-height: 60px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .nav-content {
      width: 80%;
      height: 60px;
      .logo_deloitte {
        height: 30px;
        width: auto;
      }
      .menu-item-li {
        .nav-menu-item {
          font-size: 14px;
          padding: 0 2rem;
        }
      }
      .menu-item-li:hover {
        cursor: pointer;
      }

      .nav-btn-content {
        padding-left: 2rem;
      }
      .actionBtn {
        width: auto;
        padding: 0.2rem 1rem;
        font-size: 14px;
        border: 1px solid #ffffff;
        border-radius: 0.2rem;
      }
      .actionBtn:hover {
        cursor: pointer;
      }
    }
    .nav-content-app {
      display: none;
      .font-awesome-icon-content {
        font-size: 24px;
        color: #f5f5f7;
      }
    }
  }
}

.el-dropdown-menu__item:hover {
  background-color: #000000;
}
.el-dropdown-menu .popper__arrow {
  display: none;
}

@media only screen and (max-width: 1044px) {
  #CDPHeader {
    min-width: 320px;
  }
  .el-dropdown-menu {
    display: none;
  }
}
@media only screen and (max-width: 767px) {
  #CDPHeader {
    .nav {
      .nav-content {
        .logo_deloitte {
          height: 20px;
          width: auto;
        }
      }
      .nav-content-pc {
        display: none;
      }
      .nav-content-app {
        display: flex;
      }
    }
  }
  .el-dropdown-menu {
    display: block;
    a {
      color: #f5f5f7;
      text-decoration: none;
    }
  }
}
</style>
