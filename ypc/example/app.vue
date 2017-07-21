<template>
  <div class="page">
   <header  class="header" @click="back">
   <span class="back">返回</span>  <h2>YPC-Demo</h2>
 </header>

    <div class="content">

     <transition :name="viewAnimate">
     <keep-alive>
     <router-view></router-view>
     </keep-alive>
     </transition>

      </div>

   </div>

</template>

<script>
export default {
  data() {
    return {
       viewAnimate: ''

    }
  },
     methods:{
      back(){
//         this.$Toast({
//   content: '测试文字'

// })
       this.$router.go(-1)
      }
    },
       watch: {
        '$route': function(val, oldVal) {


            console.log('------------监听到路由变化---------', );
            if (val.name!=="Index") {
                this.viewAnimate = 'slide-in';
            } else {
                this.viewAnimate = 'slide-out';
            }
        }
    }
}
</script>

<style lang="sass">
 html,body{
   height: 100%;
 }
 .header{
  position:fixed;
  top:0;
  left:0;
  line-height:100px;
  height:100px;
  text-align:center;
  width:100%;
  background-color:white;

 }
 .content{
  margin-top:100px;

 }
  .con {
 position:absolute;
  width:100%;
  height:100%;
  left:0;
  top:100px;
  overflow:hidden;
  }
 .back{
  float:left;
  padding-left: 10px;
 }


/**
* vue-router transition
*/

.slide-in-enter-active {
    z-index: 2;
    visibility: visible;
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-name: slide-in-enter;
    animation-name: slide-in-enter;
}

.slide-in-leave-active {
    z-index: 1;
    visibility: visible;
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-name: slide-in-leave;
    animation-name: slide-in-leave;
}

.slide-out-enter-active {
    z-index: 1;
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-name: slide-out-enter;
    animation-name: slide-out-enter;
}

.slide-out-leave-active {
    z-index: 2;
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-name: slide-out-leave;
    animation-name: slide-out-leave;
}

.slide-in-enter {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
}

.slide-out-enter {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
}

@-webkit-keyframes slide-in-enter {
    from {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}

@keyframes slide-in-enter {
    from {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}

@-webkit-keyframes slide-in-leave {
    from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    to {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
}

@keyframes slide-in-leave {
    from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    to {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
}

@-webkit-keyframes slide-out-enter {
    from {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}

@keyframes slide-out-enter {
    from {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}

@-webkit-keyframes slide-out-leave {
    from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    to {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
}

@keyframes slide-out-leave {
    from {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    to {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
}

</style>
