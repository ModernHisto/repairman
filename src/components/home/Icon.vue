<template>
  <div class="icon-neon">
    <div class="neon-glow"></div>
    <div class="neon-border"></div>
    <div class="icon">
      <v-img src="/icon.webp" width="100%" height="100%" alt="icon" cover></v-img>
    </div>
  </div>
</template>

<style lang="scss">
.icon-neon {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 100%;

  .icon {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    overflow: hidden;
    position: relative;
    z-index: 3;
  }

  .neon-border {
    position: absolute;
    top: -0.125rem;
    left: -0.125rem;
    right: -0.125rem;
    bottom: -0.125rem;
    border-radius: 100%;
    border: 0.125rem solid $neon;
    box-shadow:
      0 0 0.625rem $glow,
      0 0 1.25rem $glow,
      inset 0 0 0.625rem $glow;
    animation: neon-flicker 2s ease-in-out infinite;
    z-index: 2;
  }

  .neon-glow {
    position: absolute;
    top: -0.625rem;
    left: -0.625rem;
    right: -0.625rem;
    bottom: -0.625rem;
    border-radius: 100%;
    background: $glow;
    filter: blur(0.9rem);
    opacity: 0;
    animation: glow-pulse 3s ease-in-out infinite;
    z-index: 1;
  }
}

@keyframes neon-flicker {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.7;
  }
}

@keyframes glow-pulse {

  0%,
  100% {
    opacity: 0;
    transform: scale(0.95);
  }

  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}
</style>