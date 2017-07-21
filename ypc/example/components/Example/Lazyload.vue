<template>

  <div>
    <img v-lazy="imgUrl">
    <img v-lazy="imgUrl">
    <img v-lazy="imgUrl">
    <img v-lazy="imgUrl">
    <img v-lazy="imgUrl">
    <img v-lazy="imgUrl">
    <img v-lazy="imgUrl">
    <img v-lazy="imgUrltest">

  </div>

</template>

<script>
  export default {
    data() {
      return {
        imgUrl: 'http://d3.sina.com.cn/pfpghc2/201705/16/b6af95ffca99452a8520054b64843440.jpg',
        imgUrltest:"http://f12.baidu.com/it/u=792469523,4130712667&fm=76"
      }

    }

  }
</script>

<style lang="sass">

</style>
