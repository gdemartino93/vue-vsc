<script>
import Tab from './Tab.vue';
    export default {
        components : {
            Tab
        }
        
    }
</script>

<template>
    <div class="navigation-bar d-flex align-items-center">
        <Tab />
    </div>
</template>



<style lang="scss" scoped>
.navigation-bar{
    width: calc(100% - 280px);
    height: 50px;
    background:var(--color-bg-aside-expanded);
    flex: 1;
    position: absolute;
    right: 0;
    gap: 10px;
}
</style>