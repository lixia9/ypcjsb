<style>
	@import '../assets/styles/address.css';
</style>

<template>
<div class="page">
			<header class="common_header">
				<a href="#" class="common_left_btn">
					<i class="icon iconfont icon_leftarrow"></i>
				</a>
				<span class="header_tt">{{title}}</span>
				<a href="#" class="common_right_btn" v-on:click="changeTitle">保存</a>
			</header>
			<div class="container">
				<div class="address_edit">
					<div class="edit_unit">
						<input class="input_box" type="" name="" id="" placeholder="姓名" value="" v-model="userName" />
					</div>


					<div v-for="shop in searchList" class="edit_unit">
						<input class="input_box" type="tel" name="" id="" placeholder="手机号码" :value="shop.shopName" />
					</div>




					<div class="edit_unit">
						<input class="input_box" type="tel" disabled="disabled" name="" id="" placeholder="省、市、区县" value="" />
					</div>
					<div class="edit_unit">
						<input class="input_box" type="text" name="" id="" placeholder="详细地址" value="" />
					</div>
					<div class="edit_unit">
						<i class="icon iconfont icon_nocheck"></i>
						<label class="defautlLabel">设为默认地址</label>
					</div>
				</div>
			</div>
			<div class="gray_layer_bg" id="address_layer">
				<div class="bottom_layer">
					<h2 class="layer_tt">配送至</h2>
					<i class="close_ico"></i>
					<div class="choose_container">
						<p class="result_bar">
							<span>上海</span>
							<span>上海</span>
							<span class="warm_span">请选择</span>
						</p>
						<ul class="choose_list">
							<li>浦东新区</li>
							<li>闸北</li>
							<li class="cur">黄浦</li>
							<li>长宁</li>
							<li>徐汇</li>
							<li>浦东新区</li>
							<li>闸北</li>
							<li>黄浦</li>
							<li>长宁</li>
							<li>徐汇</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

</template>

<script>

	export default {
		name: 'cart',
		data() {
			return {
          title:"我是第一课",
          userName:"",
          searchList:[
          {shopName:"999皮炎平"},
          {shopName:"888皮炎平"}
          ]
			}
		},

		created: function() {

		},
		mounted: function() {

		},
		activated: function() {

		},
		updated: function() {

		},
		beforeDestroy() {

		},
		methods: {
     changeTitle(){

      var shop = {shopName:"999yyy"}
      this.searchList.push(shop);
     }
		},
		components: {

		}
	}
</script>
