<template>
  <div class="home">home</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import http from '@/common/axios/index'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    http
      .get('/users/XPoet')
      .then((res) => {
        console.log(res)
      })
      .catch((er) => {
        console.log(er)
      })
  }
})
</script>

<style lang="scss" scoped></style>
