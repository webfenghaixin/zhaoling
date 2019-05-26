<template>
    <div >
        <div class="right">
            <div id="l-map"></div>
	        <div id="r-result"></div>
        </div>
    </div>
</template>
<script>
export default {
      name: "bdMap",
      components: {},
      data() {
          return {};
      },
      created(){
          this.$emit("childclose",require("../../static/img/top9.jpg"));
      },
      mounted() {
        var sContent ="赵玲英国欧洲有限公司 趙玲香港亞洲有限公司<br>联系人：赵老师<br>手　机：13083834861（公司）/17796688474（网院）<br>邮　箱：zhaoling@zhaoling-net.com<br>地　址：焦作市解放区站前路中原不动产综合楼5单元15号市内乘坐16路公交车，到市住建局站下车即到";
        var map = new BMap.Map("l-map");
        var point = new BMap.Point(113.24981,35.232938);
        map.centerAndZoom(point, 15);
        var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
        map.openInfoWindow(infoWindow,point); //开启信息窗口
        }
  };
</script>
<style scoped>
*{margin: 0;padding: 0;}
    #allmap
    {width: 100%;height: 100%;margin:0;font-family:"微软雅黑";font-size:14px;}
	#l-map{height:460px;width:600px;margin: auto;}
	#r-result{width:300px;}
.right{
    width: 704px;
    /* height: 3089px; */
    float: right;
    margin-right: 24px;
}

 </style>
 