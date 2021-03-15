<template>
  <div class="hdp-uf contact-us" id="ContactUs">
    <el-dialog
      title=""
      :width="screenWidth > 768 ? '500px' : '350px'"
      v-loading="isLoading"
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
        <el-form
          :model="contactUsForm"
          ref="contactUsForm"
          class="contact-us-form"
        >
          <el-form-item
            prop="name"
            :rules="{
              required: true,
              message: '请输入您的姓名',
              trigger: 'blur'
            }"
          >
            <el-input
              placeholder="请输入您的姓名"
              v-model="contactUsForm.name"
              prefix-icon="el-icon-user"
              maxlength="50"
              style="width: 100%"
            >
              <el-select
                v-model="contactUsForm.gender"
                slot="append"
                placeholder="请选择"
                style="width: 100px"
              >
                <el-option label="先生" :value="1"></el-option>
                <el-option label="女士" :value="2"></el-option>
              </el-select>
            </el-input>
          </el-form-item>
          <el-form-item
            prop="companyName"
            :rules="{
              required: true,
              message: '请输入您的公司名称',
              trigger: 'blur'
            }"
          >
            <el-input
              v-model="contactUsForm.companyName"
              placeholder="请输入公司名称"
              prefix-icon="el-icon-office-building"
              autocomplete="off"
              maxlength="100"
              style="width: 100%"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="companyEmail"
            :rules="[
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              {
                type: 'email',
                message: '请输入正确的邮箱地址',
                trigger: ['blur']
              }
            ]"
          >
            <el-input
              v-model="contactUsForm.companyEmail"
              placeholder="请输入公司邮箱"
              maxlength="50"
              prefix-icon="el-icon-message"
              autocomplete="off"
              style="width: 100%"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="mobile"
            :rules="[
              {
                required: true,
                message: '请输入手机号码',
                trigger: 'blur'
              },
              { type: 'number', message: '手机号码必须为11位数字' }
            ]"
          >
            <el-input
              v-model.number="contactUsForm.mobile"
              maxlength="11"
              placeholder="请输入手机号码"
              prefix-icon="el-icon-mobile"
              autocomplete="off"
              style="width: 100%"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit('contactUsForm')"
              style="width: 100%"
              >提交</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import contactApi from "@/api/contact.js";
export default {
  name: "ContactUs",
  props: [], // 调用组件传递过来的相关参数
  data() {
    return {
      screenWidth: document.body.clientWidth,
      dialogVisible: true,
      isLoading: false,
      contactUsForm: {
        name: "",
        gender: 1, // 1=男，2=女
        companyName: "",
        companyEmail: "",
        mobile: ""
      }
    };
  },
  mounted() {
    this.init();
  },
  computed: {},
  methods: {
    init() {
      const that = this;
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth;
          that.screenWidth = window.screenWidth;
        })();
      };
    },
    onSubmit(formName) {
      console.log(this.contactUsForm);
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.doSubmitContactInfo();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 提交联系信息
    doSubmitContactInfo() {
      const postParams = { ...this.contactUsForm };
      this.isLoading = true;
      contactApi
        .doSaveConcatInformation(postParams)
        .then(responseJSON => {
          if (responseJSON.status === "0" && responseJSON.success) {
            // 跳转已预约列表
            this.$emit("close", "");
            this.showSuccess();
          } else {
            this.$message.error("提交失败，请稍后再试。");
          }
          this.isLoading = false;
        })
        .catch(exception => {
          console.log(`Failure: ${exception}`);
          this.$message.error("提交失败，请稍后再试。");
          this.isLoading = false;
        });
    },
    showSuccess() {
      this.$alert("您的信息已提交成功，稍后将有专员与您对接。", "提示", {
        confirmButtonText: "确定",
        type: "success",
        center: true
      });
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
@media only screen and (max-width: 768px) {
}
</style>
