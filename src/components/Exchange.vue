<template>
    <div >
        <div class="right">
                <ul>
                    <li v-for="(item,a) in news" :key="a">
                        <router-link :to="{path:'Content',query:{exchange_id:item.id}}">{{item.title}}</router-link>
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
            // 没个数组是12组数据，一页
            news1:[
                // content为内容
                {id:"13",img:"../img/1536070799133520.jpg",title:"赵玲英国欧洲有限公司营业执照",time:"2018-09-04",content:""},
                {id:"12",img:"../img/1536070787781537.jpg",title:"赵玲香港亚洲有限公司营业执照",time:"2018-09-04",content:""},
                {id:"11",img:"../img/1536070765993505.jpg",title:"赵玲中医经络音乐康复指导部",time:"2018-09-04",content:""},
                {id:"10",img:"../img/1535378146291050.jpg",title:"焦作市解放区站前路赵玲音乐服务中心",time:"2018-04-24",content:""},
                {id:"09",img:"../img/1524537251130284.jpg",title:"招生展板",time:"2018-04-24",content:""},
                {id:"08",img:"../img/1524203291372230.jpg",title:"授权书",time:"2018-04-20",content:""},
                {id:"07",img:"../img/1523433923122288.jpg",title:"名片详情",time:"2018-04-11",content:""},
                {id:"06",img:"",title:"公司简介",time:"2018-04-09",content:"新创的学科、新兴的行业、新建的市场、新型的人才。<br>当今社会最大的竞争是人才的竞争。人才培养是家庭、社会、行业、国家发展必由之路。公司培训是充分发挥个人能力所长和成功成才之基础，是创新高效成长必经之路。<br>赵玲英国欧洲有限公司、赵玲香港亚洲有限公司拥有世界唯一先进的跨学科创新人才培养模式，为您提供成才成功之路。<br>歌唱经络学/经络音乐康复创始人赵玲教授研究形成的不同学科领域产业链，以“经络音乐唱响健康人生”方式用于音乐、语言、康复等不同学科，使不能自主学习传统的被动训练模式，变成了现代自主创新学习的主动训练模式。形成在人体系统运动学习模式主导下的经络歌唱训练方法，以不同综合能量形式的能量形态，在不同领域理论实践交叉融合，融会贯通训练的同时，使学习者获得省时、省力、省财和短、平、快的耗能少，成材率高的学习效果。<br>本公司培训具有“气、血、声三调一体”教学特色：魔术般的教学、魔法般的训练、魔幻般的感受；具有省时、省力、省财教学优势：短、平、快，耗能少，成材率高；具有发挥综合调控优势，开发歌唱经络潜能的教学风格：音乐保健康复治疗完美结合。<br>本公司专业培训与公司合作拓展公司市场运营的加盟商和教师、康复师，并拥有知识产权授权许可和保密运用，及盈利致富的专享权利，以及公司后续支持的指导培训，升级扩展各项服务等的专有技术。同时还可享有公司给予的相关福利待遇。<br>公司网站www.zhaoling-net.com公司学院www.zhaoling-net.com"},
                {id:"05",img:"",title:"音乐教授、国际针灸师——赵玲",time:"2018-04-09",content:"赵玲，女，1956年4月生。黑龙江哈尔滨人。歌唱经络学/经络音乐康复创始人。音乐教授、国际针灸师。中国民间中医医药研究开发协会经络诊疗研究专业委员会委员，世界中医药学会联合会中医特色诊疗专业委员会委员，中国音乐治疗学会会员，中国未来研究会会员，中国音乐著作权协会会员，中国医药教育协会会员，高级注册咨询师（文化艺术教育类）。1978年毕业于河南大学艺术学院音乐系。2003年中国艺术研究院音乐学硕士研究生课程班结业。2006年获得中医中级按摩师资格。2007年焦作市中医药学校中西医结合专业毕业。先后任职于河南师范大学、河南安阳师范学院、河南焦作师范高等专科学校等院校。2006年曾创建焦作市赵玲文化艺术研究所并任所长。2016年创办赵玲香港亚洲有限公司、赵玲英国欧洲有限公司（www.woling-int.com）并任董事长、总经理。为更好地传播创新理念，创建了公司的网络学院（www.zhaoling-int.com）及公司中国联络处：焦作市解放区站前路赵玲音乐服务中心和赵玲中医经络音乐康复指导部。<br>主要研究方向：歌唱经络学、音乐治疗学、音乐学理论与教学方法研究、中医音乐康复养生与治疗。<br>数十年来，不断探索音乐教学结合不同学科领域研究的新经验、新理论和新方法。将音乐、中医相关理论和实验研究方法，创造性运用于音乐中医结合理论与操作实践。创立了歌唱经络控制系统理论及实验研究方法，拓宽了经络理论和经穴刺激手法的应用研究领域，促进了音乐和中医科学的研究与改革，开创了经络音乐康复疗法理论和实践范畴，丰富发展了传统医学理论与实践。提出的歌唱经络学和歌唱学理论体系及框架结构，将音乐学相关边缘和交叉分支学科理论及实验研究方法，创新拓展成为一个多学科综合交叉，以歌唱学体系建立和研究为基础的新的学科研究领域和学科体系——歌唱经络学。<br>撰写论文60余篇。创作发表歌曲《江南女子》等180余首。发表论文《歌唱学体系建立的理论构想》（2003年首届全国人文社会科学优秀学术文献一等奖、2009年第六届中国教育家大会优秀论文一等奖）、《歌唱经络控制系统理论的建立与展望》（2000年二十世纪国际医坛会议最佳学术成果奖、2004年河南省教育系统科研成果一等奖）、《刺激内关穴前后心率变化对歌唱发音的影响作用》（1999年紫荆花医学金奖）、《刺激翳风穴对歌唱声区扩展与统一的影响》（1999年美国柯尔比科学文化信息中心优秀医药学论文）、《刺激印堂穴促进歌唱音域扩展统一作用的实验》（2008年河南省教育厅优秀科研论文二等奖）、《经穴刺激手法在歌唱教学训练中的运用》（2007年河南省教育科学研究优秀成果二等奖）、《高师音乐视听唱记忆能力差异的比较》（2001年河南省教育系统科研成果二等奖）、《歌唱中的经络控制》（2006年第六届中国名医论坛优秀论文一等奖）、《谈音乐中数学的表现方式》（2009年第六届中国教育家大会优秀论文一等奖）、《经穴刺激用于歌唱发音的理论与实践》获2013年世界针灸学会联合会“针灸风采全球行”洛阳站国际针灸绝技现场演示交流大会论文一等奖等30余篇。国内领先项目《经络理论在歌唱艺术训练中的应用研究》项目（2007年河南省科学技术成果、焦作市科技进步三等奖）。《歌唱经络学研究——经穴刺激用于歌唱发音的理论与实践》入选2013年澳大利亚悉尼“世界针灸学会联合会第八届会员大会暨世界针灸学术大会”并作大会演讲。2014年12月“第十一届中国教育家大会” 《歌唱经络学研究——经穴刺激用于歌唱发音的理论与实践》论文获一等奖并作大会演讲。2016年9月论文《歌唱经络控制系统应用的理论与实践》获中国中医科学院举办的世界中联中医特色诊疗研究专业委员会换届大会暨第九届中医特色诊疗国际学术年会“优秀论文奖”。2016年10月中、英文文章《穴控歌唱“气、血、声‘三调一体’” 康复老年痴呆与退行性耳聋案例观察》参加中国瑞典老年病防治国际学术年会交流。<br>《歌唱经络控制体系理论的建立与展望》2000年被美国科学传记学会提名为千禧年“世界科学名人”，载入《世界科学名人录》；《经穴刺激影响歌唱发音作用的探讨》获2008年亚洲教育改革论坛东京高峰会“21世纪亚洲教育改革创新奖”，2013年载入《世界人物辞海8华人卷》和《新版世界名人录》。<br>原创学术专著《歌唱经络学研究》（中国科学技术出版社2006年8月出版）（2007年河南省教育厅人文社会科学优秀成果一等奖、2008年焦作市社会科学优秀成果一等奖）；《歌唱经络学》（上册：经络应用歌唱艺术的理论与实践；下册：气、血、声“三调一体”歌唱教学与实践）（东北师范大学出版社2014年12月出版）。2016年8月出版《歌唱经络学理论实践研究》、2017年3月出版《歌唱经络学概论》、《歌唱经络学操作实践》、2017年4月《歌唱经络学教程》、2017年6月《人体歌唱经络学》、2017年10月《汉语口语穴控速成教程——歌唱经络学应用实践之一》（均由德国金琅学术出版社出版，中文版并全球发行）。2017年6月英文文章Observation of “’Integration  of  Breath，Blood and Voice” Acupoint Control Singing to Rehabilitate Senile Dementia and Degenerative Deafness Cases（《穴控歌唱“气、血、声‘三调一体’” 康复老年痴呆与退行性耳聋案例观察》），刊登在美国《中国医学科学杂志》卷146月刊。2017年11月加入张仲景博物馆国医公益讲师团。<br>赵玲英国欧洲有限公司赵玲香港亚洲有限公司（www.woling-int.com）中国联络处地址：河南省解放区站前路中原不动产综合楼5单元15号  Email：<br>807649192@qq.com   hengling2005@163.com<br>联系电话（微信同）(86)15346551658  18515438821  邮编454002  <br>通讯地址:中国河南省焦作市山阳区广场花园A座03-3号<br>2018年4月8日"},
                {id:"04",img:"",title:"培训报名表",time:"2018-04-09",content:"1、是否愿意加盟赵玲英国欧洲有限公司和赵玲香港亚洲有限公司，作为公司在中国联络处——焦作市解放区站前路赵玲音乐服务中心或赵玲中医经络音乐康复指导部？（是/否）<br> 2、是否愿意与赵玲英国欧洲有限公司和赵玲香港亚洲有限公司中国联络处——焦作市解放区站前路赵玲音乐服务中心或赵玲中医经络音乐康复指导部签署《知识产权授权使用许可合同》和《知识产权保密协议》？（是/否）<br>公司网站 www.woling-int.com    公司学院网站 www.zhaoling-int.com"},
                {id:"03",img:"",title:"知识产权授权使用许可合同",time:"2017-06-29",content:""},
                {id:"02",img:"",title:"知识产权保密协议",time:"2017-06-07",content:""},
            ],
            news2:[
                {id:"01",img:"",title:"加盟中医经络音乐康复指导部 机构盈利模式 （讨论稿）",time:"2017-06-07",content:""},
            ]
        }

    },
    created(){
        if(this.pages==1){
            var n=[];
            Object.assign(n,this.news1)
            this.news=n;
        }
        // localStorage.setItem('imgurl', '../../static/img/top11.jpg');
        this.$emit("childclose",require("../../static/img/top11.jpg"));
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
 