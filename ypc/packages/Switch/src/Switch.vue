<template>
  <label class="ypc-switch">
    <input class="ypc-switch-input" :checked="value" @change="changeHandler" type="checkbox">
    <span class="ypc-switch-button"></span>
    <div class="ypc-switch-label"><slot></slot></div>
  </label>
</template>

<script>
  export default {
    name: 'ypc-switch',
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      changeHandler() {
        this.$emit('input', !this.value)
      }
    }
  }
</script>

<style>
.ypc-switch {
  display: flex;
  align-items: center;
  position: relative;
}

.ypc-switch-input {
  height: 0;
  width: 0;
  visibility: hidden;
}

.ypc-switch-button {
  display: inline-block;
  position: relative;
  width: 1.3333333333333333rem;
  height: 0.8rem;
  border: 1px solid #D9D9D9;
  border-radius: 31px;
  background: #D9D9D9;
}
.ypc-switch-button:after {
  content: "";
  position: absolute;
  top: 0.02666666666666667rem;
  left: 0;
  width: 0.7466666666666667rem;
  height: 0.7466666666666667rem;
  border-radius: 56px;
  background-color: #FFFFFF;
  box-shadow: 0 0.013333333333333334rem 0.04rem rgba(0,0,0,.4);
  transform: translateX(0);
  transition:transform .3s;
}

.ypc-switch-input:checked + .ypc-switch-button {
  background: #FF6666;
  display: inline-block;
  position: relative;
  border: 1px solid #FF6666;
  border-radius: 31px;
}
.ypc-switch-input:checked + .ypc-switch-button:after {
  transform: translateX(0.5733333333333334rem);
}
</style>
