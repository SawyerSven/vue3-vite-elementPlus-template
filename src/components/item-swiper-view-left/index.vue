<template>
  <div ref="container" class="item-swiper-view-left">
    <div
      @mousedown="mouseDown"
      @mouseup="mouseUp"
      @mousemove="mouseMove"
      class="img-list"
      ref="moveBox"
    >
      <div class="image-content">
        <img
          :style="imageBaseWidthClass"
          @click="changeActiveItem(item.id)"
          :ref="`img-${item.id}`"
          :draggable="false"
          v-for="item in model"
          :key="item.id"
          :src="item.main"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  onMounted,
  PropType,
  ref
} from 'vue'

interface LeftItem {
  id: number
  main: string
}
export default defineComponent({
  name: 'ItemSwiperViewLeft',
  components: {},
  props: {
    model: {
      type: Array as PropType<LeftItem[]>,
      default: () => []
    },
    // 显示{showCount}个元素
    showCount: {
      type: Number,
      default: 4
    },
    activeImage: {
      type: Number,
      default: 0
    }
  },
  setup(props, ctx) {
    const currMovBoxTranslate = ref(0)
    const instance = getCurrentInstance()
    const wrapWidth = ref(0) // 容器宽度
    const imageBaseWidth = computed(() => wrapWidth.value / props.showCount)
    const activeItem = computed(() => <HTMLElement>instance?.refs[`img-${props.activeImage}`])
    const imageBaseWidthClass = computed(() => ({ width: `${imageBaseWidth.value}px` }))
    const isMouseDown = ref(false)
    const mouseDownStartX = ref(0)

    let mouseMoveDiff = 0

    // 在当前激活元素之后的元素, 即需要处理样式的元素们
    const getBehindItems = (isInit: Boolean = false) => {
      // const frontItemsNumber = Object.keys(props.model as any).length - props.activeImage
      // console.log(frontItemsNumber)
      let willChangeNumber = props.activeImage - 1 // 当前激活元素左边第一个img
      const active = activeItem.value
      active.style.transform = ''
      active.style.filter = ''
      active.style.marginRight = ''
      active.style.transition = isInit ? '' : 'all 1s linear'
      while (willChangeNumber > 0) {
        const diff = props.activeImage - willChangeNumber // 当前激活元素和即将被修改的元素的差值
        const willChangeItem: HTMLElement = <HTMLElement>instance?.refs[`img-${willChangeNumber}`]
        willChangeItem.style.transition = isInit ? '' : 'all 1s linear'
        willChangeItem.style.transform = `scale(${1 - diff / 6})`
        willChangeItem.style.filter = `blur(${diff * diff}px)`
        willChangeItem.style.marginRight = `${-diff * 50}px`
        willChangeNumber -= 1
      }
      // const currentItem = `img-${props.activeImage}`
    }
    // 处理当前激活元素之前的元素
    const getFowardItem = () => {
      let willChangeNumber = props.model.length - props.activeImage
      while (willChangeNumber > 0) {
        const willChangeItem: HTMLElement = <HTMLElement>(
          instance?.refs[`img-${props.activeImage + 1}`]
        )
        willChangeItem.style.transition = 'all 1s linear'
        willChangeItem.style.transform = `scale(${1.2})`
        willChangeNumber -= 1
      }
    }
    // 移动
    const moveToNext = (step: number = 1) => {
      const moveBox = instance?.refs.moveBox as HTMLElement
      moveBox.style.transition = `all 1s linear`
      currMovBoxTranslate.value += imageBaseWidth.value * step
      moveBox.style.transform = `translate3d(${currMovBoxTranslate.value}px,0,1px)`
    }

    const changeActiveItem = (id: number): void => {
      const diff = props.activeImage - id
      ctx.emit('update:activeImage', id)
      setTimeout(() => {
        getBehindItems()
        getFowardItem()
        moveToNext(diff)
      }, 30)
    }
    // 向前进一步
    const activeItemFoward = () => {
      if (props.activeImage < props.model.length) {
        changeActiveItem(props.activeImage + 1)
      }
    }
    const activeItemBack = () => {
      if (props.activeImage > 0) {
        changeActiveItem(props.activeImage - 1)
      }
    }

    const mouseMove = (e: any) => {
      if (isMouseDown.value) {
        mouseMoveDiff = e.screenX - mouseDownStartX.value
      }
    }

    const mouseUp = () => {
      isMouseDown.value = false
      if (mouseMoveDiff > 0) {
        activeItemBack()
      } else {
        activeItemFoward()
      }
    }

    const mouseDown = (e: any) => {
      isMouseDown.value = true
      mouseDownStartX.value = e.screenX
    }

    onMounted(() => {
      window.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowLeft') {
          activeItemBack()
        }
        if (e.code === 'ArrowRight') {
          activeItemFoward()
        }
      })
      wrapWidth.value = (instance?.refs?.container as HTMLElement).clientWidth
      nextTick(() => {
        getBehindItems(true)
      })
    })
    return {
      changeActiveItem,
      imageBaseWidthClass,
      mouseMove,
      isMouseDown,
      mouseDown,
      mouseUp
    }
  }
})
</script>

<style lang="scss" scoped>
.item-swiper-view-left {
  width: 65%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: #f2f2f2;
  .img-list {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    .image-content {
      width: auto;
      height: 800px;
      padding: 40px;
      white-space: nowrap;
      overflow-y: hidden;
      @include flex(flex-start, center);
      img {
        object-fit: none;
      }
    }
  }
}
</style>
