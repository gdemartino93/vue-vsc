<script>
export default {
    data(){
        return{
            tema : "light",
            temaRichiesto : "",
            iconaTema : undefined,
        }
    },
    methods : {
        toggleColorMode(){
            // recuperiamo il tema selezionato
            const temaCorrente = document.documentElement.getAttribute('data-theme');
            // toggle del tema
            // const temaRichiesto = temaCorrente === 'light' ? 'dark' : 'light';
            if (temaCorrente === 'light'){
                this.temaRichiesto = 'dark',
                this.iconaTema = 0
            }else{
                this.temaRichiesto = 'light',
                this.iconaTema = 1
            }
            document.documentElement.setAttribute('data-theme', this.temaRichiesto);
            // salviamo nello storage il valore di tema 
            localStorage.setItem('tema', this.temaRichiesto);
        }
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
        <span>
            <font-awesome-icon icon="fa-solid fa-moon" @click="toggleColorMode()" v-if="temaRichiesto == 'light'"/>
            <font-awesome-icon icon="fa-solid fa-lightbulb" @click="toggleColorMode()" v-else />
        </span>

    </div>
</template>

<font-awesome-icon icon="fa-solid fa-file" />

<style lang="scss" scoped>
.router-link-active {
    color: white;
}
span{
    cursor: pointer;
}
</style>