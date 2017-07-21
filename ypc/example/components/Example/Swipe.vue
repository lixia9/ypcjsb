<template>
 <div class="con">
<ypc-swipe :show-indicators="true" :show-title="true" :auto="3000" >
  <ypc-swipe-item :title="'这是第1页的标题'">page1</ypc-swipe-item>
  <ypc-swipe-item>page2</ypc-swipe-item>
  <ypc-swipe-item>page3</ypc-swipe-item>
</ypc-swipe>


<ypc-swipe :show-indicators="false" :show-title="false" :auto="1000" >
  <ypc-swipe-item :title="'这是第1页的标题'">page1</ypc-swipe-item>
  <ypc-swipe-item>page2</ypc-swipe-item>
  <ypc-swipe-item>page3</ypc-swipe-item>
</ypc-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods:{

  },
  computed: {

  }
}
</script>

<style >
.ypc-swipe-item{
  background: gray;
  color:white;
}
</style>
