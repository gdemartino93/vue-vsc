<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<template>
    <div class="side-bar d-flex flex-column align-items-center py-3 gap-2">
        <RouterLink to="/">
            <font-awesome-icon icon="fa-solid fa-house" />
        </RouterLink>
        <RouterLink to="/about">
            <font-awesome-icon icon="fa-solid fa-address-card" />
        </RouterLink>
        <RouterLink to="/cv">
            <font-awesome-icon icon="fa-solid fa-file" />
        </RouterLink>

    </div>
</template>

<font-awesome-icon icon="fa-solid fa-file" />

<style lang="scss" scoped>
.router-link-active {
    color: white;
}
</style>