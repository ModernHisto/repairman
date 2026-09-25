<script setup>
import { ref } from 'vue'
import aboutData from '@/stores/tmp/about';
import githubSvg from '@/assets/svg/contact/github.vue';

const tab = ref('skills');
const formatTabTitleWithBreak = (key) => {
  const words = key.replace(/([a-z])([A-Z])/g, '$1 $2');
  return words.split('.').join('<br>');
};

</script>

<template>
  <div class="about-tabs">
    <v-sheet class="about-tabs__container glass-effect" elevation="4">
      <div class="about-tabs__sidebar">
        <v-tabs color="primary" direction="vertical" v-model="tab" class="about-tabs__navigation">
          <v-tab v-for="(value, key) in aboutData" :key="key" :value="key" class="about-tabs__tab"
            v-html="formatTabTitleWithBreak(key)">
          </v-tab>
        </v-tabs>
        <githubSvg class="about-tabs__github" />
      </div>

      <v-divider vertical class="about-tabs__divider"></v-divider>

      <div class="about-tabs__content">
        <v-window v-model="tab" class="about-tabs__window scroll-container">
          <v-window-item v-for="(content, tabKey) in aboutData" :key="tabKey" :value="tabKey" class="about-tabs__pane">
            <div class="about-tabs__pane-content">
              <!-- Skills Content -->
              <template v-if="tabKey.includes('Skills')">
                <div v-for="(skill, skillKey) in content" :key="skillKey" class="about-tabs__skill-card">
                  <h5 class="about-tabs__skill-title notranslate">{{ skill.title }}</h5>
                  <p class="about-tabs__skill-description">{{ skill.text }}</p>
                </div>
              </template>

              <!-- Experience Content -->
              <template v-else-if="tabKey === 'Experience'">
                <div v-for="(exp, expKey) in content" :key="expKey" class="about-tabs__experience-card">
                  <h5 class="about-tabs__experience-title notranslate">{{ exp.title }}</h5>
                  <p class="about-tabs__experience-period">{{ exp.period }}</p>
                  <p class="about-tabs__experience-description">{{ exp.text }}</p>
                </div>
              </template>
            </div>
          </v-window-item>
        </v-window>
      </div>
    </v-sheet>
  </div>
</template>

<style lang="scss">
.about-tabs {
  &__container {
    color: $white;
    padding: 3rem;
    height: 40rem;
    max-width: 90rem;
    display: flex;
    position: relative;

    @include down($lg) {
      flex-direction: column;
      height: 72vh;
      max-width: 97vw;
      padding: 1rem;
    }
  }

  &__sidebar {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @include down($lg) {
      display: block;
      width: 100%;
      margin-bottom: 1.5rem;
    }
  }

  &__navigation {
    .v-slide-group__content {
      gap: 1rem;

      @include down($lg) {
        flex-direction: row !important;
        overflow-x: auto;
        padding-bottom: 1rem;
        justify-content: space-around;
      }
    }

    @include down($lg) {
      .v-tab {
        flex-shrink: 0;
      }

      .v-tab__slider {
        display: none;
      }
    }
  }

  &__tab {
    display: block;
    text-transform: none;
    font-size: 1rem;
    height: auto !important;
    padding: 1rem 1.5rem;
    border: 1px solid $green;
    border-radius: 0.375rem !important;

    &:hover {
      color: $light-green;

      @include down($lg) {
        color: $white;
      }
    }

    &.text-primary {
      color: $green !important;
    }

    .v-tab__slider {
      border-top-left-radius: 0.3rem;
      width: 0.5rem !important;
      border-bottom-left-radius: 0.3rem;
    }

    @include down($lg) {
      width: auto !important;
      min-width: 120px;
      text-align: center;

      br {
        display: none;
      }
    }
  }

  &__github {
    display: block;
    width: 5rem;
    height: 5rem;

    @include down($lg) {
      display: none;
    }
  }

  &__divider {
    margin: 0 3rem;

    @include down($lg) {
      display: none !important;
    }
  }

  &__content {
    flex-grow: 1;
    overflow: hidden;
  }

  &__window {
    height: 100%;
    border: none;
    overflow-x: hidden !important;
  }

  &__pane {
    height: 100%;
    margin-right: 0.8rem;

    @include down($lg) {
      margin-right: 0;
    }
  }

  &__pane-content {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 2rem 1.5rem;
    padding: 0;
    height: 100%;

    @include down($lg) {
      flex-direction: column;
      height: auto;
    }
  }

  &__skill-card,
  &__experience-card {
    width: 31.333%;
    box-sizing: border-box;

    @include down($lg) {
      width: 100% !important;
    }

    @include down($sm) {
      padding: 0 0 1rem 0;
    }
  }

  &__skill-title,
  &__experience-title {
    color: $green;
    margin-bottom: 0.5rem;

    @include down($lg) {
      font-size: 1rem;
    }
  }

  &__skill-description,
  &__experience-description {
    line-height: 1.5rem;
  }

  &__experience-period {
    color: $green;
    margin-bottom: 0.5rem;

    @include down($lg) {
      font-size: 0.9rem;
    }
  }
}

// Мобильная навигация вкладок - горизонтальный скролл
@include down($lg) {
  .about-tabs {
    &__navigation {
      .v-slide-group__content {
        &::-webkit-scrollbar {
          height: 4px;
        }

        &::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
        }

        &::-webkit-scrollbar-thumb {
          background: rgba($green, 0.5);
          border-radius: 0.5rem;
        }
      }
    }

    &__tab {
      font-size: 0.9rem;
      padding: 0.75rem 1rem;
    }
  }
}
</style>