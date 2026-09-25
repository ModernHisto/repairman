<script setup>
import arrow from '@/assets/svg/arrow.vue';
</script>

<template>
  <router-link :to="{ name: 'portfolio' }">
  <v-btn class="home-portfolio-btn" base-color="transparent">
    View works
    <arrow />
  </v-btn>
  </router-link>
</template>

<style lang="scss">
.home-portfolio-btn {
  border: 1px solid $green;
  border-radius: 5rem;
  padding: 1rem 2rem 2.5rem 2rem;
  text-transform: unset !important;
  font-size: 1rem;

  &:hover {
    background-color: $green !important;
    color: $black !important;
    font-weight: 900 !important;
  }

  &:hover .svg-container {
    --rotate: 360deg;
  }

  &:hover .svg-container svg path {
    stroke: $black !important;
  }
}
</style>