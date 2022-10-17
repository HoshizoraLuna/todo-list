import { defineStore } from 'pinia'

export interface Todo {
  id: number
  text: string
  done: boolean
}

export const useTodoStore = defineStore('todo', {
  state: () => {
    return {
      data: <Todo[]>[]
    }
  },
  persist: {
    enabled: true
  }
})
