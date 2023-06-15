<template>
  <div class="screenBox">
    <!--<amap class="amap"></amap>-->
    <div class="lr_title">
      <div class="line">
        <img class="left animated fadeInLeft" src="../../assets/image/left.png" />
        <img class="right animated fadeInRight" src="../../assets/image/right.png" />
      </div>
      <div class="arrowLeft"></div>
      <div class="centerBox animated fadeInDownBig">
        <div class="centerBg"></div>
      </div>
      <div class="arrowRight"></div>
    </div>
    <div class="lr_content">
      <div class="lr_left">
        <transition
          name="fade"
          enter-active-class="animated fadeInLeft"
          leave-active-class="animated fadeOutLeft"
        >
          <left-box
            :one-list="homeData.allTotalArr"
            v-if="homeData.assetsArr"
            :list-data="homeData.staffData"
            class="leftOne"
          ></left-box>
        </transition>
      </div>
      <div class="lr_center">
        <transition
          name="fade"
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOutDown"
        >
          <center-map
            @bus="jumpRouter"
            v-if="homeData.navData"
            :nav-data="homeData.navData"
          ></center-map>
        </transition>
      </div>
      <div class="lr_right">
        <transition
          name="fade"
          enter-active-class="animated fadeInRight"
          leave-active-class="animated fadeOutRight"
        >
          <right-two
            v-if="homeData.yearTaskData && weatherData"
            :task-data="homeData.yearTaskData"
            :two-list="twoData"
            :weather-data="weatherData"
          ></right-two>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import leftBox from './components/leftBox.vue'
import centerMap from './components/centerMap.vue'
import rightTwo from './rightTwo.vue'
export default {
  components: {
    leftBox,
    centerMap,
    rightTwo
  },
  data() {
    return {
      leftOneShow: false,
      leftTwoShow: false,
      rightOneShow: false,
      rightTwoShow: false,
      mapShow: false,
      homeData: JSON.parse(
        '{"staffData":{"membePercentage":178,"staffNum":21045,"memberNum":2246},"assetsArr":[{"income":19.36,"year":2015,"assets":198.25},{"income":25.17,"year":2016,"assets":325.11},{"income":34.21,"year":2017,"assets":345.81},{"income":77.61,"year":2018,"assets":450.36},{"income":210.76,"year":2019,"assets":583.89}],"allTotalArr":[{"year":"2022","number":"808亿","percentage":13.5,"name":"总产值"},{"year":"2022","number":"990亿","percentage":7.2,"name":"总资产"}],"yearTaskData":{"estate":92,"health":93,"supply":90,"farming":90},"assetsData":{"yearArray":[{"year":2019,"plateAssets":[{"number":119.35,"name":"农牧业"},{"number":440.18,"name":"房地产"},{"number":4.94,"name":"大健康"},{"number":18.7,"name":"供应链"},{"number":0.4,"name":"酒店"},{"number":0.32,"name":"其他"}],"percentage":"14.36"}]},"weatherData":{"img":"https://bk.landarun.com/group1/M00/02/56/CqwVDV_Fu4WAXa6rAAAWha6wEN8528.png","temperatureText":"小雨","quality":"32 优","temperature":"6℃~9℃","humidity":"95%"},"navData":[{"src":"房地产"},{"src":"大健康"},{"src":"供应链"},{"src":"酒店"},{"src":"物业"}]}'
      ),
      newData: {},
      farmData: {},
      weatherData: JSON.parse(
        '{"city":"成都","list":{},"realtime":{"temperature":"21","humidity":"80","info":"阵雨","wid":"03","direct":"南风","power":"1级","aqi":"45"},"future":[{"date":"2023-06-15","temperature":"18/22℃","weather":"阵雨转阴","wid":{"day":"03","night":"02"},"direct":"南风"},{"date":"2023-06-16","temperature":"18/24℃","weather":"阴","wid":{"day":"02","night":"02"},"direct":"南风"},{"date":"2023-06-17","temperature":"20/27℃","weather":"阴转多云","wid":{"day":"02","night":"01"},"direct":"南风"},{"date":"2023-06-18","temperature":"21/32℃","weather":"阴","wid":{"day":"02","night":"02"},"direct":"持续无风向"},{"date":"2023-06-19","temperature":"20/33℃","weather":"阴","wid":{"day":"02","night":"02"},"direct":"持续无风向"}]}'
      ),
      twoData: [
        {
          name: '预制菜肴',
          number: '0',
          text: '生猪交易额',
          unit: '（万元）'
        },
        {
          name: '屠宰分割',
          number: '0',
          text: '生猪屠宰量',
          unit: '（头）'
        },
        {
          name: '生猪养殖',
          number: '0',
          text: '肉制品加工',
          unit: '（万元）'
        },
        {
          name: '资产运营',
          number: '0',
          text: '收入',
          unit: '（万元）'
        }
      ],
      timer: null
    }
  },
  methods: {
    jumpRouter(data: any) {
      this.leftOneShow = data
      this.rightOneShow = data
      this.mapShow = data
      let s1 = setTimeout(() => {
        this.leftTwoShow = data
        this.rightTwoShow = data
        clearTimeout(s1)
      }, 500)
    },
    getWeatherData() {
      let temperature = this.weatherData?.future[0].temperature.split('/')
      let second = temperature[1].split('℃')
      let oneTem = temperature[0] + '℃'
      let twoTem = second[0] + '℃'
      this.weatherData.list['oneTem'] = oneTem
      this.weatherData.list['twoTem'] = twoTem
    },
    getNewHomeData() {
      this.farmData = {
        todayBreedNO: 79,
        todayLitterNO: 1631,
        todayWeaningNO: 2308,
        boughtNO: 6448,
        butcherNO: 3930,
        cleanPigNO: 2593,
        freshFrozenWeight: 89347.6,
        endProductWeight: 88900.35,
        soldWeight: 108935.12,
        survivalRate: 97.52,
        todaySoldPrice: 13.84,
        preTodaySoldPrice: 14.16,
        totalSoldAmount: 16126194.67,
        totalSoldCount: 9004.54,
        todaySoldPigWeight: 216195,
        currentYearButcherNO: 3814889,
        currentYearProductWeight: 339898624.55,
        todayProductWeight: 475336.55,
        todaySoldPigCount: 2059,
        todayDoDish: 550.38,
        todaySlaughter: 13668,
        todayTotalYield: 123.6,
        todayEnergyUse: 827.56,
        todayUngradedPercent: 0.14,
        todaySuccessPercent: 152.09,
        todayTotalDeliver: 117.98,
        todayYZCDeliver: 29.24,
        todayZKDeliver: 22.83,
        todaySSDeliver: 8.69,
        todayLTDeliver: 28.6,
        todayDKHDeliver: 13.43,
        todayCYDeliver: 9.76,
        todayLHDeliver: 5.43,
        currentStockTotal: 0,
        currentJRYLStockTotal: 651,
        currentZRYLStockTotal: 7423,
        currentNRYLStockTotal: 735,
        currentSFGCStockTotal: 23,
        currentCBLHStockTotal: 0.19,
        currentZKCPStockTotal: 27,
        currentTLDPStockTotal: 87,
        todayPurchaseTotal: 21770,
        todayPurchaseGrossWeight: 2817038,
        todayPurchaseAverageWeight: 132.07,
        todayPurchasePrice: 13.22,
        todayPurchaseLevelPercent: 77.7,
        todayPurchasePeelPercent: 72.7,
        todaySlaughterTotal: 19528,
        todaySlaughterBTTotal: 16989.36,
        todaySlaughterJRWeight: 213525.02,
        todaySlaughterWHRWeight: 98550.01,
        todaySlaughterGTWeight: 16425.01,
        todaySlaughterXHWeight: 32850.01,
        todaySlaughterBYSRWeight: 5407.31,
        currentWeekBuyTotal: 0,
        currentWeekBuyChickenWeight: 0,
        currentWeekBuyDuckWeight: 0,
        currentWeekBuyPorkWeight: 0,
        currentWeekBuyBeefWeight: 0,
        currentWeekBuyProteinWeight: 0,
        todaySaleMoney: 4300.88,
        nowMonthSaleMoney: 85739.25,
        nowYearSaleMoney: 20560841144.64,
        todayOrderNumber: 2878,
        nowMonthOrderNumber: 54114,
        currentDistributorNumber: 32546,
        todayAddDistributorNumber: 5,
        nowMonthAddDistributorNumber: 78,
        todayLoginDistributorNumber: 9748,
        activeDistributorNumber: 12569,
        nowMonthSaleZKMoney: 2400,
        nowMonthSaleSSMoney: 910,
        nowMonthSaleTLMoney: 38000,
        nowMonthSaleSXMoney: 24000,
        nowMonthSaleYZCMoney: 3780,
        nowMonthSaleDPMoney: 13000,
        currentOverOrderNumber: 35472,
        currentOverOrderMoney: 56383,
        currentNotPayOrderNumber: 15439,
        currentNotPayOrderMoney: 24540,
        currentReturnOrderNumber: 323,
        currentReturnOrderMoney: 829,
        currentNotDeliverOrderNumber: 8347,
        currentNotDeliverOrderMoney: 13791
      }

      this.twoData[0].number = this.farmData.todayDoDish
      this.twoData[1].number = this.farmData.todaySlaughterTotal
      this.twoData[2].number = (this.farmData.totalSoldAmount / 10000).toFixed(2)

      this.newData = {
        orderNO: 20563085.50288957,
        farmDealAmount: 15928112.8,
        estateBackAmount: 3306078.15,
        estateSignAmount: 3348496.37
      }

      this.twoData[3].number = (this.newData.estateSignAmount / 10000).toFixed(2)
    },
    // 键盘事件
    handleKeyup(event: any) {
      const e = event || window.event || arguments.callee.caller.arguments[0]
      if (!e) return
      const { key } = e
      if (key == 1) {
        this.$router.push('/')
      } else if (key == 2) {
        this.$router.push('newAgriculture')
      } else if (key == 4) {
        this.$router.push('newAgriculture2')
      } else if (key == 5) {
        this.$router.push('newAgriculture3')
      } else if (key == 6) {
        this.$router.push('newAgriculture4')
      }
      // if (key == 1) {
      //   this.$router.push("/");
      // } else if (key == 2) {
      //   this.$router.push("agriculture");
      // } else if (key == 3) {
      //   this.$router.push("farming");
      // } else if (key == 4) {
      //   this.$router.push("estate1");
      // } else if (key == 5) {
      //   this.$router.push("estate");
      else if (key == 3) {
        this.$router.push('health')
      } else if (key == 7) {
        this.$router.push('supplyChain')
      } else if (key == 8) {
        this.$router.push('hotel')
      } else if (key == 9) {
        this.$router.push('property')
      }
    }
  },
  mounted() {
    this.getWeatherData()
    this.getNewHomeData()
    this.leftOneShow = !this.leftOneShow
    this.rightOneShow = !this.rightOneShow
    this.mapShow = !this.mapShow
    let s1 = setTimeout(() => {
      this.leftTwoShow = !this.leftTwoShow
      this.rightTwoShow = !this.rightTwoShow
      clearTimeout(s1)
    }, 500)

    var username = window.sessionStorage.getItem('username')
    var password = window.sessionStorage.getItem('password')
    if (username == null || password == null) {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>
<style lang="scss">
@import url(./style/index.scss);
</style>

<style lang="scss" scoped>
.screenBox {
  background: url(@/assets/image/bg.png) no-repeat scroll top center;
  background-size: auto 101%;
  height: 100%;
  width: 100%;
  padding: 10px;
}

.line {
  position: relative;
}

.line {
  .right {
    position: absolute;
    right: -0;
    width: 40%;
  }
  .left {
    position: absolute;
    width: 40%;
  }
}

.lr_title {
  padding-top: 34px;
  position: relative;
}

.right_carousel {
  margin-top: 10px;
  height: 100%;
}
:deep(.el-carousel__container) {
  height: 588px;
}
:deep(.el-carousel--horizontal) {
  overflow: hidden;
}
:deep(.el-carousel__indicators--outside) {
  position: absolute;
  width: 100%;
  left: 0;
  top: 460px;
}

:deep(.el-carousel__item) img {
  height: 450px;
}

:deep(.tabsBox) {
  height: 100%;
}

.right_33:first-child p {
  font-size: 24px;
  font-weight: bold;
  opacity: 0;
}

.foot_dc {
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  bottom: 40px;
  left: 100px;
}

.foot_last {
  font-size: 24px;
  color: #b9c500;
  font-weight: bold;
}

.centerBox {
  position: absolute;
  left: calc(50% - 205px);
  top: 0px;
  .centerBg {
    width: 410px;
    height: 108px;
    background: url(/src/assets/image/nav.png) 0 0 no-repeat scroll transparent;
    background-size: 100% 100%;
    overflow: hidden;
  }
}

.lr_title_line1 {
  height: 16px;
  background: linear-gradient(
    90deg,
    rgba(0, 90, 122, 0.1) 0%,
    rgba(0, 90, 122, 1) 25%,
    rgba(0, 90, 122, 1) 75%,
    rgba(0, 90, 122, 0.1) 100%
  );
}

.lr_title_line2 {
  margin: 10px auto 0;
  height: 8px;
  width: 1300px;
}

.lr_title_line2 span {
  display: inline-block;
  margin-left: 8px;
  height: 100%;
  float: left;
}

.lr_title_line2 span:first-child {
  margin-left: 0px;
}

.lr_right_body {
  margin-top: 20px;
}

.lr_right_body.tabsType1 .tabsFace {
  height: 620px;
}

.lr_content {
  position: relative;
  height: calc(100% - 102px);
  margin-top: 60px;
}

.lr_left {
  position: absolute;
  left: 0;
  width: 26%;
  height: 100%;
}

.lr_center {
  position: absolute;
  width: 46%;
  left: 50%;
  top: 40px;
  transform: translateX(-50%);
  height: calc(100% - 40px);
}

.lr_right {
  position: absolute;
  right: 0;
  width: 26%;
  height: 100%;
}

.leftTwo :deep(.snake-borders) {
  top: -1.5px;
  height: calc(100% + 2.5px);
}

.rightOne :deep(.tabsFace) {
  height: 288px;
}
</style>
