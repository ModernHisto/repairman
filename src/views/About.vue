<script setup>
import preface from '@/components/reusable/Preface.vue';
import aboutTabs from '@/components/about/AboutTabs.vue';
</script>

<template>
  <section class="about">
    <v-container>
      <div class="about__container">
        <preface 
          title="About Me"
          subtitle="A multifaceted developer with a knack for blending creativity & technical precision." 
        />
        <aboutTabs />
      </div>
    </v-container>
  </section>
</template>

<style lang="scss">
.about {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>