<script setup lang="ts">
import { computed } from '@vue/reactivity'

const {
  modelValue,
  color = 'gray',
  error = false
} = defineProps<{
  modelValue: string | number,
  color?: string,
  error?: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const value = computed<string | number>({
  get () {
    return modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input
    v-model="value"
    :error="error"
    :class="
      error
        ? 'border-red-300 hover:border-red-400 focus:border-red-400'
        : `border-${color}-300 hover:border-${color}-400 focus:border-${color}-400`
    "
    class="
      border-2
      rounded-md
      px-5
      py-2.5
      w-full
      transition
      duration-200
      ease-in-out
      focus:outline-none
    "
  >
</template>
