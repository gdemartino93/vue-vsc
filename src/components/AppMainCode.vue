<template>
  <section class="main-code padding-lg">
    <article class="col-12 d-flex flex-wrap">
      <div class="col-12 col-lg-6">
        <p class="typewriter fw-bold fs-2"></p>
      </div>
      <div class="image-home col-12 col-lg-6 d-flex mx-auto animate__animated animate__fadeIn my-4 my-lg-0" v-if="store.scritturaTerminata && isMounted">
        <img :src="codeImg" alt="developer-coding" class="mx-auto">
      </div>
      <Form v-if="store.scritturaTerminata && isMounted" />
      <div>     
      </div>
    </article> 
  </section>
</template>

<script>

import Typewriter from 'typewriter-effect/dist/core';
import {store} from '../store/store';
import codeImg from "@/assets/homepage.svg";
import Form from './Form.vue';
export default {
  components :{
    Form,
  },
  data() {
    return {
      store,
      codeImg : codeImg,
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
      delay: 10
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
.image-home{
  
    img{
      height: auto;
      width: 300px;
    }
}
</style>
