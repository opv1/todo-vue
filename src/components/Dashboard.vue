<template>
  <div class="dashboard">
    <ul class="dashboard__list" v-if="todos.length !== 0">
      <!-- <li class="dashboard__epmty" v-else>The list is empty</li> -->
      <li class="dashboard__item" v-for="todo of todos" :key="todo.id">
        <span :class="['dashboard__description', { done: todo.complete }]">{{
          todo.description
        }}</span>
        <div class="dashboard__control">
          <div class="dashboard__block">
            <i class="dashboard__color"></i>
            <span class="dashboard__priority">{{ todo.priority }}</span>
          </div>
          <div class="dashboard__block">
            <i class="fas fa-tag"></i>
            <span class="dashboard__date">{{ todo.date }}</span>
          </div>
          <div class="dashboard__block">
            <input
              :id="todo.id"
              class="dashboard__input"
              type="checkbox"
              :checked="todo.complete"
            />
            <label
              class="dashboard__label"
              :for="todo.id"
              @click="completeTodo(todo.id)"
            />
            <button
              class="dashboard__delete"
              @click.prevent="deleteTodo(todo.id)"
            >
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </li>
    </ul>
    <button
      class="dashboard__clear"
      v-if="todos.length !== 0"
      @click.prevent="clearAll"
    >
      Clear All <i class="fas fa-trash"></i>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters(['todos']),
  },
  methods: {
    ...mapActions(['deleteTodo', 'completeTodo', 'clearAll']),
  },
}
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80%;

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    overflow: auto;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  &__description {
    width: 100%;
    color: rgb(110, 110, 110);

    &.done {
      text-decoration: line-through;
    }
  }

  &__control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0.5rem;
    width: 100%;
  }

  &__block {
    display: flex;
    align-items: center;
    height: 100%;

    &:not(:last-child) {
      width: 100%;
    }

    i {
      margin: 0.5rem;
      font-size: 1.3rem;
      color: rgb(66, 65, 65);
      cursor: pointer;
    }
  }

  &__date {
    margin: 0.5rem;
    color: rgb(110, 110, 110);
  }

  &__color {
    margin: 3px;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    background: #f00;
  }

  &__priority {
    margin: 3px;
    color: rgb(110, 110, 110);
  }

  &__input {
    display: none;

    &:checked + label::before {
      position: absolute;
      left: -19px;
      top: -7px;
      width: 10px;
      height: 10px;
      background: rgb(99, 201, 248);
    }
  }

  &__label {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: -57px;
      top: -12px;
      border: 2px solid rgb(99, 201, 248);
      border-radius: 5px;
      width: 20px;
      height: 20px;
    }

    &::after {
      content: '';
      position: absolute;
      left: -24px;
      top: -12px;
      border: 2px solid rgb(99, 201, 248);
      border-radius: 5px;
      width: 20px;
      height: 20px;
    }
  }

  &__delete {
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 0;
    background: none;
    transition: background 0.3s;
    cursor: pointer;

    i {
      color: rgb(99, 201, 248);
    }

    &:hover {
      background: rgba(58, 56, 56, 0.089);
    }
  }

  &__clear {
    outline: none;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 0.5rem;
    color: rgb(99, 201, 248);
    background: none;
    transition: border 0.3s;
    cursor: pointer;

    i {
      margin-left: 1rem;
      color: rgb(99, 201, 248);
    }

    &:hover {
      border: 1px solid rgb(99, 201, 248);
    }
  }
}
</style>
