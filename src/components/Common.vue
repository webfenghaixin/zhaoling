<template>
    <div class="about" :style="{backgroundImage:'url('+imgurl+')',backgroundRepeat:'no-repeat'}" >
        <table></table>
        <div class="about-w">
            <div class="left">
                <div class="l-t">
                    <a href="#">歌唱经络学书籍</a>
                </div>
                <div class="l-b">
                    <table></table>
                    <div class="l-b-inner">
                        <p>学院官网：<br>
                            <a href="http://www.zhaoling-int.com">http://www.zhaoling-int.com</a> 
                        </p>
                        <p><a href="http://www.zhaoling-net.com">http://www.zhaoling-net.com</a> </p>
                        <p>邮箱：<br> <a href="#">zhaoling@zhaoling-net.com</a> </p>
                        <p>微信：woling-int.com 
                        （公司）
                             </p>
                        <p>微信：woling-net.com 
                        （学院） </p>
                        <p>地址：焦作市解放区站前路中原不动产综合楼5单元15号</p>
                    </div>
                </div>
            </div>
            <router-view @childclose="childclose" :imgurl="imgurl"></router-view>
        <div class="clear"></div>
        </div>
    </div>
</template>
<script>
 export default {
     data() {
        return{
            imgurl:""
        }
    },
    created(){
        // this.imgurl=localStorage.getItem('imgurl');
    },
    methods:{
        childclose(i){
            this.imgurl=i;
        },
        
    }
 }
 </script>
<style scoped>
.clear{
    clear: both;
}
.r-text{
    font-family: 宋体;
    color: rgb(68, 68, 68);
    letter-spacing: 1px;
    font-size: 19px;
    line-height: 33px;
}
.imgs{
    width: 684px;
    margin:auto;
}
.imgs img{
    width: 171px;
    height: 93px;
    padding: 0 10px;
    box-sizing: border-box;
}
.right h2{
    text-align: center;
    margin-bottom: 20px;
}
.right{
    width: 704px;
    height: 3089px;
    float: right;
    margin-right: 24px;
}
.l-b-inner p:last-child{
    margin-top: 12px;
}
.l-b-inner p{
    padding-left: 10px;
    margin: 0 auto;
    line-height: 20px;
    font-weight: bold;
    font-size: 13px;
}
.l-b-inner p a{
    color:blue;
}
.l-b-inner{
    margin-top: 97px;
}
.l-b{
    height: 377px;
    padding-bottom: 20px;
    background: url("../img/contact.jpg") no-repeat;
}
.l-t a{
    display: block;
    color: #000;
    width: 100%;
    float: left;
    margin-top: 46px;
    padding-left: 85px;
    height: 33px;
    display: block;
    font-size: 14px;
    line-height: 34px;
    border-bottom: 1px dotted #999;
    font-weight: bold;
    background: url("../img/lstyle.jpg") no-repeat;
    background-position: 75px;
}
.l-t a:hover{
    color:#F00;
}
 .l-t{
    width: 205px;
    height: 90px;
    overflow: hidden;
    font-family: 宋体;
    background: #f3f3f3;
    background: url("../img/listh2.jpg") no-repeat;
    
 }
 .left{
     width: 205px;
     height: 478px;
     margin-left: 38px;
     background: #f3f3f3;
     float: left;
 }
 .about{
     width: 1024px;
     margin: auto;
     /* height: 3257px; */
    /* background:url("../img/top2.jpg") no-repeat; */
 }
 .about-w{
     width: 1000px;
     /* height: 3139px; */
     margin: auto;
     margin-top: 116px;
     background: #fff;
 }
 </style>
 