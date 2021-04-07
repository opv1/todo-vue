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

* {
  box-sizing: border-box;
}

body {
  font-family: 'Lato', 'Arial', 'Helvetica', sans-serif;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-width: 320px;
  background:
    linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(253, 187, 45, 1) 100%
    );
}

.container {
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 1rem;
  width: 80%;
  height: 90%;
  max-width: 1440px;
  background: #fff;
}

@media screen and (max-width: 768px) {
  body {
    font-size: 14px;
  }

  .container {
    width: 90%;
  }
}
</style>
