<template>
  <div class="container">
    <Header />
    <Dashboard />
  </div>
  <Modal v-show="modal" />
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/Header'
import Dashboard from '@/components/Dashboard'
import Modal from '@/components/Modal'

export default {
  name: 'App',
  components: {
    Header,
    Dashboard,
    Modal,
  },
  computed: {
    ...mapGetters(['modal']),
  },
}
</script>

<style lang="scss">
@import '~normalize.css';
@import '@/variables.scss';

* {
  box-sizing: border-box;
}

body {
  font-family: 'Lato', 'Arial', 'Helvetica', sans-serif;
  background: linear-gradient(rgba(34, 193, 195, 1), rgba(253, 187, 45, 1));
}

#app {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-width: 320px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 1rem;
  width: 80%;
  min-height: 90%;
  max-width: 1440px;
  max-height: 90%;
  background: $whiteColor;
}

@media screen and (max-width: 768px) {
  body {
    font-size: 15px;
  }

  .container {
    width: 90%;
  }
}
</style>
