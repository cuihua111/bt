<template>
  <div class="queryBox">
    <Input v-model="value" placeholder="请输入要查询的交易区块地址、区块、区块链地址" style="width: 300px"></Input>
    <Button type="primary">搜索</Button>
    <Page :total="40" size="small" show-total show-elevator></Page>
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
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ],
        value:''
      }
    },
    methods: {
    }
  }
</script>
<style scoped type=text/scss lang=scss>
  .queryBox {
    margin-top:5%;
    .ivu-page {
      margin: 2% 0;
      text-align: right;
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
  }
</style>
