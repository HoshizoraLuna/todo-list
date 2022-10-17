<script setup lang="ts">
import { computed } from '@vue/reactivity'

const { modelValue, color = 'gray', id = 'checkbox' } = defineProps<{
  modelValue: boolean,
  color?: string
  id?: string
}>()

const emit = defineEmits(['update:modelValue'])

const value = computed<boolean>({
  get () {
    return modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div class="flex items-center relative">
    <input
      :class="`border-${color}-300 checked:bg-${color}-600`"
      class="appearance-none h-6 w-6 border-2 rounded-full bg-white focus:outline-none transition duration-200 mt-1 float-left mr-2 cursor-pointer"
      type="checkbox"
      v-model="value"
      :id="id"
    />
    <label class="inline-block text-gray-800 select-none" :for="id">
      <slot />
    </label>
  </div>
</template>
