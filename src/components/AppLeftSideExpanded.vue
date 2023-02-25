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
    <section class="expanded">
        <h4 class="p-3">EXPLORER</h4>
        <ul class="d-flex flex-column gap-1">
            <span class="fw-bold">FILES</span>
            <RouterLink  v-for="page in store.pages" :to=page.path>
                <li>
                    <img :src="`../src/assets/icons/${page.img}`" alt="">
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
.expanded{
    width: 230px;
    background: var(--color-bg-aside-expanded);
    color: var(--color-text);
}
li{
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    &:hover{
        background: var(--hover-bg-bar);
    }
    img{
        width: 20px;
        height: 20px;
    }
}
</style>