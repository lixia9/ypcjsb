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
        "BrandList",
        "Picker",
        "Footer"

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

<style>
 .header{
  position:fixed;
  top:0;
  left:0;
  line-height:0.8571428571428571rem;
  text-align:center;
  width:100%;
  background-color:white;

 }
  body {
    font-family: Arial, "Microsoft YaHei";

    .iconfont.icon-zuosanjiao {
      font-size: 0.5142857142857142rem;
      color: #fff;
    }
  }


  .t {
    height: 1.4285714285714286rem;
    border-radius: 10px;
    background-color: #FF6666;
    line-height: 1.4285714285714286rem;
    text-align: center;
    font-weight: bold;
    color: white;
    width: 95%;
    margin: 0 auto;
    margin-top: 0.14285714285714285rem;
  }

  .t a {
    color: white;
  }

</style>
