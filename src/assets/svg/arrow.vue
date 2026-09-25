<script setup>
</script>

<template>
  <div class="svg-container">
    <svg width="1.5rem" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="white" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  </div>
</template>


<style lang="scss">
.svg-container {
  transition: transform 0.3s ease;
  transform: rotate(var(--rotate, 0deg));
}
</style>