<script>
import AppHeader from './components/AppHeader.vue'
import AppLeftSide from './components/AppLeftSide.vue'
import AppMainCode from './components/AppMainCode.vue'
import AppNavigation from './components/AppNavigation.vue'
import AppLeftSideExpanded from './components/AppLeftSideExpanded.vue'

export default {
  components: {
    AppHeader,
    AppLeftSide,
    AppMainCode,
    AppNavigation,
    AppLeftSideExpanded,
  },
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
