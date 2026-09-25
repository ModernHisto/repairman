<script setup>
import BacklightControl from '@/components/header/BacklightControl.vue';
</script>

<template>
  <div class="header__ledge" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%"
      viewBox="-4.01 -0.01 8.02 1.02">
      <path d="M-100 0-3 0-2 1 2 1 3 0 100 0" stroke="#ffffff1c" stroke-width="0.05" fill="rgba(29, 29, 29, 0.396)" />
    </svg>
    <BacklightControl />
  </div>
</template>

<style lang="scss">
.header__ledge {
  position: absolute;
  z-index: 1000;
  left: 50%;
  top: 41.6%;
  transform: translateX(-50%) translateY(100%);
  width: 100%;
  height: 59%;

  >svg {
    filter: drop-shadow(0px 3px 2px $main-components);
  }
}
</style>