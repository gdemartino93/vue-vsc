<script>
import { defineComponent } from 'vue'
import { store } from '../store/store'

import draggable from 'vuedraggable'

export default defineComponent({
  name: 'Tab',
  components: {
    draggable,
  },
  data: () => ({
    store,
    drag: false,
    dragOptions: {
      animation: 200,
      group: 'routes',
      disabled: false,
      ghostClass: 'ghost',
    },
  }),
  methods: {
    isNotAlreadyExist(to, _from, dragEl, _event) {
      for (let i = 0; i < to.el.children.length; i++) {
        if (
          dragEl.getAttribute('href') ===
          to.el.children[i].getAttribute('data-path')
        ) {
          return false
        }
      }
      return true
    },
  },
})
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

  <draggable
    v-model="store.tabAperte"
    v-bind="{
      animation: 200,
      disabled: false,
      ghostClass: 'ghost',
      group: {
        pull: true,
        name: 'routes',
        put: isNotAlreadyExist,
      },
    }"
    :component-data="{
      tag: 'ul',
      type: 'transition-group',
      name: !drag ? 'flip-list' : null,
    }"
    item-key="id"
    class="d-flex"
    @end="drag = false"
    @start="drag = true"
  >
    <template #item="{ element: tab }">
      <li :data-path="tab.path" class="tab d-flex align-items-center">
        <!--  -->
        <RouterLink :to="tab.path" key="tab.id">
          <img :src="`/assets/${tab.img}`" :alt="tab.name" />
          <span>{{ tab.name }}</span>
        </RouterLink>
        <!-- Delete -->
        <span class="delete">
          <font-awesome-icon
            icon="fa-solid fa-xmark"
            @click="store.closeTab(tab.id)"
          />
        </span>
      </li>
    </template>
  </draggable>

  <!-- <div class="d-flex" v-for="(tab, index) in store.tabAperte" :key="index">
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
  </div> -->
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
