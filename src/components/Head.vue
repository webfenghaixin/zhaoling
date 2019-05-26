<template>
  <div id="app">
    <div class="headerbg"> 
      <div class="headerw">
      <div class="center">
        <div class="top">
          <div class="lf">欢迎光临赵玲英国欧洲有限公司 趙玲香港亞洲有限公司网站</div>
          <div class="rt">
            <a href="">
              <img src="../img/cn.png" alt="">中文版
            </a>
            <a href="">
              <img src="../img/en.png" alt="">English
            </a>
          </div>
          </div>
        </div>
          <a href="#" class="bl">
            <img class="logo" src="../img/logo.jpg" alt="">
          </a>
          <div class="nav">
            <ul>
              <li>
                <router-link to="/Index">
                  首页
                  <p>Home</p>
                </router-link>
              </li>
              <li>
                <router-link to="/I/About">
                  关于我们
                  <p>About</p>
                </router-link >
              </li>
              <li>
                <router-link to="/I/News">
                  新闻资讯
                  <p>News</p>
                </router-link>
              </li>
              <li>
                <router-link to="/I/Exchange">
                  交流合作
                  <p>Exchange</p>
                </router-link>
              </li>
              <li>
                <router-link to="/I/Case">
                  案例分享
                  <p>Case</p>
                </router-link>
              </li>
              <li>
                <router-link to="/I/Product">
                  产品中心
                  <p>Product</p>
                </router-link>
              </li>
              <li>
                <router-link to="/I/Honor">
                  资质荣誉
                  <p>Honor</p>
                </router-link>
              </li>
              <li>
                <router-link to="/I/Message">
                  在线留言
                  <p>Message</p>
                </router-link>
              </li>
              <li>
                <router-link to="/I/Contact">
                  联系我们
                  <p>Contact</p>
                </router-link>
              </li>
            </ul>
          </div>
      </div>
    </div>
    <div class="partnerSwiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- <swiper-slide v-for="(item,index) in list" :key="index">
          <img :src="item.img" alt=""> 
        </swiper-slide> -->
	<swiper-slide >
          <img src="../img/swiper1.jpg" alt=""> 
        </swiper-slide>
	<swiper-slide >
          <img src="../img/swiper2.jpg" alt=""> 
        </swiper-slide>
	<swiper-slide >
          <img src="../img/swiper3.jpg" alt=""> 
        </swiper-slide>
	<swiper-slide >
          <img src="../img/swiper4.jpg" alt=""> 
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div  class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <router-view></router-view>
    <div class="footer">
      <div class="footer-item">
      <div class="footer-right">
        <div class="footer-r-t">
          <div v-for="(item,h) in jump2" :key="h">
            <router-link :to="{path:item.url}">{{item.title}}</router-link>
          </div>
        </div>
        <div class="footer-text">Copyright&nbsp;<span style="font-family:Arial">&copy;</span>　2017-2018　赵玲英国欧洲有限公司  趙玲香港亞洲有限公司　All right reserved  </div>
        <div class="footer-foot">
          <a href="#">豫ICP备16022277号</a> 
          <a href="#"><img src="http://icon.cnzz.com/img/pic.gif" alt=""></a>
        </div>
      </div>
      </div>
    </div>
    <div :class="none">
      <div class="r-t">
        <p class="r-t-close" @click="close"></p>
      </div>
      <div class="r-center">
        <div class="r-c-t">
          <a href="http://www.zhaoling-int.com/">赵玲网络学院</a>
        </div>
        <div class="r-c-t">
          <a href="http://www.zhaoling-int.com/">赵玲网络学院</a>
        </div>
        <div class="r-c-t">
          <a href="http://www.zhaoling-int.com/">赵玲网络学院</a>
        </div>
        <div class="r-c-t-kefu" v-for="(item,x) in kefu" :key="x">
          <a :href="item.url">
            <img src="../img/1.gif" alt="">
              {{item.title}}
          </a>
        </div>
        <div class="clear"></div>
        <div class="r-c-weixin">
          <div>微信1:13083834897</div>
          <div>微信2:13083834892</div>
          <div>微信3:13083834861</div>
          <div>微信4:17796688474</div>
          <div>微信5:woling-int</div>
        </div>
        <div class="r-c-pic">
          <img src="../img/pic_1502160690.jpg" alt="">
        </div>
      </div>
      <div class="r-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      none:"right-fixed",
      jump2:[
            {title:'网站首页',url:"/Index"},
            {title:'关于我们',url:"/I/About"},
            {title:'新闻资讯',url:"/I/News"},
            {title:'交流合作',url:"/I/Exchange"},
            {title:'案例分享',url:"/I/Case"},
            {title:'产品中心',url:"/I/Product"},
            {title:'资质荣誉',url:"/I/Honor"},
            {title:'联系我们',url:"/I/Message"},
            {title:'在线留言',url:"/I/Contact"}
        ],
        kefu:[
          {title:"学院客服",url:"tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=2308015055&website=www.oicqzone.com"},
          {title:"公司客服",url:"tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1657118961&website=www.oicqzone.com"},
          {title:"客服一",url:"tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=2308015055&website=www.oicqzone.com"},
          {title:"学院二",url:"tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1657118961&website=www.oicqzone.com"},
          {title:"学院三",url:"tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1948825724&website=www.oicqzone.com"},
          {title:"学院四",url:"tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=778602353&website=www.oicqzone.com"},
          {title:"学院五",url:"tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1846205917&website=www.oicqzone.com"}
        ],
swiperOption: {
        // 如果需要分页器
        pagination: {
          el:'.swiper-pagination',
          type: 'bullets',  
          clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        },
        notNextTick: true,
        // 如果需要自动播放
        autoplay : {
          delay:3000,
          disableOnInteraction:false,  //用户操作swiper之后，是否禁止autoplay。
          // reverseDirection: true,   //开启反向自动轮播。
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
          prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
          hideOnClick: true, //点击slide时显示/隐藏按钮
        },
        
        effect:"coverflow",
        grabCursor : true,
        setWrapperSize :true,
        mousewheelControl : true,
        observeParents:true,
        loop:true,
        speed:800
      },
swiperOption2: {
        // 如果需要自动播放
        autoplay : {
          delay:3000,
          disableOnInteraction:false,  //用户操作swiper之后，是否禁止autoplay。
          // reverseDirection: true,   //开启反向自动轮播。
        },
        effect:"slide",
        grabCursor : true,
        setWrapperSize :true,
        mousewheelControl : true,
        observeParents:true,
        loop:true,
        speed:300
      },
computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  }
    }
  },
  created(){
    this.$router.push("/Index");
  },
  methods:{
    close(){
      if(this.none=="right-fixed"){
        this.none="right-fixed none"
      }
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.none{
  display: none;
}
.r-c-pic{
  text-align: center;
}
.r-c-weixin div{
  height: 29px;
  font-size: 16px;
  text-align: center;
  line-height: 29px;
}
.clear{
  clear: both;
}
.r-c-t-kefu{
  line-height: 23px;
  float: left;
}
.r-c-t-kefu a{
  display: block;
  width: 84px;
  height: 23px;
  line-height: 23px;
  vertical-align: middle;
  color: #000;
  margin-top: 5px;
}
.r-c-t-kefu img{
  vertical-align: middle;
}
.r-c-t-kefu img{
  margin-left: 10px;
}
.r-c-t{
  height: 29px;
  text-align: center;
  line-height: 29px;
  font-size: 18px;
}
.r-c-t a{
  color: #666;
}
.r-bottom{
  height: 25px;
  background: url("../img/bottom.gif");
}
.r-center{
  height: 527px;
  background: url("../img/middle.gif");
}
.r-t p{
  width: 20px;
  height: 20px;
  float: right;
  cursor: pointer;
}
.r-t{
  height: 29px;
  background: url("../img/top.gif")
}
.right-fixed{
  width: 175px;
  height: 581px;
  background: pink;
  position: fixed;
  z-index: 5000;
  right: 20px;
  top:100px;
}
/* .vedio-inner{
  margin-top: 30px;
} */

.footer-right .footer-foot{
  margin-left: 20px;
  margin-top: 15px;
}
.footer-foot a:first-child{
  margin-right: 7px;
}
.footer-text{
  color:#FFF;
  margin-left: 20px;
}
.footer-r-t{
  width: 650px;
  height: 72px;
}
.footer-r-t div a{
  color: #fff;
}
.footer-r-t div{
  width: 68px;
  color: #666;
  line-height: 72px;
  text-align: center;
  float: left;
}
.footer-right{
  width: 650px;
  height: 100px;
  float: right;
}
.footer-item{
  width: 1000px;
  height: 125px;
  margin: auto;
}
.footer{
  background: url("../img/footbg.jpg") no-repeat center;
}

#app{
  min-width: 1024px;
}
.nav li{
    float: left;
    width: 73px;
    height: 130px;
    display: block;
    text-align: center;
    border-right: 1px solid #ddd;
    transition: .1s;
}
.nav li:hover{
  background: #E50136;
  color: #FFF;
}
.nav li:hover a{
  color: #FFF !important;
}
.nav li:hover a p{
  color: #FFF;
}
.nav li a {
    color: #333;
    font-size: 14px;
    height: 80px;
    display: block;
    padding-top: 50px;
}
.nav li a p{
    font-size: 14px;
    color: #999;
}

.clear{
  clear: both;
}
.nav{
    height: 130px;
    line-height: 20px;
    width: 672px;
    float: right;
    margin-right: 30px;
}
.logo{
    display: block;
    float: left;
    margin-top: 30px;
    margin-left: -30px;
}
a{
  text-decoration: none;
}
.top {
    height: 35px;
    line-height: 35px;
    color: #fff;
    display: flex;
    position: relative;
}
.top .rt{
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
}
.top .rt a{
  color:#fff;
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.top .rt a:hover{
  text-decoration: underline	;
}
.center{
  width: 1024px;
  margin: 0 auto;
}
.headerw{
  width: 1024px;
  margin: 0 auto;
}
.headerbg{
  height: 10.5rem;
  background: url("../img/headercenter.jpg") no-repeat center top;
  overflow: hidden;
  margin-bottom: 10px;
}
.partnerSwiper{
  width: 1000px;
  margin: auto;
  overflow: hidden;
}
.swiper-slide {
  width: 100%;
  height: 340px;
}
.swiper-slide img{
  width: 100%;
  height: 100%;
}
</style>