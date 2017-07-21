<template>
  <div>
    选择的值是： <em> {{province.provinceName}} </em>省份的ID是： <em>{{province.provinceId}} </em>
    <ypc-provincelist @getprovince="getprovince" @initProvince="initProvince"></ypc-provincelist>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        province: ""

      }
    },
    methods: {
      getprovince(o) {
       this.province =o;
     },
     initProvince(province){
      console.log(province)
     }
   }
 }
</script>

<style lang="sass">
  em{
    color:red;
  }
</style>
