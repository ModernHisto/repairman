<script setup>
</script>

<template>
  <div class="background-linear__gradient"></div>
</template>

<style lang="scss" scoped>
.background-linear__gradient {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(142deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(9, 112, 176, 1) 5%,
      rgba(25, 224, 229, 1) 15%,
      rgba(9, 112, 176, 1) 20%,
      rgba(8, 10, 12, 1) 25%,
      rgba(2, 3, 4, 1) 65%,
      rgba(9, 112, 176, 1) 75%,
      rgba(25, 224, 229, 1) 85%,
      rgba(9, 112, 176, 1) 95%,
      rgba(0, 0, 0, 1) 100%);
  animation: background-hueShift 22s linear infinite;
}

@keyframes background-hueShift {
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
}
</style>