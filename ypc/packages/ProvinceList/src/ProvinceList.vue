<template>
 <div class="province">

  <div class="province_content">
    <div class="province_group">
      <ul>
       <span v-if="hotProvinceList.length>0">
        <li   data-group="常用省份">常用省份</li>
        <li v-for="provice in hotProvinceList " @click="setPoint(provice)">{{provice.provinceName}}</li>
      </span>
      <span v-for="key in Object.keys(provinceList)">
       <li :data-group="key" :ref="key" > {{key}}</li>
       <li v-for="provice in provinceList[key] " @click="setPoint(provice)">{{provice.provinceName}}</li>
     </span>

   </ul>

 </div>
</div>


<div class="province_list_bar" ref = "province_list_bar">
  <ul>
    <li v-for="key in Object.keys(provinceList)"  :data-index="key">{{key}}</li>

  </ul>
</div>
<transition name="fade" >
 <div v-show="showTips" class="province_tips" ref="provinceTips" >A</div>
</transition>
<!--  -->

</div>
</template>

<script>
  export default {
    name: 'ypc-provincelist',
    data() {
      return {
        showTips:false,
        clearTime:'',
        provinces:[{
          "id": 107,
          "isDeleted": 0,
          "provinceId": "5",
          "provinceName": "江苏",
          "showOrder": 97,
          "site": "2"
        }, {
          "id": 110,
          "isDeleted": 0,
          "provinceId": "14",
          "provinceName": "福建",
          "showOrder": 0,
          "site": "3"
        }, {
          "id": 112,
          "isDeleted": 0,
          "provinceId": "16",
          "provinceName": "山东",
          "showOrder": 90,
          "site": "1"
        }, {
          "id": 99,
          "isDeleted": 0,
          "provinceId": "3",
          "provinceName": "天津",
          "showOrder": 94,
          "site": "1"
        }, {
          "id": 123,
          "isDeleted": 0,
          "provinceId": "25",
          "provinceName": "西藏",
          "showOrder": 0,
          "site": "3"
        }, {
          "id": 120,
          "isDeleted": 0,
          "provinceId": "12",
          "provinceName": "四川",
          "showOrder": 95,
          "site": "3"
        }, {
          "id": 98,
          "isDeleted": 0,
          "provinceId": "2",
          "provinceName": "北京",
          "showOrder": 99,
          "site": "1"
        }, {
          "id": 126,
          "isDeleted": 0,
          "provinceId": "28",
          "provinceName": "青海",
          "showOrder": 0,
          "site": "2"
        }, {
          "id": 104,
          "isDeleted": 0,
          "provinceId": "10",
          "provinceName": "吉林",
          "showOrder": 82,
          "site": "2"
        }, {
          "id": 121,
          "isDeleted": 0,
          "provinceId": "23",
          "provinceName": "贵州",
          "showOrder": 93,
          "site": "3"
        }, {
          "id": 125,
          "isDeleted": 0,
          "provinceId": "27",
          "provinceName": "甘肃",
          "showOrder": 0,
          "site": "2"
        }, {
          "id": 108,
          "isDeleted": 0,
          "provinceId": "6",
          "provinceName": "浙江",
          "showOrder": 96,
          "site": "2"
        }, {
          "id": 100,
          "isDeleted": 0,
          "provinceId": "4",
          "provinceName": "河北",
          "showOrder": 78,
          "site": "1"
        }, {
          "id": 127,
          "isDeleted": 0,
          "provinceId": "30",
          "provinceName": "宁夏",
          "showOrder": 0,
          "site": "2"
        }, {
          "id": 113,
          "isDeleted": 0,
          "provinceId": "17",
          "provinceName": "河南",
          "showOrder": 89,
          "site": "2"
        }, {
          "id": 119,
          "isDeleted": 0,
          "provinceId": "7",
          "provinceName": "重庆",
          "showOrder": 84,
          "site": "3"
        }, {
          "id": 124,
          "isDeleted": 0,
          "provinceId": "26",
          "provinceName": "陕西",
          "showOrder": 91,
          "site": "1"
        }, {
          "id": 105,
          "isDeleted": 0,
          "provinceId": "11",
          "provinceName": "黑龙江",
          "showOrder": 83,
          "site": "2"
        }, {
          "id": 109,
          "isDeleted": 0,
          "provinceId": "13",
          "provinceName": "安徽",
          "showOrder": 0,
          "site": "2"
        }, {
          "id": 115,
          "isDeleted": 0,
          "provinceId": "19",
          "provinceName": "湖南",
          "showOrder": 87,
          "site": "3"
        }, {
          "id": 122,
          "isDeleted": 0,
          "provinceId": "24",
          "provinceName": "云南",
          "showOrder": 92,
          "site": "3"
        }, {
          "id": 111,
          "isDeleted": 0,
          "provinceId": "15",
          "provinceName": "江西",
          "showOrder": 0,
          "site": "3"
        }, {
          "id": 102,
          "isDeleted": 0,
          "provinceId": "8",
          "provinceName": "内蒙古",
          "showOrder": 80,
          "site": "2"
        }, {
          "id": 103,
          "isDeleted": 0,
          "provinceId": "9",
          "provinceName": "辽宁",
          "showOrder": 81,
          "site": "1"
        }, {
          "id": 106,
          "isDeleted": 0,
          "provinceId": "1",
          "provinceName": "上海",
          "showOrder": 100,
          "site": "2"
        }, {
          "id": 114,
          "isDeleted": 0,
          "provinceId": "18",
          "provinceName": "湖北",
          "showOrder": 88,
          "site": "3"
        }, {
          "id": 118,
          "isDeleted": 0,
          "provinceId": "22",
          "provinceName": "海南",
          "showOrder": 85,
          "site": "3"
        }, {
          "id": 101,
          "isDeleted": 0,
          "provinceId": "32",
          "provinceName": "山西",
          "showOrder": 79,
          "site": "2"
        }, {
          "id": 128,
          "isDeleted": 0,
          "provinceId": "29",
          "provinceName": "新疆",
          "showOrder": 0,
          "site": "2"
        }, {
          "id": 116,
          "isDeleted": 0,
          "provinceId": "20",
          "provinceName": "广东",
          "showOrder": 98,
          "site": "3"
        }, {
          "id": 117,
          "isDeleted": 0,
          "provinceId": "21",
          "provinceName": "广西",
          "showOrder": 86,
          "site": "3"
        }],
        hotProvinceList:[
        {
          "id": 98,
          "isDeleted": 0,
          "provinceId": "2",
          "provinceName": "北京",
          "showOrder": 99,
          "site": "1"
        },{
          "id": 106,
          "isDeleted": 0,
          "provinceId": "1",
          "provinceName": "上海",
          "showOrder": 100,
          "site": "2"
        },{
          "id": 116,
          "isDeleted": 0,
          "provinceId": "20",
          "provinceName": "广东",
          "showOrder": 98,
          "site": "3"
        },{
          "id": 108,
          "isDeleted": 0,
          "provinceId": "6",
          "provinceName": "浙江",
          "showOrder": 96,
          "site": "2"
        },{
          "id": 107,
          "isDeleted": 0,
          "provinceId": "5",
          "provinceName": "江苏",
          "showOrder": 97,
          "site": "2"
        }
        ],
        provinceList:{
         "A": [
         {
          "id": 109,
          "isDeleted": 0,
          "provinceId": "13",
          "provinceName": "安徽",
          "showOrder": 0,
          "site": "2"
        }
        ],
        "B": [
        {
          "id": 98,
          "isDeleted": 0,
          "provinceId": "2",
          "provinceName": "北京",
          "showOrder": 99,
          "site": "1"
        }
        ],
        "C": [
        {
          "id": 119,
          "isDeleted": 0,
          "provinceId": "7",
          "provinceName": "重庆",
          "showOrder": 84,
          "site": "3"
        }
        ],
        "F": [
        {
          "id": 110,
          "isDeleted": 0,
          "provinceId": "14",
          "provinceName": "福建",
          "showOrder": 0,
          "site": "3"
        }
        ],
        "G": [
        {
          "id": 125,
          "isDeleted": 0,
          "provinceId": "27",
          "provinceName": "甘肃",
          "showOrder": 0,
          "site": "2"
        },
        {
          "id": 116,
          "isDeleted": 0,
          "provinceId": "20",
          "provinceName": "广东",
          "showOrder": 98,
          "site": "3"
        },
        {
          "id": 117,
          "isDeleted": 0,
          "provinceId": "21",
          "provinceName": "广西",
          "showOrder": 86,
          "site": "3"
        },
        {
          "id": 121,
          "isDeleted": 0,
          "provinceId": "23",
          "provinceName": "贵州",
          "showOrder": 93,
          "site": "3"
        }
        ],
        "H": [
        {
          "id": 118,
          "isDeleted": 0,
          "provinceId": "22",
          "provinceName": "海南",
          "showOrder": 85,
          "site": "3"
        },
        {
          "id": 100,
          "isDeleted": 0,
          "provinceId": "4",
          "provinceName": "河北",
          "showOrder": 78,
          "site": "1"
        },
        {
          "id": 113,
          "isDeleted": 0,
          "provinceId": "17",
          "provinceName": "河南",
          "showOrder": 89,
          "site": "2"
        },
        {
          "id": 105,
          "isDeleted": 0,
          "provinceId": "11",
          "provinceName": "黑龙江",
          "showOrder": 83,
          "site": "2"
        },
        {
          "id": 114,
          "isDeleted": 0,
          "provinceId": "18",
          "provinceName": "湖北",
          "showOrder": 88,
          "site": "3"
        },
        {
          "id": 115,
          "isDeleted": 0,
          "provinceId": "19",
          "provinceName": "湖南",
          "showOrder": 87,
          "site": "3"
        }
        ],
        "J": [
        {
          "id": 104,
          "isDeleted": 0,
          "provinceId": "10",
          "provinceName": "吉林",
          "showOrder": 82,
          "site": "2"
        },
        {
          "id": 107,
          "isDeleted": 0,
          "provinceId": "5",
          "provinceName": "江苏",
          "showOrder": 97,
          "site": "2"
        },
        {
          "id": 111,
          "isDeleted": 0,
          "provinceId": "15",
          "provinceName": "江西",
          "showOrder": 0,
          "site": "3"
        }
        ],
        "L": [
        {
          "id": 103,
          "isDeleted": 0,
          "provinceId": "9",
          "provinceName": "辽宁",
          "showOrder": 81,
          "site": "1"
        }
        ],
        "N": [
        {
          "id": 102,
          "isDeleted": 0,
          "provinceId": "8",
          "provinceName": "内蒙古",
          "showOrder": 80,
          "site": "2"
        },
        {
          "id": 127,
          "isDeleted": 0,
          "provinceId": "30",
          "provinceName": "宁夏",
          "showOrder": 0,
          "site": "2"
        }
        ],
        "Q": [
        {
          "id": 126,
          "isDeleted": 0,
          "provinceId": "28",
          "provinceName": "青海",
          "showOrder": 0,
          "site": "2"
        }
        ],
        "S": [
        {
          "id": 112,
          "isDeleted": 0,
          "provinceId": "16",
          "provinceName": "山东",
          "showOrder": 90,
          "site": "1"
        },
        {
          "id": 124,
          "isDeleted": 0,
          "provinceId": "26",
          "provinceName": "陕西",
          "showOrder": 91,
          "site": "1"
        },
        {
          "id": 101,
          "isDeleted": 0,
          "provinceId": "32",
          "provinceName": "山西",
          "showOrder": 79,
          "site": "2"
        },
        {
          "id": 106,
          "isDeleted": 0,
          "provinceId": "1",
          "provinceName": "上海",
          "showOrder": 100,
          "site": "2"
        },
        {
          "id": 120,
          "isDeleted": 0,
          "provinceId": "12",
          "provinceName": "四川",
          "showOrder": 95,
          "site": "3"
        }
        ],
        "T": [
        {
          "id": 99,
          "isDeleted": 0,
          "provinceId": "3",
          "provinceName": "天津",
          "showOrder": 94,
          "site": "1"
        }
        ],
        "X": [
        {
          "id": 128,
          "isDeleted": 0,
          "provinceId": "29",
          "provinceName": "新疆",
          "showOrder": 0,
          "site": "2"
        },
        {
          "id": 123,
          "isDeleted": 0,
          "provinceId": "25",
          "provinceName": "西藏",
          "showOrder": 0,
          "site": "3"
        }
        ],
        "Y": [
        {
          "id": 122,
          "isDeleted": 0,
          "provinceId": "24",
          "provinceName": "云南",
          "showOrder": 92,
          "site": "3"
        }
        ],
        "Z": [
        {
          "id": 108,
          "isDeleted": 0,
          "provinceId": "6",
          "provinceName": "浙江",
          "showOrder": 96,
          "site": "2"
        }
        ]
      }
    }
  },
  mounted(){
    this.initProvince();
    var that = this;
    this.$refs.province_list_bar.addEventListener("touchmove", function(event) {
      that.findStart(event);
    }, false);
    this.$refs.province_list_bar.addEventListener("touchstart", function(event) {
     that.findStart(event);
   }, false);
    document.body.addEventListener("touchend", function(event) {

     }, false);
    document.body.addEventListener("touchcancel", function(event) {

     }, false);
  },
  methods: {
    findStart(event){
      var point = event.changedTouches ? event.changedTouches[0] : event;
      var pointElement = document.elementFromPoint(event.changedTouches[0].clientX,event.changedTouches[0].clientY);
      var key;
      if(pointElement){
       key = pointElement.dataset.index;
     }
     if(key){
       this.toFixed(key)
     }
     event.preventDefault();
   },
   toFixed(key){
     this.showTips=true;
     clearTimeout(this.clearTime);
     let time = 800;
     this.$refs.provinceTips.innerText=key;
     this.clearTime = setTimeout(()=>{ this.showTips=false},time)
     window.scroll(0,this.$refs[key][0].offsetTop-50)
   },
   setPoint(o) {
    this.$emit('getprovince', o)

  },
  initProvince(){
   this.xhr("https://api.map.baidu.com/location/ip?ak=6TixWjvsj5t1idFllzMx2yUgAvkGbHHi",(data)=>{
     let provinceName =  data.content.address_detail.province;

     for(var i = 0; i <this.provinces.length;i++  ){
      if(provinceName&& provinceName.indexOf(this.provinces[i].provinceName)>-1){
       this.$emit('initProvince',this.provinces[i]);
       return;
     }
   }
   this.$emit('initProvince',null);

 })
 },
 xhr(url, data, method, callback) {
  url = url || "";
  data = data || {};
  method = method || "";
  callback = callback || function() {};
  var getKeys = function(obj) {
    var keys = [];
    for(var key in obj) {
      if(obj.hasOwnProperty(key)) {
        keys.push(key)
      }
    }
    return keys
  };
  if(typeof data == "object") {
    var queryString = "";
    var keys = getKeys(data);
    for(var i = 0; i < keys.length; i++) {
      queryString += encodeURIComponent(keys[i]) + "=" + encodeURIComponent(data[keys[i]]);
      if(i != keys.length - 1) {
        queryString += "&"
      }
    }
    url += "" + queryString
  } else {
    if(typeof data == "function") {
      method = data;
      callback = method
    }
  }
  if(typeof method == "function") {
    callback = method;
    method = "callback"
  }
  if(!Date.now) {
    Date.now = function() {
      return new Date().getTime()
    }
  }
  var timestamp = Date.now();
  var generatedFunction = "jsonp" + Math.round(timestamp + Math.random() * 1000001);
  window[generatedFunction] = function(json) {
    callback(json);
    try {
      delete window[generatedFunction]
    } catch(e) {
      window[generatedFunction] = undefined
    }
  };
  if(url.indexOf("?") === -1) {
    url = url + "?"
  } else {
    url = url + "&"
  }
  var jsonpScript = document.createElement("script");
  jsonpScript.setAttribute("src", url + method + "=" + generatedFunction);
  document.getElementsByTagName("head")[0].appendChild(jsonpScript)
}
}
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  a {
    color: #333;
    text-decoration: none;
  }
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
  html,
  body {
    font-size: 0.32rem;
    color: #333;
    height: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  body,
  ul,
  li,
  dl,
  dt,
  dd,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  input {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-family: "Microsoft YaHei", tahoma, arial;
  }
  ul,
  li {
    list-style: none;
  }
  i,
  em {
    font-style: normal;
  }
  input,
  textarea {
    -webkit-appearance: none;
    margin: 0;
    padding: 0;
  }
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
  input[type="text"],
  input[type="password"],
  input[type="search"],
  input[type="tel"],
  input[type="number"],
  input[type="email"],
  input[type="url"],
  textarea {
    -webkit-appearance: none;
    border: 1px solid;
  }
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::-webkit-input-placeholder {
    color: #ccc;
  }
  .float {
    float: left;
  }
  .iconfont {
    font-size: 0.53333333rem;
    color: #ccc;
  }
  .icon_check {
    color: #FF6666;
  }
  .page {
    width: 100%;
  }
  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-touch-callout: none;
  }
  html {
    background: #F7F7F7;
  }
  .province {
    margin: 0 auto;
  }



  .province_content .province_group {
    font-size: 0.37333333rem;
    color: #6C6C6C;
    background: #fff;
  }
  .province_content .province_group ul li {
    padding: 0 0.4rem;
    height: 1.06666667rem;
    line-height: 1.06666667rem;
    display: block;
    border-bottom: 1px solid #dbdbdb;
  }
  .province_content .province_group ul li[data-group] {
    height: 0.85333333rem;
    line-height: 0.85333333rem;
    background: #F7F7F7;
  }
  .province_list_bar {
    position: fixed;
    top: 0;
    right: 0;
    width: 0.90666667rem;
    height: 100%;
    z-index: 900;
  }
  .province_list_bar ul {
    position: absolute;
    top: 50%;
    right: 0.26666667rem;
    width: 0.64rem;
    padding: 0.26666667rem 0;
    margin: 0;
    font-size: 0.37333333rem;
    line-height: 0.64rem;
    color: #fff;
    text-align: center;
    border-radius: 0.32rem;
    background: rgba(0, 0, 0, 0.4);
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
  }
  .province_tips {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 1.6rem;
    height: 1.6rem;
    margin-top: -0.8rem;
    margin-left: -0.8rem;
    font-size: 0.64rem;
    line-height: 1.6rem;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 901;
  }
  .province_pop {
    position: relative;
    z-index: 9999;
  }
  .province_pop * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .province_pop .province_pop_shade,
  .province_pop .province_pop_box {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
  .province_pop .province_pop_shade {
    background: rgba(0, 0, 0, 0.3);
  }
  .province_pop .province_pop_box {
    display: table;
  }
  .province_pop .province_pop_content {
    position: relative;
    display: inline-block;
    text-align: left;
    background-color: #F4F2F3;
    font-size: 0.42666667rem;
    color: #030303;
    border-radius: 5px;
    width: 80%;
    overflow: hidden;
  }
  .province_pop .province_pop_cell {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .province_pop .province_pop_top {
    font-size: 0.45333333rem;
    height: 1.33333333rem;
    line-height: 0.53333333rem;
    padding: 0.53333333rem 0.53333333rem 0.26666667rem 0.53333333rem;
    text-align: center;
  }
  .province_pop .province_pop_text {
    padding: 0.26666667rem 0.53333333rem 0.53333333rem 0.53333333rem;
  }
  .province_pop .province_pop_tc {
    text-align: center;
  }
  .province_pop .province_pop_footer {
    display: box;
    display: -moz-box;
    display: -webkit-box;
    width: 100%;
    height: 1.33333333rem;
    line-height: 1.33333333rem;
    font-size: 0;
    text-align: center;
    border-top: 1px solid #DBDBDB;
    background-color: #F5F5F5;
    color: #0076FF;
  }
  .province_pop .province_pop_footer span {
    position: relative;
    display: block;
    width: 50%;
    font-size: 0.45333333rem;
    text-align: center;
    cursor: pointer;
  }
  .province_pop .province_pop_footer span[no] {
    border-right: 1px solid #DBDBDB;
  }
</style>
