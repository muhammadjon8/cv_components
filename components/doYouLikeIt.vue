<script setup>
import { ref, computed } from 'vue';

const text = ref("Do you like that?");

const changeText = () => {
  text.value = "Thank you";
};

const moveBtn = ref({});

const randomPosition = () => {
  const maxX = 400; // Maximum horizontal translation
  const maxY = 500; // Maximum vertical translation (adjusted for container height)
  moveBtn.value = {
    transform: `translate(${Math.random() * maxX - maxX / 2}px, ${Math.random() * maxY - maxY / 2}px)`
  };
};

</script>

<template>
  <div class="container py-9">
    <h2 class="text-center">Do you like it</h2>
    <div
      class="flex bg-purple-600 rounded justify-center items-center p-8 flex-col h-[500px]"
    >
      <p
        class="text-center rounded-full bg-blue-600 text-5xl py-6 px-10 text-white"
      >
        ?
      </p>
      <p class="py-5 text-white font-bold text-5xl">{{ text }}</p>
      <div class="flex gap-8">
        <button
          @click="changeText"
          class="text-white bg-purple-500 px-7 py-3 rounded-lg border border-purple-700"
        >
          Yes
        </button>
        <button
          @mouseover="randomPosition"
          :style="moveBtn"
          class="text-purple-500 bg-white px-7 py-3 rounded-lg border border-purple-700"
        >
          No
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
