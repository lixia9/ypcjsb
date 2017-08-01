<template>
  <div class="con">
  <ypc-footer :bottombar="bottombar":isactive="isactive" :show="show"></ypc-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:true,//是否显示破窗广告 默认不传是 显示  （只对isactive是home的时候起作用）
      bottombar:{
        cmsUrl:"//m.111.com.cn/maps/index.html?pageId=100003&type=release",
        imgUrl:"//p3.maiyaole.com/img/mobile/20176/1499397323266101.png"
      },
      isactive:"home"
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
