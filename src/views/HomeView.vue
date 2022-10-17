<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import CardBox from '../components/CardBox.vue'
import CheckBox from '../components/CheckBox.vue'
import FlatButton from '../components/FlatButton.vue'
import InputBox from '../components/InputBox.vue'

import { ChevronUpIcon, ChevronDownIcon, MinusIcon, PlusIcon, TrashIcon,} from '@heroicons/vue/solid'

import { useTodoStore } from '../stores/todo'

const todos = storeToRefs(useTodoStore())

const newTodo = ref<string>('')

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.data.value.push({
      id: todos.data.value.length,
      text: newTodo.value,
      done: false
    })

    newTodo.value = ''
  }
}

const removeTodo = (id: number) => {
  todos.data.value = todos.data.value.filter(todo => todo.id !== id)
}

const removeDone = () => {
  todos.data.value = todos.data.value.filter(todo => !todo.done)
}

const moveUp = (id: number) => {
  const index = todos.data.value.findIndex(todo => todo.id === id)

  if (index > 0) {
    const todo = todos.data.value[index]
    todos.data.value.splice(index, 1)
    todos.data.value.splice(index - 1, 0, todo)
  }
}

const moveDown = (id: number) => {
  const index = todos.data.value.findIndex(todo => todo.id === id)

  if (index < todos.data.value.length - 1) {
    const todo = todos.data.value[index]
    todos.data.value.splice(index, 1)
    todos.data.value.splice(index + 1, 0, todo)
  }
}
</script>

<template>
  <div class="w-full h-full flex flex-col bg-gradient-to-tr from-white to-violet-50">
    <div class="p-10">
      <h1 class="text-4xl font-bold text-center">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-violet-400">
          Todo List
        </span>
      </h1>
    </div>

    <div class="w-full flex-grow flex flex-col items-center justify-center p-5 md:p-20">
      <div class="max-w-full md:max-w-2xl w-full h-full">
        <div class="w-full flex flex-col space-y-1 mb-2 md:flex-row md:space-y-0 justify-between">
          <div>
            <FlatButton color="rose" @click="removeDone">
              <TrashIcon class="w-5 h-5 mr-1 inline-block" />
              Remove Done
            </FlatButton>
          </div>
          <div class="w-full md:w-1/2 flex mb-1 space-x-1">
            <InputBox class="w-full" v-model="newTodo" color="violet" placeholder="What needs to be done?"
              @keydown.enter="addTodo" />
            <FlatButton color="violet" @click="addTodo">
              <PlusIcon class="w-5 h-5 mr-1 inline-block" />
              Add
            </FlatButton>
          </div>
        </div>
        <CardBox class="h-full">
          <div v-for="todo in todos.data.value" class="mb-5 flex space-x-1">
            <CheckBox color="violet" class="flex-grow text-lg font-bold" :id="`checkbox${todo.id}`" v-model="todo.done">
              {{ todo.text }}
            </CheckBox>
            <FlatButton class="!rounded-full !px-2" color="gray" size="sm" @click="moveUp(todo.id)">
              <ChevronUpIcon class="w-5 h-5 inline-block" />
            </FlatButton>
            <FlatButton class="!rounded-full !px-2" color="gray" size="sm" @click="moveDown(todo.id)">
              <ChevronDownIcon class="w-5 h-5 inline-block" />
            </FlatButton>
            <FlatButton class="!rounded-full !px-2" color="rose" size="sm" @click="removeTodo(todo.id)">
              <MinusIcon class="w-5 h-5 inline-block" />
            </FlatButton>
          </div>
        </CardBox>
      </div>
    </div>
  </div>
</template>
