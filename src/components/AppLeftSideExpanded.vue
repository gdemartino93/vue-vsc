<script>
import { store } from '../store/store'
import draggable from 'vuedraggable'

export default {
  components: {
    draggable,
  },
  data() {
    return {
      store,
      drag: false,
    }
  },
}
</script>
<template>
  <section class="expanded d-none d-lg-block">
    <h4 class="p-3">EXPLORER</h4>
    <ul class="d-flex flex-column gap-1 ps-4 mb-1">
      <span class="fw-bold">FILES</span>
      <RouterLink to="/">
        <li>
          <img src="/assets/html-icon.svg" alt="html-icon" />
          <span>Home</span>
        </li>
      </RouterLink>
      <!-- <RouterLink
        v-for="(page, index) in store.pages"
        :key="index"
        :to="page.path"
        @click="store.apriTab(page.id)"
      >
        <li>
          <img :src="`/assets/${page.img}`" :alt="page.name" />
          <span>{{ page.name }}</span>
        </li>
      </RouterLink> -->
    </ul>

    <draggable
      v-model="store.pages"
      v-bind="{
        animation: 200,
        disabled: false,
        ghostClass: 'ghost',
        group: {
          put: false,
          pull: 'clone',
          name: 'routes',
        },
      }"
      :component-data="{
        tag: 'ul',
        type: 'transition-group',
        name: !drag ? 'flip-list' : null,
      }"
      item-key="id"
      class="d-flex flex-column gap-1 ps-4"
      @end="drag = false"
      @start="drag = true"
    >
      <template #item="{ element: page }">
        <RouterLink :to="page.path" @click="store.apriTab(page.id)">
          <li>
            <img :src="`/assets/${page.img}`" :alt="page.name" />
            <span>{{ page.name }}</span>
          </li>
        </RouterLink>
      </template>
    </draggable>
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
  }
  img {
    width: 20px;
    height: 20px;
  }
}
</style>
