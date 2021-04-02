<template>
  <div class="dashboard" @click="clickListener">
    <ul class="dashboard__list" v-if="displayedTodos.length !== 0">
      <li class="dashboard__item" v-for="todo of displayedTodos" :key="todo.id">
        <textarea
          :class="['dashboard__description', { done: todo.complete }]"
          v-model="todo.description"
          @keypress.enter="editDescription(todo)"
          @keyup.enter="$event.target.blur()"
          type="text"
        />
        <div class="dashboard__control">
          <div class="dashboard__block">
            <i
              class="dashboard__color"
              :style="{
                background: priorities[todo.priority].color,
              }"
            />
            <span class="dashboard__priority" @click="showOptions(todo.id)">{{
              todo.priority
            }}</span>
            <div class="dashboard__select" v-show="todo.id === selectId">
              <span
                class="dashboard__option"
                v-for="priority of priorities"
                :key="priority[todo.priority]"
                @click="chooseOption(todo.id, priority.name)"
                >{{ priority.name }}</span
              >
            </div>
          </div>
          <div class="dashboard__block">
            <i class="dashboard__tag fas fa-tag" />
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
              <i class="fas fa-trash" />
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
      v-if="displayedTodos.length !== 0"
      @click.prevent="clearAll"
    >
      Clear All <i class="fas fa-trash" />
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Dashboard',
  data: () => ({
    selectId: null,
  }),
  computed: {
    ...mapGetters(['priorities', 'displayedTodos']),
  },
  methods: {
    ...mapActions([
      'deleteTodo',
      'completeTodo',
      'editDescription',
      'changePriority',
      'clearAll',
    ]),
    clickListener(event) {
      if (
        !event.target.classList.contains('dashboard__priority') &&
        this.selectId !== null
      ) {
        this.resetOptions()
      }
    },
    showOptions(id) {
      if (this.selectId === null) {
        this.selectId = id
      } else if (this.selectId !== id) {
        this.selectId = id
      } else {
        this.resetOptions()
      }
    },
    resetOptions() {
      this.selectId = null
    },
    chooseOption(todoId, priorityName) {
      this.resetOptions()
      this.changePriority({ todoId, priorityName })
    },
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
    color: $blackColor;
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
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;

    &:last-child {
      justify-content: flex-end;
    }

    &:nth-child(1) {
      min-width: 100px;
    }

    &:nth-child(3) {
      min-width: 75px;
    }
  }

  &__color {
    margin: 3px;
    border-radius: 100%;
    width: 10px;
    height: 10px;
  }

  &__priority {
    margin: 0.1rem;
    border-radius: 5px;
    padding: 0.5rem;
    color: $greyColor;
    transition: background 0.3s;
    cursor: pointer;
    user-select: none;

    &:hover {
      background: rgba(58, 56, 56, 0.089);
    }
  }

  &__select {
    position: absolute;
    left: 18px;
    top: 48px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    border: 1px solid $blueColor;
    border-radius: 5px;
    background: #fff;
  }

  &__option {
    border-radius: 5px;
    padding: 0.5rem;
    cursor: pointer;

    &:hover {
      background: rgba(58, 56, 56, 0.089);
    }
  }

  &__tag {
    margin: 0.1rem;
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 1.1rem;
    color: $blackColor;
    transition: background 0.3s;
    cursor: pointer;

    &:hover {
      background: rgba(58, 56, 56, 0.089);
    }
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
    cursor: pointer;

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
