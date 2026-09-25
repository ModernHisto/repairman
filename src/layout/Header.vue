<script setup>
import { useMenuStore } from '@/stores/useUiStore';
import burgerSvg from '@/assets/svg/burger.vue';
import closeSvg from '@/assets/svg/close.vue';
import discordSvg from '@/assets/svg/contact/discord.vue';
import githubSvg from '@/assets/svg/contact/github.vue';
import googleSvg from '@/assets/svg/contact/google.vue';
import telegramSvg from '@/assets/svg/contact/telegram.vue';
import headerLedge from '@/assets/svg/headerLedge.vue';

const menuStore = useMenuStore();

const toggleMenu = () => {
  menuStore.toggleMenu();
};
</script>

<template>
  <header class="header">
    <div class="header__content">

      <div class="header__logo">
        <RouterLink to="/" class="header__logo-link"><v-img src="/logo.webp" :width="250" cover alt="logo"></v-img>
        </RouterLink>
      </div>

      <nav class="header__nav no-select">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <RouterLink :to="{ name: 'home' }" class="header__nav-link">
              Home
            </RouterLink>
          </li>
          <li class="header__nav-item">
            <RouterLink :to="{ name: 'about' }" class="header__nav-link">
              About Me
            </RouterLink>
          </li>
          <li class="header__nav-item header__logo-item">
            <RouterLink to="/" class="header__logo-link">
              <v-img src="/logo.webp" :width="250" cover alt="logo"></v-img>
            </RouterLink>
          </li>
          <li class="header__nav-item">
            <RouterLink :to="{ name: 'portfolio' }" class="header__nav-link">
              Portfolio
            </RouterLink>
          </li>
          <li class="header__nav-item">
            <RouterLink :to="{ name: 'contact' }" class="header__nav-link">
              Contact Me
            </RouterLink>
          </li>
        </ul>
      </nav>

      <button class="header__burger" @click="toggleMenu" aria-label="Открыть меню">
        <burgerSvg class="header__burger-icon" />
      </button>

      <Transition name="slide-right">
        <div v-if="menuStore.isMenuOpened" class="header__mobile-menu">
          <div class="header__mobile-content">
            <div class="header__mobile-header">
              <span class="header__mobile-title">Menu</span>
              <button class="header__mobile-close" @click="toggleMenu" aria-label="Закрыть меню">
                <closeSvg class="header__mobile-close-icon" />
              </button>
            </div>

            <nav class="header__mobile-nav">
              <ul class="header__mobile-nav-list h4">
                <li class="header__mobile-nav-item">
                  <RouterLink :to="{ name: 'home' }" class="header__mobile-nav-link" @click="toggleMenu">
                    Home
                  </RouterLink>
                </li>
                <li class="header__mobile-nav-item">
                  <RouterLink :to="{ name: 'about' }" class="header__mobile-nav-link" @click="toggleMenu">
                    About Me
                  </RouterLink>
                </li>
                <li class="header__mobile-nav-item">
                  <RouterLink :to="{ name: 'portfolio' }" class="header__mobile-nav-link" @click="toggleMenu">
                    Portfolio
                  </RouterLink>
                </li>
                <li class="header__mobile-nav-item">
                  <RouterLink :to="{ name: 'contact' }" class="header__mobile-nav-link" @click="toggleMenu">
                    Contact Me
                  </RouterLink>
                </li>
              </ul>
            </nav>
            <ul class="header__mobile-social">
              <li class="header__mobile-social-item">
                <telegramSvg />
              </li>
              <li class="header__mobile-social-item">
                <discordSvg />
              </li>
              <li class="header__mobile-social-item">
                <githubSvg />
              </li>
              <li class="header__mobile-social-item">
                <googleSvg />
              </li>
            </ul>
          </div>
        </div>
      </Transition>
      <headerLedge />
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: relative;

  &__content {
    position: relative;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 6rem;
    line-height: normal;
    background-color: $main-components;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);

    @include down($md) {
      padding: 0.6rem 3.1rem;
    }

    @include down($lg) {
      padding: 0.6rem 3.1rem;
      justify-content: space-between;
    }

    @include down($sm) {
      padding: 0.6rem 1.2rem;
    }
  }

  &__logo {
    @include up($lg) {
      display: none;
    }
  }

  &__logo-link:hover {
    filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0)) !important;
  }

  &__nav {
    display: block;
    font-size: 1.1rem;
    margin-left: 3.2rem;

    @include down($lg) {
      display: none;
    }
  }

  &__nav-list {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__nav-item {
    position: relative;
    padding: 0 2rem 0 2rem;
  }

  &__nav-item:first-child {
    border-right: 1px solid $white1c;
  }

  &__nav-item:last-child {
    border-left: 1px solid $white1c;
  }

  &__logo-item {
    border-right: 1px solid $white1c;
    border-left: 1px solid $white1c;
  }

  &__nav-link {
    color: $white;
    text-decoration: none;

    &.router-link-active {
      color: $green;

      &::after {
        content: '';
        position: relative;
        display: block;
        bottom: -0.2rem;
        left: 0rem;
        width: 100%;
        height: 2px;
        background-color: $green;
      }
    }
  }

  &__burger {
    display: none;
    border: 1px solid $translucent-white;
    padding: 2px 11px;
    border-radius: 5px;
    background: transparent;
    cursor: pointer;

    @include down($lg) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__burger:active {
    border-color: $green;
    filter: drop-shadow(0 0 1px $green);
  }

  &__mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1001;
    transform: translateZ(0);
    background: linear-gradient(135deg,
        #1a1a1a 0%,
        #222222 50%,
        #1a1a1a 100%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(4px);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1.2px;
      background: linear-gradient(90deg,
          transparent,
          rgba(0, 255, 135, 0.3),
          transparent);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1.4px;
      background: linear-gradient(90deg,
          transparent,
          rgba(0, 255, 135, 0.3),
          transparent);
    }
  }

  &__mobile-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem;
    font-size: 1.3rem;
  }

  &__mobile-title {
    color: $white;
  }

  &__mobile-nav {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__mobile-nav-list {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
  }

  &__mobile-nav-item {
    margin-bottom: 1.8rem;
  }

  &__mobile-nav-link {
    color: $white;
    text-decoration: none;

    &.router-link-active {
      color: $green;
    }

    &:hover {
      color: $green;
    }
  }

  &__mobile-social {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 1.5rem;
    margin-bottom: 5.6rem;
  }

  &__mobile-social-item {
    width: 2.5rem;
    height: 2.5rem;
  }

  &::after {
    content: "";
    z-index: 999;
    display: block;
    position: absolute;
    left: calc(50% - 6.593rem);
    top: 97%;
    width: 13.3rem;
    height: 2.25rem;
    clip-path: polygon(17% 0, 83% 0, 100% 103%, 0% 100%);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    rotate: 180deg;
  }
}

/* ========== ANIMATIONS ========== */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s ease;
  transform-origin: right center;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>