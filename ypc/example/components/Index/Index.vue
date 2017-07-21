<template>




  <div class="con">

 <div v-for="item in components"  class="t" @click.stop="toPage(item.toLocaleLowerCase())">
 {{item}}
   <!--  <router-link :to="`/${item.toLocaleLowerCase()}`">{{item}}</router-link> -->
 </div>


         </div>
</template>

<script>
export default {
  data() {
    return {
     components: [
        'Switch',
        "ProvinceList",
        "Lazyload",
        "Toast",
        "Swipe",
        "PullRefresh",
        "BrandList"

      ]
    }
  },
     methods:{
      toPage(o){
       this.$router.push(o)
      }
    }
}
</script>

<style lang="sass">
 .header{
  position:fixed;
  top:0;
  left:0;
  line-height:60px;
  text-align:center;
  width:100%;
  background-color:white;

 }
  body {
    font-family: Arial, "Microsoft YaHei";

    .iconfont.icon-zuosanjiao {
      font-size: 36px;
      color: #fff;
    }
  }


  .t {
    height: 100px;
    border-radius: 10px;
    background-color: #FF6666;
    line-height: 100px;
    text-align: center;
    font-weight: bold;
    color: white;
    width: 95%;
    margin: 0 auto;
    margin-top: 10px;
  }

  .t a {
    color: white;
  }

</style>
