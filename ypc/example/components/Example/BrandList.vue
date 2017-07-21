<template>
  <div id="lxl" style=" height: 100%;overflow: scroll;position: absolute; width: 100%; left:20%;-webkit-overflow-scrolling : touch;">
  <button @click="cleanBrandList">cleanBrandListChecked</button>
    <ypc-brandlist @getbrand="getbrand" :parentClear="parentClear" :brandList="brandList" :checkedBrandList="checkedBrandList":parentRef="'#lxl'"></ypc-brandlist>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        brand: [],
        parentClear:1,
        checkedBrandList:[ {
                    "enName": "chifengwanze",
                    "id": 974698,
                    "level": 0,
                    "name": "赤峰万泽",
                    "priority": 0,
                    "urlcode": "c"
                },
                 {
                    "enName": "",
                    "id": 948202,
                    "level": 0,
                    "name": "晶珠",
                    "priority": 0,
                    "urlcode": "j"
                }],
        brandList:{
            "C": [
                {
                    "enName": "chifengwanze",
                    "id": 974698,
                    "level": 0,
                    "name": "赤峰万泽",
                    "priority": 0,
                    "urlcode": "c"
                }
            ],
            "J": [
                {
                    "enName": "",
                    "id": 948202,
                    "level": 0,
                    "name": "晶珠",
                    "priority": 0,
                    "urlcode": "j"
                }
            ],
            "L": [
                {
                    "enName": "null",
                    "id": 967704,
                    "level": 0,
                    "name": "凌科森",
                    "priority": 0,
                    "urlcode": "l"
                }
            ],
            "Q": [
                {
                    "enName": "",
                    "id": 967112,
                    "level": 0,
                    "name": "千白",
                    "priority": 2,
                    "urlcode": "q"
                },
                {
                    "enName": "qlz",
                    "id": 972102,
                    "level": 0,
                    "name": "奇灵珍",
                    "priority": 0,
                    "urlcode": "q"
                },
                {
                    "enName": "qixiao",
                    "id": 968700,
                    "level": 0,
                    "name": "祺笑",
                    "priority": 0,
                    "urlcode": "q"
                },
                {
                    "enName": "null",
                    "id": 968067,
                    "level": 0,
                    "name": "其他",
                    "priority": 0,
                    "urlcode": "q"
                }
            ],
            "S": [
                {
                    "enName": "sn",
                    "id": 968171,
                    "level": 0,
                    "name": "速宁",
                    "priority": 0,
                    "urlcode": "s"
                }
            ],
            "T": [
                {
                    "enName": "tk",
                    "id": 969724,
                    "level": 0,
                    "name": "天康",
                    "priority": 0,
                    "urlcode": "t"
                },
                {
                    "enName": "null",
                    "id": 967902,
                    "level": 0,
                    "name": "妥塞敏",
                    "priority": 0,
                    "urlcode": "t"
                },
                {
                    "enName": "TF",
                    "id": 967273,
                    "level": 0,
                    "name": "天峰",
                    "priority": 0,
                    "urlcode": "t"
                }
            ],
            "W": [
                {
                    "enName": "wanzezhiyao",
                    "id": 973992,
                    "level": 0,
                    "name": "万泽制药",
                    "priority": 0,
                    "urlcode": "w"
                }
            ],
            "X": [
                {
                    "enName": "",
                    "id": 913275,
                    "level": 0,
                    "name": "信谊",
                    "priority": 0,
                    "urlcode": "x"
                }
            ],
            "Y": [
                {
                    "enName": "yonglepai",
                    "id": 969137,
                    "level": 0,
                    "name": "永乐牌",
                    "priority": 0,
                    "urlcode": "y"
                }
            ]
        }
      }
    },
    methods: {
      getbrand(o) {
        console.log(o)
       this.brand =o;
     },
    cleanBrandList(){
     this.parentClear++;
    }
   }
 }
</script>

<style lang="sass">
  em{
    color:red;
  }
</style>
