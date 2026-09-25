<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useBackgroundStore } from '@/stores/background';

import BackgroundLinear from '@/components/BackgroundLinear.vue'
import BackgroundBars from '@/components/BackgroundBars.vue'
import BackgroundEdges from '@/components/BackgroundEdges.vue'

const backgroundStore = useBackgroundStore();

const currentBackgroundComponent = computed(() => {
  switch (backgroundStore.current) {
    case 'linear': return BackgroundLinear;
    case 'bars': return BackgroundBars;
    case 'edges': return BackgroundEdges;
    default: return BackgroundLinear;
  }
});

const cursorPosition = ref({ x: 0, y: 0 })
const cursorStyle = ref({})

const updateCursorPosition = (e) => {
  cursorPosition.value = { x: e.clientX, y: e.clientY }
  cursorStyle.value = {
    left: `${cursorPosition.value.x}px`,
    top: `${cursorPosition.value.y}px`,
    opacity: '1'
  }
}

const handleMouseLeave = () => {
  cursorStyle.value = { ...cursorStyle.value, opacity: '0' }
}

onMounted(() => {
  window.addEventListener('mousemove', updateCursorPosition)
  document.addEventListener('mouseleave', handleMouseLeave)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursorPosition)
  document.removeEventListener('mouseleave', handleMouseLeave)
})
</script>

<template>
  <div class="background">

    <Transition name="fade">
        <component :is="currentBackgroundComponent" :key="backgroundStore.current" />
    </Transition>

    <div class="background__layer background__layer--honeycomb"></div>
    <div class="background__layer background__layer--cursor-gradient" :style="cursorStyle"></div>

    <div class="background__content">
      <slot></slot>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.background {
  position: relative;
  width: 100%;
  min-height: 100vh;
  z-index: 10;
  background: #0a0c0f;
  overflow: hidden;

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, transparent 30%, rgba(0, 0, 0, 0.2) 100%);
    pointer-events: none;
  }
}

.background__layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &--honeycomb {
    background-image: url(@/assets/svg/background.svg);
    background-size: cover;
    z-index: 1;
  }

  &--cursor-gradient {
    width: 31.25rem;
    height: 31.25rem;
    border-radius: 50%;
    background: radial-gradient(circle,
        rgba(102, 253, 15, 0.8) 0%,
        rgba(102, 253, 15, 0.4) 30%,
        rgba(102, 253, 15, 0.2) 50%,
        transparent 70%);
    pointer-events: none;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    filter: blur(1px);

  }
}

.background__content {
  position: relative;
  z-index: 100;
  pointer-events: auto;
}

@include down($lg) {
  .background__layer {
    &--cursor-gradient {
      display: none;
    }
  }
}
</style>