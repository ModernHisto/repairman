import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", {
  state: () => ({
    isMenuOpened: false,
  }),
  
  actions: {
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened;
      this.toggleBodyScroll(this.isMenuOpened);
    },

    toggleBodyScroll(isMenuOpen) {
      if (isMenuOpen) {
        // Блокируем скролл
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
      } else {
        // Восстанавливаем скролл
        document.body.style.overflow = "";
        document.body.style.height = "";
        document.body.style.position = "";
        document.body.style.width = "";
      }
    },
  },
});
