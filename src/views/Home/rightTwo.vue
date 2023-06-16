<template>
  <div class="right_box">
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
    <div class="tabsType1 box_content">
      <div class="tabsFace head-desc">
        <div class="tabsBox">
          <img class="top-img" :src="city_img" />
          <span class="desc">
            蓝润集团创始于1997年，秉承“实业报国
            服务民生”的企业使命，深耕大消费领域，是以食品业为主的大型综合性产业集团，现拥有员工2万余人，管理资产规模超千亿元，与全球20多个国家和地区建立合作。连续多年入选“中国企业500强”“中国民营企业500强”，位列“四川民营企业100强”第三位。
          </span>
        </div>
      </div>
      <div class="box-bottom">
        <div class="">
          <p>服务国家战略，践行社会责任</p>
          <div class="box-list">
            <div class="bottom-list">
              <span>乡村振兴</span>
              <span>
                产业项目<span class="blue-color">近50个</span>，受益贫困人口<span class="blue-color"
                  >10万</span
                >余人，参与基础设施建设，受益近1万户家庭，参与<span class="blue-color"
                  >“万企帮万村”</span
                >、<span class="blue-color">“万企兴万村”</span
                ><span class="blue-color">国省重点</span>行动
              </span>
            </div>
            <div class="bottom-list">
              <span>公益奉献</span>
              <span>
                公益捐赔<span class="blue-color">超亿元</span>， 抗击新冠疫情捐款捐物<span
                  class="blue-color"
                  >800余万元</span
                >，扶持商家减免租金<span class="blue-color">360万元</span
                >，参与基层治理，协助政府核酸检测<span class="blue-color">超10万人</span>
              </span>
            </div>
            <div class="bottom-list">
              <span>稳产保传</span>
              <span>
                产业链分布全国<span class="blue-color">近30个</span
                >地区，助力疫区保供，提供产品<span class="blue-color">近5000吨</span>
              </span>
            </div>
            <div class="bottom-list">
              <span>共同富裕</span>
              <span
                >直接及间接创造就业岗位<span class="blue-color">超百万个</span
                >，主要产业农村户口比例占比<span class="blue-color">高达80% </span></span
              >
            </div>
          </div>
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
    setInterval(() => {
      this.getTime()
    }, 1000)
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

.box-bottom {
  height: calc(100% - 450px - 20px);
  margin-top: 20px;
  overflow-x: auto;
  p {
    color: rgb(255, 192, 0);
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 13px;
  }

  .blue-color {
    font-size: 15px;
    font-weight: normal;
    display: initial;
    color: #67c6e6;
  }
  .bottom-list {
    height: 155px;
    width: calc(50% - 10px);
    float: left;
    margin-right: 10px;
    margin-top: 10px;
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.05);
    & > span:nth-child(1) {
      color: rgb(255, 192, 0);
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 3px;
      display: inline-block;
    }
    & > span:last-child {
      color: #d2f5ff;
      font-size: 13px;
      display: inline-block;
    }
  }
}

.right_box {
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

  .box_content {
    margin-top: 30px;
    height: calc(100% - 30px - 80px);
    .head-desc {
      background: rgba(9, 23, 46, 0.8);
      .tabsBox {
        padding: 10px;
        span.desc {
          color: #d2f5ff;
          display: inline-block;
          font-size: 15px;
          overflow-x: auto;
          letter-spacing: 3px;
          text-indent: 2em;
          margin-top: 10px;
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
