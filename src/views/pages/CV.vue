<script>
import { store } from '../../store/store';

export default {

  data() {
    return {
      store,
      isLoaded : true,

    };
  },
  methods :{

  
  },

  mounted() {
    setTimeout(() => {
  this.isLoaded = false;
}, 2000)

  }
};
</script>

<template>

  <section class="main-code padding-lg container text-center">
    <h1 v-if="isLoaded">LOADING</h1>
    <div v-else>
      <h3 class="text-center fw-bold fs-3 mb-4">CV</h3>
      <a href="/assets/cv.pdf" class="btn btn-primary" download>Scarica il mio CV</a>
      <div class="col-10 mx-auto ">
        <img src="/assets/cv.png" alt="" class="img-fluid">
      </div>
      <a href="/assets/cv.pdf" class="btn btn-primary my-5" download>Scarica il mio CV</a>
    </div>

  </section>
</template>


<style lang="scss" scoped>

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
    padding-left: 160px !important;
  }
}



</style>
