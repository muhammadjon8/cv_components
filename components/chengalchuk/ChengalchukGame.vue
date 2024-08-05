<template>
  <div class="container flex justify-center items-center gap-6">
    <div class="flex flex-col justify-center items-center gap-5">
      <div class="flex items-center mb-9">
      <img src="/rock-paper-scissors-icon.png" alt="" class="size-32" />
      <h2 class="text-3xl text-yellow-500">Rock Paper Scissors Game</h2>
    </div>
    <p>Choose your option</p>
    <div class="flex gap-5">
      <button
        v-for="(button, index) in buttons"
        :key="index"
        :class="[
          'text-5xl border rounded-md p-5',
          { 'bg-green-300': index === activeButtonIndex }
        ]"
        @click="handleClick(index)"
      >
        {{ button.label }}
      </button>
    </div>
    <button
      @click="startFight"
      class="px-7 py-3 bg-yellow-300 rounded-xl hover:text-white hover:bg-yellow-500"
    >
      Fight
    </button>
    <div class="flex gap-5 items-center">
      <div>
        <p class="text-center">You chose</p>
        <p class="text-center text-7xl" v-if="activeButtonIndex !== null">
          {{ userChoice }}
        </p>
      </div>
      <div v-if="isFightStarted">
        <p class="text-center">Mine is</p>
        <p class="text-center text-5xl" v-if="myChoice">
          <img :src="myChoice.img" :alt="myChoice.label" class="size-60" />
        </p>
      </div>
    </div>
    <div>
      <p class="text-center text-3xl" v-if="result">
        {{ result }}
      </p>
    </div>
    <div class="flex gap-5 mt-5">
      <div>
        <p class="text-center">Wins: {{ state.wins }}</p>
      </div>
      <div>
        <p class="text-center">Losses: {{ state.losses }}</p>
      </div>
      <div>
        <p class="text-center">Ties: {{ state.ties }}</p>
      </div>
    </div>
    </div>
    <div v-if="state.wins >= 5" class="w-1/2 flex items-center justify-center bg-green-500 bg-opacity-75 py-5">
      <p class="text-5xl text-white">You won!</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const buttons = ref([
  { label: "✊" },
  { label: "🖐️" },
  { label: "✌️" },
]);
const images = ref([
  { img: "/rock.png", label: "✊" },
  { img: "/paper.png", label: "🖐️" },
  { img: "/scissors.png", label: "✌️" },
]);

const activeButtonIndex = ref(null);
const result = ref(null);
const isFightStarted = ref(false);

const myChoice = ref(null);
const userChoice = computed(() => {
  return activeButtonIndex.value !== null ? buttons.value[activeButtonIndex.value].label : null;
});

const state = reactive({
  wins: 0,
  losses: 0,
  ties: 0,
});

const handleClick = (index) => {
  activeButtonIndex.value = index;
  isFightStarted.value = false;
};

const startFight = () => {
  if (activeButtonIndex.value === null) return;
  myChoice.value = null;
  isFightStarted.value = true;
  result.value = null;
  setTimeout(() => {
    myChoice.value = images.value[Math.floor(Math.random() * 3)];
    calculateResult();
  }, 1000);
};

const calculateResult = () => {
  if (activeButtonIndex.value === null) return;
  const user = buttons.value[activeButtonIndex.value].label;
  const computer = myChoice.value.label;
  const outcomes = {
    "✊": { "✊": "It's a tie!", "🖐️": "You lose!", "✌️": "You win!" },
    "🖐️": { "✊": "You win!", "🖐️": "It's a tie!", "✌️": "You lose!" },
    "✌️": { "✊": "You lose!", "🖐️": "You win!", "✌️": "It's a tie!" },
  };
  result.value = outcomes[user][computer];
  updateTotalResults();
};

const updateTotalResults = () => {
  if (result.value === "You win!") {
    state.wins += 1;
  } else if (result.value === "You lose!") {
    state.losses += 1;
  } else if (result.value === "It's a tie!") {
    state.ties += 1;
  }
};
</script>

<style>
.size-32 {
  width: 32px;
  height: 32px;
}

.size-60 {
  width: 60px;
  height: 60px;
}
</style>
