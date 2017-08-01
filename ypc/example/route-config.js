import Index from './components/Index/Index.vue'
import Switch from './components/Example/Switch.vue'
import ProvinceList from './components/Example/ProvinceList.vue'
import BrandList from './components/Example/BrandList.vue'
import Lazyload from './components/Example/Lazyload.vue'
import Swipe from './components/Example/Swipe.vue'
import PullRefresh from './components/Example/PullRefresh.vue'
import Toast from './components/Example/Toast.vue'
import Picker from './components/Example/Picker.vue'
import Footer from './components/Example/Footer.vue'


export default {
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/switch',
      name: 'Switch',
      component: Switch
    },
    {
      path: '/toast',
      name: 'Toast',
      component: Toast
    },
    {
      path: '/provincelist',
      name: 'ProvinceList',
      component: ProvinceList
    },
    {
      path: '/lazyload',
      name: 'Lazyload',
      component: Lazyload
    }
    ,
    {
      path: '/swipe',
      name: 'Swipe',
      component: Swipe
    } ,
    {
      path: '/pullrefresh',
      name: 'PullRefresh',
      component: PullRefresh
    } ,
    {
      path: '/brandlist',
      name: 'BrandList',
      component: BrandList
    },
    {
      path: '/picker',
      name: 'Picker',
      component: Picker
    }
    ,
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    }

  ]
}
