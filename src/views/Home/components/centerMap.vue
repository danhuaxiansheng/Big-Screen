<template>
  <div class="center_map">
    <div class="center_title">
      <!--<i class="fa fa-globe"></i>-->
      <h3>产业布局</h3>
      <span>截止2021年</span>
    </div>
    <div class="center_box">
      <china-map></china-map>
    </div>
  </div>
</template>
<script>
import chinaMap from './chinaMap.vue'
export default {
  components: {
    chinaMap
  },
  props: ['navData'],
  data() {
    return {
      routerLists: [
        {
          name: 'agriculture',
          class: 'fa fa-leaf',
          label: '农牧业',
          title: 'AGRICULTURE',
          isRouter: false
        },
        {
          name: 'estate1',
          class: 'fa fa-building-o',
          label: '房地产',
          title: 'REAL ESTATE',
          isRouter: false
        },
        {
          name: 'health',
          class: 'fa fa-medkit',
          label: '大健康',
          title: 'BIG HEALTH',
          isRouter: false
        },
        {
          name: 'supplyChain',
          class: 'fa fa-globe',
          label: '供应链',
          title: 'REAL ESTATE',
          isRouter: false
        },
        {
          name: 'hotel',
          class: 'fa fa-hospital-o',
          label: '酒 店',
          title: 'HOTEL',
          isRouter: false
        },
        {
          name: 'property',
          class: 'fa fa-home',
          label: '物 业',
          title: 'PROPERTY',
          isRouter: false
        }
      ],
      routerData: []
    }
  },
  methods: {
    jumpRouter(e) {
      //console.log(e);
      if (e.isRouter == true) {
        this.$emit('bus', false)
        let s1 = setTimeout(() => {
          this.$router.push(e.name)
          clearTimeout(s1)
        }, 200)
      }
    }
  },
  mounted() {
    this.routerData = this.navData
    for (let i in this.routerData) {
      for (let k in this.routerLists) {
        if (this.routerData[i].src == this.routerLists[k].label.replace(/\s+/g, '')) {
          this.routerLists[k].isRouter = true
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$juse: #ffc000;
$fff: #fff;
$text: #bfbfbf;
$text_second: #9f9f9f;
$numColor: #b9c500;
$switchColor: #6c7506;
.center_map {
  height: 100%;
}
.center_title {
  margin: 35px 0 0 50px;
  position: absolute;
  z-index: 999;
}
.center_title i {
  color: $juse;
}
.center_title h3 {
  color: $fff;
  display: inline-block;
  margin-left: 5px;
  font-size: 18px;
}
.center_title span {
  font-size: 16px;
  color: $text_second;
  margin-left: 20px;
}
.center_box {
  width: 100%;
  // height: calc(100% - 110px);
  height: 100%;
  border: 1px solid #004d68;
}
.center_bottom {
  position: absolute;
  width: 100%;
  bottom: 0px;
  border-radius: 12px;
  padding: 1px;
}
.center_bottom svg {
  width: 100%;
  height: 100%;
  position: absolute;
}
.center_router {
  display: flex;
  border-radius: 14px;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.2);
  padding: 18px 0;
  z-index: 999;
  position: relative;
  margin: 1px 0 0 1px;
}
.router_item {
  cursor: pointer;
}
.router_item i {
  color: $juse;
  font-size: 30px;
  vertical-align: middle;
}
.router_item div {
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
}
.router_item p {
  color: $fff;
  font-size: 18px;
  font-weight: bold;
}
.router_item span {
  color: #bfbfbf;
  font-size: 10px;
}
.chinaMap {
  margin: 0 auto;
}
</style>
