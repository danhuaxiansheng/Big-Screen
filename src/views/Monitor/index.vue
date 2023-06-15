<template>
  <div class="supervisoryConsole">
    <div class="top">
      <div class="topLeft">
        <img src="@/assets/image/logo.png" alt="" />
      </div>
      <div class="topCenter">
        <div>龙大美食全流程监控台</div>
        <img
          src="@/assets/image/titleBackground.png"
          alt=""
          style="height: 100%; position: absolute"
        />
      </div>
    </div>
    <div class="bottom">
      <div class="bottom_section">
        <div class="bottom_section_section">
          <div id="playWnd1" class="bottom_section_section_box"></div>
          <div class="bottom_section_section_title">经4产房一号舍</div>
        </div>
        <div class="bottom_section_section">
          <div id="playWnd2" class="bottom_section_section_box"></div>
          <div class="bottom_section_section_title">主西舍内南</div>
        </div>
        <div class="bottom_section_section">
          <div id="playWnd5" class="bottom_section_section_box"></div>
          <div class="bottom_section_section_title">麻电</div>
        </div>
        <div class="bottom_section_section">
          <div id="playWnd6" class="bottom_section_section_box"></div>
          <div class="bottom_section_section_title">劈脊车间</div>
        </div>
        <div class="bottom_section_section">
          <div id="playWnd7" class="bottom_section_section_box"></div>
          <div class="bottom_section_section_title">分割车间</div>
        </div>
      </div>
      <div class="bottom_section">
        <div class="bottom_section_section">
          <div id="playWnd9" class="bottom_section_section_box"></div>
          <div class="bottom_section_section_title">新大客户间</div>
        </div>
        <div class="bottom_section_section">
          <div id="playWnd3" class="bottom_section_section_box"></div>
          <div class="bottom_section_section_title">前处理间</div>
        </div>
        <div class="bottom_section_section">
          <div id="playWnd8" class="bottom_section_section_box"></div>
          <div class="bottom_section_section_title">灌装车间</div>
        </div>
        <div class="bottom_section_section">
          <div id="playWnd10" class="bottom_section_section_box"></div>
          <div class="bottom_section_section_title">内包装车间</div>
        </div>
        <div class="bottom_section_section">
          <div id="playWnd11" class="bottom_section_section_box"></div>
          <div class="bottom_section_section_title">外包装车间</div>
        </div>
      </div>

      <div class="bottom_section">
        <div class="bottom_section_section">
          <div id="playWnd4" class="bottom_section_section_box"></div>
          <div class="bottom_section_section_title">码垛入库</div>
        </div>
        <div class="bottom_section_section">
          <div id="playWnd12" class="bottom_section_section_box"></div>
          <div class="bottom_section_section_title">理化分析室</div>
        </div>
        <div class="bottom_section_section">
          <div id="playWnd13" class="bottom_section_section_box"></div>
          <div class="bottom_section_section_title">仪器分析室</div>
        </div>
        <div class="bottom_section_section_collet">
          <div class="bottom_section_section_box">
            <div class="bottom_section_section_collet_title">
              <div class="bottom_section_section_collet_title_section">实时存栏数</div>
              <div class="bottom_section_section_collet_title_section">当日屠宰数</div>
              <div class="bottom_section_section_collet_title_section">当日产量</div>
            </div>
            <div class="bottom_section_section_collet_Num">
              <div class="bottom_section_section_collet_Num_section">
                <span style="font-size: 30px; color: #f3833b">302369</span>头
              </div>
              <div class="bottom_section_section_collet_Num_section">
                <span id="slaughterNum" style="font-size: 30px">0</span>头
              </div>
              <div class="bottom_section_section_collet_Num_section">
                <span id="slaughterWeight" style="font-size: 30px; color: #70eba1">0</span>吨
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import router from '@/router/index'
import './hooks'

/**上传证书弹出框 */
export default defineComponent({
  name: 'monitor',
  components: {},
  setup() {
    const form = ref<HTMLFormElement>()
    const loading = ref<boolean>(false)

    var username = window.sessionStorage.getItem('username')
    var password = window.sessionStorage.getItem('password')
    if (username == null || password == null) {
      // window.location.href="index.html";
      router.push({
        path: '/login'
      })
    }

    return {
      loading,
      form
    }
  }
})
</script>

<style scoped>
@import url(./style/index.css);
@import url(./style/reset.css);
</style>
