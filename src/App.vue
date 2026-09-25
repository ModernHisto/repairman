<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Background from '@/components/Background.vue'
import TheHeader from '@/layout/Header.vue';
import TheFooter from '@/layout/Footer.vue';
</script>

<template>
  <Background>
    <TheHeader />
    <router-view v-slot="{ Component }">
      <transition name="vertical-slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <TheFooter />
  </Background>
</template>

<style lang="scss">
.background__content>section {
  @include up($md) {
    height: calc(100vh - 3.8rem);
  }
}
</style>