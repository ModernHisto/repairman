import { defineStore } from 'pinia';

export const useBackgroundStore = defineStore('background', {
  state: () => ({
    current: 'edges', // 'linear' | 'bars' | 'edges' | 'none'
  }),
  actions: {
    setBackground(type) {
      this.current = type;
    },
  },
});