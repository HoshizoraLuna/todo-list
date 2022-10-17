<script setup lang="ts">
import { computed } from '@vue/reactivity'

import {
  CheckIcon,
  SelectorIcon
} from '@heroicons/vue/solid'

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption
} from '@headlessui/vue'

const {
  modelValue,
  labels,
  color = 'gray'
} = defineProps<{
  modelValue: { id: string, label: string },
  labels: Array<{ id: string, label: string }>,
  color?: string
}>()

const emit = defineEmits(['update:modelValue'])

const value = computed<{ id: string, label: string } | undefined>({
  get () {
    return modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <Listbox v-model="value">
    <div class="relative w-full">
      <ListboxButton
        :class="
          `border-${color}-300 hover:border-${color}-400 focus:border-${color}-400`
        "
        class="
          relative
          w-full
          py-3
          pl-3
          pr-10
          text-left
          rounded-md
          border-2
          cursor-default
          transition
          duration-200
          ease-in-out
          focus:outline-none
          sm:text-sm
        "
      >
        <span class="block truncate">{{ value?.label }}</span>
        <span
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            pointer-events-none
          "
        >
          <SelectorIcon
            class="w-5 h-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="
            z-50
            absolute
            w-full
            py-1
            mt-1
            overflow-auto
            text-base
            bg-white
            rounded-md
            shadow-lg
            max-h-60
            ring-1 ring-black ring-opacity-5
            focus:outline-none
            sm:text-sm
          "
        >
          <ListboxOption
            v-for="label in labels"
            v-slot="{ active, selected }"
            :key="label.id"
            :value="label"
            as="template"
          >
            <li
              :class="[
                active ? `text-${color}-900 bg-${color}-100` : 'text-gray-900',
                'cursor-default select-none relative py-2 pl-10 pr-4',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-medium' : 'font-normal',
                  'block truncate',
                ]"
              >{{ label.label }}</span>
              <span
                v-if="selected"
                :class="`text-${color}-600`"
                class="
                  absolute
                  inset-y-0
                  left-0
                  flex
                  items-center
                  pl-3
                "
              >
                <CheckIcon
                  class="w-5 h-5"
                  aria-hidden="true"
                />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
