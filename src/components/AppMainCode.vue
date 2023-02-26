<template>
  <section class="main-code padding-lg">
    <article class="col-12 d-flex flex-wrap">
      <div class="col-12 col-lg-6">
        <p class="typewriter fw-bold fs-2"></p>
      </div>
      <div class="image-home col-12  col-lg-6 d-flex mx-auto animate__animated animate__fadeIn my-4 my-lg-0" v-if="store.scritturaTerminata">
        <img :src="codeImg" alt="" class="img-fluid">
      </div>
      <Form />
      <!-- <form accept-charset="UTF-8" action="https://www.formbackend.com/f/94a607a0d38bcb96" method="POST">
            <div class="form-outline mb-4">
              <input type="text" id="form4Example1" class="form-control" name="email"/>
              <label class="form-label" for="form4Example1">Name</label>
            </div>

            <div class="form-outline mb-4">
              <input type="email" id="form4Example2" class="form-control" name="email"/>
              <label class="form-label" for="form4Example2">Email address</label>
            </div>

            <div class="form-outline mb-4">
              <textarea class="form-control" id="form4Example3" rows="4"></textarea>
              <label class="form-label" for="form4Example3">Message</label>
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
    </form> -->
      <!-- <form v-if="store.scritturaTerminata" action="" method="POST" name="contact" class="flex-column col-12 col-md-8 col-lg-6 animate__animated animate__fadeIn my-4 my-lg-0" netlify>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
          <input class="form-control" id="exampleFormControlTextarea1" rows="3" type="text" name="name" />
        </div>
        <button type="submit" class="btn btn-success">Send</button>
      </form> -->
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
