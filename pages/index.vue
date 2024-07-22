<script setup>
const images = ref([
  {
    id: 1,
    img: "/js.png",
    isFound: false,
    done: false,
  },
  {
    id: 2,
    img: "/ts.png",
    isFound: false,
    done: false,
  },
  {
    id: 3,
    img: "/nodejs.png",
    isFound: false,
    done: false,
  },
  {
    id: 4,
    img: "/nest.png",
    isFound: false,
    done: false,
  },
  {
    id: 5,
    img: "/js.png",
    isFound: false,
    done: false,
  },
  {
    id: 6,
    img: "/ts.png",
    isFound: false,
    done: false,
  },
  {
    id: 7,
    img: "/nodejs.png",
    isFound: false,
    done: false,
  },
  {
    id: 8,
    img: "/nest.png",
    isFound: false,
    done: false,
  },
  {
    id: 9,
    img: "/vue.png",
    isFound: false,
    done: false,
  },
  {
    id: 10,
    img: "/vue.png",
    isFound: false,
    done: false,
  },
  {
    id: 11,
    img: "/nuxt.png",
    isFound: false,
    done: false,
  },
  {
    id: 12,
    img: "/nuxt.png",
    isFound: false,
    done: false,
  },
  {
    id: 13,
    img: "/postgres.png",
    isFound: false,
    done: false,
  },
  {
    id: 14,
    img: "/postgres.png",
    isFound: false,
    done: false,
  },
  {
    id: 15,
    img: "/mongo.png",
    isFound: false,
    done: false,
  },
  {
    id: 16,
    img: "/mongo.png",
    isFound: false,
    done: false,
  },
  {
    id: 17,
    img: "/mysql.png",
    isFound: false,
    done: false,
  },
  {
    id: 18,
    img: "/mysql.png",
    isFound: false,
    done: false,
  },
]);

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const shuffledData = ref([]);

onMounted(() => {
  shuffledData.value = shuffleArray([...images.value]);
});
</script>

<template>
  <div class="container mx-auto p-4 text-red-900">
    <h1 class="text-center mb-4">This is a Memory Game for Flipping Cards</h1>
    <div class="flex">
      <div
        class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 w-1/2"
      >
        <LazyMemoryCardFlipCard
          v-for="(item, index) in shuffledData"
          :key="index"
          :data="item"
        />
      </div>
      <div class="w-1/2">
        <img src="/myImage.png" alt="" class="h-[600px] w-full">
      </div>
    </div>
  </div>
</template>

<style scoped></style>
