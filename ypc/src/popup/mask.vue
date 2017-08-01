<template>
  <transition name="ypc-mask-fade">
    <div class="ypc-mask" v-if="show" @click="handleClick" :style="maskStyle" ></div>
  </transition>
</template>

<script>
export default {
  name: 'ypc-mask',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function
    },
    opacity: {
      type: Number,
      default: 0.4
    },
    color: {
      type: String,
      default: '#000'
    },
    zIndex: {
      type: Number
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleClick() {
      if (this.onClick) {
        this.onClick()
      }
    },
  },
  computed: {
    maskStyle() {
      return {
        'opacity': this.opacity,
        'background-color': this.color,
        'position': this.fixed ? 'fixed' : '',
        'z-index': this.zIndex
      }
    }
  },
}
</script>

<style>
.ypc-mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.ypc-mask-fade-enter-active, .ypc-mask-fade-leave-active {
  transition: opacity 0.45s cubic-bezier(0.23, 1, 0.32, 1);
}

.ypc-mask-fade-enter,
.ypc-mask-fade-leave-active {
  opacity: 0 !important;
}

</style>
