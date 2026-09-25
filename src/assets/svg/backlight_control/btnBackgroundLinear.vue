<script setup>
import { useBackgroundStore } from '@/stores/background';
const backgroundStore = useBackgroundStore();
</script>

<template>
  <div class="svg-container" @click="(backgroundStore.current !== 'linear') ? backgroundStore.setBackground('linear') : backgroundStore.setBackground('none')">
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0.988 -0.01 1.837 0.87">
      <path
        d="M2.841 0 1.996.85.998.85.998 0 2.837 0"
        stroke="#525252" stroke-width="0.05" fill="none" />
        <path
        d="M2.436.15 1.89.7 1.69.7 2.236.15 2.436.15"
        stroke="#525252" stroke-width="0.03" fill="none" />
        <path
        d="M1.926.15 1.726.15 1.18.7 1.38.7 1.926.15"
        stroke="#525252" stroke-width="0.03" fill="none" />
    </svg>
  </div>
</template>

<style lang="scss">
</style>