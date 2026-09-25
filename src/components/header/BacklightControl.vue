<script setup>
import { useBackgroundStore } from '@/stores/background';

const backgroundStore = useBackgroundStore();

import btnBackgroundEdges from '@/assets/svg/backlight_control/btnBackgroundEdges.vue';
import btnBackgroundLinear from '@/assets/svg/backlight_control/btnBackgroundLinear.vue';
import btnBackgroundBars from '@/assets/svg/backlight_control/btnBackgroundBars.vue';
</script>

<template>
  <div class="backlight-control">
    <div class="backlight-control__description">BACKGROUND PRESETS</div>
    <div class="backlight-control__container">
      <btnBackgroundBars :class="{ active: backgroundStore.current === 'bars' }"
        @click="backgroundStore.setBackground('bars')" />
        
      <btnBackgroundEdges :class="{ active: backgroundStore.current === 'edges' }"
        @click="backgroundStore.setBackground('edges')" />

      <btnBackgroundLinear :class="{ active: backgroundStore.current === 'linear' }"
        @click="backgroundStore.setBackground('linear')" />
    </div>
  </div>
</template>

<style lang="scss">
.backlight-control {
  &__container {
    z-index: 1000;
    position: absolute;
    bottom: 0.53rem;
    left: calc(50% - 8.1rem);
    width: 16.2rem;
    height: 1.68rem;
    display: flex;
    gap: 0.5rem;
    justify-content: center;

    .svg-container {
      transition: color 0.3s ease;
      color: $translucent-white;
      stroke: $translucent-white;
      height: 100%;
      width: max-content;
    }

    .active {
      svg {
        path {
          stroke: $green !important;
        }
      }
    }

    @include up($md) {
      .svg-container:hover {
        filter: drop-shadow(0 0 1px $green);
        color: $light-green;
      }
    }

    .svg-container:hover {
      svg {
        path {
          stroke: $light-green;
        }
      }
    }

    .svg-container:active {
      svg {
        filter: drop-shadow(0 0 1px $green);
        color: $green;
      }
    }
  }

  &__description {
    z-index: 1000;
    position: absolute;
    left: calc(50% - 4.3rem);
    top: -36%;
    width: max-content;
    height: max-content;
    color: #6a6a6a;
    font-size: 0.5rem;
    letter-spacing: 0.2rem;
  }
}
</style>