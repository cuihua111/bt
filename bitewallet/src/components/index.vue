<template>
  <div class="w">
    <template>
      <Menu mode="horizontal" :theme="theme1" active-name="1" router="true" @on-select="aaa">
        <MenuItem name="asssets">
          我的资产
        </MenuItem>
        <Submenu name="3">
          <template slot="title">
            安全中心
          </template>
          <MenuGroup title="安全中心">
            <MenuItem name="updatePassword"> 修改密码</MenuItem>
            <MenuItem name="realName"> 实名认证</MenuItem>
            <MenuItem name="googleAuthenticator"> 谷歌验证器</MenuItem>
          </MenuGroup>
        </Submenu>
        <MenuItem name="query">
          区块查询
        </MenuItem>
      </Menu>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        theme1: "light"
      }
    },
    methods: {
      aaa(name) {
          this.$router.push(name)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
