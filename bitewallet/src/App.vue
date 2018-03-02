<template>
  <div id="app">
    <template>
      <div class="pcMenu">
        <Menu mode="horizontal" active-name="asssets" @on-select="aaa" >
          <MenuItem name="asssets">
            {{$t('lang.nav.assets')}}
          </MenuItem>
          <MenuItem name="safeCenter">
            {{$t('lang.nav.safeCenter')}}
          </MenuItem>
          <MenuItem name="query">
            {{$t('lang.nav.query')}}
          </MenuItem>
        </Menu>
      </div>
      <div class="mobileMenu">
        <Dropdown trigger="click" @on-click="turnRouter" style="margin-left: 20px">
          <Button type="primary">
            三
          </Button>
          <DropdownMenu slot="list">
            <DropdownItem name="asssets"> {{$t('lang.nav.assets')}}</DropdownItem>
            <DropdownItem name="safeCenter"> {{$t('lang.nav.safeCenter')}}</DropdownItem>
            <DropdownItem name="query"> {{$t('lang.nav.query')}}</DropdownItem>
            <DropdownItem>{{$t('lang.nav.goHome')}}</DropdownItem>
            <DropdownItem>{{$t('lang.nav.logout')}}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div class="menu-option">
        <ul>
          <ol class="goHome">{{$t('lang.nav.goHome')}}</ol>
          <ol class="logout">{{$t('lang.nav.logout')}}</ol>
          <ol>
            <span @mouseenter="showEnter" >{{$t('lang.nav.language')}}</span>
            <ul :class="{langCon,'show' : show,'hide':hide}" @mouseleave="hideLeave">
              <dl>1</dl>
              <dl>2</dl>
              <dl>3</dl>
              <dl>4</dl>
            </ul>
          </ol>
        </ul>
        <b class="arrow"></b>
      </div>
    </template>
    <router-view class="w"></router-view>
  </div>
</template>

<script>
  import Vue from "vue"
  export default {
    name: 'App',
    data () {
      return {
        show:false,
        hide:true,
        langCon:'langCon'
      }
    },
    methods: {
      aaa (name) {
        this.$router.push(name)
      },
      showEnter () {
        this.show=true
        this.hide=false
      },
      hideLeave () {
        this.show=false
        this.hide=true
      },
      turnRouter (name) {
        this.$router.push(name)
      }
    }
  }
</script>

<style type=text/scss lang="scss" scoped>
  @import "assets/css/reset.css";
  @import "assets/css/common.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width:100%;
    height: 100%;
    text-align: center;
    background-color: #0e1329;
    color: white;
    .ivu-menu {
      text-align: center;
      .ivu-menu-item {
        display: inline-block;
        font-size: 16px;
        color: white;
      }
      .ivu-menu-submenu {
        display: inline-block;
        font-size: 16px;
        color: white;
      }
    }
    .ivu-menu-dark {
      background-color: #27293e;
    }
    .menu-option {
      position: absolute;
      top: 30px;
      transform: translateY(-50%);
      right: 5%;
      z-index:901;
      font-size:14px;
      ul {
        ol {
          display: inline-block;
          color: white;
          &:nth-of-type(2){
            margin: 0 30px;
          }
        }
      }
      .langCon {
        position: absolute;
        top: 48px;
        right: -50px;
        background-color: #27293e;
        min-width:126.45px;
        border-radius: 5px;
        dl {
          color: white;
          font-size:14px;
          text-align: center;
          line-height:20px;
        }
      }
      .arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -10%;
        display: block;
        z-index:901;
        width: 18px;
        height: 9px;
        background-image: url(./assets/images/loginandregister/arrow.png);
      }
    }
    .mobileMenu {
      display: none;
    }
    .pcMenu {
      display: block;
    }
  }
  .show {
    /*display: block;*/
    opacity: 1;
    transition: 1s opacity ease
  }
  .hide {
    /*display: none;*/
    opacity: 0;
    transition: 1s opacity ease
  }
  @media screen and (max-width: 375px) {
    .mobileMenu {
      position: relative;
      left:-45%;
      top: 10px;
      display: inline-block !important;
    }
    .pcMenu {
      display: none !important;
    }
    .goHome {
      display: none!important;
    }
    .logout {
      display: none!important;
    }
    #app .menu-option {
      position: absolute;
      top: 30px;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      right: 8% !important;
      z-index: 901;
      font-size: 14px;
    }
    #app .menu-option .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -35%!important;
      display: block;
      z-index: 901;
      width: 18px;
      height: 9px;
      background-image: url(./assets/images/loginandregister/arrow.png);
    }
    #app .menu-option .langCon {
      position: absolute;
      top: 30px !important;
      right: -25px !important;
      background-color: #27293e;
      min-width: 88.45px !important;
      border-radius: 5px;
    }
  }
  @media screen and (max-width: 865px) {
    #app .ivu-menu {
      text-align: left !important;
    }
  }
</style>
