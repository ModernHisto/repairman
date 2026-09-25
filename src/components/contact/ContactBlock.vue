<script setup>
import { ref } from 'vue'
import { copyToClipboard } from '@/utils/clipboard'

import contacts from '@/stores/tmp/contacts';
import FeedBackForm from '@/components/reusable/FeedBackForm.vue';

const showNotification = ref(false)
const notificationText = ref('')

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

const handleContactClick = (contact) => {
  if (contact.type === 'discord') {
    event.preventDefault();
    handleCopy("modernhisto");
  }
  else { }
};
</script>

<template>
  <div class="contact-block">
    <div class="contact-block__container glass-effect">
      <div class="contact-block__list scroll-container">
        <div class="contact-block__information">
          <a :href="contact.link" target="_blank" rel="noopener noreferrer" v-ripple v-for="contact in contacts"
            :key="contact.id" @click="handleContactClick(contact)" class="contact-block__item">
            <div class="contact-block__icon-wrapper">
              <component :is="contact.icon" :class="['contact-block__icon', `contact-block__icon--${contact.type}`]" />
            </div>

            <div class="contact-block__content">
              <span class="contact-block__label weight-500 size-2 color-green"
                :class="`contact-block__label--${contact.type}`">
                {{ contact.label }}
              </span>
              <div class="contact-block__identifier" :class="`contact-block__identifier--${contact.type}`">
                {{ contact.value }}
              </div>
            </div>
          </a>
        </div>
        <div class="contact-block__form">
          <FeedBackForm />
        </div>
      </div>
      <div v-if="showNotification" class="contact-block__notification">
        {{ notificationText }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.contact-block {

  &__container {
    border-radius: 1rem;
    padding: 2.5rem;
    width: 76rem;

    @include down($lg) {
      max-width: 97vw;
      padding: 1rem;
    }
  }

  &__list {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 0.5rem;

    @include down($lg) {
      gap: 1rem;
    }
  }

  &__information { 
    width: 50%;
  }

  &__form { 
    width: 50%;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    border-radius: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.048);
    background: rgba(255, 255, 255, 0.05);

    &:hover,
    &:hover:hover {
      background: rgba(255, 255, 255, 0.096);
      filter: drop-shadow(0 0 0.5px rgba(255, 255, 255, 0.096));
      color: $white;
      transform: translateX(0.30rem);
      border-top: 1px solid $white1c;
      border-right: 1px solid $white1c;
      border-bottom: 1px solid $white1c;
    }
  }

  &__icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    background: rgba(255, 255, 255, 0.1);
  }

  &__icon {
    width: 1.875rem;
    height: 1.875rem;
    transition: transform 0.3s ease;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &__notification {
    position: fixed;
    top: 1.25rem;
    left: 50%;
    transform: translateX(-50%);

    background: linear-gradient(135deg,
        rgba(26, 26, 26, 0.98) 0%,
        #3a3a3a,
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

    // Двойная граница
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow:
      0 0 0 1px rgba(0, 255, 135, 0.1),
      0 4px 24px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);

    // Анимированная граница
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
    }

    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
      filter: blur(2px);
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

}
</style>