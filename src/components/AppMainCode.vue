<template>
  <section class="main-code padding-lg">
    <article class="col-12 d-flex flex-wrap">
      <div class="col-12 col-lg-12">
        <p class="typewriter fw-bold fs-3">
          <!-- qui scrive il testo typewrite -->
        </p>
      </div>
      <!-- visibile -->
      <div class="col-10 col-md-8 col-lg-10 d-flex flex-column justify-content-center mx-auto animate__animated animate__fadeIn my-4 my-lg-5" v-if="store.scritturaTerminata && isMounted">

        <span class="fw-bold fs-3"> &lt;Benvenuto&gt;</span>
        <p class="testo">Benvenuti nel mio sito! <br>
           Sono Gianluca De Martino, uno sviluppatore web appassionato di tecnologia e informatica. <br>
           Qui potrete trovare informazioni su di me, i miei progetti e le mie competenze nel mondo della programmazione. <br>
           Sfogliate il mio portfolio e buona navigazione.
        </p>
        <span class="fw-bold fs-3"> &lt;/Benvenuto&gt;</span>
        <span class="fw-bold fs-3 mt-4"> &lt;Contattami&gt;</span>
        <p class="testo">Se hai domande o suggerimenti non esitare a contattarmi compilando il seguente form.</p>
        <span class="fw-bold fs-3"> &lt;/Contattami&gt;</span>
        <span class="fw-bold fs-3 mt-4"> &lt;Form&gt;</span>

        <Form class="contact-form col-10 col-md-8 col-lg-10 mx-auto d-flex flex-column gap-5 animate__animated animate__fadeIn " v-if="store.scritturaTerminata && isMounted" />
        <span class="fw-bold fs-3"> &lt;/Form&gt;</span>
      </div>
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
 
  mounted() {
    const target = document.querySelector('.typewriter');

    const typewriter = new Typewriter(target, {
      loop: false,
      delay: 0
    });

    typewriter
      .typeString(`Ciao Mondo! 👋🏻 <br>`)
      .pauseFor(400)
      .typeString("Sono Gianluca, <br> Web Developer. <br>")
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
*{
  letter-spacing: 1px;
}
.testo{
  line-height: 40px;
  padding-left: 50px;
}
.tag {
  color: var(--color-text-tag);
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
  padding-bottom: 20px;
}
</style>
