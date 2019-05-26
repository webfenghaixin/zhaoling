<template>
    <router-view v-wechat-title='$route.meta.title'></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html{
    width: 100vw;
  }
  body{
    font-family: 宋体,"microsoft yahei","华文细黑","幼圆";
    font-size: 12px;
    color: #444;
    background: #f0f0f0;
}
</style>
