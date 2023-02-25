<template>
  <section class="main-code padding-lg">
    <article>
      <p class="typewriter fw-bold fs-2"></p>
      <ul class="menu"></ul>
   
    </article> 
  </section>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';
import {store} from '../store/store';
export default {
  data() {
    return {
      store
    };
  },
  mounted() {
    const target = document.querySelector('.typewriter');

    const typewriter = new Typewriter(target, {
      loop: false,
      delay: 15
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
      });
  }
};
</script>

<style lang="scss" scoped>
.box{
  width: 200px;
  height: 200px;
  background-color: red;
}
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
  padding-left: 80px !important;
}

@media (min-width: 1200px) {
  .padding-lg {
    padding-top: 100px !important;
    padding-left: 300px !important;
  }
}

@media (min-width: 400px) {
  .padding-xs {
    padding-top: 60px !important;
    padding-left: 80px !important;
  }
}
</style>
