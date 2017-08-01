<template>
 <div class="footer_tab_bar">
      <div class="tab_bar_ul">
        <li>
          <a :class="{active:isactive=='home'}" href="//m.111.com.cn" data-ywpoint="0_0_0_home_1">
            <i class="icon iconfont icon_home"></i>
            <span class="tab_bar_name">首页</span>
          </a>
        </li>
        <li>
          <a  :class="{active:isactive=='category'}" href="//m.111.com.cn/yyw/wap/category/#/" data-ywpoint="0_0_0_category_2">
            <i class="icon iconfont icon_search"></i>
            <span class="tab_bar_name">找药</span>
          </a>
        </li>
        <li v-if="isactive=='home'&& show">
          <a class="tab_bar_img" :href="bottombar.cmsUrl" data-ywpoint="0_0_0_activity_5">
            <div class="tab_bar_box">
              <img :src="bottombar.imgUrl">
            </div>
          </a>
        </li>
        <li>
          <a  :class="{active:isactive=='cart'}" href="//m.111.com.cn/yyw/wap/cart/#/cartDemand/0?pageType=1" data-ywpoint="0_0_0_cart_3">
            <i class="icon iconfont icon_shopcar"></i>
            <span class="tab_bar_name">购物车</span>
          </a>
        </li>
        <li>
          <a  :class="{active:isactive=='personalcenter'}" href="//m.111.com.cn/yyw/wap/personalcenter/#/" data-ywpoint="0_0_0_my_4">
            <i class="icon iconfont icon_user"></i>
            <span class="tab_bar_name">我的</span>
          </a>
        </li>
      </div>
    </div>

</template>
<script>

export default {
  name: 'ypc-footer',
  props: {
    isactive: {
      default: 'home',
      type: String
    },
    show: {
      default: true,
      type: Boolean
    },

    bottombar: {
      default:()=>{ return {}},
      type: Object
    }
  },
  components: {

  },
  data(){
    return {
      visible: false
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.footer_tab_bar {
  position: fixed;
  height: 1.46666667rem;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  z-index: 10;
}
.footer_tab_bar .tab_bar_ul {
  border-top: 1px solid #D8D8D8;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  color: #333;
}
.footer_tab_bar .tab_bar_ul li {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 100%;
  text-align: center;
  cursor: pointer;
}
.footer_tab_bar .tab_bar_ul li .iconfont {
  font-size: 0.53333333rem;
  color: #FF6666;
}
.footer_tab_bar .tab_bar_ul li .iconfont {
  width: 0.66666667rem;
  height: 0.61333333rem;
  line-height: 0.61333333rem;
  padding-top: 0;
  padding-bottom: 0;
  font-size: 0.32rem;
  margin: 0.10666667rem auto 0 auto;
  display: block;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuwAAADICAYAAACzgrT1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5RThFQ0M4OEQwNDBFNzExOTE0M0EyMTI4MkY1RUU1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMjdCNzY1RTQwRDExMUU3QTQxOURCRTg4QzQwQUFCRCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMjdCNzY1RDQwRDExMUU3QTQxOURCRTg4QzQwQUFCRCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlGOEVDQzg4RDA0MEU3MTE5MTQzQTIxMjgyRjVFRTU2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlFOEVDQzg4RDA0MEU3MTE5MTQzQTIxMjgyRjVFRTU2Ii8+IDwvcmRmOkRlc2NyaXB0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");
  background-repeat: no-repeat;
  background-size: 9.97333333rem auto;
}
.footer_tab_bar .tab_bar_ul li .iconfont:before {
  clear: both;
  content: "";
  display: block;
  visibility: hidden;
}
.footer_tab_bar .tab_bar_ul li .icon_home {
  background-position: -1.01333333rem -1.6rem;
}
.footer_tab_bar .tab_bar_ul li .icon_search {
  background-position: -2.88rem -1.58666667rem;
}
.footer_tab_bar .tab_bar_ul li .icon_system {
  background-position: -4.74666667rem -1.58666667rem;
}
.footer_tab_bar .tab_bar_ul li .icon_shopcar {
  background-position: -6.56rem -1.58666667rem;
}
.footer_tab_bar .tab_bar_ul li .icon_user {
  background-position: -8.42666667rem -1.58666667rem;
}
.footer_tab_bar .tab_bar_ul li a {
  color: #333;
  display: block;
  padding-top: 0.08rem;
}
.footer_tab_bar .tab_bar_ul li a.active,
.footer_tab_bar .tab_bar_ul li a:active {
  color: #FF6666;
}
.footer_tab_bar .tab_bar_ul li a.active .icon_home,
.footer_tab_bar .tab_bar_ul li a:active .icon_home {
  background-position: -1.01333333rem -0.26666667rem;
}
.footer_tab_bar .tab_bar_ul li a.active .icon_search,
.footer_tab_bar .tab_bar_ul li a:active .icon_search {
  background-position: -2.88rem -0.24rem;
}
.footer_tab_bar .tab_bar_ul li a.active .icon_system,
.footer_tab_bar .tab_bar_ul li a:active .icon_system {
  background-position: -4.74666667rem -0.24rem;
}
.footer_tab_bar .tab_bar_ul li a.active .icon_shopcar,
.footer_tab_bar .tab_bar_ul li a:active .icon_shopcar {
  background-position: -6.56rem -0.24rem;
}
.footer_tab_bar .tab_bar_ul li a.active .icon_user,
.footer_tab_bar .tab_bar_ul li a:active .icon_user {
  background-position: -8.42666667rem -0.24rem;
}
.footer_tab_bar .tab_bar_ul li .tab_bar_name {
  display: block;
  font-size: 0.32rem;
}
.footer_tab_bar .tab_bar_ul li .tab_bar_img {
  position: fixed;
  left: 40%;
  bottom: 0;
  width: 20%;
  height: 1.73333333rem;
  z-index: 10;
  padding: 0;
}
.footer_tab_bar .tab_bar_ul li .tab_bar_img .tab_bar_box {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
}
.footer_tab_bar .tab_bar_ul li .tab_bar_img img {
  position: absolute;
  top: 0;
  left: 50%;
  width: auto;
  height: 100%;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}


</style>
