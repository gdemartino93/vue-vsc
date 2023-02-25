<script>
export default {
  data() {
    return {
      tema: "",
    //   dato che usiamo per gestire l'icona
      temaIcona: undefined,
    };
  },
  methods: {
    // controlliamo se esiste la chiave tema nello storage e ritorniamo il valore oppure ritorniamo light come valore predefinito per chi entra per la prima volta
    recuperaStorage() {
      if (localStorage.getItem("tema")) {
        return localStorage.getItem("tema");
      } else {
        return "light";
      }
    },
    // toggle tema
    cambiaTema() {
      if (localStorage.getItem("tema") === "light") {
        localStorage.setItem("tema", "dark");
        this.temaIcona = 0;
      } else {
        localStorage.setItem("tema", "light");
        this.temaIcona = 1;
      }
    //   recuperiamo l'esito dell'if e settiamo il tema della pagina
      this.tema = this.recuperaStorage();
      document.documentElement.setAttribute("data-theme", this.tema);
    },
  },
  mounted() {
    // al mounted recuperiamo quello che abbiamo nello storage e settiamo il tema
    this.tema = this.recuperaStorage();
    document.documentElement.setAttribute("data-theme", this.tema);
  },
};
</script>


<template>
    <div class="side-bar d-flex flex-column align-items-center py-5 gap-3">
        <RouterLink to="/">
            <font-awesome-icon icon="fa-solid fa-house" />
        </RouterLink>
        <RouterLink to="/about">
            <font-awesome-icon icon="fa-solid fa-address-card" />
        </RouterLink>
        <RouterLink to="/cv">
            <font-awesome-icon icon="fa-solid fa-file" />
        </RouterLink>
        <div class="social-contact d-flex flex-column gap-3 my-5 flex-grow-1">
            <font-awesome-icon icon="fa-brands fa-github" />
            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
            <font-awesome-icon icon="fa-solid fa-envelope" />
        </div>
        <a href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fgdemartino93">
            <font-awesome-icon icon="fa-solid fa-star" class="starGitHub" />
        </a>
        <div class="dark-mode">
            <font-awesome-icon icon="fa-solid fa-moon" @click="cambiaTema" v-if="temaIcona == 1" />
            <font-awesome-icon icon="fa-sol9id fa-lightbulb" @click="cambiaTema" v-else/>
        </div>

    </div>
</template>

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
   ma
    &:hover{
        color: yellow;
    }
}
</style>