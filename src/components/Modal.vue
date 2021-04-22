<template>
  <div class="modal" @click="onClickListener">
    <div class="modal__container">
      <div class="modal__block">
        <input
          class="modal__append"
          v-model="valueText"
          @keypress.enter="onAppendTag"
          type="text"
          placeholder="Enter tag"
          maxlength="10"
        />
        <div class="modal__tags" v-for="tag of tags" :key="tag">
          <label class="modal__label" :for="tag.name">
            <i class="modal__icon fas fa-tag" :style="{ color: tag.color }" />
            {{ tag.name }}
          </label>
          <input
            :id="tag.name"
            class="modal__input"
            @change="valueRadio = tag.name"
            type="radio"
            name="radio"
            :checked="tag.name === temporary.tag"
          />
          <label class="modal__radio" :for="tag.name"></label>
        </div>
      </div>
      <div class="modal__buttons">
        <button class="modal__close" @click="onResetModal">Close</button>
        <button class="modal__save" @click="changeTag(valueRadio)">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Modal',
  data: () => ({
    valueText: '',
    valueRadio: '',
  }),
  computed: {
    ...mapGetters(['temporary', 'tags']),
  },
  methods: {
    ...mapActions(['closeModal', 'addTag', 'changeTag']),
    onClickListener(event) {
      if (event.target.classList.contains('modal')) {
        this.onResetModal()
      }
    },
    onResetModal() {
      this.valueText = ''
      this.closeModal()
    },
    onAppendTag(event) {
      if (!this.valueText) return

      this.addTag(this.valueText)
      this.valueText = ''
      event.target.blur()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';

.modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-width: 320px;
  background: rgba(0, 0, 0, 0.3);

  &__container {
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 1rem;
    width: 90%;
    max-width: 350px;
    background: $whiteColor;
    transform: translate(-50%, -50%);
  }

  &__append {
    margin-bottom: 1rem;
    outline: none;
    border: 1px solid $blueColor;
    border-radius: 5px;
    padding: 0.5rem;
    width: 100%;
    color: $blackColor;

    &::placeholder {
      color: rgba(110, 110, 110, 0.493);
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  &__tags {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }

  &__label {
    display: flex;
    align-items: center;
    height: 100%;
    color: $blackColor;
    cursor: pointer;
  }

  &__icon {
    margin: 0.1rem;
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 1.1rem;
    transition: background 0.3s;
  }

  &__input {
    display: none;

    &:checked + label::before {
      position: absolute;
      left: -28px;
      top: -6px;
      width: 10px;
      height: 10px;
      background: $blueColor;
    }
  }

  &__radio {
    position: relative;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: -32px;
      top: -10px;
      border: 2px solid $blueColor;
      border-radius: 100%;
      width: 18px;
      height: 18px;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__close,
  &__save {
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    box-shadow: 0 0 3px 1px rgba(221, 221, 221, 1);
    cursor: pointer;
  }

  &__close {
    color: $blackColor;
    background: #eee;
  }

  &__save {
    margin-left: 1rem;
    color: $whiteColor;
    background: $blueColor;
  }
}
</style>
