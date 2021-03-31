import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import { dateFormat } from '@/utils/dateFormat'

export default createStore({
  state: {
    todos: [
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
    setTodos(state, payload) {
      state.todos = payload
    },
  },
  getters: {
    todos: (state) => state.todos,
    doneTodos: (state) =>
      [...state.todos].filter((todo) => todo.complete === true),
    pendingTodos: (state) =>
      [...state.todos].filter((todo) => todo.complete === false),
  },
  actions: {
    addTodo({ commit, state }, todoDescription) {
      const todos = [...state.todos]

      const newTodo = {
        id: uuidv4(),
        description: todoDescription,
        priority: 'Low',
        date: dateFormat(),
        complete: false,
      }

      todos.push(newTodo)

      commit('setTodos', todos)
    },
    deleteTodo({ commit, state }, todoId) {
      const todos = [...state.todos].filter((todo) => todo.id !== todoId)

      commit('setTodos', todos)
    },
    completeTodo({ commit, state }, todoId) {
      const todos = [...state.todos].filter((todo) => {
        if (todo.id === todoId) {
          todo.complete = !todo.complete
        }

        return todo
      })

      commit('setTodos', todos)
    },
    clearAll({ commit }) {
      commit('setTodos', [])
    },
  },
})
