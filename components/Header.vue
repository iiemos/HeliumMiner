<template>
  <div class="__header">
    <div class="__header_inner">
      <div class="__header_left">
        <a href="/" class="__header_logo">
          <img src="@/static/images/logo.png" alt="">
          HeliumMiner
        </a>
        <nav class="__web_meum">
          <ul class="_memu_ul">
            <li class="_memu_li" :class="{ 'active': item.link == path }" v-for="(item,idx) in meumList" :key="idx">
              <a href="javascript:;">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="__header_right">
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="iconfont icon-website"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>English</el-dropdown-item>
            <el-dropdown-item>Francais</el-dropdown-item>
            <el-dropdown-item>Deutsche</el-dropdown-item>
            <el-dropdown-item>Espanol</el-dropdown-item>
            <el-dropdown-item>русский</el-dropdown-item>
            <el-dropdown-item>简体中文</el-dropdown-item>
            <el-dropdown-item>日本語</el-dropdown-item>
            <el-dropdown-item>한국어</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        path: '',
        meumList: [
          {
            name: 'Home',
            link: '/',
          },
          {
            name: 'Product',
            link: '/Product',
          },
          {
            name: 'Help',
            link: '/Help',
          },
          {
            name: 'Contact',
            link: '/Contact',
          },
        ]
      }
    },
    mounted () {
      this.path = this.$route.path;
    },
    methods: {
      name() {
        
      }
    },
  }
</script>

<style lang="less" scoped>
.__header{
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow: hidden;
  background: #fff;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.06);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.06);
  .__header_inner{
    margin: 0 auto;
    width: 1200px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }
}
.__header_logo{
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: 600;
  img{
    width: 40px;
    margin-right: 8px;
  }
  
}
.__header_left{
  display: flex;
}
.__web_meum{
  display: flex;
  align-items: center;
  margin-left: 40px;
}
._memu_ul{
  display: flex;
  align-items: center;
  ._memu_li{
    position: relative;
    &::after{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      content: '';
      width: 0;
      bottom: -10px;
      height: 1px;
      background: #7058ff;
    }
    &.active{
      a{
        color: #7058ff;
      }
      &::after{
        width: 60%;
      }
    }
    &:hover{
      a{
        color: #7058ff;
      }
    }
    a{
      padding: 10px;
    }


  }
}
.__header_right{
  .icon-website{
    cursor: pointer;
    font-size: 24px;
  }
}
</style>