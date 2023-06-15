<template>
  <div class="left_box">
    <div class="one_box tabsType1">
      <div class="tabsFace">
        <div class="tabsBox">
          <div class="list" v-for="(v, k) in oneList" :key="k">
            <div class="name">{{ v.name }}</div>
            <div class="number">{{ v.number }}</div>
            <!-- <div class="percentage">
              同比增幅
              <span class="num">{{ v.percentage }} %</span>
              <i class="fa fa-sort-asc"></i>
            </div> -->
          </div>
          <div class="title">
            <div>2022 年度数据</div>
          </div>
        </div>
      </div>
    </div>
    <div class="rt_one">
      <div class="rt_one_left">
        <i class="fa fa-user"></i>
        <div class="rt_one_num">
          <div class="name">在职人员</div>
          <div class="plate_num">
            <span duration="2000">{{ listData.staffNum || 0 }}</span>
          </div>
        </div>
      </div>
      <div class="rt_one_right">
        <i class="icon iconfont">&#xe6c7;</i>
        <div class="rt_one_num">
          <div class="name">共产党员</div>
          <div class="plate_num">
            <span duration="2000">{{ listData.memberNum || 0 }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="rt_two">
      <div class="three_list">
        <div class="tabsType1 list" v-for="(v, k) in honorList" :key="k">
          <div class="tabsFace">
            <div class="tabsBox">
              <div class="honor_box">
                <div v-if="v.number != null" class="icon">
                  <div class="top">TOP</div>
                  <div class="number">{{ v.number }}</div>
                </div>
                <div v-else class="icon">
                  <div class="img">
                    <img :src="v.imgSrc" />
                  </div>
                </div>
                <div class="value">
                  <p>{{ v.value1 }}</p>
                  <p>{{ v.value2 }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import honorImg from '../images/honor.png'
export default {
  props: ['oneList'],
  components: {},
  data() {
    return {
      listData: {
        staffNum: 20089,
        memberNum: 1526
      },
      honorList: [
        {
          number: 319,
          value1: '中国企业',
          value2: '500 强'
        },
        {
          number: 128,
          value1: '中国民营',
          value2: '企业 500 强'
        },
        {
          number: 3,
          value1: '四川民营',
          value2: '企业 100 强'
        },
        {
          number: null,
          imgSrc: honorImg,
          value1: '中国最佳',
          value2: '雇主品牌'
        },
        {
          number: null,
          imgSrc: honorImg,
          value1: '四川省优秀',
          value2: '民营企业'
        },
        {
          number: null,
          imgSrc: honorImg,
          value1: '成都市优秀',
          value2: '民营企业'
        }
      ]
    }
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.left_box {
  margin-top: 8px;
  height: calc(100% - 8px);
}
.one_box {
  height: 46%;
  .tabsFace {
    height: 100%;
  }
  .tabsBox {
    height: 100%;
    display: flex;
    justify-content: space-between;
    background: url('../images/one_bg.png') center no-repeat;
    background-size: auto 95%;
    align-items: center;
    .list:first-child {
      text-align: right;
    }
    .list {
      width: 42%;
      margin-bottom: 20px;
      .name {
        letter-spacing: 1px;
        font-size: 20px;
        color: #fff;
      }
      .number {
        color: rgb(255, 192, 0);
        font-size: 30px;
        font-weight: bold;
        letter-spacing: 2px;
        margin: 15px 0;
      }
      .percentage {
        letter-spacing: 1px;
        color: #aaa;
        .num {
          color: red;
          margin-right: 5px;
        }
        i {
          color: red;
          vertical-align: middle;
          display: inline-block;
          height: 16px;
        }
      }
    }
    .title {
      position: absolute;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      div {
        display: inline-block;
        background: rgba(255, 255, 255, 0.2);
        line-height: 42px;
        border-radius: 3px;
        letter-spacing: 1px;
        font-size: 15px;
        padding: 0 25px;
      }
    }
  }
}
.home_title {
  margin-bottom: 10px;
  span {
    display: inline-block;
    line-height: 24px;
    padding: 0 20px;
    border-radius: 12px;
    color: #fff !important;
  }
  p {
    float: right;
    color: #999;
    font-size: 12px;
  }
}

.three_box {
  margin-top: 40px;
  .btm_icon {
    margin: 0 0 10px;
    text-align: center;
    .icon_box {
      display: inline-block;
      margin: 0 20px;
      span {
        display: inline-block;
        vertical-align: middle;
      }
      .icon {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: 5px;
      }
      .name {
        color: #d8d8d9;
        letter-spacing: 1px;
      }
    }
  }
}
.rt_one {
  color: #bfbfbf;
  vertical-align: middle;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  height: 14%;
  .rt_one_num {
    display: inline-block;
    vertical-align: middle;
    .plate_num {
      display: inline-block;
      span {
        color: rgb(210, 225, 0);
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
  .rt_one_left {
    width: 48.5%;
    display: flex;
    align-items: center;
  }
  i {
    font-size: 52px;
    margin-right: 15px;
    color: #ffc000;
  }
  .name {
    margin-bottom: 5px;
    color: #fff;
    font-size: 16px;
    letter-spacing: 2px;
  }

  .rt_one_text {
    display: inline-block;
    margin-left: 15px;
    color: #a9a9a6;
    span {
      color: #ffc000;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .rt_one_right {
    width: 48.5%;
    display: flex;
    align-items: center;
  }
}
.rt_one > div {
  border: 1px solid #13284d;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  padding: 14px 35px;
}

.rt_two {
  height: calc(38% - 44px);
  margin-top: 30px;
  .three_list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: space-between;
    align-content: flex-end;
    .tabsFace {
      border: 0px;
    }
    .list {
      width: calc(33.33% - 10px);
      margin-top: 37px;
      margin-right: 5px;
      margin-left: 5px;
      height: calc(50% - 20px);
      .tabsFace {
        background: rgba(255, 255, 255, 0.05);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .tabsBox {
          height: 100%;
          width: 100%;
        }
      }
      .honor_box {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon {
          width: 40px;
          text-align: center;
          height: 46px;
          .top {
            font-size: 12px;
            color: rgb(159, 167, 10);
          }
          .number {
            color: rgb(255, 192, 0);
            font-size: 21px;
            margin-top: 2px;
            font-weight: bold;
          }
          .img {
            position: relative;
            height: 100%;
            img {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              width: 100%;
              left: 0;
            }
          }
        }
        .value {
          margin-left: 7px;
          height: 46px;
          p {
            font-size: 15px;
          }
          p:last-child {
            margin-top: 3px;
          }
        }
      }
      .honor_box > div {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
</style>
