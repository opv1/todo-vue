<template>
  <div class="header">
    <span class="header__title">todo-list</span>
    <div class="header__info">
      <span class="header__done">done: {{ doneTodos.length }}</span>
      <span class="header__pending">pending: {{ pendingTodos.length }}</span>
      <span class="header__total">total: {{ todos.length }}</span>
    </div>
    <form class="header__form">
      <input
        class="header__input"
        v-model="value"
        type="text"
        :placeholder="placeholder"
      />
      <button class="header__button" @click.prevent="submitForm">
        <i class="fas fa-arrow-right"></i>
      </button>
    </form>
    <span class="header__error" v-show="error"
      >Please do not leave the field empty</span
    >
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  data: () => ({
    value: '',
    placeholder: 'Enter anything',
  }),
  computed: {
    ...mapGetters(['error', 'todos', 'doneTodos', 'pendingTodos']),
  },
  methods: {
    submitForm() {
      this.addTodo(this.value)
      this.value = ''
    },
    ...mapActions(['addTodo']),
  },
}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';

.header {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  &__title {
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #1a1a25;
  }

  &__info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    padding: 1rem 0;
    width: 100%;
  }

  &__total {
    margin: 0.3rem;
    border-radius: 5px;
    padding: 0.3rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #3b037a;
    background: rgba(70, 1, 148, 0.2);
  }

  &__done {
    margin: 0.3rem;
    border-radius: 5px;
    padding: 0.3rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #03d30d;
    background: rgba(3, 211, 13, 0.2);
  }

  &__pending {
    margin: 0.3rem;
    border-radius: 5px;
    padding: 0.3rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #cc0e00;
    background: rgba(204, 14, 0, 0.2);
  }

  &__form {
    display: flex;
    align-items: center;
    border-bottom: 1px solid $blueColor;
    padding: 0 0.5rem;
    width: 100%;
  }

  &__input {
    outline: none;
    border: none;
    width: 100%;
    color: #1a1a25;

    &::placeholder {
      color: rgba(110, 110, 110, 0.493);
    }
  }

  &__button {
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    background: none;
    transition: background 0.3s;
    cursor: pointer;

    i {
      font-size: 1.1rem;
      color: #1a1a25;
    }

    &:hover {
      background: rgba(58, 56, 56, 0.089);
    }
  }

  &__error {
    padding: 0.5rem;
    color: #f00;
  }
}
</style>
