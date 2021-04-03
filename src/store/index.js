import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import { dateFormat } from '@/utils/dateFormat'

export default createStore({
  state: {
    error: false,
    modal: false,
    temporary: {},
    priorities: {
      Low: { name: 'Low', color: '#3b037a' },
      Medium: { name: 'Medium', color: '#f80' },
      High: { name: 'High', color: '#f00' },
    },
    tags: {
      Home: { name: 'Home', color: '#ebc806' },
      Peronal: { name: 'Peronal', color: '#089dca' },
      Work: { name: 'Work', color: '#7514b6' },
    },
    currentTodos: 'total',
    displayedTodos: [],
    totalTodos: [
      {
        id: 1,
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        priority: 'Low',
        tag: 'Home',
        date: 'March 31, 2021',
        complete: false,
      },
      {
        id: 2,
        description:
          'Ab, magni quod hic dolore omnis culpa perferendis temporibus tempore ratione, molestias exercitationem odio numquam ipsum.',
        priority: 'Medium',
        tag: 'Work',
        date: 'March 31, 2021',
        complete: true,
      },
      {
        id: 3,
        description: 'Laborum repellendus officiis itaque nisi in!',
        priority: 'High',
        tag: 'Peronal',
        date: 'March 31, 2021',
        complete: false,
      },
    ],
  },
  mutations: {
    setError(state, payload) {
      state.error = payload
    },
    setModal(state, payload) {
      state.modal = payload
    },
    setTemporary(state, payload) {
      state.temporary = payload
    },
    setTags(state, payload) {
      state.tags = payload
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
    modal: (state) => state.modal,
    temporary: (state) => state.temporary,
    priorities: (state) => state.priorities,
    tags: (state) => state.tags,
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
        tag: 'Peronal',
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
    openModal({ commit, state }, todoId) {
      const todo = [...state.totalTodos].find((todo) => todo.id === todoId)

      commit('setTemporary', todo)
      commit('setModal', true)
    },
    closeModal({ commit }) {
      commit('setTemporary', {})
      commit('setModal', false)
    },
    addTag({ commit, state }, tag) {
      const tags = { ...state.tags, [tag]: { name: tag, color: 'red' } }

      commit('setTags', tags)
    },
    changeTag({ commit, state, dispatch }, tag) {
      const todos = [...state.totalTodos].map((todo) => {
        if (todo.id === state.temporary.id) {
          todo.tag = tag
        }

        return todo
      })

      commit('setTotalTodos', todos)

      dispatch('closeModal')
    },
    clearAll({ commit }) {
      commit('setTotalTodos', [])
    },
  },
})
