<template>
  <div class="container">
    <Header />
    <Dashboard />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Dashboard from '@/components/Dashboard'

export default {
  name: 'App',
  components: {
    Header,
    Dashboard,
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
  background: linear-gradient(rgb(47, 163, 163), rgb(58, 48, 143));
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
</style>
