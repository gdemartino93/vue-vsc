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
        <a href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fgdemartino93">
            <font-awesome-icon icon="fa-solid fa-star" class="starGitHub" />
        </a>
        <RouterLink to="/">
            <font-awesome-icon icon="fa-solid fa-house" />
        </RouterLink>
        <RouterLink to="/about">
            <font-awesome-icon icon="fa-solid fa-address-card" />
        </RouterLink>
        <RouterLink to="/cv">
            <font-awesome-icon icon="fa-solid fa-file" />
        </RouterLink>
        <div class="social-contact d-flex flex-column gap-2 my-5 flex-grow-1">
            <font-awesome-icon icon="fa-brands fa-github" />
            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
            <font-awesome-icon icon="fa-solid fa-envelope" />
        </div>
        <div class="dark-mode my-3"> 
            <font-awesome-icon icon="fa-solid fa-moon" @click="toggleColorMode()" v-if="temaRichiesto == 'light'"/>
            <font-awesome-icon icon="fa-solid fa-lightbulb" @click="toggleColorMode()" v-else />
        </div>

    </div>
</template>

<font-awesome-icon icon="fa-solid fa-file" />

<style lang="scss" scoped>
.router-link-active {
    color: white;
}
.dark-mode{
    cursor: pointer;
    &:hover{
        color: yellow;
    }
}
.starGitHub{
    margin-bottom: 20px;
    &:hover{
        color: yellow;
    }
}
</style>