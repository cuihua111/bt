<template>
  <div>
    <div class="assetsInfo">
      <div class="imgBox">
        <img style="width: 100px;height: 100px;"
             src="../assets/images/b.jpg"
             alt="">
      </div>
      <div class="text">
          <p style="font-size: 16px;">
            BitHash&nbsp;&nbsp;&nbsp;{{$t('lang.assets.balance')}}：
        <Button class="trunOutBtn">{{$t('lang.assets.turnOut')}}</Button>
          </p>
          <p style="color: #34baff">1saaaaaaaaaaaaaaaaaaaaaaaaaaa5</p>
        <p>
          <span>16Fs7CA6jeoB3UyHoWAw9m4eUyUsWgNbSo</span>
          <a class="copyBtn">{{$t('lang.assets.copy')}}</a>
        </p>
      </div>
    </div>
    <div class="tableContianer">
      <Table :columns="columns1" :data="data1" align="center"></Table>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        columns1: [
          {
            title: this.$t('lang.assets.operationType'),
            key: 'name',
            filters: [
              {
                label: this.$t('lang.assets.turnIn'),
                value: '转入'
              },
              {
                label: this.$t('lang.assets.turnOut'),
                value: '转出'
              }
            ],
            filterMultiple: false,
            filterMethod (value, row) {
                return row.name==value
            }
          },
          {
            title: this.$t('lang.assets.time'),
            key: 'age'
          },
          {
            title: this.$t('lang.assets.address'),
            key: 'address'
          },
          {
            title: this.$t('lang.assets.amount'),
            key: 'amount'
          },
          {
            title: '状态',
            key: 'status'
          }
        ],
        data1: [
          {
            name: '转出',
            age: '2016-10-03',
            address: '1dadfasdfbasdfEFqBSDASD9m4eUyUsWgNbSo',
            amount: '10',
            status: '成功'
          },
          {
            name: '转入',
            age: '2016-10-03',
            address: '1dadfasdfbasdfEFqBSDASD9m4eUyUsWgNbSo',
            amount: '10',
            status: '成功'
          }
        ]
      }
    },
  }
</script>
<style scoped type=text/scss lang=scss>
  .assetsInfo {
    margin-top: 5%;
    .imgBox {
      display: inline-block;
      vertical-align: top;
    }
    .text {
      height: 100px;
      display: inline-block;
      p {
        height: 35px;
        line-height: 35px;
        text-align: left;
      }
      .trunOutBtn {
        float: right;
        padding: 2px 20px;
        color: white;
        border: none;
        border-radius: 10px 10px 10px 10px ;
        background-color: #323a69;
      }
      .copyBtn {
        color: #33a9ff;
        margin-left:20px;
        text-decoration: underline;
      }
    }
  }

  .tableContianer {
    .ivu-table-wrapper {
      border: none;
      .ivu-table {
        .ivu-table-cell {
          color:#32aaff;
        }
      }
      .ivu-table-header {
        .ivu-table-cell {
          color:#32aaff;
          .ivu-poptip-body {
          }
        }
      }
    }
  }
</style>
