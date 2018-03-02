<template>
  <div class="googleAuthenticatorBox">
    <Breadcrumb separator="—">
      <BreadcrumbItem to="safeCenter">安全中心</BreadcrumbItem>
      <BreadcrumbItem to="">谷歌验证器</BreadcrumbItem>
    </Breadcrumb>
    <Card dis-hover>
      <p slot="title">绑定谷歌验证器</p>
      <p>谷歌验证器是一款动态口令工具，工作原理类似短信动态验证。绑定后每30s生成一个动态验证码，验证码可用于登录、提现、修改安全设置等操作的安全验证。</p>
      <br/>
      <p>1.下载谷歌验证器APP</p>
      <p>iOS用户登录App Store搜索“Authenticator”下载</p>
      <p>安卓用户登录应用商店或使用手机浏览器搜索“谷歌验证器”下载。</p>
      <div>
        <br/>
        <Button style="background-color: #323a69;border: none;outline: none" type="primary" shape="circle"
                icon="social-apple">App Store
        </Button>
        <Button style="background-color: #323a69;border: none;outline: none" type="primary" shape="circle"
                icon="android-send">Google Play
        </Button>
        <br/>
      </div>
      <br/>
      <p>2.在谷歌验证器中添加密钥并备份</p>
      <p>打开谷歌验证器，扫描下方二维码或手动输入下述密钥添加验证令牌</p>
      <p style="color: #2f9bd9;">密钥用于手机更换或遗失时找回谷歌验证器，绑定前请务必将下述密钥备份保存。</p>
      <div style="display: inline-block;vertical-align: top;">
        <img style="width: 100px;height: 100px;" src="../assets/images/b.jpg"
             alt="">
      </div>
      <div style="display: inline-block">
        <p>
          <span>密钥</span>
          <a style="color: #2f9bd9;text-decoration: underline;float: right;">复制秘钥</a>
        </p>
        <p>
          <span>
            RR7M7TYJIU6WZACN
          </span>
        </p>
      </div>
      <p style="margin-top: 10px;">3.输入谷歌验证器中6位验证码 </p>
      <p>谷歌验证码</p>
      <p><Input v-model="value" placeholder="谷歌验证码" style="width: 300px"></Input></p>
    </Card>
    <Button type="primary" class="updateBtn">绑定</Button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
          value:'sss',
        formValidate: {
          name: '',
          mail: '',
        },
        ruleValidate: {
          passwordOld: [
            {required: true, message: '原登录密码不能为空', trigger: 'blur'}
          ],
          passwordNew: [
            {required: true, message: '新登录密码不能为空', trigger: 'blur'}
          ],
          passwordConform: [
            {required: true, message: '确认登录密码不能为空', trigger: 'blur'},
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!')
          } else {
            this.$Message.error('Fail!')
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields()
      }
    }
  }
</script>
<style type=text/scss lang=scss>
  .googleAuthenticatorBox {
    margin-top: 5%;
    .ivu-breadcrumb {
      width: 60%;
      margin-top: 4%;
      margin-bottom:20px;
      span:nth-of-type(1) {
        .ivu-breadcrumb-item-link {
          color: white!important;
          font-size: 20px !important;
        }
      }
      span:nth-of-type(2) {
        .ivu-breadcrumb-item-link {
          color: white;
        }
      }
    }
    .ivu-card {
      text-align: left;
      width: 60%;
      margin: 2% auto;
      .ivu-card-head {
        p {
        }
      }
      .ivu-card-body {
        p {
          margin-bottom: 5px;
          .ivu-input-wrapper {
            input {
              width: 330px;
              height: 36px;
              background-image: url(../assets/images/loginandregister/inputBg.png);
              background-size: contain;
              border: none;
              outline: none;
              &:focus {
                box-shadow: none;
              }
            }
          }
        }
      }
    }
    .updateBtn {
      margin-top:30px;
      width: 350px;
      height: 38px;
      background-image: url(../assets/images/loginandregister/btnBg.png);
      -webkit-background-size: cover;
      background-size: cover;
      background-color: transparent;
      border: none;
      outline: none;
      span {
        font-size: 14px !important;
      }
    }
  }
  @media screen and (max-width: 375px) {
    .ivu-card {
      text-align: left;
      width: 100% !important;
      margin: 2% auto;
      .ivu-card-head {
        p {
        }
      }
      .ivu-card-body {
        p {
          margin-bottom: 5px;
          .ivu-input-wrapper {
            input {
              width: 330px;
              height: 36px;
              background-image: url(../assets/images/loginandregister/inputBg.png);
              background-size: contain;
              border: none;
              outline: none;
              &:focus {
                box-shadow: none;
              }
            }
          }
        }
      }
    }
  }
</style>
