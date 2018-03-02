<template>
  <div class="realNameBox">
    <Breadcrumb separator="—">
      <BreadcrumbItem to="safeCenter">安全中心</BreadcrumbItem>
      <BreadcrumbItem to="">实名认证</BreadcrumbItem>
    </Breadcrumb>
    <div class="formBox">
      <p class="title">实名认证</p>
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
        <div class="bb">
        <FormItem label="显示昵称" prop="passwordOld">
          <Input v-model="formValidate.name" placeholder="请输入显示昵称"></Input>
        </FormItem>
        </div>
        <div class="bb">

        <FormItem label="真实姓名" prop="passwordNew">
          <Input v-model="formValidate.mail" placeholder="请输入真实姓名"></Input>
        </FormItem>
        </div>
          <FormItem label="身份证件号码" prop="passwordConform">
            <Input v-model="formValidate.mail" placeholder="请输入身份证件号码"></Input>
          </FormItem>
      </Form>
    </div>
      <Button type="primary" class="updateBtn">提交审核</Button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formValidate: {
          name: '',
          mail: '',

        },
        ruleValidate: {
          passwordOld: [
            {required: true, message: '显示昵称不能为空', trigger: 'blur'}
          ],
          passwordNew: [
            {required: true, message: '真实姓名不能为空', trigger: 'blur'}
          ],
          passwordConform: [
            {required: true, message: '身份证件号码不能为空', trigger: 'blur'},
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
  .realNameBox {
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
    .formBox {
      width: 60%;
      margin: 0 auto;
      border: 1px solid #eee;
      .title {
        width: 100%;
        margin: 0 auto;
        height: 50px;
        font-size: 16px;
        line-height: 50px;
        border-bottom: 1px solid #eee;
        padding-left: 10px;
        text-align: left;
      }
      .ivu-form {
        width: 100%;
        /*margin: 2% auto;*/
        .ivu-form-item {
          width: 400px;
          margin: 0 auto;
        }
      }
      .bb {
        border-bottom: 1px solid #fff;
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
    .formBox {
      width:100% !important;
      margin: 0 auto;
      border: 1px solid #eee;
      .title {
        width: 100% !important;
        margin: 0 auto;
        height: 50px;
        font-size:16px;
        line-height: 50px;
        border-bottom: 1px solid #eee;
        padding-left: 10px;
        text-align: left;
      }
      .ivu-form {
        width: 100% !important;
        /*margin: 2% auto;*/
        .ivu-form-item {
          width: 100%!important;
          margin: 0 auto;
        }
      }
      .bb {
        border-bottom: 1px solid #fff;
      }
    }
  }
</style>
