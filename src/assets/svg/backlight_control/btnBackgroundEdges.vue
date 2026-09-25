<script setup>
import { useBackgroundStore } from '@/stores/background';
const backgroundStore = useBackgroundStore();
</script>

<template>
  <div class="svg-container" @click="(backgroundStore.current !== 'edges') ? backgroundStore.setBackground('edges') : backgroundStore.setBackground('none')">
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="-0.81 -0.01 1.62 0.87">
      <path
        d="M-.8 0-.8.85.8.85.8 0-.8 0"
        stroke="#525252" stroke-width="0.05" fill="none" />
        <path
        d="M-.6.15 0 .22.6.15.48.425.6.7 0 .63-.6.7-.48.425Z"
        stroke="#525252" stroke-width="0.05" fill="none" />
    </svg>
  </div>
</template>

<style lang="scss">
</style>