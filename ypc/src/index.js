import Switch from '../packages/Switch/index.js'
import ProvinceList from '../packages/ProvinceList/index.js'
import Toast from '../packages/Toast/index.js'
import Lazyload from '../packages/Lazyload/index.js'
import Swipe from '../packages/Swipe/index.js'
import SwipeItem from '../packages/SwipeItem/index.js'
import PullRefresh from '../packages/PullRefresh/index.js'
import BrandList from '../packages/BrandList/index.js'
import Picker from '../packages/Picker/index.js'
import Footer from '../packages/YWfooter/index.js'

const components ={
  Switch,
  Lazyload,
  Swipe,
  SwipeItem,
  PullRefresh,
  BrandList,
  Picker,
  Footer,
  Toast
}
components.install = (Vue) => {
    Vue.use(Lazyload, {try: 3})
  Vue.component(Switch.name, Switch);
  Vue.component(ProvinceList.name, ProvinceList)
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
  Vue.component(PullRefresh.name, PullRefresh)
  Vue.component(BrandList.name, BrandList)
  Vue.component(Footer.name, Footer)

   Vue.$Picker = Vue.prototype.$Picker = Picker;
  Vue.$Toast = Vue.prototype.$Toast = Toast;
}

export default components


