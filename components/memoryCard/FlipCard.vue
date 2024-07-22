<script setup>
import { ref } from "vue";
import { usePiniaStore } from "../../store";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const store = usePiniaStore();
const isFlipped = ref(false);

const flipCard = (data) => {
  if (data.done || data.isFound) return; // If card is already done or currently found, do nothing

  if (store.founded.length % 2 == 0) {
    data.isFound = true;
    store.addFounded(data);
  } else {
    const lastCard = store.founded[store.founded.length - 1];
    data.isFound = true;
    if (data.img === lastCard.img) {
      lastCard.done = true;
      data.done = true;
      store.addFounded(data);
    } else {
      setTimeout(() => {
        data.isFound = false;
        lastCard.isFound = false;
        store.clearFounded();
      }, 500); // Adds a delay before flipping back the cards
    }
  }
};
</script>

<template>
  <div class="flip-card" @click="flipCard(data)">
    <div :class="['flip-card-inner', { flipped: data.isFound }]">
      <div class="flip-card-front">
        <p class="absolute top-5">Find my skills</p>
        <img src="/mafia.png" alt="" class="ml-3" />
      </div>
      <div class="flip-card-back">
        <img :src="data.img" alt="Card Image" class="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.flip-card {
  perspective: 1000px;
  width: 100px;
  height: 150px;
  cursor: pointer;
  margin: 10px;
}

.flip-card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;
}

.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.flip-card-front {
  background-color: #6674d8;
  color: white;
}

.flip-card-back {
  background-color: rgb(240, 243, 240);
  transform: rotateY(180deg);
}

.flip-card-back img,
.flip-card-front img {
  width: 100%;
  height: 100%;
  /* object-fit: ; */
  border-radius: 10px;
}
</style>

