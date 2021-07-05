<template>
  <div class="item-swiper-view">
    <!-- eslint-disable-next-line vue/no-v-model-argument -->
    <Left v-model:activeImage="activeImage" :model="leftData"></Left>
    <!-- eslint-disable-next-line vue/no-v-model-argument -->
    <Right v-model:activeImage="activeImage" :model="rightData"></Right>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
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
    const activeImage = ref(dataList[dataList.length - 1].id)
    return { leftData, rightData, activeImage }
  }
})
</script>

<style lang="scss" scoped>
.item-swiper-view {
  width: 100%;
  height: 800px;
  background: #f2f2f2;
  @include flex();
}
</style>
