<script>
import { store } from "../store/store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <section class="expanded d-none d-lg-block">
    <h4 class="p-3">EXPLORER</h4>
    <ul class="d-flex flex-column gap-1">
      <span class="fw-bold">FILES</span>
      <!-- Link alla homepage -->
      <RouterLink to="/">
        <li>
          <img src="/assets/html-icon.svg" alt="html-icon" />
          <span>Home</span>
        </li>
      </RouterLink>
      <!-- Link alle pagine, iterando l'array pages dello store -->
      <!-- // Metodo che apre una nuova tab nella GUI -->
      <RouterLink
        v-for="(page, index) in store.pages"
        :key="index"
        :to="page.path"
        @click="store.apriTab(page.id)" 
      >
        <li>
          <img :src="`/assets/${page.img}`" :alt="page.name" />
          <span>{{ page.name }}</span>
        </li>
      </RouterLink>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.router-link-active {
  font-weight: bold;
}
.expanded {
  width: 200px;
  background: var(--color-bg-aside-expanded);
  color: var(--color-text);
  margin-left: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 100%;
}
li {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  &:hover {
    background: var(--hover-bg-bar);
    color: var(--color-text);
  }
  img {
    width: 20px;
    height: 20px;
  }
}
</style>
