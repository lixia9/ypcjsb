<template>

<div class="con" style="height:90vh">
  <ypc-pull-refresh ref="scroller" :on-infinite="infinite" :on-refresh="refresh" noDataText="88不好意没有数据了">
    <div v-for="(item, index) in items" class="row" :class="{'grey-bg': index % 2 == 0}">
      {{ item }}
    </div>
  </ypc-pull-refresh>
</div>
</template>
<script>
export default {
  name: 'ypc-pull-refresh-demo',
  data() {
    return {
      items: []
    }
  },

  methods: {
    refresh: function(done) {
      var self = this
      setTimeout(function() {
        var start = self.top - 1
        for (var i = start; i > start - 10; i--) {
          self.items.splice(0, 0, i + ' - keep walking, be 2 with you.');
        }
        self.top = self.top - 10;
        done();
      }, 1500)
    },

    infinite: function(done) {
      var self = this

      setTimeout(function () {
        for (var i = 1; i < 10; i++) {
          self.items.push(i + ' - keep walking, be 2 with you.');
        }

        done();
      }, 1500)
    }

  },
  mounted() {
    for (var i = 1; i <= 10; i++) {
      this.items.push(i + ' - keep walking, be 2 with you.');
    }
    this.top = 1;
    this.bottom = 10;
  }
}
</script>
<style>
body,
html {
    margin: 0;
}

* {
    box-sizing: border-box;
}

.row {
    width: 100%;
    height: 50px;
    padding: 10px 0;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #444;
    background-color: #fff;
}

.grey-bg {
    background-color: #eee;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    height: 44px;
    width: 100%;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
    background-color: #fff;
    z-index: 1000;
    color: #666;
}

.header > .title {
    font-size: 16px;
    line-height: 44px;
    text-align: center;
    margin: 0 auto;
}
</style>
