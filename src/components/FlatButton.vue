<script setup lang="ts">
const {
  color = 'gray',
  type = 'button',
  size = 'md',
  enableHover = true
} = defineProps<{
  color?: string,
  type?: string,
  size?: string,
  enableHover?: boolean
}>()
</script>

<template>
  <button
    :type="type as 'button' | 'submit' | 'reset' | undefined"
    :class="[
      `border-${color}-600`,
      `text-${color}-600`,
      enableHover ? `hover:bg-${color}-600 hover:text-white` : ``,
      size === 'sm' ? `px-2.5 py-2 text-xs` : size === 'lg' ? `px-5 py-4 text-base`  : `px-4 py-3 text-sm`,
    ]"
    class="
      border
      inline-flex
      items-center
      justify-center
      font-medium
      rounded-md
      bg-transparent
      focus:outline-none
    "
  >
    <slot />
  </button>
</template>
