<template>
  <div class="right_two">
    <div class="one_box">
      <div class="left_icon">
        <img v-if="weatherData.realtime?.info == '多云'" :src="cloud" alt />
        <img v-else-if="weatherData.realtime?.info == '晴'" :src="sun" alt />
        <img v-else-if="weatherData.realtime?.info.indexOf('雨') != -1" :src="rain" alt />
        <img v-else :src="sun_cloud" alt />
      </div>
      <div class="right_text">
        <div class="time">
          <span>{{ nowDate }}</span>
          <span>{{ week }}</span>
          <span>{{ hourTime }}</span>
        </div>
        <div class="text">
          <div class="city">{{ weatherData.city }}</div>
          <div class="temperature">
            {{
              weatherData?.future && weatherData?.future[0] ? weatherData?.future[0]?.weather : ''
            }}
            {{ weatherData?.list?.oneTem }}~{{ weatherData?.list?.twoTem }}
          </div>
          <div class="humidity">湿度：{{ weatherData?.realtime?.humidity }}</div>
          <div class="quality">
            空气质量：{{ weatherData?.realtime?.aqi }}
            <span v-if="parseInt(weatherData?.realtime?.aqi) < 51">优</span>
            <span
              v-else-if="
                parseInt(weatherData?.realtime?.aqi) > 50 &&
                parseInt(weatherData?.realtime?.aqi) < 101
              "
              >良</span
            >
            <span
              v-else-if="
                parseInt(weatherData?.realtime?.aqi) > 100 &&
                parseInt(weatherData?.realtime?.aqi) < 150
              "
              >轻度污染</span
            >
            <span
              v-else-if="
                parseInt(weatherData?.realtime?.aqi) > 150 &&
                parseInt(weatherData?.realtime?.aqi) < 200
              "
              >中度污染</span
            >
            <span
              v-else-if="
                parseInt(weatherData?.realtime?.aqi) > 200 &&
                parseInt(weatherData?.realtime?.aqi) < 301
              "
              >重度污染</span
            >
            <span v-else-if="parseInt(weatherData?.realtime?.aqi) > 300">严重污染</span>
          </div>
        </div>
      </div>
    </div>
    <div class="tabsType1 two_box">
      <div class="tabsFace">
        <div class="tabsBox">
          <div class="title_box">
            <div class="title">今日业绩监控</div>
            <div class="line"></div>
          </div>
          <div class="one_list">
            <div class="list" v-for="(v, k) in twoList" :key="k">
              <div class="name">{{ v.name }}</div>
              <div class="number">{{ v.number }}</div>
              <div class="unit">{{ v.unit }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tabsType1 three_box">
      <div class="tabsFace">
        <div class="tabsBox">
          <div class="title_box">
            <div class="title">年度目标达成</div>
            <div class="line"></div>
          </div>
          <div class="three_list">
            <div class="list" v-for="(v, k) in threeList" :key="k">
              <el-progress
                type="circle"
                :percentage="v.percentage"
                :stroke-width="9"
                :width="106"
              ></el-progress>
              <div class="name">{{ v.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cloud from '@/assets/image/cloud.png'
import sun from '@/assets/image/sun.png'
import rain from '@/assets/image/rain.png'
import sun_cloud from '@/assets/image/sun_cloud.png'

export default {
  props: ['twoList', 'weatherData', 'taskData'],
  components: {},
  data() {
    return {
      sun_cloud: sun_cloud,
      cloud: cloud,
      sun: sun,
      rain: rain,
      nowDate: '',
      week: '',
      hourTime: '',
      timer: null,
      oneTem: '',
      twoTem: '',
      threeList: [
        {
          percentage: 89,
          name: '预制菜肴'
        },
        {
          percentage: 84,
          name: '屠宰分割'
        },
        {
          percentage: 87,
          name: '生猪养殖'
        },
        {
          percentage: 73,
          name: '资产运营'
        }
      ],
      imgSrc: null
    }
  },
  methods: {
    getTime() {
      let oDate = new Date()
      let day = oDate.getDay()
      let hour = oDate.getHours()
      let minute = oDate.getMinutes()
      minute = minute < 10 ? '0' + minute : minute
      let miao = oDate.getSeconds()
      miao = miao < 10 ? '0' + miao : miao
      let year = oDate.getFullYear()
      let month = oDate.getMonth() + 1
      month = month < 10 ? '0' + month : month
      let date = oDate.getDate()
      date = date < 10 ? '0' + date : date
      this.nowDate = year + '-' + month + '-' + date
      let weeks = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六')
      this.week = weeks[day]
      this.hourTime = hour + ':' + minute + ':' + miao
    }
  },
  mounted() {
    this.threeList[0].percentage = this.taskData.farming
    this.threeList[1].percentage = this.taskData.estate
    this.threeList[2].percentage = this.taskData.health
    this.threeList[3].percentage = this.taskData.supply
    this.timer = setInterval(() => {
      this.getTime()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
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
i {
  color: $juse;
}
.one_box {
  border: 1px solid #004d68;
  padding: 15px 30px;
  background: rgba(0, 0, 0, 0.2);
  .left_icon {
    display: inline-block;
    vertical-align: middle;
    margin-right: 15px;
    img {
      width: 26px;
    }
  }
  .right_text {
    display: inline-block;
    vertical-align: middle;
    .time {
      margin-bottom: 5px;
      span {
        margin: 0 5px 0 0;
      }
    }
    .text {
      div {
        display: inline-block;
        color: rgb(127, 127, 127);
        margin-right: 10px;
        span {
          color: rgb(127, 127, 127);
        }
      }
    }
  }
}
.two_box {
  margin-top: 30px;
  .tabsFace {
    background: rgba(9, 23, 46, 0.8);
    .tabsBox {
      height: 308px;
    }
  }
}
.title_box {
  position: relative;
  text-align: center;
  .title {
    display: inline-block;
    background: rgb(32, 47, 59);
    line-height: 28px;
    border-radius: 14px;
    padding: 0 20px;
    position: relative;
    z-index: 999;
    letter-spacing: 1px;
  }
  .line {
    position: absolute;
    width: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(217, 217, 217, 0),
      rgba(217, 217, 217, 1),
      rgba(217, 217, 217, 0)
    );
  }
}
.one_list {
  position: absolute;
  width: calc(100% - 40px);
  top: 57%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-around;
  .list {
    text-align: center;
    .name {
      font-size: 16px;
      letter-spacing: 1px;
    }
    .number {
      font-size: 30px;
      color: rgb(255, 192, 0);
      font-weight: bold;
      margin: 35px 0;
    }
    .text {
      font-size: 16px;
    }
    .unit {
      color: #888;
      margin-top: 5px;
    }
  }
}
.tabsBox span {
  color: #d2d2d2;
}
.three_box {
  margin-top: 30px;
  .three_list {
    margin: 50px 0 35px;
    display: flex;
    justify-content: space-around;
    .list {
      text-align: center;
      .name {
        margin-top: 20px;
        font-size: 16px;
        letter-spacing: 2px;
      }
      :deep(.el-progress__text) {
        font-size: 24px !important;
        font-weight: bold;
        color: #ffc000;
      }
    }
  }
}
</style>
