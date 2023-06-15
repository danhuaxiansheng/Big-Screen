<template>
  <img src="@/assets/image/summary.jpg" alt="" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import router from '@/router/index'

/**上传证书弹出框 */
export default defineComponent({
  name: 'summary',
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

<style>
img {
  height: 100%;
  width: 100%;
}
</style>
