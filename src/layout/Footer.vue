<script setup>
import googleSvg from '@/assets/svg/contact/google.vue';
import telegramSvg from '@/assets/svg/contact/telegram.vue';
import phoneSvg from '@/assets/svg/contact/phone.vue';
</script>

<template>
  <footer class="footer">
    <div class="footer__content">

      <div class="footer__logo">
        <RouterLink to="/" class="footer__logo-link">
          <v-img src="/logo.webp" :width="250" cover alt="Логотип сайта" class="footer__logo-image" />
        </RouterLink>
      </div>


      <div class="footer__contacts">

        <div class="footer__contact-item">
          <div class="footer__contact-icon">
            <telegramSvg class="footer__svg footer__svg--telegram" />
          </div>
          <div class="footer__contact-info">
            <div class="footer__contact-label weight-5" target="_blank" rel="noopener noreferrer">
              TELEGRAM
            </div>
            <a href="https://t.me/ModernHisto" class="footer__contact-value size-2" target="_blank"
              rel="noopener noreferrer">
              @DaniilKuzmin123
            </a>
          </div>
        </div>

        <div class="footer__contact-item">
          <div class="footer__contact-icon">
            <googleSvg class="footer__svg footer__svg--google" />
          </div>
          <div class="footer__contact-info">
            <div class="footer__contact-label weight-5">
              EMAIL
            </div>
            <a href="mailto:obozrebatel@gmail.com" class="footer__contact-value size-2">
              obozrebatel@gmail.com
            </a>
          </div>
        </div>

        <div class="footer__contact-item">
          <div class="footer__contact-icon">
            <phoneSvg class="footer__svg footer__svg--phone" />
          </div>
          <div class="footer__contact-info">
            <div class="footer__contact-label weight-5">
              CALL
            </div>
            <a href="tel:+79828290199" class="footer__contact-value size-2">
              +7 (982) 829-01-99
            </a>
          </div>
        </div>

      </div>
    </div>

    <div class="footer__signature">
      <a href="https://github.com/ModernHisto" class="footer__signature-link size-2" target="_blank"
        rel="noopener noreferrer">
        Design and Development - ModernHisto
      </a>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  padding: 1.1rem 6rem;
  background-color: $main-components;
  border-radius: 0rem !important;
  border-width: 1px 0 0 0 !important;
  border-top: 1px solid $white1c;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  box-shadow: 0px 10px 7px -15px rgba(255, 255, 255, 0.54) inset;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__logo {
    border-bottom: 1px solid $white1c;
    width: 100%;
    padding-bottom: 1.1rem;

    &-link {
      width: min-content;
      display: block;
      margin: 0 auto;
    }
  }

  &__contacts {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 2rem 0rem;
    border-bottom: 1px solid $white1c;

    @include down($md) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__contact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    gap: 1rem;

    @include down($md) {
      padding: 2rem 0;
      width: max-content;
    }
  }

  &__contact-item:nth-child(2) {
    border-left: 1px solid $white1c;
    border-right: 1px solid $white1c;

    @include down($md) {
      border-top: 1px solid $white1c;
      border-bottom: 1px solid $white1c;
      border-left: none;
      border-right: none;
    }
  }

  &__contact-icon {
    width: 2.5rem;
    height: 2.5rem;
  }

  &__contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  &__contact-label {
    text-transform: uppercase;
    letter-spacing: 0.03rem;
  }

  &__svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &__signature {
    text-align: center;
    padding-top: 1.1rem;
  }
}

@include down($md) {
  .footer {
    padding: 1rem 0.5rem;

    &__contact-item {
      flex-direction: column;
      text-align: center;
      gap: 0.75rem;
    }

    &__contact-icon {
      width: 2rem;
      height: 2rem;
    }

    &__contact-value {
      font-size: 0.9rem;
    }
  }
}
</style>