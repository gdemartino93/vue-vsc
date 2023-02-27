<script>
import Tab from './Tab.vue';
    export default {
        components : {
            Tab
        }
        
    }
</script>

<template>
    <div class="navigation-bar d-flex align-items-center d-none d-lg-block d-lg-flex">
        <Tab />
    </div>
</template>



<style lang="scss" scoped>
.navigation-bar{
    width: calc(100% - 250px);
    height: 40px;
    background:var(--color-bg-aside-expanded);
    position: absolute;
    right: 0;

}
</style>