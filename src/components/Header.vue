<template>
  <div class="header">
    <span class="header__title">todo-list</span>
    <div class="header__info">
      <span
        :class="['header__done', { active: currentTodos === 'done' }]"
        @click="selectTodos('done')"
        >done: {{ doneTodos.length }}</span
      >
      <span
        :class="['header__pending', { active: currentTodos === 'pending' }]"
        @click="selectTodos('pending')"
        >pending: {{ pendingTodos.length }}</span
      >
      <span
        :class="['header__total', { active: currentTodos === 'total' }]"
        @click="selectTodos('total')"
        >total: {{ totalTodos.length }}</span
      >
    </div>
    <form class="header__form">
      <input
        :class="['header__input', { error: error }]"
        v-model="value"
        type="text"
        :placeholder="
          error ? 'Please do not leave the field empty' : 'Enter anything'
        "
      />
      <button class="header__button" @click.prevent="submitForm">
        <i class="fas fa-arrow-right" />
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  data: () => ({
    value: '',
  }),
  computed: {
    ...mapGetters([
      'error',
      'currentTodos',
      'totalTodos',
      'doneTodos',
      'pendingTodos',
    ]),
  },
  methods: {
    ...mapActions(['selectTodos', 'addTodo']),
    submitForm() {
      this.addTodo(this.value)
      this.value = ''
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';

.header {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  &__title {
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: $blackColor;
  }

  &__info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    padding: 1rem 0;
    width: 100%;
  }

  &__done {
    margin: 0.3rem;
    border: 1px solid #03d30d;
    border-radius: 5px;
    padding: 0.3rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #03d30d;
    transition: background 0.3s;
    cursor: pointer;

    &.active {
      background: rgba(3, 211, 13, 0.2);
    }
  }

  &__pending {
    margin: 0.3rem;
    border: 1px solid #cc0e00;
    border-radius: 5px;
    padding: 0.3rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #cc0e00;
    transition: background 0.3s;
    cursor: pointer;

    &.active {
      background: rgba(204, 14, 0, 0.2);
    }
  }

  &__total {
    margin: 0.3rem;
    border: 1px solid #3b037a;
    border-radius: 5px;
    padding: 0.3rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #3b037a;
    transition: background 0.3s;
    cursor: pointer;

    &.active {
      background: rgba(70, 1, 148, 0.2);
    }
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
    padding: 0;
    width: 100%;
    color: $blackColor;

    &::placeholder {
      color: rgba(110, 110, 110, 0.493);
    }

    &.error {
      &::placeholder {
        color: #f00;
      }
    }
  }

  &__button {
    margin: 0.1rem;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    background: none;
    transition: background 0.3s;
    cursor: pointer;

    i {
      font-size: 1.1rem;
      color: $blackColor;
    }

    &:hover {
      background: rgba(58, 56, 56, 0.089);
    }
  }
}
</style>
