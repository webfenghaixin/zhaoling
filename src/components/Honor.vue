<template>
    <div >
        <div class="right">
                <ul>
                    <li v-for="(item,a) in news" :key="a">
                            <img :src="item.img[0].src" alt="">
                            <p>{{item.title}}</p>
                    </li>
                </ul>
            <div class="r-footer">
                20 条记录 1/2 页 <button v-show="up" @click="last">上一页</button> <button @click="next" v-show="down">下一页</button> <span>1</span> <span>2</span>
            </div>
        </div>
    </div>
</template>
<script>
 export default {
     data() {
        return{
            news:[],
            pages:1,
            up:false,
            down:true,
            news1:[
                {id:"20",img:[{src:require("../../static/img/honor1.jpg")}],title:"赵玲英国欧洲有限公司营业执照"},
                {id:"19",img:[{src:require("../../static/img/honor2.jpg")}],title:"赵玲香港亚洲有限公司营业执照"},
                {id:"18",img:[{src:require("../../static/img/honor3.jpg")}],title:"美国日报《中国医学科学杂志》"},
                {id:"17",img:[{src:require("../../static/img/honor4.jpg")}],title:"资质荣誉"},
                {id:"16",img:[{src:require("../../static/img/honor5.jpg")}],title:"资质荣誉"},
                {id:"15",img:[{src:require("../../static/img/honor6.jpg")}],title:"中医养生保健服务机构"},
                {id:"14",img:[{src:require("../../static/img/honor7.jpg")}],title:"中医特色诊疗论文集"},
                {id:"13",img:[{src:require("../../static/img/honor8.jpg")}],title:"赵玲中医康复调理师证"},
                {id:"12",img:[{src:require("../../static/img/honor9.jpg")}],title:"赵玲·国际针灸师证书"},
                {id:"11",img:[{src:require("../../static/img/honor10.jpg")}],title:"营业执照正本"},
                {id:"10",img:[{src:require("../../static/img/honor11.jpg")}],title:"世界针灸学会联合会北"},
                {id:"09",img:[{src:require("../../static/img/honor12.jpg")}],title:"世界科学名人录铭牌证"}
                ],
            news2:[
                {id:"08",img:[{src:require("../../static/img/honor13.jpg")}],title:"世界科学名人录铭牌"},
                {id:"07",img:[{src:require("../../static/img/honor14.jpg")}],title:"歌唱经络学作品登记证"},
                {id:"06",img:[{src:require("../../static/img/honor15.jpg")}],title:"歌唱经络学著作权登记"},
                {id:"05",img:[{src:require("../../static/img/honor16.jpg")}],title:"歌唱经络学研究的发展"},
                {id:"04",img:[{src:require("../../static/img/honor17.jpg")}],title:"歌唱经络学理论实践研"},
                {id:"03",img:[{src:require("../../static/img/honor18.jpg")}],title:"歌唱经络控制系统应用"},
                {id:"02",img:[{src:require("../../static/img/honor19.jpg")}],title:"21世纪亚洲教育改革"},
                {id:"01",img:[{src:require("../../static/img/honor20.jpg")}],title:"21世纪亚洲教育改革"}        
            ]
        }

    },
    created(){
        if(this.pages==1){
            var n=[];
            Object.assign(n,this.news1)
            this.news=n;
        }
        this.$emit("childclose",require("../../static/img/tophonor.jpg"));
    },
     methods:{
         next(){
            var n=[];
            Object.assign(n,this.news2)
            this.news=n;
            this.up=true;
            this.down=false;
         },
         last(){
            var n=[];
            Object.assign(n,this.news1)
            this.news=n;
            this.up=false;
            this.down=true;
         }
     }
 }
 </script>
<style scoped>
*{margin: 0;padding: 0;}
.r-footer{
    float: right;
    margin-top: 15px;
    padding-right: 13px;
    position: absolute;
    bottom: 10px;
    right: 0;
}
.r-footer button{
    background: #fff;
    border: 1px solid #666;
    cursor: pointer;
}
.r-footer span{
    cursor: pointer;
}
.right ul li img{
    height: 219px;
    width: 214px;
    border: 1px solid #fff;
}
.right ul li{
    list-style: none;
    width: 214px;
    height: 264px;
    line-height: 25px;
    text-align: center;
    float: left;
    margin: 0 10px 10px;
}
.right ul li:hover a{
    color:#f00;
}
.right ul li:hover img{
    border: 1px solid #f00;
}
.right{
    width: 704px;
    float: right;
    margin-right: 24px;
    position: relative;
}
 </style>
 