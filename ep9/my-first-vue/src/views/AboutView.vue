<script setup>
import { useFlash } from '../composables/useFlash';

let { flash } = useFlash();

</script>

<template>
  <div class="about">
    <button @click="flash('It works!')">Click</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
