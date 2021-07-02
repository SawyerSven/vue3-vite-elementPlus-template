<template>
  <div class="container">
    <ItemSwiperView></ItemSwiperView>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ItemSwiperView from '@/components/item-swiper-view/index.vue'
// import http from '@/common/axios/index'

export default defineComponent({
  name: 'Home',
  components: { ItemSwiperView },
  setup() {
    // http
    //   .get('/users/XPoet')
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((er) => {
    //     console.log(er)
    //   })
  }
})
</script>

<style lang="scss" scoped></style>
