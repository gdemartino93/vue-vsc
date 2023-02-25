
<script>
import { RouterLink, RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppLeftSide from './components/AppLeftSide.vue';
import AppLeftSideExpanded from './components/AppLeftSideExpanded.vue';
import AppNavigation from './components/AppNavigation.vue';
import AppMainCode from './components/AppMainCode.vue';
export default {
  components: {
    AppHeader,
    AppLeftSide,
    AppMainCode,
    AppLeftSideExpanded,
    AppNavigation
},
  methods: {

  }
}


</script>

<template>
  <header class="fixed-top">
    <AppHeader />
    <AppNavigation />
  </header>
  <main>
    <section class="d-flex">
      <AppLeftSide />
      <AppLeftSideExpanded />

      <RouterView />

    </section>

  </main>

</template>


<style scoped>

</style>
