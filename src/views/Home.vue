<script setup>
import icon from '@/components/home/Icon.vue'
import HomePortfolioBtn from '@/components/home/HomePortfolioBtn.vue';
</script>

<template>
  <section class="home">
    <v-container>
      <div class="home__container">
        <div class="home__content">
          <p class="home__greeting h3">Меня зовут Даниил</p>

          <p class="home__subtitle h3">Ремонтирую электронику любой сложности. От настольной лампы до игрового ноутбука. <br> Даниил — качественно, честно, с гарантией.</p>

          <p class="home__description">
            Занимаюсь ремонтом электроники уже 8 лет. Начинал с простых бытовых приборов, но страсть к технике привела меня к сложным устройствам. Для меня нет "слишком простых" или "слишком сложных" задач.
            Я верю, что хороший мастер — это не только паяльник и знания схем, но и честность. Я всегда говорю клиенту реальную стоимость ремонта до его начала и не беру денег, если проблема решилась консультацией.
          </p>
          <HomePortfolioBtn class="home__button" />
        </div>
        <div class="home__icon">
          <a href="https://github.com/ModernHisto" target="_blank" rel="noopener noreferrer">
          <icon class="home__icon-item" />
          </a>
        </div>
      </div>
    </v-container>
  </section>
</template>

<style lang="scss">
.home {
  &__container {
    padding-top: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90rem;
    gap: 2rem;

    @include down($lg) {
      flex-direction: column;
      align-items: center;
      padding-top: 1rem 0;
    }

    @include down($md) {
      padding: 1rem 0;
    }
  }

  &__icon {
    width: 38%;

    @include down($md) {
      width: 60%;
    }
     @include down($sm) {
      width: 85%;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;

    @include down($lg) {
      order: 1;
      text-align: center;
      align-items: center;
      width: 100%;
    }
  }

  &__greeting {
    color: $green;
    width: 100%;
  }

  &__subtitle {
    margin: 1.5rem 0;
  }

  &__description {
    line-height: 1.688rem;
    margin-bottom: 2.5rem;
  }
}
</style>