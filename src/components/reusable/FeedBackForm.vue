<script setup>
import { ref, reactive } from 'vue';

const WORKER_URL = 'https://telegram-proxy.repairman.workers.dev'

const formRef = ref(null)
const isValid = ref(false)
const isLoading = ref(false)
const status = ref(null) // null | 'success' | 'error'

const form = reactive({
  name: '',
  phone: '',
  description: '',
})

// Правила валидации
const rules = {
  required: (v) => !!v || 'Поле обязательно для заполнения',
  minLength: (v) => (v && v.length >= 10) || 'Опишите проблему подробнее (минимум 10 символов)',
  phone: (v) => {
    // Простая проверка: минимум 11 цифр (с учетом маски)
    const digits = v.replace(/\D/g, '')
    return digits.length === 11 || 'Введите корректный номер телефона'
  },
}

async function submitForm() {
  if (!formRef.value) return

  const { valid } = await formRef.value.validate()
  if (!valid) return

  isLoading.value = true
  status.value = null

  const message = `
🔔 *Новая заявка с сайта*

👤 *Имя:* ${form.name}
📞 *Телефон:* ${form.phone}
🛠 *Описание поломки:*
${form.description}
  `.trim()

   try {
    const response = await fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        description: form.description,
      }),
    })

    const data = await response.json()

    if (response.ok && data.success) {
      status.value = 'success'
      formRef.value.reset()
      isValid.value = false
    } else {
      throw new Error(data.error || 'Unknown error')
    }
  } catch (e) {
    console.error('Ошибка отправки:', e)
    status.value = 'error'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="contact-form">
  <v-card class="pa-4" max-width="600" elevation="2">
    <v-card-title class="text-h5 mb-2">Оставить заявку</v-card-title>

    <v-form
      ref="formRef"
      v-model="isValid"
      validate-on="blur"
      @submit.prevent="submitForm"
    >
      <v-text-field
        v-model="form.name"
        label="Ваше имя"
        :rules="[rules.required]"
        variant="outlined"
        prepend-inner-icon="mdi-account"
        class="mb-2"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.phone"
        label="Телефон"
        :rules="[rules.required, rules.phone]"
        variant="outlined"
        prepend-inner-icon="mdi-phone"
        type="tel"
        v-maska="'+7 (###) ###-##-##'"
        hint="Формат: +7 (___) ___-__-__"
        persistent-hint
        class="mb-2"
        required
      ></v-text-field>

      <v-textarea
        v-model="form.description"
        label="Описание поломки"
        :rules="[rules.required, rules.minLength]"
        variant="outlined"
        prepend-inner-icon="mdi-view-headline"
        rows="4"
        auto-grow
        class="mb-2"
        required
      ></v-textarea>

      <v-alert
        v-if="status === 'success'"
        type="success"
        variant="tonal"
        class="mb-2"
      >
        Заявка успешно отправлена! Мы свяжемся с вами.
      </v-alert>

      <v-alert
        v-if="status === 'error'"
        type="error"
        variant="tonal"
        class="mb-2"
      >
        Ошибка отправки. Попробуйте позже или свяжитесь с нами напрямую.
      </v-alert>

      <v-btn
        type="submit"
        color="primary"
        size="large"
        block
        :loading="isLoading"
        :disabled="!isValid"
      >
        Отправить заявку
      </v-btn>
    </v-form>
  </v-card>
  </div>
</template>

<style lang="scss">

</style>