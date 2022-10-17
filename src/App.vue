<script setup lang="ts">
import DataLoader from './components/DataLoader.vue'
</script>

<template>
  <Suspense>
    <router-view />

    <template #fallback>
      <div class="flex justify-center items-center">
        <DataLoader />
      </div>
    </template>
  </Suspense>
</template>

<style>
html,
body,
#app {
  height: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar {
  background-color: #fff;
  width: 16px;
}

/* background of the scrollbar except button or resizer */
::-webkit-scrollbar-track {
  background-color: #fff;
}

/* scrollbar itself */
::-webkit-scrollbar-thumb {
  background-color: #babac0;
  border-radius: 16px;
  border: 4px solid #fff;
}

/* set button(top and bottom of the scrollbar) */
::-webkit-scrollbar-button {
  display: none;
}
</style>
