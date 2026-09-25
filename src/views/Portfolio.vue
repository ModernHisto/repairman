<script setup>
import preface from '@/components/reusable/Preface.vue';
import portfolioGallery from '@/components/portfolio/PortfolioGallery.vue';
</script>

<template>
  <section class="portfolio">
    <v-container>
      <div class="portfolio__container">
      <preface 
          title="My Works"
          subtitle="Here’s a glimpse of the projects I’ve had <br> the privilege to create." 
        />
      <portfolioGallery/>
    </div>
    </v-container>
  </section>
</template>

<style lang="scss">
  .portfolio {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>