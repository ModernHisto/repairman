<script setup>
import portfolioProjects from '@/stores/tmp/portfolio.js';
</script>

<template>
  <div class="portfolio-gallery" data-aos="fade-up" data-aos-duration="1400">
    <div class="portfolio-gallery__container glass-effect">
      <div class="portfolio-gallery__wrapper scroll-container">
        <div class="portfolio-gallery__grid">
          <div v-for="(item, index) in portfolioProjects" :key="index" class="portfolio-gallery__item">
            <div class="portfolio-gallery__card">
              <div class="portfolio-gallery__image-wrapper">
                <a :href="item.src" @click="item.src === 'Not public' ? $event.preventDefault() : null" :alt="item.alt" target="_blank" rel="noopener noreferrer"
                  class="portfolio-gallery__link">
                  <img :src="item.img" :alt="item.alt" class="portfolio-gallery__image" loading="lazy" />
                  <div class="portfolio-gallery__overlay">
                    <span class="portfolio-gallery__overlay-text">
                      View the project
                    </span>
                  </div>
                </a>
              </div>

              <div class="portfolio-gallery__info">
                <h3 class="portfolio-gallery__title">
                  {{ item.alt }}
                </h3>
                <a :href="item.src" @click="item.src === 'Not public' ? $event.preventDefault() : null" target="_blank" rel="noopener noreferrer" class="portfolio-gallery__external-link">
                  <span class="portfolio-gallery__link-text">
                    {{ item.src.replace('https://', '') }}
                  </span>
                  <span class="portfolio-gallery__link-icon">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.portfolio-gallery {

  &__container {
    display: flex;
    align-items: flex-start;
    padding: 1.5rem;
    height: 40rem;
    max-width: 90rem;
    
    @include down($lg) {
      flex-direction: column;
      height: 72vh;
      max-width: 97vw;
      padding: 1rem;
    }
  }
  &__wrapper {
    padding: 0.5rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;

    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__item {
    margin-bottom: 0;
  }

  &__card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0.75rem;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.048);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 6px 13px -7px #0000003b;
      border-left: 1px solid $white1c;
      border-right: 1px solid $white1c;
      border-top: 1px solid $white1c;
    }
  }

  &__image-wrapper {
    position: relative;
    overflow: hidden;
    aspect-ratio: 16/9;

    &:hover {
      .portfolio-gallery__overlay {
        opacity: 1;
      }

      .portfolio-gallery__image {
        transform: scale(1.05);
      }
    }
  }

  &__link {
    display: block;
    text-decoration: none;
    position: relative;
    height: 100%;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.425);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &__overlay-text {
    color: white;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 4px;
  }

  &__info {
    padding: 1.3rem 1rem;
  }

  &__title {
    font-size: 1rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0.5rem;
  }

  &__external-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.875rem;
    transition: color 0.3s ease;

    &:hover {
      color: white;

      .portfolio-gallery__link-icon {
        transform: translate(2px, -2px);
      }
    }
  }

  &__link-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__link-icon {
    font-size: 1rem;
    transition: transform 0.3s ease;
  }
}

// Анимации для AOS
.aos-init {
  opacity: 0;
}

.aos-animate {
  opacity: 1;
}

@include down($sm) {
  .portfolio-gallery {
    &__container {
      padding: 1rem;
    }

    &__grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
    }
  }
}
</style>