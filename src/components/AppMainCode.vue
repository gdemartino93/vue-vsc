<template>
  <section class="main-code padding-lg">
    <article class="col-12 d-flex flex-wrap">
      <div class="col-12 col-lg-6">
        <p class="typewriter fw-bold fs-2"></p>
      </div>
      <div class="image-home col-12  col-lg-6 d-flex mx-auto animate__animated animate__fadeIn my-4 my-lg-0" v-if="store.scritturaTerminata">
        <img :src="codeImg" alt="" class="img-fluid">
      </div>

    </article> 
  </section>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';
import {store} from '../store/store';
import codeImg from "@/assets/homepage.svg";
export default {
  data() {
    return {
      store,
      codeImg : codeImg
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
  // width: 200px;
  // height: 200px;
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
.image-home{
  width: 200px;
  height: 200px;
}
</style>
