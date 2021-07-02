<template>
  <div class="item-swiper-view">
    <Left :model="leftData"></Left>
    <Right :model="rightData"></Right>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import Left from '@/components/item-swiper-view-left/index.vue'
import Right from '@/components/item-swiper-view-right/index.vue'
// eslint-disable-next-line import/extensions
import list from './data'

export default defineComponent({
  name: 'ItemSwiperView',
  components: { Left, Right },
  setup() {
    const dataList = reactive(list)
    const leftData = computed(() => dataList.map(({ id, main }) => ({ id, main })))
    const rightData = computed(() => dataList.map(({ id, cover }) => ({ id, cover })))
    return { leftData, rightData }
  }
})
</script>

<style lang="scss" scoped>
.item-swiper-view {
  width: 100%;
  height: 800px;
  @include flex();
}
</style>
