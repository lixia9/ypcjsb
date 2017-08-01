<template>
  <div class="con">
    <button type="button" @click="test">toast</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    test() {
        this.$Toast({
         content: "我是提示",
         duration:1000//可以不设置 默认是2秒
          })


    }

  }
}
</script>

<style>
  .page-title {
    margin: 0 auto 0.5714285714285714rem;
    height: 1.8571428571428572rem;
    line-height: 1.8571428571428572rem;
    font-size: 0.5714285714285714rem;
    background: #C60A1E;
  }
  .form-item {
    height: 1.4285714285714286rem;
    line-height: 1.4285714285714286rem;
    padding: 0 0.5714285714285714rem;
    font-size: 0.45714285714285713rem;
    background: #FFFFFF;
    margin-bottom: 0.02857142857142857rem;
  }
  .switch {
    float: right;
    top: 0.2857142857142857rem;
    right: 0;
  }
</style>
