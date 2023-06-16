<template>
  <div class="right_two">
    <div class="weather_box">
      <div class="left_icon">
        <img v-if="weatherData.realtime?.info == '多云'" :src="cloud" />
        <img v-else-if="weatherData.realtime?.info == '晴'" :src="sun" />
        <img v-else-if="weatherData.realtime?.info.indexOf('雨') != -1" :src="rain" />
        <img v-else :src="sun_cloud" />
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
          <img :src="city_img" />
          <span>
            蓝润集团创始于1997年，秉承“实业报国
            服务民生”的企业使命，深耕大消费领域，是以食品业为主的大型综合性产业集团，现拥有员工2万余人，与全球20多个国家和地区建立合作。连续多年入选“中国企业500强”“中国民营企业500强”，位列“四川民营企业100强”第三位。2022年，集团产值808亿元。
            <br />
            <br />
            蓝润集团顺应现代消费升级需求，融入科技化发展进程，旗下食品主业以工匠精神与科技创新，焕发中华美食新生机。在深耕食品主业的同时，稳步运营与管理旗下商业、酒店等优质资产，满足多元化消费场景需求。目前，管理资产规模超千亿元。
            <br />
            <br />
            初心不改，永铭党恩。蓝润集团党委是在四川省委组织部指导和关怀下建立的优秀基层党组织。集团党委在实践中创新“五心”党建工作法，提炼出具有蓝润特色的“五朵金花”党建品牌，坚持和加强党组织在企业的引领作用，助力企业做实、做强民生产业，打造川企金字招牌。集团以社会主义核心价值观为企业文化纲领，秉持“梦想成就卓越”的发展理念，不断提升企业的凝聚力、战斗力，以实干创新精神推动高质量可持续发展，坚持与员工、合作伙伴、社会共享成就。
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import cloud from '@/assets/image/cloud.png'
import sun from '@/assets/image/sun.png'
import rain from '@/assets/image/rain.png'
import sun_cloud from '@/assets/image/sun_cloud.png'

import city_img from '@/assets/image/city.jpg'

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
      city_img: city_img
    }
  },
  methods: {
    getTime() {
      let oDate = new Date()
      let day = oDate.getDay()
      let hour = oDate.getHours()
      let minute: any = oDate.getMinutes()
      minute = minute < 10 ? '0' + minute : minute
      let miao: any = oDate.getSeconds()
      miao = miao < 10 ? '0' + miao : miao
      let year = oDate.getFullYear()
      let month: any = oDate.getMonth() + 1
      month = month < 10 ? '0' + month : month
      let date: any = oDate.getDate()
      date = date < 10 ? '0' + date : date
      this.nowDate = year + '-' + month + '-' + date
      let weeks = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六')
      this.week = weeks[day]
      this.hourTime = hour + ':' + minute + ':' + miao
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.getTime()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
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

.right_two {
  margin-top: 8px;
  height: calc(100% - 8px);
  .weather_box {
    border: 1px solid #004d68;
    padding: 14px 30px;
    background: rgba(0, 0, 0, 0.2);
    height: 80px;
    font-size: 15px;
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
          color: #7da1af;
          margin-right: 10px;
        }
      }
    }
  }

  .two_box {
    margin-top: 30px;
    height: calc(100% - 30px - 80px);
    .tabsFace {
      height: 100%;
      background: rgba(9, 23, 46, 0.8);
      .tabsBox {
        height: 100%;
        padding: 10px;
        img {
          height: 346px;
          width: 100%;
          opacity: 0.8;
        }
        span {
          color: #7da1af;
          display: inline-block;
          font-size: 15px;
          margin-top: 30px;
          height: calc(100% - 346px - 30px);
          overflow-x: auto;
        }
      }
    }
  }
}

.one_box {
  height: 46%;
  border: 1px solid #004d68;
  padding: 15px 30px;
  background: rgba(0, 0, 0, 0.2);

  .tabsFace {
    height: 100%;
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
