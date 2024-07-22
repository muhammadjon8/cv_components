export const usePiniaStore = defineStore("pinia", {
  state() {
    return {
      pairs: [],
      founded: [],
    };
  },
  actions: {
    addFounded(data) {
      this.founded.push(data);
    },
    removeLastFounded() {
      this.founded.pop();
    },
    clearFounded() {
      this.founded = [];
    },
  },
  persist: true,
});
