    (function(window) {

    	'use strict';

    	var _point = {
    		pageValue:"",
    		getParam: function(name) {
    			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    			var r = window.location.search.substr(1).match(reg);
    			if(r != null) return unescape(r[2]);
    			return null;
    		},
    		cookie: function(name, value, days) {
			// if value is undefined, get the cookie value
			if(value === undefined) {
				var cookiestring = "; " + window.document.cookie;
				var cookies = cookiestring.split("; " + name + "=");
				if(cookies.length === 2) {
					return cookies.pop().split(";").shift();
				}
				return null;
			} else {
				// if value is a false boolean, we'll treat that as a delete
				if(value === false) {
					days = -1;
				}
				var expires = "";
				if(days) {
					var date = new Date();
					date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
					expires = "; expires=" + date.toGMTString();
				}
				window.document.cookie = name + "=" + value + expires + "; path=/;domain=111.com.cn";
			}
		},

		xhr: function(url, data, method, callback) {
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
		},
		autumn: function() {
			var u = navigator.userAgent;
			var isAndroid = u.indexOf("android") > -1 ;
			var isiOS =  u.indexOf("iphone") > -1;
			var isWap = !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/); /*是否为移动终端*/
			if(this.isApp()) {
				return isAndroid ? "android" : "ios"
			} else {
				return isWap ? "wap" : "offical"

			}
		},
		isApp:function(){
			if(navigator.userAgent.indexOf("app_yiwang") > -1 ) {
				return true;
			}else{
				return false;
			}
		},
		base: function(e,fn) {
		// if(window.location.protocol.toLocaleLowerCase()=="file:"){
			if(window.location.protocol.toLocaleLowerCase().indexOf("file")>-1){
				jsBridge.getAppCookie({}, function(res) {
					var param = {
						autumn: _point.autumn(),
						uuid: _point.getUUID(),
						UserId: _point.cookie("JUD"),
						token: res.data.gltoken,
						osVersion:res.data.osVersion,
						provinceId: res.data.provinceId,
						os:res.data.os,
						version:res.data.appVersion,
						tracker_u: res.data.appChannelName,
						referrer: e ? encodeURIComponent(_point.subStringUrl(e.oldURL)) : encodeURIComponent(_point.subStringUrl(document.referrer)),
						visitid: _point.cookie("visitid"),
						cururl: e ? encodeURIComponent(_point.subStringUrl(e.newURL)) : encodeURIComponent(_point.subStringUrl(document.location.href))
					}
					fn(param)
				})

			}else{
				var u  =navigator.userAgent;
				var param = {
					autumn: _point.autumn(),
					os:_point.autumn(),
					version:"",
					uuid: _point.getUUID(),
					osVersion:u.substring(u.indexOf("(")+1,u.indexOf(")")),
					UserId: _point.cookie("JUD"),
					token: _point.isApp()? _point.cookie("gltoken"):_point.cookie("token"),
					provinceId: _point.cookie("provinceId"),
					tracker_u: _point.isApp()? _point.cookie("appChannelName"):_point.cookie("tracker_u"),
					referrer: e ? encodeURIComponent(this.subStringUrl(e.oldURL)) : encodeURIComponent(this.subStringUrl(document.referrer)),
					visitid: _point.cookie("visitid"),
					cururl: e ? encodeURIComponent(this.subStringUrl(e.newURL)) : encodeURIComponent(this.subStringUrl(document.location.href))
				}
				fn(param)
			}

		},
		subStringUrl: function(url) {
			var str = ["/pay/", "/cart/", "/personalcenter/", "/search/", "/shopdetail/", "/category/", "/home/", "/login/", "/order/"];
			for(var i = 0; i < str.length; i++) {
				if(url.indexOf(str[i]) > 0) {
					return "https://m.111.com.cn/yyw/wap" + url.substring(url.indexOf(str[i]));
				}

			}
			return url;
		},
		_url: function(eventuuid, e) {
			if(eventuuid&&eventuuid.split("_").length==5){
				eventuuid= eventuuid+"_0";
			}
			_point.cookie("cururl", document.location.href, 1)
			this.base(e,function(that){
				var uu = "https://nest.111.com.cn?uuid=" + that.uuid + "&os_version="+that.osVersion+"&action=click&operator=null&autumn=" +
				that.autumn +"&version="+that.version+ "&os=" + that.os +"&brower=" + that.autumn +  "&token=" + that.token + "&userid=" +
				that.UserId + "&refer=" + that.referrer + "&cururl=" +
				that.cururl + "&tracker_u=" + that.tracker_u + "&visitid=" + that.visitid +"&pagecode="+document.getElementsByTagName("body")[0].getAttribute("data-ywid")+
				"&eventuuid=" + eventuuid+"&pagevalue="+_point.pageValue+"&time=" + new Date().getTime();
				_point.xhr(uu);
			});



		},
		createUUID: function() {
			var s = [];
			var hexDigits = "ABCDE6709abcdef";
			for(var i = 0; i < 36; i++) {
				s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
			}
			s[14] = "4";
			s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
			s[8] = s[13] = s[18] = s[23] = "-";

			var uuid = s.join("");
			return uuid;
		},
		getUUID: function() {
			var uuid = this.createUUID();

			if(this.isApp()) {
				uuid = navigator.userAgent.split("@")[1];
				return uuid;
			} else {
				if(this.cookie("UUID")) {
					this.cookie("UUID");
				} else {
					this.cookie("UUID", uuid, 7);

				}
				return this.cookie("UUID");
			}

		},
		init: function() {

			var tracker_u = this.getParam("tracker_u");
			_point.pageValue = window.YW_POINT_PAGEVALUE || '';
			if(tracker_u) {
				_point.cookie("tracker_u", tracker_u, 2)
			}

			_point._url()
			document.querySelector("body").addEventListener("click", function(e) {
				var p = e.target;
				var i = 0;
				do
				{

					if( p.getAttribute("data-ywpoint")) {
						_point._url(p.getAttribute("data-ywpoint"));
						break;
					//console.log(p.split("_"))
				}
				p = p.parentNode;
				i++;
			}
			while (i<5);


		})
		},
		go: function(eventuuid) {
			_point._url(eventuuid)
		}
	};
	//cb方法是 jsonp的callback 可以不用处理 这样的写法是为了防止该方法找不到
	window.cb = function(o) {
		return o
	};
	//初始化 的时候  会发出一个界面打点的请求
	//如果界面的元素中 包含这样的 data-ywpoint="home_1_1_1_1_0_0"  会触发坑位打点的请求
	_point.init();
	window.onhashchange = function(e) {
		_point.xhr(_point._url(null, e));
	}

	if(typeof define === 'function' && define.amd) {
		// AMD
		define(_point);
	} else {
		window.ywPoint = _point;
	}

})(window);
export default ywPoint;
