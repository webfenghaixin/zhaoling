<template>
    <div >
        <div class="right">
                <ul>
                    <li>
                        <span>姓名:</span>
                        <input type="text">
                    </li>
                    <li>
                        <span>电话:</span>
                        <input type="text">
                    </li>
                    <li>
                        <span>地址:</span>
                        <input type="text">
                    </li>
                    <li>
                        <span>邮箱:</span>
                        <input type="text">
                    </li>
                    <li>
                        <span>内容:</span>
                        <textarea name="" id="" cols="70" rows="10"></textarea>
                    </li>
                    
                    <li>
                        <button @click="check">提交</button>
                    </li>
                </ul>
                <div class="tip" v-show="none">留言成功!</div>
        </div>
    </div>
</template>
<script>
 export default {
     data() {
        return{
            none:false
        }

    },
    created(){
        this.$emit("childclose",require("../../static/img/topmes.jpg"));
    },
    methods:{
        check(){
            this.none=true;
            console.log(this.none,typeof(this.none))
            setTimeout(()=>{
                this.none=false;
                this.$router.push({ path:'/Index'  })
                },1500)
        }
    },
    mounted(){}
 }
 </script>
<style scoped>
*{margin: 0;padding: 0;}
.tip{
    width: 250px;
    height: 100px;
    background: lightgreen;
    text-align: center;
    line-height: 100px;
    font-size: 22px;
    font-weight: bold;
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 10000;
}
button{
    margin-left: 87px;
    width: 78px;
    height: 30px;
    background: #ff0000;
    color: #fff;
    border: 0;
    cursor: pointer;
}
.right li textarea{
   background:url("../../static/img/sprite.png") no-repeat 0px -280px;
   border: 0;
   width: 547px;
   height: 180px;
   resize: none;
}
.right li input{
    line-height: 30px;
    border: 0;
    background:url("../../static/img/sprite.png") no-repeat 0px -240px;
    width: 278px;
}
.right li span{
    line-height: 40px;
    margin-right: 50px;
    font-weight: bold;
}
.right li:nth-child(6) input{
    width: 103px;
    background:url("../../static/img/sprite.png") no-repeat -290px -240px;
}
.right li:nth-child(6) span{
    margin-right: 44px;
}
.right li:nth-child(5) span{
    line-height: 152px;
    margin-right: 56px;
}
.right li:nth-child(5){
    display: flex;
}
.right li{
    list-style: none;
    margin: 5px 0;
}
.right{
    width: 650px;
    float: right;
    margin-right: 24px;
    margin-left: 50px;
    margin-top: 30px;
}

 </style>
 