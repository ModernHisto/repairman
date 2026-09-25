<script setup>
</script>

 <template>
  <div class="background-edges__wrapper"> <!-- Обёртка для работы Transition -->
    <div class="background-edges__edge background-edges__edge--top"></div>
    <div class="background-edges__edge background-edges__edge--right"></div>
    <div class="background-edges__edge background-edges__edge--bottom"></div>
    <div class="background-edges__edge background-edges__edge--left"></div>

    <div class="background-edges__corner background-edges__corner--top-left"></div>
    <div class="background-edges__corner background-edges__corner--top-right"></div>
    <div class="background-edges__corner background-edges__corner--bottom-left"></div>
    <div class="background-edges__corner background-edges__corner--bottom-right"></div>
  </div>
</template>

<style lang="scss" scoped>
.background-edges__wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
}

.background-edges__edge,
.background-edges__corner {
  position: absolute;
  z-index: 0;
  pointer-events: none;
}

.background-edges__edge--top {
  top: 0;
  left: 0;
  right: 0;
  height: 40vh;
  background: radial-gradient(ellipse at 50% 0%,
      rgb(0, 204, 85) 0%,
      rgba(0, 204, 85, 0.63) 30%,
      rgba(0, 204, 85, 0.247) 50%,
      transparent 80%);
  filter: blur(3.12rem);
  animation: topGlow 12s ease-in-out infinite alternate;
}

.background-edges__edge--right {
  top: 0;
  right: 0;
  bottom: 0;
  width: 40vw;
  background: radial-gradient(ellipse at 100% 50%,
      rgb(0, 204, 85) 0%,
      rgba(0, 204, 85, 0.63) 30%,
      rgba(0, 204, 85, 0.247) 50%,
      transparent 80%);
  filter: blur(3.12rem);
  animation: rightGlow 10s ease-in-out infinite alternate;
}

.background-edges__edge--bottom {
  bottom: 0;
  left: 0;
  right: 0;
  height: 40vh;
  background: radial-gradient(ellipse at 50% 100%,
      rgb(0, 204, 85) 0%,
      rgba(0, 204, 85, 0.63) 30%,
      rgba(0, 204, 85, 0.247) 50%,
      transparent 80%);
  filter: blur(3.12rem);
  animation: bottomGlow 14s ease-in-out infinite alternate;
}

.background-edges__edge--left {
  top: 0;
  left: 0;
  bottom: 0;
  width: 40vw;
  background: radial-gradient(ellipse at 0% 50%,
      rgb(0, 204, 85) 0%,
      rgba(0, 204, 85, 0.63) 30%,
      rgba(0, 204, 85, 0.247) 50%,
      transparent 80%);
  filter: blur(3.12rem);
  animation: leftGlow 11s ease-in-out infinite alternate;
}

.background-edges__corner--top-left {
  top: 0;
  left: 0;
  width: 50vh;
  height: 50vh;
  background: radial-gradient(circle at 0% 0%,
      rgb(182, 0, 0) 0%,
      rgba(182, 0, 0, 0.473) 30%,
      rgba(182, 0, 0, 0.089) 50%,
      transparent 80%);
  filter: blur(2.81rem);
  animation: cornerTL 16s ease-in-out infinite alternate;
}

.background-edges__corner--top-right {
  top: 0;
  right: 0;
  width: 50vh;
  height: 50vh;
  background: radial-gradient(circle at 100% 0%,
      rgb(182, 0, 0) 0%,
      rgba(182, 0, 0, 0.473) 30%,
      rgba(182, 0, 0, 0.089) 50%,
      transparent 80%);
  filter: blur(2.81rem);
  animation: cornerTR 15s ease-in-out infinite alternate;
}

.background-edges__corner--bottom-left {
  bottom: 0;
  left: 0;
  width: 50vh;
  height: 50vh;
  background: radial-gradient(circle at 0% 100%,
      rgb(182, 0, 0) 0%,
      rgba(182, 0, 0, 0.473) 30%,
      rgba(182, 0, 0, 0.089) 50%,
      transparent 80%);
  filter: blur(2.81rem);
  animation: cornerBL 13s ease-in-out infinite alternate;
}

.background-edges__corner--bottom-right {
  bottom: 0;
  right: 0;
  width: 50vh;
  height: 50vh;
  background: radial-gradient(circle at 100% 100%,
      rgb(182, 0, 0) 0%,
      rgba(182, 0, 0, 0.473) 30%,
      rgba(182, 0, 0, 0.089) 50%,
      transparent 80%);
  filter: blur(2.81rem);
  animation: cornerBR 14s ease-in-out infinite alternate;
}

/* Анимации */
@keyframes topGlow {
  0% {
    opacity: 0.4;
    filter: blur(2.81rem) brightness(0.8);
    transform: translateY(-5%);
  }

  100% {
    opacity: 0.8;
    filter: blur(60px) brightness(1.3);
    transform: translateY(0);
  }
}

@keyframes rightGlow {
  0% {
    opacity: 0.4;
    filter: blur(2.81rem) brightness(0.8);
    transform: translateX(5%);
  }

  100% {
    opacity: 0.8;
    filter: blur(60px) brightness(1.3);
    transform: translateX(0);
  }
}

@keyframes bottomGlow {
  0% {
    opacity: 0.4;
    filter: blur(2.81rem) brightness(0.8);
    transform: translateY(5%);
  }

  100% {
    opacity: 0.8;
    filter: blur(60px) brightness(1.3);
    transform: translateY(0);
  }
}

@keyframes leftGlow {
  0% {
    opacity: 0.4;
    filter: blur(2.81rem) brightness(0.8);
    transform: translateX(-5%);
  }

  100% {
    opacity: 0.8;
    filter: blur(60px) brightness(1.3);
    transform: translateX(0);
  }
}

@keyframes cornerTL {
  0% {
    opacity: 0.3;
    filter: blur(40px) brightness(0.8);
    transform: scale(0.9) translate(-5%, -5%);
  }

  100% {
    opacity: 0.7;
    filter: blur(55px) brightness(1.4);
    transform: scale(1.2) translate(0, 0);
  }
}

@keyframes cornerTR {
  0% {
    opacity: 0.3;
    filter: blur(40px) brightness(0.8);
    transform: scale(0.9) translate(5%, -5%);
  }

  100% {
    opacity: 0.7;
    filter: blur(55px) brightness(1.4);
    transform: scale(1.2) translate(0, 0);
  }
}

@keyframes cornerBL {
  0% {
    opacity: 0.3;
    filter: blur(40px) brightness(0.8);
    transform: scale(0.9) translate(-5%, 5%);
  }

  100% {
    opacity: 0.7;
    filter: blur(55px) brightness(1.4);
    transform: scale(1.2) translate(0, 0);
  }
}

@keyframes cornerBR {
  0% {
    opacity: 0.3;
    filter: blur(40px) brightness(0.8);
    transform: scale(0.9) translate(5%, 5%);
  }

  100% {
    opacity: 0.7;
    filter: blur(55px) brightness(1.4);
    transform: scale(1.2) translate(0, 0);
  }
}

/* Адаптив */

@include down($lg) {
  .background__edge-gradient {
    filter: blur(2.18rem);
  }

  .background__edge-gradient--left,
  .background__edge-gradient--right {
    width: 60vw;
  }

  .background__edge-gradient--top,
  .background__edge-gradient--bottom {
    height: 30vh;
  }
}
</style>