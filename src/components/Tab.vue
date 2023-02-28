<script>
import { store } from "../store/store";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {},
};
</script>

<template>

  <div class="d-flex">
    <article class="tab d-flex align-items-center">
      <RouterLink to="/">
        <img src="/assets/html-icon.svg" alt="home-icon" />
        <span>Home</span>
      </RouterLink>
    </article>
  </div>

  <div class="d-flex" v-for="(tab, index) in store.tabAperte" :key="index">
    <article class="tab d-flex align-items-center">
      <RouterLink :to="tab.path" key="tab.id">
        <img :src="`/assets/${tab.img}`" :alt="tab.name" />
        <span>{{ tab.name }}</span>
      </RouterLink>
      <span class="delete">
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          @click="store.closeTab(tab.id)"
        />
      </span>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.delete {
  position: absolute;
  right: 5px;
  cursor: pointer;
}
.router-link-active {
  font-weight: bold;
  .tab {
    background: var(--color-bg-code);
  }
}
.tab {
  padding: 4px 30px;
  background: var(--color-bg-tab);
  color: var(--color-text-tab);
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 1px;
  img {
    width: 20px;
    height: 20px;
  }
}
a {
  height: 100%;
}
</style>
