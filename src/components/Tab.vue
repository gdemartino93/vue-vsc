<script>
import { store } from '../store/store';

    export default {
        data(){
            return{
                store,

            }
        }
    }
</script>

<template>
    <RouterLink  v-for="tab in store.pages" :to=tab.path key="tab.id">
        <article class="tab">
            <img :src="`/assets/${tab.img}`" :alt="tab.name">
            <span>{{ tab.name }}</span>
        </article>
    </RouterLink>
</template>


<style lang="scss" scoped>
.router-link-active {
    font-weight: bold;
   .tab{
    background: var(--color-bg-code);
   }
   
}
.tab{
    padding: 4px 30px;
    background: var(--color-bg-tab);
    color: var(--color-text-tab);
    height: 100%;
    display: flex;
    align-items: center;
    img{
        width: 20px;
        height: 20px;
    }
}
a{
    height: 100%;;
}
</style>