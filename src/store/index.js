import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import { dateFormat } from '@/utils/dateFormat'

export default createStore({
  state: {
    error: false,
    priorities: {
      Low: { name: 'Low', color: '#3b037a' },
      Medium: { name: 'Medium', color: '#f80' },
      High: { name: 'High', color: '#f00' },
    },
    currentTodos: 'total',
    displayedTodos: [],
    totalTodos: [
      {
        id: 1,
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        priority: 'Low',
        date: 'March 31, 2021',
        complete: false,
      },
      {
        id: 2,
        description:
          'Ab, magni quod hic dolore omnis culpa perferendis temporibus tempore ratione, molestias exercitationem odio numquam ipsum.',
        priority: 'Medium',
        date: 'March 31, 2021',
        complete: true,
      },
      {
        id: 3,
        description: 'Laborum repellendus officiis itaque nisi in!',
        priority: 'High',
        date: 'March 31, 2021',
        complete: false,
      },
    ],
  },
  mutations: {
    setError(state, payload) {
      state.error = payload
    },
    setCurrentTodos(state, payload) {
      state.currentTodos = payload
    },
    setDisplayedTodos(state, payload) {
      state.displayedTodos = payload
    },
    setTotalTodos(state, payload) {
      state.totalTodos = payload
    },
  },
  getters: {
    error: (state) => state.error,
    priorities: (state) => state.priorities,
    currentTodos: (state) => state.currentTodos,
    displayedTodos: (state) => {
      if (state.currentTodos === 'done')
        return [...state.totalTodos].filter((todo) => todo.complete === true)

      if (state.currentTodos === 'pending')
        return [...state.totalTodos].filter((todo) => todo.complete === false)

      if (state.currentTodos === 'total') return [...state.totalTodos]
    },
    totalTodos: (state) => state.totalTodos,
    doneTodos: (state) =>
      [...state.totalTodos].filter((todo) => todo.complete === true),
    pendingTodos: (state) =>
      [...state.totalTodos].filter((todo) => todo.complete === false),
  },
  actions: {
    selectTodos({ commit }, todos) {
      commit('setCurrentTodos', todos)
    },
    addTodo({ commit, state }, todoDescription) {
      if (!todoDescription) {
        return commit('setError', true)
      } else {
        commit('setError', false)
      }

      const todos = [...state.totalTodos]

      const newTodo = {
        id: uuidv4(),
        description: todoDescription,
        priority: 'Low',
        date: dateFormat(),
        complete: false,
      }

      todos.unshift(newTodo)

      commit('setTotalTodos', todos)
    },
    deleteTodo({ commit, state }, todoId) {
      const todos = [...state.totalTodos].filter((todo) => todo.id !== todoId)

      commit('setTotalTodos', todos)
    },
    completeTodo({ commit, state }, todoId) {
      const todos = [...state.totalTodos].map((todo) => {
        if (todo.id === todoId) {
          todo.complete = !todo.complete
        }

        return todo
      })

      commit('setTotalTodos', todos)
    },
    editDescription({ commit, state }, todoEdited) {
      const todos = [...state.totalTodos].map((todo) => {
        if (todo.id === todoEdited.id) {
          todo.description = todoEdited.description
        }

        return todo
      })

      commit('setTotalTodos', todos)
    },
    changePriority({ commit, state }, todoEdited) {
      const todos = [...state.totalTodos].map((todo) => {
        if (todo.id === todoEdited.todoId) {
          todo.priority = todoEdited.priorityName
        }

        return todo
      })

      commit('setTotalTodos', todos)
    },
    clearAll({ commit }) {
      commit('setTotalTodos', [])
    },
  },
})
