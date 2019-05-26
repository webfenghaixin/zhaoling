<template>
    <div >
        <div class="right">
                <ul>
                    <li v-for="(item,a) in news" :key="a">
                        <router-link :to="{path:'Content',query:{news_id:item.id}}">{{item.title}}</router-link>
                        <span>{{item.time}}</span>
                    </li>
                </ul>
            <div class="r-footer">
                21 条记录 1/2 页 <button v-show="up" @click="last">上一页</button> <button @click="next" v-show="down">下一页</button> <span>1</span>&nbsp;&nbsp;<span>2</span>
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
                {id:"21",title:"公司与中国唱片公司深圳分公司协商成立歌手培训基地",time:"2018-12-20",content:"公司与中国唱片公司深圳分公司初步协商，在河南焦作成立歌手培训基地。同时为歌手提供赵玲教授创作的150余首原创歌曲，拍摄MTV全国出版发行。"},
                {id:"20",title:"公司正式聘请德籍经济学教授沃尔夫先生",time:"2018-12-20",content:"2018年11月公司正式聘请德国汉堡大学经济学副教授、中国德籍经济学教授沃尔夫先生Wolf.Kersten，作为公司的总经理."},
                {id:"19",title:"赵玲教授分别与焦作大学，焦作师专洽谈就业培训项目",time:"2018-06-15",content:"2018年6月6日和6月8日，赵玲教授分别与焦作大学对外合作处、焦作师范高等专科学校洽谈创新创业就业培训合作项目，商讨合作方式方法，以便更好地培养创新创业型的应用性人才。"},
                {id:"18",title:"赵玲教授的第九部学术专著，由德国金琅学术出版社全球出版发行",time:"2018-06-15",content:"2018年6月，赵玲教授的第九部学术专著，网络学院的第六部教材《基础音乐学穴控速成教程——歌唱经络学应用实践》由德国金琅学术出版社全球出版发行。"},
                {id:"17",title:"公司开始中国市场的开发工作",time:"2018-06-15",content:"2018年4月，公司开始中国市场的开发工作。结束了从2015年中秋节开始的歌唱经络学与音乐知识的网络微信学习课程，开始了网络微信的加盟商课程，为中国市场的开拓做准备。"},
                {id:"16",title:"赵玲教授原创学术专著《汉语口语学控速成教程——歌唱经络学应用实践之一》",time:"2017-10-11",content:"赵玲教授原创学术专著《汉语口语学控速成教程——歌唱经络学应用实践之一》由德国金琅学术出版社出版，全球发行销售。"},
                {id:"15",title:"赵玲网络学院欧洲、亚洲、澳洲、美洲、中国的网站域名申请成功",time:"2017-10-11",content:"赵玲网络学院欧洲、亚洲、澳洲、美洲、中国的网站域名申请成功。现赵玲网络学院已经拥有8个入口，方便学习者进入学习。"},
                {id:"14",title:"赵玲网络学院平台框架设计由北京起源星科技有限公司完成。",time:"2017-10-11",content:"赵玲网络学院平台框架设计由北京起源星科技有限公司完成。"},
                {id:"13",title:"赵玲教授原创学术专著《人体歌唱经络学——人类认识自身的再实践》",time:"2017-10-11",content:"赵玲教授原创学术专著《人体歌唱经络学——人类认识自身的再实践》由德国金琅学术出版社出版，全球发行销售。赵玲教授论文《 穴控歌唱“气、血、声‘三调一体’” 康复老年痴呆与退行性耳聋案例观察》发表刊登在美国《中国医学科学杂志》。"},
                {id:"12",title:"沃玲国际有限公司更名为赵玲香港亚洲有限公司",time:"2017-06-29",content:"2017年7月，沃玲国际有限公司更名为赵玲香港亚洲有限公司；沃玲英国有限公司更名为赵玲英国欧洲有限公司。"},
                {id:"11",title:"赵玲网络学院网络教学平台的设计、制作并完成",time:"2017-06-29",content:"2017年2-6月，由北京起源星科技有限公司承建赵玲网络学院网络教学平台的设计、制作并完成，7月进入测试和课程摄制阶段。"},
                {id:"10",title:"出版学术专著《歌唱经络学概论》、《歌唱经络学操作实践》",time:"2017-06-29",content:"2017年3月出版学术专著《歌唱经络学概论》、《歌唱经络学操作实践》；4月出版学术专著《歌唱经络学教程》；6月出版学术专著《人体歌唱经络学——人类自身认识的再实践》，均由德国金琅学术出版社全球宣传、出版、发行、销售。"},
            ],
            news2:[
                {id:"09",title:"赵玲音乐服务中心、沃玲中医经络音疗康复指导部成立",time:"2017-05-09",content:"2016年11月成立了赵玲国际有限公司下属二级机构--赵玲音乐服务中心、赵玲中医经络音乐康复指导部、赵玲国际文化研究院、赵玲国际文化传播网院"},
                {id:"08",title:"国际中医联合群讲微信课程",time:"2017-05-09",content:"2016年11月5-6日为国际中医联合群讲微信课程《歌唱经络学研究的发展及其理论特点》和《歌唱经络学的实践操作方法和原则》。"},
                {id:"07",title:"中国瑞典老年病防治国际学术年会",time:"2017-05-09",content:"赵玲教授参加了10月15-16日在北京召开的中国瑞典老年病防治国际学术年会，撰写并提交了论文《穴控歌唱“气、血、声‘三调一体’” 康复老年痴呆与退行性耳聋案例观察》。"},
                {id:"06",title:"第九届世界中医药学会联合会第九届中医特色诊疗国际学术年会",time:"2017-05-09",content:"2016年9月赵玲教授参加了9月24、25日在北京举办的“第九届世界中医药学会联合会第九届中医特色诊疗国际学术年会”，提交论文《歌唱经络学研究--歌唱经络控制系统应用的理论与实践》获大会优秀论文奖。"},
                {id:"05",title:"全球出版发行《歌唱经络学理论实践研究》",time:"2017-05-09",content:"2016年8月赵玲教授完成并经由德国金琅学术（中文）出版社全球发行出版了《歌唱经络学理论实践研究》。"},
                {id:"04",title:"重度老年痴呆康复病案",time:"2017-05-09",content:"2016年6月赵玲教授为重度老年痴呆康复病案和嗓音手术后病人做歌唱经络“气、血、声”三调一体康复工作。"},
                {id:"03",title:"赵玲国际有限公司网站建设",time:"2017-05-09",content:"2016年5月赵玲国际有限公司与河南焦作百度网站签署网站建设合同，注册公司域名，申报备案等工作。"},
                {id:"02",title:"3月3日世界爱耳日公益康复活动",time:"2017-05-09",content:"2016年3月8日，赵玲教授赴河北保定徐水与中石油徐水物探中心医院耳鼻喉科合作开展“3月3日世界爱耳日”，并为老年退行性耳聋病人做歌唱经络“气、血、声”三调一体的公益康复活动。"},
                {id:"01",title:"赵玲国际有限公司正式在香港挂牌",time:"2017-05-09",content:"2016年1月11日，赵玲国际有限公司正式在香港挂牌成立。"}
            ]
        }

    },
    created(){
        if(this.pages==1){
            var n=[];
            Object.assign(n,this.news1)
            this.news=n;
        }
        this.$emit("childclose",require("../../static/img/top3.jpg"));
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
}
.r-footer button{
    background: #fff;
    border: 1px solid #666;
    cursor: pointer;
}
.r-footer span{
    cursor: pointer;
}
.right ul li a{
    color: #000;
}
.right ul li{
    list-style: none;
    height: 33px;
    line-height: 33px;
    border-bottom: 1px dashed #dcdcdc;
    display: flex;
    justify-content:space-between;
    margin-left: 15px;
    box-sizing: border-box;
}
.right ul li:hover a{
    color:#f00;
}
.right ul li:hover span{
    color:#f00;
}
.right{
    width: 704px;
    /* height: 3089px; */
    float: right;
    margin-right: 24px;
}

 </style>
 