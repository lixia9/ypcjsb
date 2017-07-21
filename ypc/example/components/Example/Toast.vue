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

<style lang="sass">
  .page-title {
    margin: 0 auto 40px;
    height: 130px;
    line-height: 130px;
    font-size: 40px;
    background: #C60A1E;
  }
  .form-item {
    height: 100px;
    line-height: 100px;
    padding: 0 40px;
    font-size: 32px;
    background: #FFFFFF;
    margin-bottom: 2px;
  }
  .switch {
    float: right;
    top: 20px;
    right: 0;
  }
</style>
