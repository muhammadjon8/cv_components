<script setup>
import { ref } from "vue";

const indexes = ref([null, null, null, null, null, null, null, null, null]);
const nolik = ref("/nolik.png");
const iks = ref("/iks.png");
const playerSymbol = ref(null); // Track the player's chosen symbol
const botSymbol = ref(null); // Track the bot's symbol
const gameEnded = ref(false); // To track if the game has ended
const isPlayerTurn = ref(true); // Track whose turn it is
const menX = ref("/menX.png");
const men0 = ref("/men0.png");

function selectSymbol(symbol) {
  playerSymbol.value = symbol;
  botSymbol.value = symbol === nolik.value ? menX.value : men0.value;
  if (playerSymbol.value === nolik.value) {
    // If player chose "O", bot starts with "X" in the center
    indexes.value[4] = botSymbol.value;
    isPlayerTurn.value = true; // Player's turn after bot's move
  }
}

function handleClick(index) {
  if (indexes.value[index] === null && !gameEnded.value && isPlayerTurn.value) {
    indexes.value[index] = playerSymbol.value;
    checkWin();
    if (!gameEnded.value) {
      isPlayerTurn.value = false;
      setTimeout(botMove, 500); // 0.5-second delay before the bot moves
    }
  }
}

function botMove() {
  const availableMoves = indexes.value
    .map((value, index) => (value === null ? index : null))
    .filter((value) => value !== null);

  if (availableMoves.length > 0) {
    const randomMove =
      availableMoves[Math.floor(Math.random() * availableMoves.length)];
    indexes.value[randomMove] = botSymbol.value;
    checkWin();
    isPlayerTurn.value = true;
  }
}

function checkWin() {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winCombinations.forEach((combination) => {
    const [a, b, c] = combination;
    if (
      indexes.value[a] &&
      indexes.value[a] === indexes.value[b] &&
      indexes.value[a] === indexes.value[c]
    ) {
      gameEnded.value = true;
      alert(
        `Player ${
          indexes.value[a] === playerSymbol.value ? "You" : "Bot"
        } wins!`
      );
    }
  });

  // Check for draw
  if (!indexes.value.includes(null) && !gameEnded.value) {
    alert("It's a draw!");
    gameEnded.value = true;
  }
}

function resetGame() {
  indexes.value = [null, null, null, null, null, null, null, null, null];
  playerSymbol.value = null;
  botSymbol.value = null;
  gameEnded.value = false;
  isPlayerTurn.value = true;
}
</script>

<template>
  <div class="container py-9">
    <h2 class="text-center">Tic Tac Toe</h2>
    <div class="w-1/3 mx-auto">
      <div
        v-if="!playerSymbol"
        class="flex gap-5 py-5 items-center justify-center"
      >
        <button @click="selectSymbol(nolik)" class="px-9 py-3 bg-green-500 text-white rounded-lg text-2xl shadow-lg">O</button>
        <button @click="selectSymbol(iks)" class="px-9 py-3 bg-red-500 text-white rounded-lg text-2xl shadow-lg">X</button>
      </div>
      <div v-else>
        <div class="grid grid-cols-3 gap-5">
          <button
            v-for="(index, idx) in indexes"
            :key="idx"
            class="btn"
            @click="handleClick(idx)"
          >
            <img :src="index" alt="" class="img" />
          </button>
        </div>
        <div class="flex gap-5 py-5 items-center justify-center">
          <button
            @click="resetGame"
            class="px-9 py-3 bg-blue-500 text-white rounded-lg text-2xl shadow-lg"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  @apply size-32 rounded-lg border shadow-lg;
}
.img {
  @apply w-full h-full object-cover;
}
</style>
