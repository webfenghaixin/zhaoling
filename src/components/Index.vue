<template>
    <div>
        <div class="box1">
      <table></table>
      <div class="box1-hide">
        <div class="box1-nav">
          <div class="box1-items" v-for="(item,i) in slide" :key="i">
            <router-link :to="{path:item.src}" >
              <img :src="item.url" alt="">
              <p>{{item.title}}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="box2">
      <table></table>
      <div class="box2-item">
        <div class="box2-inner">
          <img src="../img/cimg.jpg" alt="">
          <div class="text">
            <span>关</span>
            <span>于我们&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;赵玲英国欧洲有限公司、趙玲香港亞洲有限公司创建于2016年1月11日（原沃玲国际有限公司），公司创办人是歌唱经络学/经络音乐复康复创始人——赵玲董事长、总经理（音乐教授，国际针灸师）。其前身是赵玲教授在2006年3月9日开办开办的由焦作市民政局批准备案的“焦作市赵玲文化艺术研究所”，时经6年，2012年撤销。在其存.</span>
            <router-link :to="{path:'I/About'}">[更多详情]</router-link>
          </div>
          <div class="box2-right">
            <div class="box2-top"></div>
            <div class="box2-swipe">
              <swiper :options="swiperOption2" ref="mySwiper" class="swiper2">
                <swiper-slide >
                  <img src="../img/swipe3.jpg" alt=""> 
                </swiper-slide>
                <swiper-slide >
                  <img src="../img/swipe1.jpg" alt=""> 
                </swiper-slide>
                <swiper-slide >
                  <img src="../img/swipe2.jpg" alt=""> 
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box3">
      <table></table>
      <div class="box3-item">
      <div class="box3-left">
        <div class="box3-left-top">
          <img src="../img/nimg1.jpg" alt="">
          <div class="box3-left-item">
            <div>
            <router-link :to="{path:'I/Content?news_id=21'}">公司与中国唱片公司深圳分公司协商成立歌手培训基地</router-link>
            </div>
            <span>公司与中国唱片公司深圳分公司初步协商，在河南焦作成立歌手培训基地。同时为歌手提供赵玲教授创作的150余首原创歌曲，拍摄M</span>
          </div>
        </div>
        <div class="box3-left-bottom">
          <img src="../img/nimg2.jpg" alt="">
          <div class="box3-left-bottom-a">
            <p v-for="(item,i) in jump" :key="i">
              <router-link :to="{path:item.src}">{{item.title}}</router-link>
              <span>{{item.time}}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="box3-right">
        <div class="vedio-top"></div>
        <div class="vedio-inner">
          
        </div>
      </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
          slide: [
        {src:"I/Content?product_id=10",url:require("../img/slide1.jpg"),title:"《基础音乐学穴控速成教程..."},
        {src:"I/Content?product_id=09",url:require("../img/slide2.jpg"),title:"汉语口语穴控速成教程..."},
        {src:"I/Content?product_id=08",url:require("../img/slide3.jpg"),title:" 人体歌唱经络学..."},
        {src:"I/Content?product_id=07",url:require("../img/slide4.jpg"),title:"歌唱经络学教程..."},
        {src:"I/Content?product_id=06",url:require("../img/slide5.jpg"),title:"《歌唱经络学概论》简介..."},
        {src:"I/Content?product_id=05",url:require("../img/slide6.jpg"),title:"歌唱经络学操作实践简介..."},
        {src:"I/Content?product_id=04",url:require("../img/slide7.jpg"),title:"歌唱经络学研究简介..."},
        {src:"I/Content?product_id=03",url:require("../img/slide8.jpg"),title:"歌唱经络学理论实践研究简..."},
        {src:"I/Content?product_id=02",url:require("../img/slide9.jpg"),title:"《歌唱经络学》下 - 气..."},
        {src:"I/Content?product_id=01",url:require("../img/slide10.jpg"),title:"歌唱经络学教程简介..."}
      ],
        jump:[
            {title:"公司正式聘请德籍经济学教授沃尔夫先生",time:"[2018-12-20]",src:"I/Content?news_id=20"},
            {title:"赵玲教授分别与焦作大学，焦作师专洽谈就业培训项目",time:"[2018-06-15]",src:"I/Content?news_id=19"},
            {title:"赵玲教授的第九部学术专著，由德国金琅学术出版社全",time:"[2018-06-15]",src:"I/Content?news_id=18"},
            {title:"公司开始中国市场的开发工作",time:"[2018-06-15]",src:"I/Content?news_id=17"},
        ],
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
    
}
</script>

<style scoped>
.box3-left-bottom{
  width: 560px;
  height: 96px;
}
.box3-left-bottom-a{
  width: 370px;
  height: 96px;
  float: left;
}
.box3-left-bottom-a p a{
  color: #666;
}
.box3-left-bottom-a p a:hover{
  color: #f00;
}
.box3-left-bottom-a p{
  width: 100%;
  height: 24px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  color: #666;
}
.box3-left-top img,.box3-left-bottom img{
  width: 160px;
    height: 90px;
    float: left;
    margin-right: 25px;
}
.box3-left-top div a{
  color: #e50136;
    font-size: 14px;
    line-height: 30px;
    font-weight: bold;
}
.box3-left-top span{
  line-height: 25px;
}
.box3-left-top{
  width: 560px;
  height: 90px;
  margin-bottom: 35px;
}
.box3-left{
    width: 560px;
    height: 230px;
    float: left;
    margin-left: 50px;
}
.box3-right{
  float: right;
  width: 284px;
  height: 216px;
  margin-right: 85px;
}
.vedio-top{
  width: 284px;
  height: 30px;
  background: url("../img/vtop.jpg") no-repeat;
}
.box3{
  width: 1024px;
  height: 424px;
  margin: auto;
  background: url("../img/bg_box3.jpg") no-repeat;
}
.box3-item{
  height: 305px;
  width: 1000px;
  margin: auto;
  margin-top: 119px;
  background: #fff;
}
.box2-right{
  margin-left: 20px;
}
.box2-swipe,.swiper2{
  width: 225px;
  height: 150px;
}
.swiper2 .swiper-slide{
  width: 100%;
  height: 100%;
}
.box2-swipe{
  margin-left: 20px;
}
.box2-top{
  margin-top: -20px;
  margin-bottom: 16px;
}
.box2-inner .text a{
  color:#f00;
}
.box2-inner .text{
  line-height: 30px;
  width: 415px;
  letter-spacing: 0.5px;
  color: #6a6868;
  margin-left: 20px;
}
.box2-inner span:first-child{
  font-size: 36px;
}
.box2-top{
  background: url("../img/htop.jpg") no-repeat;
  width: 284px;
  height: 30px;
}
.box2-inner{
  width: 1000px;
  height: 210px;
  display: flex;
  flex-wrap: nowrap;
  padding:0 20px ;
}
.box2-item{
  margin: auto;
  margin-top:120px; 
  width: 1000px;
  height: 210px;
  background: #fff;
}
.box2{
  width: 1024px;
  margin: auto;
  height: 330px;
  background:url("../img/bg_box2.jpg") no-repeat;
}
.box1-items{
    width: 218px;
    float: left;
    height: 249px;
    text-align: center;
    display: block;
    color: #666;
    font-size: 14px;
    margin: 5px 15px 20px;
}
.box1-items a img{
  width: 100%;
  height: 219px;
  border: 1px solid #fff;
  padding: 1px;
}
.box1-items:hover img{
  border: 1px solid #f00;
}
.box1-items:hover p{
  color:#f00;
}
.box1-items a p{
  width: 220px;
  height: 50px;
  line-height: 50px;
}
.box1-hide{
  height: 819px;
  margin: auto;
  margin-top: 95px;
  width: 1000px;
  overflow: hidden;
}
.box1-nav{
  height: 819px;
  margin: auto;
  width: 1000px;
  background: #fff;
  animation: slide 8s infinite;
}
 @keyframes slide {
    0%{transform: translateY(0px)}
    5%{transform: translateY(-269px)}
    55%{transform: translateY(-269px)}
    60%{transform: translateY(0px)}
    100%{transform: translateY(0px)}
 }
.box1{
  width: 1024px;
  margin: auto;
  height: 645px;
  background: url("../img/bg_box1.jpg") no-repeat;
  overflow: hidden;
}
</style>

