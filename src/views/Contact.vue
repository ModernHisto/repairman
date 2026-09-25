<script setup>
  import preface from '@/components/reusable/Preface.vue';
  import contactBlock from '@/components/contact/ContactBlock.vue';
</script>

<template>
  <section class="contact">
    <v-container>
      <div class="contact__container">
        <preface 
          title="Let’s Collaborate"
          subtitle="Have a project in mind or need guidance? Let’s connect." 
        />
        <contactBlock/>
      </div>
    </v-container>
  </section>
</template>

<style lang="scss">
.contact {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>