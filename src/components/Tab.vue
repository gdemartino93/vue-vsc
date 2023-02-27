<script>
import { store } from '../store/store';

    export default {
        data(){
            return{
                store,

            }
        },
        methods:{
            
        }
    }
</script>

<template>
    <RouterLink  v-for="tab in store.tabAperte" :to=tab.path key="tab.id">
        <article class="tab d-flex align-items-center">
            <img :src="`/assets/${tab.img}`" :alt="tab.name"  >
            <span>{{ tab.name }}</span>
                <span  class="delete">
                    <font-awesome-icon @click="store.closeTab(tab.id)" icon="fa-solid fa-xmark" />
                </span>
        </article>
    </RouterLink>
</template>


<style lang="scss" scoped>
.delete{
    position: absolute;
    right: 5px;
}
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
    position: relative;
    img{
        width: 20px;
        height: 20px;
    }
}
a{
    height: 100%;;
}
</style>