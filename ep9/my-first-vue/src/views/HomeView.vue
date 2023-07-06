<script setup>
import { ref, watch } from "vue";
import { useStorage } from '../composables/useStorage';

let food = useStorage('food');
let age = useStorage('age');



// let food = ref(localStorage.getItem('food'));
// let age = ref(localStorage.getItem('age'));

// watch(food, val => {
//   write('food', val)
// });

// watch(age, val => {
//   write('age', val)
// });

// function write(key, val) {
//   localStorage.setItem(key, val);
// }

// setTimeout(() => {
//   food.value = "changed";
// }, 2000);

</script>

<template>
  <main>
    <p>
      <!-- What is your favorite food? <input type="text" v-model="food" @input="write('food', food)" /> -->
      What is your favorite food? <input type="text" v-model="food" />
    </p>
    <p>
      How old are you ? <input type="text" v-model="age" @input="write('age', age)" />
    </p>
  </main>
</template>
