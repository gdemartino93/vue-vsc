
<script>
import { RouterLink, RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppLeftSide from './components/AppLeftSide.vue';
import AppMainCode from './components/AppMainCode.vue';
export default {
  components: {
    AppHeader,
    AppLeftSide,
    AppMainCode
  },
  methods: {

  }
}


</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <section class="d-flex">
      <AppLeftSide />
    
      <RouterView />

    </section>

  </main>

</template>


<style scoped>

</style>
