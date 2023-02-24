
<script>
import { RouterLink, RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppLeftSide from './components/AppLeftSide.vue';
export default {
  components: {
    AppHeader
  },
  methods: {
    toggleTheme() {
      toggleColorMode();
    }
  }
}

function toggleColorMode() {
  const defaultTheme = 'light';
  const currentTheme = document.documentElement.getAttribute('data-theme') || defaultTheme;
  const targetTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', targetTheme);
  localStorage.setItem('theme', targetTheme);
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
    <!-- <div class="wrapper">
      <nav> -->
        <button @click="toggleTheme">Toggle Theme</button>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cv">CV</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->


  <RouterView />
</template>


<style scoped>

</style>
