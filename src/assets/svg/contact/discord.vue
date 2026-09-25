<script setup>
import { ref } from 'vue'
import { copyToClipboard } from '@/utils/clipboard'

const showNotification = ref(false)
const notificationText = ref('')
const copyText = 'modernhisto'

const handleCopy = async (text) => {
  const success = await copyToClipboard(
    text,
    () => {
      notificationText.value = 'Discord ID copied'
      showNotification.value = true
      setTimeout(() => { showNotification.value = false }, 2000)
    },
    (error) => {
      notificationText.value = `Ошибка: ${error}`
      showNotification.value = true
      setTimeout(() => { showNotification.value = false }, 2000)
    }
  )
}
</script>

<template>
  <div class="svg-container" @click="handleCopy(copyText)">
    <svg viewBox="5 5 178 178" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="14"
        d="m68 138-8 16c-10.19-4.246-20.742-8.492-31.96-15.8-3.912-2.549-6.284-6.88-6.378-11.548-.488-23.964 5.134-48.056 19.369-73.528 1.863-3.334 4.967-5.778 8.567-7.056C58.186 43.02 64.016 40.664 74 39l6 11s6-2 16-2 16 2 16 2l6-11c9.984 1.664 15.814 4.02 24.402 7.068 3.6 1.278 6.704 3.722 8.567 7.056 14.235 25.472 19.857 49.564 19.37 73.528-.095 4.668-2.467 8.999-6.379 11.548-11.218 7.308-21.769 11.554-31.96 15.8l-8-16m-68-8s20 10 40 10 40-10 40-10" />
      <ellipse cx="71" cy="101" fill="currentColor" rx="13" ry="15" />
      <ellipse cx="121" cy="101" fill="currentColor" rx="13" ry="15" />
    </svg>

    <div v-if="showNotification" class="notification">
      {{ notificationText }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.svg-container {
  color: $translucent-white;
  transition: color 0.3s ease;
  cursor: pointer;
  display: inline-block;
  position: relative;
}

.svg-container svg:active {
  filter: drop-shadow(0 0 1px $green);
  color: $green;
}

.notification {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);

  background: linear-gradient(135deg,
      rgba(26, 26, 26, 0.98) 0%,
      rgba(34, 34, 34, 0.95) 50%,
      rgba(26, 26, 26, 0.98) 100%);

  color: $white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 0.85rem;
  white-space: nowrap;
  z-index: 1001;
  animation: slideFromMenu 2s ease-in-out forwards;
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 0 0 1px rgba(0, 255, 135, 0.1),
    0 4px 24px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 8px;
    padding: 1px;
    background: linear-gradient(90deg,
        transparent,
        rgba(0, 255, 135, 0.4),
        transparent);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    animation: borderGlow 2s ease-in-out;
  }
}

@keyframes slideFromMenu {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-30px);
    filter: blur(4px);
  }

  15% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    filter: blur(0);
  }

  85% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    filter: blur(0);
  }

  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px);
    filter: blur(4px);
  }
}

@keyframes borderGlow {

  0%,
  100% {
    opacity: 0;
  }

  10%,
  80% {
    opacity: 1;
  }
}
</style>