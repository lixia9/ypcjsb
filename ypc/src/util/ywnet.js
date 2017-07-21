import Vue from 'vue'
import common from 'ywlayer/common'
import { mergeParam, mergeUrl } from './param'


const URI = {
  URI_PREFIX: 'https://gateway.111.com.cn/',
  wenjun: 'http://gatewaywwj.111.com.cn/',
  wulei: 'http://gatewaywl.111.com.cn/',
  demand: 'https://gateway.111.com.cn/',
  test: 'http://10.6.80.116:8080/',
  dev: 'https://gateway.111.com.cn/',
  local:'./static/'
}

export function http (options) {
  const method = options.method ? options.method : 'get'
  const params = options.noMergeParam ? options.params : mergeParam(options.params)
  const _timeout = options._timeout ? options._timeout : 10000
  const urlPrefix = options.urlPrefix ? URI[options.urlPrefix] : URI.URI_PREFIX
  const showLoad = options.showLoad ? options.showLoad : false
  const jsonp = options.jsonp ? options.jsonp : null
  const noNetwork = options.noNetwork ? true : false

  let url = urlPrefix + options.url
  url = method == 'post' ? mergeUrl(url) : url
  return new Promise((resolve, reject) => {
    showLoad ? common.loading() : null
    method == 'post' ? Vue.http[method](url, params, { _timeout , noNetwork }).then(res => {
     resolve(res)
   // showLoad ?  common.loadingClose() : null

    }, res => {
    	 reject(res)
   //   showLoad ? common.loadingClose() : null


    }) : Vue.http[method](url,{ params, _timeout, jsonp, noNetwork }).then(res => {
     resolve(res)
  //  showLoad ?  common.loadingClose() : null

    }, res => {
    	 reject(res)
   //   showLoad ? common.loadingClose() : null


    })
  })
}

export default { http }
