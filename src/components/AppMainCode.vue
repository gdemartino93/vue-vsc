<template>
  <section class="main-code padding-lg">
    <article class="col-12 d-flex flex-wrap">
      <div class="col-12 col-lg-6">
        <p class="typewriter fw-bold fs-2"></p>
      </div>
      <div class="image-home col-12  col-lg-6 d-flex mx-auto animate__animated animate__fadeIn my-4 my-lg-0" v-if="store.scritturaTerminata">
        <img :src="codeImg" alt="" class="img-fluid">
      </div>
      <form v-if="store.scritturaTerminata" action="" netlify class="flex-column col-12 col-md-8 col-lg-6 animate__animated animate__fadeIn my-4 my-lg-0">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-success">Send</button>
      </form>
      <div>
        
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
      width: 400px;
    }
}
</style>
