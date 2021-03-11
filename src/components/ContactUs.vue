<template>
  <div class="hdp-uf contact-us" id="ContactUs">
    <el-dialog
      title=""
      width="500px"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :before-close="handleClose"
    >
      <div class="hdp-uf hdp-uf-vc hdp-uf-dc">
        <div class="hdp-uf hdp-uf-vc hdp-uf-dc">
          <div class="contact-tit">联系我们</div>
          <div class="contact-summary">
            留下您的联系方式，稍后将由专员与您对接
          </div>
        </div>
        <el-form :model="contactUsForm" class="contact-us-form">
          <el-form-item>
            <el-input
              placeholder="请输入您的姓名"
              v-model="contactUsForm.userName"
              prefix-icon="el-icon-user"
              style="width: 100%"
            >
              <el-select
                v-model="contactUsForm.gender"
                slot="append"
                placeholder="请选择"
                style="width: 100px"
              >
                <el-option label="先生" value="male"></el-option>
                <el-option label="女士" value="female"></el-option>
              </el-select>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="contactUsForm.companyName"
              placeholder="请输入公司名称"
              prefix-icon="el-icon-office-building"
              autocomplete="off"
              style="width: 100%"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="contactUsForm.email"
              placeholder="请输入公司邮箱"
              prefix-icon="el-icon-message"
              autocomplete="off"
              style="width: 100%"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="contactUsForm.mobile"
              placeholder="请输入手机号码"
              prefix-icon="el-icon-mobile"
              autocomplete="off"
              style="width: 100%"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" style="width: 100%"
              >提交</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  props: [], // 调用组件传递过来的相关参数
  data() {
    return {
      dialogVisible: true,
      contactUsForm: {
        userName: "",
        gender: "male",
        companyName: "",
        email: "",
        mobile: ""
      }
    };
  },
  mounted() {
    this.init();
  },
  computed: {},
  methods: {
    init() {},
    onSubmit() {
      this.$emit("close", "");
    },
    handleClose() {
      this.$emit("close", "");
    }
  }
};
</script>

<style lang="scss">
.contact-us-form {
  width: 80%;
  margin-top: 20px;
  .el-input--small .el-input__icon {
    color: rgba(61, 110, 251, 1);
  }
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contact-us {
  .contact-tit {
    font-size: 20px;
    font-weight: 500;
    color: rgba(61, 110, 251, 1);
  }

  .contact-summary {
    font-size: 14px;
    margin-top: 10px;
  }

  .contact-us-form {
    width: 80%;
    margin-top: 20px;
    .el-input--small .el-input__icon {
      color: rgba(61, 110, 251, 1);
    }
  }
}

@media only screen and (max-width: 1044px) {
}
@media only screen and (max-width: 767px) {
}
</style>
