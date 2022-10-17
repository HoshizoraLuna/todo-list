<script setup lang="ts">
const {
  color = 'gray',
  enableHover = false
} = defineProps<{
  color?: string,
  enableHover?: boolean
}>()
</script>

<template>
  <div
    class="inline-block rounded-full px-2.5 py-1 text-sm text-center"
    :class="[
      `text-${color}-900`,
      `bg-${color}-100`,
      enableHover ? `hover:bg-${color}-200` : ``
    ]"
  >
    <slot />
  </div>
</template>
