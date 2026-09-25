import DiscordSvg from '@/assets/svg/contact/discord.vue';
import GoogleSvg from '@/assets/svg/contact/google.vue';
import TelegramSvg from '@/assets/svg/contact/telegram.vue';
import PhoneSvg from '@/assets/svg/contact/phone.vue';

export default [
  {
    id: 1,
    icon: TelegramSvg,
    label: 'Telegram',
    value: '@DaniilKuzmin123',
    link: 'https://t.me/ModernHisto',
    type: 'telegram'
  },
  {
    id: 2,
    icon: PhoneSvg,
    label: 'Call',
    value: '+7 (982) 829-01-99',
    link: 'tel:+79828290199',
    type: 'phone'
  },
  {
    id: 3,
    icon: GoogleSvg,
    label: 'Email',
    value: 'obozrebatel@gmail.com',
    link: 'mailto:obozrebatel@gmail.com',
    type: 'email'
  },
  {
    id: 4,
    icon: DiscordSvg,
    label: 'Discord',
    value: 'modernhisto',
    link: '',
    type: 'discord'
  },
]

