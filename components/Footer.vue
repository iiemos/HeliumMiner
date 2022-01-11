<template>
  <div class="__footer">
    <div class="__footer_top">
      <div class="__footer_top_link">
        <div class="__block__heading">
          <img src="@/static/images/logo-white.png" alt=""> HeliumMiner
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Product</a></li>
          <li><a href="/">Help</a></li>
          <li><a href="/">Cpntact</a></li>
        </ul>
      </div>
      <div class="__footer_top_desc">

        HeliumMiner is aimed at users around the world and is committed to promoting the development of the Internet and making life more convenient
      </div>
    </div>
    <div class="__footer_bottom">
      © 2022, Helium Miner
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
.__footer{
  margin-top: 50px;
  background: #5547e48f;
  font: initial;
}
.__footer_top{
  padding:  50px 20px;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  .__footer_top_link{
    flex-basis: 50%;
    ul{
      padding: 30px 0 0 60px;
    }
    li {
       padding: 6px 0;
      a{
        color: #fff;
      }
    }
  }
  .__footer_top_desc{
    flex-basis: 50%;
    font-size: 18px;
    color: #fff;
    font-weight: 300;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
  }
  .__block__heading{
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    display: flex;
    align-items: center;

    img{
      width: 50px;
      margin-right: 10px;
    }
  }
  ul{
    li{
      font-weight: 300;
      font-size: 14px;
      color: #fff;
    }
  }
}

.__footer_bottom{
  border-top: 1px solid #fff;
  text-align: center;
  padding: 40px 0;
  color: #fff;
}
</style>