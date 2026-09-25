<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'todo'
  },
  subtitle: {
    type: String,
    default: 'todo'
  },
})
</script>

<template>
  <div class="preface">
    <h3 class="preface__title" v-html="title">
    </h3>
    <p class="preface__subtitle h2" v-html="subtitle">
    </p>
  </div>
</template>

<style lang="scss">
.preface {
  text-align: center;
  width: 66%;
  margin-bottom: 3.5rem;

    @include down($lg) {
      width: 100%;
    }

    @include down($md) {
      width: 100%;
      margin-bottom: 2.5rem;
    }
    
  &__title {
    color: $green;
    margin-bottom: 1rem;
    letter-spacing: 0.3rem;
  }
}
</style>