<script setup>
import { useBackgroundStore } from '@/stores/background';
const backgroundStore = useBackgroundStore();
</script>

<template>
  <div class="svg-container" @click="(backgroundStore.current !== 'bars') ? backgroundStore.setBackground('bars') : backgroundStore.setBackground('none')">
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="-2.83 -0.01 1.837 0.87">
      <path
        d="M-2.82 0-1.997.85-1.006.85-1.003 0-2.82 0"
        stroke="#525252" stroke-width="0.05" fill="none" />

      <path d="M-2.2.15-1.69.7-1.89.7-2.4.15-2.2.15" stroke="#525252" stroke-width="0.03"
        fill="none" />
      <path d="M-1.84.15-1.35.7-1.55.7-2.04.15-1.84.15" stroke="#525252" stroke-width="0.03"
        fill="none" />
      <path d="M-1.492.15-1.21.49-1.21.7-1.692.15-1.492.15" stroke="#525252" stroke-width="0.03"
        fill="none" />
        <path d="M-1.373.15-1.21.362-1.21.15-1.373.15" stroke="#525252" stroke-width="0.03"
        fill="none" />

    </svg>
  </div>
</template>

<style lang="scss">
</style>