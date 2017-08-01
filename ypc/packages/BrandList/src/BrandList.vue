  <template>
   <div class="brand">

    <div class="brand_content">
      <div class="brand_group">
        <ul>
          <span v-for="key in Object.keys(brandList)">
           <li :data-group="key" :ref="key" > {{key}}</li>
           <li v-for="(brand,i) in brandList[key] " @click="setBrand(brand,key,i)" :class="{checked:brand.checked}">{{brand.name}}</li>
         </span>

       </ul>

     </div>
   </div>


   <div class="brand_list_bar" ref = "brand_list_bar">
    <ul>
      <li v-for="key in Object.keys(brandList)"  :data-index="key">{{key}}</li>

    </ul>
  </div>
  <transition name="fade" >
   <div v-show="showTips" class="brand_tips" ref="brandTips" >A</div>
 </transition>
 <!--  -->

</div>
</template>

<script>
  export default {
    name: 'ypc-brandlist',
    data() {
      return {
        showTips:false,
        clearTime:'',
        checkedList:[]
      }
    },
    props:{
     brandList:{
       type: Object
     },
     parentClear :{
       type: Number
     },
     parentRef:{
       type: String,
       default: function () {
        return '';
      }
    },
     checkedBrandList:{
       type: Array,
       default: function () {
        return []
      }
    }
  },
  mounted(){

    Object.keys(this.brandList).forEach((value)=> {
     this.brandList[value].forEach((v,index)=>{
       this.checkedBrandList.map((x,i)=>{
         if(x.id== this.brandList[value][index].id){
          this.$set( this.brandList[value][index], "checked", true );
          this.checkedList.push(this.brandList[value][index]);
        }
      })
     })
   });


     // this.brandList["L"][0].checked=true;
     var that = this;
     this.$refs.brand_list_bar.addEventListener("touchmove", function(event) {
      that.findStart(event);
    }, false);
     this.$refs.brand_list_bar.addEventListener("touchstart", function(event) {
       that.findStart(event);
     }, false);
     document.body.addEventListener("touchend", function(event) {

     }, false);
     document.body.addEventListener("touchcancel", function(event) {

     }, false);
   },
   watch:{
   parentClear(){
     Object.keys(this.brandList).forEach((value)=> {
     this.brandList[value].forEach((v,index)=>{
       this.$set( this.brandList[value][index], "checked", false );
     })
   });
    this.checkedList.length=0;
       this.$emit('getbrand', [])
   }
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
     this.$refs.brandTips.innerText=key;
     this.clearTime = setTimeout(()=>{ this.showTips=false},time)
     if(this.parentRef){
     document.querySelector(this.parentRef).scrollTop=this.$refs[key][0].offsetTop;
     }else{
      window.scroll(0,this.$refs[key][0].offsetTop-50)
     }

   },
   setBrand(o,key,i) {

    let k  =this.brandList[key][i];
    if(!k.checked){
     this.$set(k, "checked", true )
     this.checkedList.push(o)
   }else{
    if(k.checked){
     k.checked =false;
   }else{
    k.checked=true;
    this.checkedList.push(o)
  }
}
let c= [];
this.checkedList =  this.checkedList.map(x=>{
  if(x&&x.checked){
    c.push(x);
    return x;
  }
})
this.$emit('getbrand', c)
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
a{
  color: #333;
  text-decoration: none;

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
.brand {
  margin: 0 auto;
}
/* 全部分类 */
.brand_content .brand_group {
  font-size: 0.37333333rem;
  color: #6C6C6C;
  background: #fff;
}
.brand_content .brand_group ul li {
  position: relative;
  padding: 0 0.4rem 0 1.06666667rem;
  height: 1.06666667rem;
  line-height: 1.06666667rem;
  display: block;
  border-bottom: 1px solid #dbdbdb;
}
.brand_content .brand_group ul li:active {
  background: #F7F7F7;
}
.brand_content .brand_group ul li[data-group] {
  height: 0.85333333rem;
  line-height: 0.85333333rem;
  background: #F7F7F7;
  padding: 0 0.4rem;
}
.brand_content .brand_group ul .checked {
  color: #E54858;
}
.brand_content .brand_group ul .checked:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0.45333333rem;
  width: 0.21333333rem;
  height: 0.05333333rem;
  margin-top: 0.05333333rem;
  background: #E54858;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  opacity: .75;
  -webkit-opacity: .75;
}
.brand_content .brand_group ul .checked:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0.4rem;
  width: 0.42666667rem;
  height: 0.05333333rem;
  background: #E54858;
  margin-top: 0.10666667rem;
  transform: rotate(140deg) translateX(-50%);
  -webkit-transform: rotate(140deg) translateX(-50%);
  opacity: .75;
  -webkit-opacity: .75;
}
.brand_list_bar {
  position: fixed;
  top: 0;
  right: 0;
  width: 1.28rem;
  height: 100%;
  z-index: 900;
}
.brand_list_bar ul {
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
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.4);
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}
.brand_tips {
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

</style>
