
<script>
import { RouterLink, RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppLeftSide from './components/AppLeftSide.vue';
import AppLeftSideExpanded from './components/AppLeftSideExpanded.vue';
import AppMainCode from './components/AppMainCode.vue';
export default {
  components: {
    AppHeader,
    AppLeftSide,
    AppMainCode,
    AppLeftSideExpanded
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
      <AppLeftSideExpanded />
      <RouterView />

    </section>

  </main>

</template>


<style scoped>

</style>
