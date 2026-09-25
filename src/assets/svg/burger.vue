<template>
  <div class="svg-container">
    <svg xmlns='http://www.w3.org/2000/svg' width="30px" viewBox='0 -2 30 30'>
      <path stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2'
        d='M4 7h22M4 15h22M4 23h22' />
    </svg>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.svg-container {
  transition: color 0.3s ease;
  color: $translucent-white;
  cursor: pointer;
  
  path {
    transition: stroke 0.3s ease;
  }
}

.svg-container:active {
  color: $green;
}
</style>