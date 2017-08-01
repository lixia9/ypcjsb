<template>
  <transition :name="pickerTransition" @after-enter="onShow()" @after-leave="onHide()">
    <div class="ypc-picker" ref="popup" v-if="visible" :style="{'z-index': zIndex}">
      <header class="ypc-picker-header">
        <p class="ypc-picker-header-cancel" v-if="isShowCancelButton" @click="onCancel">{{ cancelText }}</p>
        <p class="ypc-picker-header-confirm" @click="onConfirm">{{ confirmText }}</p>
      </header>
      <div class="ypc-picker-slots-container" :style="`height: ${containerHeight}px;`">
        <ypc-picker-slot v-for="(slot, index) in slots" @getItemHeight="setItemHeight" @change="slotChangeHandler" :slotIndex="index" :showItemCount="showItemCount" :content="slot.content" :type="slot.type" :values="slot.values" :flex="slot.flex" :textAlign="slot.textAlign" :key="'slot' + index" :defaultValue="slot.defaultValue" :ref="'slot' + index"></ypc-picker-slot>
        <div class="ypc-picker-slots-fence-upline"></div>
        <div class="ypc-picker-slots-fence-downline"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import PickerSlot from './PickerSlot.vue'
import Popup from '../../../src/popup/index.js'

export default {
  name: 'ypc-picker',
  mixins: [Popup],
  components: {
    [PickerSlot.name]: PickerSlot
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'slide-bottom'
    },
    showItemCount: {
      type: Number,
      default: 5,
      validator(value) {
        return (value > 0) && (value % 2 === 1)
      }
    },
    slots: {
      type: Array
    },
    confirmText: {
      type: [String, Number],
      default: '确定'
    },
    cancelText: {
      type: [String, Number],
      default: '取消'
    },
    isShowCancelButton: {
      type: Boolean,
      default: true
    },
    onShow: {
      type: Function,
      default: () => {}
    },
    onHide: {
      type: Function,
      default: () => {}
    },
    onConfirm: {
      type: Function,
      default: () => {}
    },
    onCancel: {
      type: Function,
      default: () => {}
    },
    onMaskClick: {
      type: Function,
      default: () => {}
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      visible: false,
      lineHeight: 0,
      datas: {}
    }
  },
  computed: {
    pickerTransition() {
      if(this.transition) {
        return `picker-${this.transition}`
      }else {
        return ''
      }
    },
    containerHeight() {
      return this.lineHeight * this.showItemCount
    }
  },
  created() {
  },
  watch: {
    value(val) {
      this.visible = val
    },
    visible(val) {
      this.$emit('input', val)
    }
  },
  mounted() {
  },
  methods: {
    maskClick() {
      this.onMaskClick()
    },
    slotChangeHandler(index, val) {
      if(`slot${index}` in this.datas) {
        let oldSlotValue = this.datas[`slot${index}`]
        this.$set(this.datas, `slot${index}`, val)
        this.$emit('change', this.datas)
        this.onChange({
          changedSlotIndex: index,
          oldSlotValue: oldSlotValue,
          newSlotValue: val,
          val: this.datas
        })
      }else {
        this.$set(this.datas, `slot${index}`, val)
      }
    },
    setSlotValues(index, values, valueIndex) {
      values.index = valueIndex
      this.slots[index].values = values
    },
    setItemHeight(height) {
      this.lineHeight = height
    }
  }
}

</script>

<style>

.ypc-picker {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: #FFF;
}
.ypc-picker .ypc-picker-header {
  overflow: hidden;
  line-height: 1.2571428571428571rem;
  /* px */
  align-items: center;
}
.ypc-picker .ypc-picker-header .ypc-picker-header-cancel {
  float: left;
}
.ypc-picker .ypc-picker-header .ypc-picker-header-confirm {
  float: right;
}
.ypc-picker .ypc-picker-header > p {
  padding: 0 0.5714285714285714rem;
  color: #4990E2;
  font-size: 0.45714285714285713rem;
  /* px */
}
.ypc-picker .ypc-picker-slots-container {
  display: flex;
  position: relative;
  line-height: 1.0285714285714285rem;
  -webkit-mask-box-image: linear-gradient(0deg, transparent, transparent 5%, #fff 20%, #fff 80%, transparent 95%, transparent);
  overflow: hidden;
}
.ypc-picker .ypc-picker-slots-container .ypc-picker-slots-fence-upline {
  position: absolute;
  height: 0;
  width: 100%;
  top: 50%;
  left: 0;
  border-top: 1px solid #cdcdcd;
  transform: translate3d(0, -0.5142857142857142rem, 0);
}
.ypc-picker .ypc-picker-slots-container .ypc-picker-slots-fence-downline {
  position: absolute;
  height: 0;
  width: 100%;
  top: 50%;
  left: 0;
  border-top: 1px solid #cdcdcd;
  transform: translate3d(0, 0.5142857142857142rem, 0);
}

.picker-slide-bottom-enter-active,
.picker-slide-bottom-leave-active {
  transform: translate3d(0, 0, 0);
  opacity: 1;
  transition: all .3s;
}

.picker-slide-bottom-enter,
.picker-slide-bottom-leave-active {
  transform: translate3d(0, 100%, 0);
  opacity: 0;
}

</style>
