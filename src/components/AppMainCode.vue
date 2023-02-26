<template>
  <section class="main-code padding-lg">
    <article class="col-12 d-flex flex-wrap">
      <div class="col-12 col-lg-12">
        <p class="typewriter fw-bold fs-3"></p>
      </div>
      <!-- visibile -->
      <div class="col-10 col-md-8 col-lg-10 d-flex flex-column justify-content-center mx-auto animate__animated animate__fadeIn my-4 my-lg-5" v-if="store.scritturaTerminata && isMounted">
        <h3 class="text-center fw-bold fs-3 mb-4">Qualcosa su di me:</h3>
        <p class="">Mi chiamo Gianluca De Martino ed ho 29 anni. <br>
          La passione per l'informatica è nata quando ero ancora bambino. Infatti, nonostante la mia giovane età, ho un ricordo nitido del modem 56k e del relativo suono, ma anche dell'icona di Internet Explorer che doveva completare il giro del mondo per caricare la pagina.  <br>
          Mi piace programmare e rimanere sempre aggiornato su nuove tecnologie e qualcosa l'ho finalmente imparata, credo...🤷‍♂️ <br>
          Ogni volta che posso, mi diverto a sperimentare con le librerie e i framework più moderni di JavaScript, come React.js e Vue.js, ma non mi dispiace anche sperimentare con Laravel. <br>
          Inoltre sono orgolioso di dire che ho creato questo sito portfolio da zero ed oltre ad essere un modo per mettere in pratica le mie abilità spero che possa anche dimostrare le mie competenze e soprattutto la mia passione per questo mondo. <br>
          Il mio obiettivo è continuare a crescere come sviluppatore e contribuire alla realizzazione ed al mantenimento di progetti innovativi. <br>
          Buona navigazione.
        </p>
      </div>
      <Form class="contact-form" v-if="store.scritturaTerminata && isMounted" />

    </article> 
  </section>
</template>

<script>

import Typewriter from 'typewriter-effect/dist/core';
import {store} from '../store/store';
import Form from './Form.vue';
export default {
  components :{
    Form,
  },
  data() {
    return {
      store,
      isMounted: false 
    };
  },
  created() {
    // inizializza il componente
  },
  mounted() {
    const target = document.querySelector('.typewriter');

    const typewriter = new Typewriter(target, {
      loop: false,
      delay: 0
    });

    typewriter
      .typeString(`Ciao Mondo! 👋🏻 <br>`)
      .pauseFor(400)
      .typeString("Sono Gianluca De Martino, <br> Web Developer. <br>")
      .deleteChars(15)
      .typeString('Jr. Full Stack Web Developer.')
      .start()
      .callFunction(() => {
        store.scritturaTerminata = true; // setta scritturaTerminata a true quando la scrittura è terminata 
        this.isMounted = true; // setta isMounted a true quando il componente è stato montato
      });
  }
};
</script>

<style lang="scss" scoped>

.tag {
  color: blue;
}

p {
  margin: 0 !important;
}

.riga {
  display: flex;
  align-items: center;
}

.main-code {
  background-color: var(--color-bg-code);
  color: var(--color-text);
  flex: 1;
  min-height: 100vh;

}

.padding-lg {
  padding-top: 60px !important;
  padding-left: 60px !important;
}

@media (min-width: 990px) {
  .padding-lg {
    padding-top: 100px !important;
    padding-left: 300px !important;
  }
}

@media (min-width: 400px) and (max-width : 600px) {
  .padding-xs {
    padding-top: 60px !important;
    padding-left: 80px !important;
  }
}
.contact-form{
  padding-bottom: 70px;
}
</style>
