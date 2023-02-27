<script>
import { store } from '../../store/store';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  components : {
    PulseLoader
  },

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

  <section class="main-code padding-lg  text-center">
    <div v-if="isLoaded" class="loader"> <PulseLoader /></div>
    <div v-else>

      <h3 class="text-center fw-bold fs-3 mb-4">CV</h3>
      <a href="/assets/cv.pdf" class="btn btn-primary mb-4" download>Scarica il mio CV</a>
      <div class="col-10 mx-auto ">
        <img src="/assets/cv.png" alt="" class="img-fluid">
      </div>
      <a href="/assets/cv.pdf" class="btn btn-primary my-5" download>Scarica il mio CV</a>
    </div>

  </section>
</template>


<style lang="scss" scoped>
.loader{
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
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
  padding-left: 50px !important;
}

@media (min-width: 990px) {
  .padding-lg {
    padding-top: 100px !important;
    padding-left: 150px !important;
  }
}




</style>
