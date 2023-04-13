<template>
  <div class="container">
    <Header></Header>
    <div class="login">
      <section class="form-box animate__fadeIn">
        <el-form
          :model="loginForm"
          :rules="loginRules"
          class="login-form"
          autocomplete="on"
          label-position="left"
          ref="form"
        >
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="请输入用户名"
              maxlength="100"
              clearable
              @keyup.enter="onLogin"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="loginForm.password"
              maxlength="100"
              placeholder="请输入密码"
              @keyup.enter="onLogin"
            >
            </el-input>
          </el-form-item>
          <BorderBox8 style="height: 40px">
            <!-- prevent 修饰符 阻止该元素的默认keyup事件 -->
            <el-button :loading="loading" type="primary" class="login-btn" @click.prevent="onLogin"
              >登录</el-button
            >
          </BorderBox8>
          <!-- <BorderBox1 :color="['red', 'green']" backgroundColor="blue">BorderBox1</BorderBox1> -->
        </el-form>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, unref } from 'vue'
import router from '@/router/index'
import Header from '@/components/Header/index.vue'

import { BorderBox8 } from '@dataview/datav-vue3'

/**上传证书弹出框 */
export default defineComponent({
  name: 'loginIndex',
  components: {
    Header,
    BorderBox8
  },
  setup() {
    const form = ref<HTMLFormElement>()
    //登录form
    const loginForm = reactive({
      username: '',
      password: ''
    })
    const loading = ref<boolean>(false)
    //登录form Rules
    const loginRules = reactive({
      username: [
        {
          required: true,
          trigger: 'blur',
          message: '请输入账户'
        }
      ],
      password: [
        {
          required: true,
          trigger: 'blur',
          message: '请输入密码'
        }
      ]
    })
    //登录
    function onLogin(): void {
      // unref(form) 获取el-form 中的值和方法
      const validForm: HTMLFormElement | undefined = unref(form)
      if (!validForm) {
        return
      }
      // validate 校验结束后触发 返回是否校验成功
      validForm.validate((valid: boolean): void => {
        if (valid) {
          loading.value = true
          router.push({
            path: '/entrance'
          })
        }
      })
    }
    return {
      loginForm,
      loading,
      loginRules,
      onLogin,
      form
    }
  }
})
</script>
<style lang="scss">
@import url(./style/index.scss);
</style>
