(function(window) {

	'use strict';

	var callBackList = [];
	var callNavList=[];
	var baseConfig = {
		scheme: "gl://",
		debuger: true

	}

	var postUrl = function(strUrl, param, callid) {
		if(navigator.userAgent.match(/app_sdk/i) ? true : false) {
			var c = document.createElement("div")
			c.innerHTML = '<iframe style="display: none;" src="' + baseConfig.scheme +
				strUrl + "?callid=" + callid +
				"&param=" + encodeURIComponent(JSON.stringify(param)) + '"/>'
			document.querySelector("body").appendChild(c)
			setTimeout(function() {
				document.querySelector("body").removeChild(c)
			}, 3000)

		}
	}

	var mergeObjs = function(def, obj) {
		if(!obj) {
			return def;
		} else if(!def) {
			return obj;
		}

		for(var i in obj) {
			if(obj[i] != null && obj[i].constructor == Object) {
				def[i] = mergeObjs(def[i], obj[i]);
			} else if(obj[i] != null && (obj[i] instanceof Array) && obj[i].length > 0) {
				if(obj[i][0].constructor == Object) {
					var newobjs = [];
					var objids = {}
					for(var x = 0, l = def[i].length; x < l; x++) {
						objids[def[i][x].id] = x;
					}

					for(var x = 0, l = obj[i].length; x < l; x++) {
						var newobj = obj[i][x];
						if(objids[newobj.id] !== undefined) {
							def[i][x] = mergeObjs(def[i][x], newobj);
						} else {
							newobjs.push(newobj);
						}
					}

					for(var x = 0, l = newobjs.length; x < l; x++) {
						def[i].push(newobjs[x]);
					}
				} else {
					for(var x = 0; x < obj[i].length; x++) {
						var idxObj = obj[i][x];
						if(def[i].indexOf(idxObj) === -1) {
							def[i].push(idxObj);
						}
					}
				}
			} else {
				def[i] = obj[i];
			}
		}
		return def;
	}

	var jsb = function(target, option, param, cf,f1,f2) {
	console.log(arguments)
		var callid = callBackList.length;
		if(typeof arguments[1] !== "function") {
			param = mergeObjs(param, option)
		}else if(typeof arguments[1] == "function"){
		  cf =arguments[1];
		}
		if(!cf){
		cf =  new Function();
		}
		if(target=="setupNavigation"){
		   param.left.callid = callBackList.length+1;
		   callbackListFunction( param.left.callid, f1);
		   param.right.callid = callBackList.length+1;
		   callbackListFunction( param.right.callid, f2)

		}
		if(navigator.userAgent.match(/Android/i) ? true : false) {
			switch(target) {
				case "getAppCookie":
					callbackListFunction(callid, cf(JSON.parse(Browser.getAppCookie())))
					break;
				case "updateAppStorage":
					callbackListFunction(callid, cf(JSON.parse(Browser.updateAppStorage(JSON.stringify(param)))))
					break;
				case "queryAppStorage":
					callbackListFunction(callid, cf(JSON.parse(Browser.queryAppStorage(JSON.stringify(param)))))
					break;
				case "removeAllAppStorage":
					callbackListFunction(callid, cf(JSON.parse(Browser.removeAllAppStorage())))
					break;
				case "hideTabbar":
					return;
					break;

				default:
					callbackListFunction(callid, cf)
			}
		} else {
			callbackListFunction(callid, cf)
		}

		log(target, param);
		postUrl(target, param, callid)
	}
	var toast = function(option, cf) {
		var param = {
			toast: ""
		}
		jsb("toast", option, param, cf);
	}
	var toNativedetail = function(option, cf) {

		var param = {
			topage: "product",
			animation: 0,
			fixPage: false, //true:去特定页面 false:正常推出一个页面 默认false
			params: {}
		}
		jsb("forward", option, param, cf);

	}

	var openWebView = function(option, cf) {

		var param = {
			topage: "webview",
			animation: 0,
			fixPage: false, //true:去特定页面 false:正常推出一个页面 默认false
			params: {
				url: "",
				backward: false
			}
		}
		jsb("forward", option, param, cf);

	}
	var back = function(option, cf) {
		var param = {
			animation: 0
		}
		jsb("back", option, param, cf);
	}

	var shutDown = function(option, cf) {

		var param = {
			animation: 0
		}
		jsb("shutDown", option, param, cf);

	}
	var isLogin = function(option, cf) {
		jsb("isLogin", option, {}, cf);

	}

	var getUserInfo = function(option, cf) {
		jsb("getUserInfo", option, {}, cf);

	}

	var getNetworkStatus = function(option, cf) {
		jsb("getNetworkStatus", option, {}, cf);

	}
	var getLocationInfo = function(option, cf) {
		jsb("getLocationInfo", option, {}, cf);

	}
	var getAppInfo = function(option, cf) {
		jsb("getAppInfo", option, {}, cf);

	}
	var wxPay = function(option, cf) {
		var param = {
			sign: "8CFB1928B3098513CA917205359D792D",
			timestamp: "1488350950",
			noncestr: "1hl3lw1k1cC7jGAw",
			partnerid: "1221847901",
			prepayid: "wx20170301144909d8287b83680576459167",
			package: "Sign=WXPay"
		}
		jsb("wxPay", option, param, cf);

	}

	var aliPay = function(option, cf) {

		var param = {
			orderInfo: 'partner="2088501903418573"&seller_id="etao@111.com.cn"&out_trade_no="20170301164415605369"&subject="1药网订单"&body="待结算"&total_fee="29.0"&notify_url="http://114.80.125.5:8181/payment/alipay/appTradeNotifyTwo.action"&service="mobile.securitypay.pay"&_input_charset="utf-8"&payment_type="1"&sign_type="RSA"&sign="fXl0L5Oa6AuUixi138%2F4qWBcBGPU4IAZT6T95x6jjfkwgUh5IsBYIJhjhrnAn2bZQlolA470oZMPYkB0D1gdIXtAg8cGQcBJplvE%2FpUbB%2B2xd8QYuM2w%2Fa2ljVV%2FW1RX3NOmm838%2FjkgNk2Dkl%2FANCTTPzGJBOagh4ESQWuPMAo%3D"'
		}
		jsb("aliPay", option, param, cf);

	}
	var linkPay = function(option, cf) {
		var param = {
			orderInfo: '{\"busi_partner\":\"101001\",\"dt_order\":\"20170303105801\",\"money_order\":\"0.01\",\"no_order\":\"20170303105753974138\",\"notify_url\":\"http://114.80.125.5:8181/payment/lianlian/tradeNotifyUrl.action\",\"oid_partner\":\"201408071000001546\",\"risk_item\":\"{\\\"delivery_cycle\\\":\\\"other\\\",\\\"frms_ware_category\\\":\\\"4006\\\",\\\"logistics_mode\\\":\\\"2\\\",\\\"user_info_mercht_userno\\\":147281734}\",\"sign\":\"76395a6b69c8b00ed8f10a98ddd50fa5\",\"sign_type\":\"MD5\",\"user_id\":\"147281734\"}'
		}
		jsb("linkPay", option, param, cf);

	}
	var yiQianBaoPay = function(option, cf) {
		var param = {
			orderInfo: '{"cashierType":"0","protocolInfo":{"orderId":"1703010000460645"},"resultDisplayLevel":"N"}'
		}
		jsb("yiQianBaoPay", option, param, cf);

	}
	var bestPay = function(option, cf) {
		var param = {
			orderInfo: 'SERVICE=mobile.security.pay&MERCHANTID=02440103010150900&MERCHANTPWD=768231&SUBMERCHANTID=&BACKMERCHANTURL=http://114.80.125.5:8181/payment/yizhifu/appTradeNotifyYiZhiFu.action&ORDERSEQ=20170301164415605369&ORDERREQTRANSEQ=20170301164415605369&ORDERTIME=20170301164416&ORDERVALIDITYTIME=&CURTYPE=RMB&ORDERAMOUNT=29.0&SUBJECT=纯支付&PRODUCTID=04&PRODUCTDESC=APP翼支付&CUSTOMERID=20170301164415605369&SWTICHACC=false&SIGN=EDE379054221B625D9A6C772955EEE8D&PRODUCTAMOUNT=29.0&ATTACHAMOUNT=0.00&ATTACH=77&ACCOUNTID=&USERIP=10.6.30.85&BUSITYPE=04&EXTERNTOKEN=NO&SIGNTYPE=MD5'
		}
		jsb("bestPay", option, param, cf);
	}

	var share = function(option, cf) {
		var param = {
			"title": "中药", //分享的标题
			"content": "可以用来养生", //分享的内容
			"imgUrl": "https://eaifjfe.jpg", //分享的小图标url
			"shareUrl": "https://www.baidu.com", //分享落地链接
			//wxfriend:微信好友 wxzone:微信朋友圈 qqfriend:qq好友  qqzone:qq空间
			//weibo:微博 sms:短信分享
			//按传值顺序传几个显示几个
			shareTypes: [
				"wxfriend",
				"qqfriend",
				"weibo"
			],
		}
		jsb("share", option, param, cf);

	}
	var pickImage = function(option, cf) {
		var param = {
			pickType: 0, //pickType 0:让用户选择拍照或选取图片 1:拍照 2:图片
			allowEdit: 0, //0:读取图片后不允许用户编辑  1:允许
			uploadUrl: "https://eaifjfe.com", //网路上传地址
		}
		jsb("pickImage", option, param, cf);

	}

	var forbidPanBack = function(option, cf) {
		var param = {
			forbidPanBack: true,
		}
		jsb("forbidPanBack", option, param, cf);

	}
	var networkReq = function(option, cf) {
		var param = {
			requestUrl: "https://mobi.fangkuaiyi.com", //shceme和host
			param: {
				"content": "东西用的不错",
				"title": "还会再买"
			}
		}
		jsb("networkReq", option, param, cf);

	}
	var hideNavigation = function(option, cf) {
		var param = {
			isHide: true
		}
		jsb("hideNavigation", option, param, cf);
	}
	var setupNavigation = function(option, cf,f1,f2) {
		var param = {
			left: {
				hasBack: true,
				hasShutdown: true,
				callid: 9999
			},
			 isShow:false,     //是否显示原生导航，默认false
			middle: {
				title: ""
			},
			right: //最多有两个数据
				[{
					menuType: 0,
					imgUrl: "",
					buttonName: "",
					callid: 9998
				}]
		}
		jsb("setupNavigation", option, param, cf,f1,f2);

	}

	var getHistoryData = function(option, cf) {
		jsb("getHistoryData", option, {}, cf);

	}
	var getAppCookie = function(option, cf) {
		jsb("getAppCookie", option, {}, cf);

	}
	var scanning = function(option, cf) {
		jsb("scanning", option, {}, cf);

	}
	var setProvince = function(option, cf) {
		var param = {
			provinceName: '上海'
		}
		jsb("setProvince", option, param, cf);

	}
	var synCartNumStatus = function(option, cf) {
		var param = {
			cartnum: 0
		}
		jsb("synCartNumStatus", option, param, cf);

	}
	var autoLogin = function(option, cf) {
		jsb("autoLogin", option, {}, cf);

	}
	var updateAppStorage = function(option, cf) {
		var param = {
			key: "",
			value: "",
			isPersistence:false
		}
		jsb("updateAppStorage", option, param, cf);

	}
	var queryAppStorage = function(option, cf) {
		var param = {
			key: ""
		}
		jsb("queryAppStorage", option, param, cf);
	}
	var removeAllAppStorage = function(option, cf) {
		jsb("removeAllAppStorage", option, {}, cf);
	}
	var hideTabbar = function(option, cf) {
		var param = {
			hide: true //true：隐藏 false:显示
		}
		jsb("hideTabbar", option, param, cf);
	}

	var goPay = function(option, cf) {
		var param = {
			topage: "bank",
			animation: 0,
			fixPage: false, //true:去特定页面 false:正常推出一个页面 默认false
			params: {
				paymentId: "AE233", //支付方式
				isPOSOK: true, //是否支持pos机
				isYiKaTongOK: true, //是否支持一卡通
				isHuoDaoFuKuanOK: true, //是否支持货到付款
				orderID: "883738733", //订单id,一般传nil
				userCoin: "0" //支付金额，一般传0
			}
		}
		jsb("forward", option, param, cf);

	}
	var synDemandNumStatus = function(option, cf) {
		var param = {
			demandnum: 0
		};
		jsb("synDemandNumStatus", option, param, cf);
	}
	var hideLoading = function(option, cf) {
		jsb("hideLoading", option, {}, cf);
	}

	function init() {
				//setupNavigation();
				//hideNavigation();
	}

	function callbackListFunction(callid, cf) {
		callBackList[callid] = cf || new Function();

	}

	function isApp() {
		return "Browser" in window;
	}

	function nativeCallback(result) {
		var res = "";
		if(!navigator.userAgent.match(/Android/i) ? true : false){
		  res = result
		}else{
		  res= JSON.parse(result);
		}
		callBackList[res.callid * 1](res);

	}

	var jsBridge = {
		callback: nativeCallback,
		toast: toast,
		share: share,
		toNativedetail: toNativedetail,
		openWebView: openWebView,
		back: back,
		shutDown: shutDown,
		isLogin: isLogin,
		getNetworkStatus: getNetworkStatus,
		getUserInfo: getUserInfo,
		getLocationInfo: getLocationInfo,
		getAppInfo: getAppInfo,
		wxPay: wxPay,
		aliPay: aliPay,
		linkPay: linkPay,
		yiQianBaoPay: yiQianBaoPay,
		bestPay: bestPay,
		pickImage: pickImage,
		forbidPanBack: forbidPanBack,
		networkReq: networkReq,
		hideNavigation: hideNavigation,
		setupNavigation: setupNavigation,
		getHistoryData: getHistoryData,
		goPay: goPay,
		getAppCookie: getAppCookie,
		scanning: scanning,
		setProvince: setProvince,
		synCartNumStatus: synCartNumStatus,
		synDemandNumStatus: synDemandNumStatus,
		autoLogin: autoLogin,
		updateAppStorage: updateAppStorage,
		queryAppStorage: queryAppStorage,
		removeAllAppStorage: removeAllAppStorage,
		hideTabbar: hideTabbar,
		hideLoading:hideLoading,
		init: init
	};

	function log(name, param) {
		if(baseConfig.debuger) {
			console.log("调用的方法是--->" + name);
			console.log("调用的参数是 --->" + JSON.stringify(param));
		}
		/*	layer.open({
				content: msg,
				time: 2
			});*/

	}
	if(typeof define === 'function' && define.amd) {
		// AMD
		define(jsBridge);
	} else {
		window.jsBridge = jsBridge;
	}

})(window);

function networkStatusChange(o) {
	console.log("网络变化了" + JSON.stringify(o))
}

function userStatusChange(o) {
	console.log("登录状态改变了" + JSON.stringify(o))
}


function fillweb(o) {
	console.log("通知网页取值" + JSON.stringify(o))

}

function webchange() {

}

function nativeBack() {
	console.log("我从native界面返回了 刷新不刷新 看你自己的业务逻辑吧")
}

function callback(o) {
	jsBridge.callback(o)
}
jsBridge.init();
export default jsBridge;
