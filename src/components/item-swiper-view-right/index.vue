<template>
  <div class="item-swiper-view-right">
    <div ref="swiperBox" class="item-swiper-box">
      <div :ref="`item-${item.id}`" v-for="item in displayList" :key="item.id" class="item">
        <div v-for="(cover, index) in item.cover" :key="index">
          <img :src="cover" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, onMounted, PropType, watch } from 'vue'

interface LeftItem {
  id: number
  cover: string[]
}
export default defineComponent({
  name: 'ItemSwiperViewRight',
  props: {
    model: {
      type: Array as PropType<LeftItem[]>,
      default: () => []
    },
    activeImage: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const instance = getCurrentInstance()
    const displayList = computed(() => Array.from(props.model).reverse())
    console.log(props.activeImage)

    const activeChangeTranslateY = () => {
      const diff = props.model.length - props.activeImage
      return -(diff * (instance?.refs[`item-${props.activeImage}`] as HTMLElement).clientHeight)
    }

    const setListTransform = () => {
      ;(
        instance?.refs.swiperBox as HTMLElement
      ).style.transform = `translate3d(0,${activeChangeTranslateY()}px,1px)`
    }

    watch(
      () => props.activeImage,
      () => {
        setListTransform()
      }
    )

    onMounted(() => {
      setListTransform()
    })

    return { displayList, activeChangeTranslateY }
  }
})
</script>

<style lang="scss" scoped>
.item-swiper-view-right {
  flex: 1;
  margin-left: 10%;
  height: 800px;
  overflow: hidden;
  .item-swiper-box {
    transition: transform ease-in 0.75s;
    .item {
      width: 300px;
      img {
        width: 100%;
        height: 375px;
      }
    }
  }
}
</style>
