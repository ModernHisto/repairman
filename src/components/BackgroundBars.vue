<script setup>
import { ref } from 'vue';

const neonColors = {
  pink: '#ff00ff',
  blue: '#00ffff',
  green: '#39ff14',
  yellow: '#ffff00',
  orange: '#ff6a00',
  red: '#ff0000',
  purple: '#9d00ff',
  cyan: '#00f5ff',
  magenta: '#ff0099',
  lime: '#ccff00'
};

const gradientBars = ref([]);

// Генерируем 15 прямоугольных полос
for (let i = 0; i < 15; i++) {
  // Случайные цвета для полосы
  const color1 = neonColors[Object.keys(neonColors)[Math.floor(Math.random() * Object.keys(neonColors).length)]];
  const color2 = neonColors[Object.keys(neonColors)[Math.floor(Math.random() * Object.keys(neonColors).length)]];
  const color3 = neonColors[Object.keys(neonColors)[Math.floor(Math.random() * Object.keys(neonColors).length)]];

  // Случайная ширина полосы (очень широкая для прямоугольного эффекта)
  const width = Math.floor(Math.random() * 60 + 40) + 'vw'; // 40-100vw

  // Случайная высота (тонкая для эффекта полосы)
  const height = Math.floor(Math.random() * 15 + 5) + 'vh'; // 5-20vh

  // Случайная позиция по горизонтали
  const left = (Math.random() * 80 - 20) + '%';

  // Случайная позиция по вертикали
  const top = (Math.random() * 100) + '%';

  // Угол наклона (45° для диагонали слева-снизу направо-вверх)
  const rotation = 45;

  // Смещение для анимации
  const offset = Math.random() * 200 - 100;

  // Скорость анимации
  const duration = Math.floor(Math.random() * 10 + 8); // 8-18 секунд

  // Задержка анимации
  const delay = Math.random() * -10; // Отрицательная для разной фазы

  // Прозрачность
  const opacity = Math.random() * 0.4 + 0.3; // 0.3-0.7

  // Размытие для мягкости
  const blur = Math.floor(Math.random() * 5); // 0-5px

  // Тень для объема
  const shadow = `0 0 ${Math.floor(Math.random() * 30 + 20)}px ${color1}`;

  // Тип градиента (линейный или радиальный)
  const gradientType = Math.random() > 0.5 ? 'linear-gradient' : 'radial-gradient';

  let background;
  if (gradientType === 'linear-gradient') {
    // Линейный градиент вдоль полосы
    background = `linear-gradient(90deg, 
      ${color1} 0%, 
      ${color2} 50%, 
      ${color3} 100%
    )`;
  } else {
    // Радиальный градиент для более сложного эффекта
    background = `radial-gradient(circle at 30% 30%, 
      ${color1} 0%, 
      ${color2} 70%, 
      ${color3} 100%
    )`;
  }

  gradientBars.value.push({
    background,
    width,
    height,
    left,
    top,
    rotation,
    offset,
    duration,
    delay,
    opacity,
    blur,
    shadow
  });
}
</script>

<template>
  <div class="background-bars__wrapper"> <!-- Обёртка для работы Transition -->
    <div v-for="(bar, index) in gradientBars" :key="index" class="background-bars" :style="{
      background: bar.background,
      width: bar.width,
      height: bar.height,
      left: bar.left,
      top: bar.top,
      '--bar-rotation': bar.rotation + 'deg',
      '--bar-duration': bar.duration + 's',
      '--bar-delay': bar.delay + 's',
      '--bar-opacity': bar.opacity,
      '--bar-blur': bar.blur + 'px',
      '--bar-start': '-150%',
      '--bar-end': '150%',
      '--bar-color-1': bar.color1,
      '--bar-color-2': bar.color2,
      '--bar-color-3': bar.color3,
      animationDelay: bar.delay + 's',
      opacity: bar.opacity,
      filter: `blur(${bar.blur}px)`,
      boxShadow: bar.shadow,
    }"></div>
  </div>
</template>

<style lang="scss" scoped>
.background-bars__wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
}

.background-bars {
  position: absolute;
  transform-origin: center center;
  animation: background-bar-diagonalMove var(--bar-duration) linear infinite;
  pointer-events: none;
  border-radius: 100%;
  mix-blend-mode: screen;
  
}

@keyframes background-bar-diagonalMove {
  0% {
    transform: rotate(var(--bar-rotation)) translateX(-150%);
    opacity: 0;
  }

  10% {
    opacity: var(--bar-opacity);
  }

  90% {
    opacity: var(--bar-opacity);
  }

  100% {
    transform: rotate(var(--bar-rotation)) translateX(150%);
    opacity: 0;
  }
}

@keyframes pulse {

  0%,
  100% {
    opacity: 0.4;
  }

  50% {
    opacity: 0.8;
  }
}

@include down($md) {
  .background-bars {
    animation-duration: 10s;
  }

  .content {
    font-size: 0.9rem;
    backdrop-filter: blur(2px);
  }
}
</style>