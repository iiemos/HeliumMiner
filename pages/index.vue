<template>
  <div class="">
    <Header/>
    <div class="__content">
      <div class="__content_cover"></div>
      <section class="__banner">
          <div class="__banner_col">
            <img class="_banner_img" src="@/static/images/banner.png" alt="">
          </div>
          <div class="__banner_col">
            <h1 class="__banner_title">
              Helium Miner
            </h1>
            <div class="__banner_desc">
              <p>Helium Hotspots mine $HNT</p>
              <p>help build the largest IoT network in the world</p>
              <p>Earn HNT while providing coverage for IoT devices</p>
            </div>
          </div>
      </section>
      <section class="__module">
        <div class="__module_item">
          <div class="__module_item_img">
            <img src="@/static/images/car.svg" alt="">
          </div>
          <div class="__module_item_dsc">
            <h3>Delivery</h3>
            Shipping under a month
          </div>
        </div>
        <div class="__module_item">
          <div class="__module_item_img">
            <img src="@/static/images/money.svg" alt="">
          </div>
          <div class="__module_item_dsc">
            <h3>Paying</h3>
            We accept Paypal & ERC20
          </div>
        </div>
      </section>
      <section class="__miners">
        <div class="__miners_title">
          Popular Miners
        </div>
        <div class="__miners_warp">
          <div class="__miners_item" v-for="(minItem,idx) in minList" :key="idx">
            <div class="__min_cover">
              <img :src="minItem.icon" alt="">
            </div>
            <div class="__min_title">
              {{ minItem.name }}
            </div>
            <div class="__min_more">More Info</div>
            <!-- <div class="__min_shares">

            </div> -->
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  </div>
</template>
<script>
import Header from '~/components/Header.vue'
export default {
  components: { Header },
  name: 'IndexPage',
  data() {
    return {
      minList: [
        {
          name: 'Bobcat Miner 300',
          icon: require('@/static/images/Bobcat.png'),
          link: '',
        },
        {
          name: 'SenseCAP M1',
          icon: require('@/static/images/Sensecap.png'),
          link: '',
        },
        {
          name: 'Nebra',
          icon: require('@/static/images/Nebra.png'),
          link: '',
        },
        {
          name: 'SyncroB.IT',
          icon: require('@/static/images/Syncrob.png'),
          link: '',
        },
      ]
    }
  },
}
</script>

<style lang="less" scoped>
@color: #7058ff;
.__content{
  padding-top: 68px;
}
.__content_cover{
  position: absolute;
  z-index: -1;
  top: -98px;
  left: 0;
  width: 100%;
  height: 60vw;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  background: linear-gradient(#5547e48f, #fff0);
  pointer-events: none;
}
.__banner{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  max-width: 1400px;
  margin: 0 auto;
  h1{
    color: @color;
    font-size: 50px;
  }
  h3{
    color: @color;
  }
  .__banner_desc{
    & p:first-child{
      color: @color;
    }
    p{
      margin-top: 10px;
      font-size: 18px;
      color: #000;
      letter-spacing: 1;
    }
  }
  .__banner_col{
    &:nth-child(1){
      width: 65%;
    }
    &:nth-child(2){
      width: 35%;
    }
  }
  
}

._banner_img{
  width: 100%;
}

.__module{
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
}
.__module_item{
  margin: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 15px 0 #7058ff52;
  border-radius: 16px;
  padding: 28px;
  flex: 1;
  margin-top: 24px;
  display: flex;
  background: #fff;
}
.__module_item_dsc{
  flex: 1;
  font-size: 18px;
  h3{
    font-size: 30px;
    margin-bottom: 10px;
  }
}
.__module_item_img{
  width: 168px;
  height: 168px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7b65fe;
  border-radius: 12px;
  margin-right: 30px;
  img{
    width: 120px;
  }
}


.__miners{
  padding-top: 100px;
  max-width: 1400px;
  margin: 0 auto;
}
.__miners_title{
  color: @color;
  font-size: 50px;
  text-align: center;
}
.__miners_warp{
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.__miners_item{
  width: calc(25% - 20px);
  margin: 0 10px 20px;
  background: #fafbfc;
  box-shadow: 0 8px 30px 0 rgba(161, 117, 219, 0.239);
  border-radius: 20px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .__min_cover{
    margin-bottom: 20px;
    img{
      width: 250px;
      height: 250px;
    }
  }
  .__min_title{
    font-size: 22px;
    font-weight: 600;
    color: #2f2e41;
    height: 74px;
    margin-bottom: 6px;
  }
  .__min_more{
    text-align: center;
    cursor: pointer;
    color: #fff;
    width: 100%;
    padding: 8px 0;
    border-radius: 30px;
    transition: all .2s ease;
    background: linear-gradient(270deg, #a690ff, #7b65fe);
    &:hover{
      transform: translateY(-2px);
    }
  }
}

@media screen and (max-width: 1519px){
  ._banner_img {
    width: 960px;
  }
}

@media screen and (max-width: 1439px){
  ._banner_img {
    width: 660px;
  }
}

@media screen and (max-width: 1279px){
  ._banner_img {
    width: calc(100% - 60px);
  }
  .__banner_col{
  }
}

@media screen and (max-width: 960px){
  .__banner {
    flex-direction: column;
    padding:0 20px;
    .__banner_col{
      &:nth-child(1){
        width: 100%;
      }
      &:nth-child(2){
        width: 100%;
      }
    }
    .__banner_title{
      font-size: 40px;
    }
    .__banner_desc{
      padding: 0 20px;
      p{
        font-size: 14px;
      }
    }
  }
  .__banner_col{
    width: 100%;
    text-align: center;
  }

  .__module{
    padding:20px;
    flex-direction: column;
  }
  .__module_item{
    width: 100%;
  }
  .__module_item_img{
    width: 110px;
    height: 110px;
    img{
      width: 80px;
    }
  }
  .__module_item_dsc{
    h3{
      font-size: 20px;
    }
    font-size: 14px;
  }


  .__miners_title{
    font-size: 40px;
  }
}


</style>
