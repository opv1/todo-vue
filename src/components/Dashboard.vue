<template>
  <div class="dashboard">
    <ul class="dashboard__list" v-if="todos.length !== 0">
      <li class="dashboard__item" v-for="todo of todos" :key="todo.id">
        <textarea
          :class="['dashboard__description', { done: todo.complete }]"
          v-model="todo.description"
          @keypress.enter="editDescription(todo)"
          @keyup.enter="$event.target.blur()"
          type="text"
        />
        <div class="dashboard__control">
          <div class="dashboard__block">
            <i class="dashboard__color"></i>
            <span class="dashboard__priority">{{ todo.priority }}</span>
          </div>
          <div class="dashboard__block">
            <i class="dashboard__tag fas fa-tag"></i>
            <span class="dashboard__date">{{ todo.date }}</span>
          </div>
          <div class="dashboard__block">
            <input
              :id="todo.id"
              class="dashboard__input"
              @change="completeTodo(todo.id)"
              type="checkbox"
              :checked="todo.complete"
            />
            <label class="dashboard__label" :for="todo.id" />
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
    <ul class="dashboard__list" v-else>
      <li class="dashboard__empty">The list is empty</li>
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
    ...mapActions([
      'deleteTodo',
      'completeTodo',
      'editDescription',
      'clearAll',
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';

.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: calc(100% - 155px);

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    overflow: auto;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 -10px 35px -30px rgba(194, 194, 194, 0.644);
    scrollbar-color: rgba(113, 113, 114, 0.356) transparent;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border: 1px solid #eee;
      border-radius: 20px;
      background-color: rgba(113, 113, 114, 0.356);
    }
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

  &__empty {
    font-size: 1.5rem;
  }

  &__description {
    outline: none;
    border: 1px solid transparent;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    min-height: 55px;
    box-shadow: inset 0 -10px 35px -30px rgba(194, 194, 194, 0.644);
    color: $greyColor;
    transition: border 0.3s;
    resize: none;
    scrollbar-color: rgba(113, 113, 114, 0.356) transparent;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border: 1px solid #eee;
      border-radius: 20px;
      background-color: rgba(113, 113, 114, 0.356);
    }

    &:focus {
      border: 1px solid $blueColor;
    }

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
    height: 100%;
  }

  &__block {
    display: flex;
    align-items: center;
    height: 100%;

    &:last-child {
      justify-content: flex-end;
    }

    &:nth-child(1) {
      min-width: 90px;
    }

    &:nth-child(3) {
      min-width: 75px;
    }
  }

  &__tag {
    font-size: 1.1rem;
    color: #1a1a25;
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
    color: $greyColor;
  }

  &__date {
    margin: 0.5rem;
    color: $greyColor;
  }

  &__input {
    display: none;

    &:checked + label::before {
      position: absolute;
      left: -28px;
      top: -7px;
      width: 10px;
      height: 10px;
      background: $blueColor;
    }
  }

  &__label {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: -32px;
      top: -11px;
      border: 2px solid $blueColor;
      border-radius: 5px;
      width: 18px;
      height: 18px;
    }

    &::after {
      content: '';
      position: absolute;
      left: -32px;
      top: -11px;
      border: 2px solid $blueColor;
      border-radius: 5px;
      width: 18px;
      height: 18px;
    }
  }

  &__delete {
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    background: none;
    transition: background 0.3s;
    cursor: pointer;

    i {
      font-size: 1.1rem;
      color: $blueColor;
    }

    &:hover {
      background: rgba(58, 56, 56, 0.089);
    }
  }

  &__clear {
    margin: 0.2rem;
    outline: none;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 0.5rem;
    color: $blueColor;
    background: none;
    transition: border 0.3s;
    cursor: pointer;

    i {
      margin-left: 0.5rem;
      font-size: 1.1rem;
      color: $blueColor;
    }

    &:hover {
      border: 1px solid $blueColor;
    }
  }
}

@media screen and (max-width: 1024px) {
  .dashboard {
    &__item {
      flex-direction: column;
      border-bottom: 1px solid $blueColor;
    }
  }
}

@media screen and (max-width: 520px) {
  .dashboard {
    &__date {
      display: none;
    }
  }
}

@media screen and (max-width: 395px) {
  .dashboard {
    height: calc(100% - 190px);
  }
}
</style>
