<template>
  <div v-if="type === 'data'" class="ypc-picker-slot" :style="`flex: ${flex};text-align: ${textAlign};`" :class="{'ypc-picker-slot-hidden': !ready}">
    <p class="ypc-picker-slot-item" :class="{'ypc-picker-slot-item-selected': currentIndex === index}" v-for="(item, index) in values"> {{ item }} </p>
  </div>
  <div v-else-if="type === 'divider'" class="ypc-picker-slot ypc-picker-slot-divider" :style="`flex: ${flex ? flex : 'none'};text-align: ${textAlign};`" :class="{'ypc-picker-slot-hidden': !ready}">
    <p> {{ content }} </p>
  </div>
</template>

<script>

import translateUtils from '../../../src/utils/translate.js'
import draggable from '../../../src/utils/draggable.js'

export default {
  name: 'ypc-picker-slot',
  props: {
    type: {
      type: String,
      default: 'data'
    },
    values: {
      type: Array,
      default: () => []
    },
    content: {
      type: String,
      default: ''
    },
    flex: {
      type: [Number, String]
    },
    textAlign: {
      type: String,
      default: 'center'
    },
    showItemCount: {
      type: Number,
      default: 5,
      validator(value) {
        return (value > 0) && (value % 2 === 1)
      }
    },
    slotIndex: {
      type: Number,
      default: 0
    },
    defaultValue: {
      type: [Number, String]
    }
  },
  data() {
    return {
      dragState: {
        startTop: 0,
        offsetTop: 0,
        initialTranslateY: 0,
        endTop: 0
      },
      dragRange: {
        top: 0,
        bottom: 0
      },
      itemHeight: 0,
      currentIndex: -1,
      ready: false
    }
  },
  mounted() {
    if(this.type === 'data') {
      this.getSizes()
      this.bindEvents()
      if(this.defaultValue !== undefined) {
        let index
        this.values.forEach((e, i) => {
          if(e === this.defaultValue) {
            index = i
          }
        })
        if(index) {
          this.locateItem(index)
        }else {
          this.locateItem(0)
        }
      }else {
        this.locateItem(0)
      }
      this.$emit('change', this.slotIndex, this.values.length ? this.values[this.currentIndex] : '')
    }
    /*
     * 初始化时 slot-item 会调整位置，0.3s 后再显示
     */
    setTimeout(() => {
      this.ready = true
    }, 300)
  },
  watch: {
    values(val) {

      /**
       * 如果 setSlotValues 时带有指定 index 值，尝试定位其
       */
 console.log(val)
      let relocateIndex = val.index || 0
      this.locateItem(relocateIndex)
      this.$emit('change', this.slotIndex, this.values.length ? this.values[this.currentIndex] : '')
    },
    currentIndex(val, oldVal) {
      if(oldVal !== -1) {
        this.$emit('change', this.slotIndex, this.values.length ? this.values[val] : '')
      }
    }
  },
  methods: {
    getSizes() {
      this.itemHeight = this.$el.children[0].offsetHeight
      this.$emit('getItemHeight', this.itemHeight)
      this.dragRange.top = this.itemHeight * ((this.showItemCount - 1) / 2)
      this.dragRange.bottom = this.dragRange.top - ((this.values.length - 1) * this.itemHeight)
    },
    /*
     * bindEvents 绑定滑动事件
     */
    bindEvents() {
      draggable(this.$el, {
        start: (event) => {
          /*
           * 滑动开始时，记录 pageY 和初始 translateY
           */
          this.dragState.startTop = event.pageY
          this.dragState.initialTranslateY = translateUtils.getElementTranslate(this.$el).top
        },
        drag: (event) => {
          /*
           * 滑动中，计算偏移量并设置 el 的 translateY
           */
          this.dragState.offsetTop = event.pageY - this.dragState.startTop
          this.dragState.endTop = this.dragState.offsetTop + this.dragState.initialTranslateY
          translateUtils.translateElement(this.$el, null, this.dragState.endTop)
        },
        end: () => {
          /*
           * 滑动结束时，检查当前偏移位置，找到最接近的 item 并设定其到居中，更新 currentIndex
           */
          if(!this.dragState.endTop) {
            this.dragState = {}
            return
          }
          let Index = Math.round((this.dragRange.top - this.dragState.endTop) / this.itemHeight)
          this.locateItem(Index)
          this.dragState = {}
        }
      })
    },
    locateItem(Index) {
      if(Index < 0) {
        Index = 0
      }else if (Index > (this.values.length - 1)) {

        Index = this.values.length - 1
      }
      // if(Index === this.currentIndex) {
      //   return
      // }
      this.currentIndex = Index;

      translateUtils.translateElement(this.$el, null, this.itemHeight * (((this.showItemCount - 1) / 2) - Index))
    }
  }
}

</script>

<style>

.ypc-picker-slot {
  font-size: 0.6rem;
  /* px */
  color: #B3B3B3;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  backface-visibility: hidden;
  width: 0;
}
.ypc-picker-slot.ypc-picker-slot-hidden {
  visibility: hidden;
}
.ypc-picker-slot.ypc-picker-slot-divider {
  display: flex;
  flex: none;
  align-items: center;
  align-self: stretch;
  color: #404040;
  width: auto;
}
.ypc-picker-slot.ypc-picker-slot-divider p {
  width: 100%;
}
.ypc-picker-slot .ypc-picker-slot-item {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0 0.14285714285714285rem;
}
.ypc-picker-slot .ypc-picker-slot-item.ypc-picker-slot-item-selected {
  color: #404040;
}

</style>
