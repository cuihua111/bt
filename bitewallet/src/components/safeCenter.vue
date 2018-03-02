<template>
  <div class="safeCenterBox">
    <Breadcrumb separator="—">
      <BreadcrumbItem to="">安全中心</BreadcrumbItem>
    </Breadcrumb>
    <div class="baseInfo">
      <p>基本信息</p>
      <p>账号: <span>{{userName}}</span></p>
      <p>
        登录密码: <span>{{passWord}}</span>
        <router-link to="updatePassword">修改密码</router-link>
      </p>
    </div>
    <div class="identityAuth">
      <p>身份认证</p>
      <p >
        实名认证: <span :class="{redText:'redText'}">{{identityAuth}}</span>
        <router-link to="realName">立即认证</router-link>
      </p>
      <p>
        谷歌验证器: <span :class="{redText:'redText'}">{{googleAuthenticator}}</span>
        <router-link to="googleAuthenticator">立即绑定</router-link>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        redText:true,
        identityAuth:'未实名认证',
        googleAuthenticator:'未认证',
        userName:'1111',
        passWord:'s******x'
      }
    }
  }
</script>
<style lang=scss type=text/scss>
  .safeCenterBox {
    margin-top: 5%;
    .ivu-breadcrumb {
      width: 60%;
      margin-top: 4%;
      margin-bottom:20px;
      margin-left:auto;
      margin-right:auto;
      text-align: left;
      span:nth-of-type(1) {
        .ivu-breadcrumb-item-link {
          color: white!important;
          font-size: 20px !important;
        }
      }
    }
    .baseInfo {
      width:60%;
      margin: 0 auto;
      border: 1px solid #fff;
      p {
        border-bottom: 1px solid #fff;
        text-align: left;
        padding-left:20px;
        a{
          float: right;
          margin-right:20px;
        }
        &:nth-of-type(1){
          font-size:16px;
          height: 40px;
          line-height:40px;
        }
        &:nth-of-type(2){
          height: 30px;
          line-height:30px;
        }
        &:nth-of-type(3){
          border: none;
          height: 30px;
          line-height:30px;
        }
      }
    }
    .identityAuth {
      width:60%;
      margin: 30px auto 0 auto;
      border: 1px solid #fff;
      p {
        border-bottom: 1px solid #fff;
        text-align: left;
        padding-left: 20px;
        a{
          float: right;
          margin-right:20px;
        }
        &:nth-of-type(1){
          font-size:16px;
          height: 40px;
          line-height:40px;
        }
        &:nth-of-type(2){
          height: 30px;
          line-height:30px;
        }
        &:nth-of-type(3){
          border: none;
          height: 30px;
          line-height:30px;
        }
      }
    }
  }
.redText {
  color: red;
}
</style>
