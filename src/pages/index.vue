<template>
  <div class="hdp-uf portal">
    <div class="hdp-uf hdp-uf-dc portal-content">
      <CDPHeader @openContactUs="openContactUs" @returnTo="returnTo" />

      <div class="hdp-uf hdp-uf-vc hdp-uf-dc hdp-w-100 PSCContent">
        <!-- banner -->
        <Banners />

        <!-- product-value -->
        <ProductValue />

        <!-- section-core -->
        <SectionCore @openContactUs="openContactUs" />

        <!-- Solution -->
        <Solution @openContactUs="openContactUs" />

        <!-- Advantages -->
        <Advantages />

        <!-- contact us -->
        <Contact @openContactUs="openContactUs" />

        <!-- footer声明 -->
        <CDPFooter></CDPFooter>
      </div>

      <ContactUs v-if="showContactUs" @close="closeContactUs" />
    </div>
  </div>
</template>

<script>
import CDPHeader from "@/components/CDPHeader";
import Banners from "./components/Banners";
import ProductValue from "./components/ProductValue";
import SectionCore from "./components/SectionCore";
import Solution from "./components/Solution";
import Advantages from "./components/Advantages";
import Contact from "./components/Contact";
import CDPFooter from "@/components/CDPFooter";
import ContactUs from "@/components/ContactUs";
export default {
  name: "Index",
  components: {
    CDPHeader,
    Banners,
    SectionCore,
    Contact,
    Advantages,
    ProductValue,
    Solution,
    CDPFooter,
    ContactUs
  },
  // 选项--数据
  data() {
    return {
      showContactUs: false
    };
  },
  computed: {},
  mounted() {
    this.init();
  },
  methods: {
    init() {},
    returnTo(id) {
      document.querySelector(`#${id}`).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start"
      });
    },
    openContactUs() {
      if (!this.showContactUs) {
        this.showContactUs = true;
      }
    },
    closeContactUs() {
      this.showContactUs = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1,
h2 {
  font-weight: normal;
  line-height: 5rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

.portal {
  width: 100%;
  height: 100%;
  .portal-content {
    width: 100%;
  }
}

.PSCContent {
  background: #ffffff;
  // padding-top: 60px;
}

@media only screen and (max-width: 1044px) {
}

@media only screen and (max-width: 768px) {
  .banner-content {
    top: 12%;
  }
  .banner-content-text {
    width: 60%;
  }

  .banner-line {
    margin-bottom: 0.5rem;
  }
  .banner-summary {
    font-size: 12px;
    line-height: 1.5rem;
  }
  .banner-tit {
    font-size: 24px;
    line-height: 1.5rem;
  }
  .banner-btn {
    margin-top: 1rem;
  }
  .banner-btn-content {
    height: 2rem;
    font-size: 12px;
    padding: 0 1rem;
  }
  .ialm-product-item {
    width: 100%;
    margin-top: 3rem;
  }
  .ialm-product-content {
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;

    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
  }
}
</style>
