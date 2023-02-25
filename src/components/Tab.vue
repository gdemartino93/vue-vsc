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
    <RouterLink  v-for="tab in store.pages" :to=tab.path>
        <article class="tab">
            <img :src="`../src/assets/icons/${tab.img}`" alt="">
            <span>{{ tab.name }}</span>
        </article>
    </RouterLink>
</template>


<style lang="scss" scoped>
.router-link-active {
    font-weight: bold;
    background-color: red;
   
}
.tab{
    padding: 4px 30px;
    background: var(--color-bg-tab);
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