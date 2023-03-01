<script>
import { store } from '../../store/store';

export default {

  data() {
    return {
      store, // Il componente "store" viene importato qui dal file store.js 
      isVisible : false // Aggiunge la proprietà "isVisible" al componente e la inizializza a false
    };
  },
};
</script>

<template>
  <section class="main-code padding-lg">
    <div class="col-10 col-md-8 col-lg-10 d-flex flex-column justify-content-center mx-auto">
      <!-- Qui viene mostrato un paragrafo con informazioni personali -->
      <p class="">...</p>
    </div>
    
    <!-- Qui viene mostrata la sezione Front-end -->
    <div class="col-10 col-md-8 col-lg-10 d-flex flex-column mx-auto">
      <h3 class="text-center mb-4 fw-bold fs-2 mt-3">Tecnologie Front-End</h3>
      
      <!-- Vengono mostrate le immagini delle tecnologie di front-end presenti nello store -->
      <div v-for="skill in store.skills" class="d-flex justify-content-between flex-wrap gap-5">
        <div v-for="skillFront in skill.frontEnd" class="box col-3 justify-content-center align-items-center">
          <img :src="`/assets/${skillFront.img}`" :alt="skillFront.name">
        </div>
      </div>
      
      <!-- Qui viene mostrata la sezione Back-end -->
      <h3 class="text-center my-4 fw-bold fs-2">Tecnologie Back-End</h3>
      
      <!-- Vengono mostrate le immagini delle tecnologie di back-end presenti nello store -->
      <div v-for="skill in store.skills" class="d-flex justify-content-between flex-wrap gap-5">
        <div v-for="skillBack in skill.backEnd"  class="box col-3 justify-content-center align-items-center">
          <img :src="`/assets/${skillBack.img}`" :alt="skillBack.name">
        </div>
      </div>
      
      <!-- Qui viene mostrata la sezione Strumenti utilizzati -->
      <h3 class="text-center my-4 fw-bold fs-2">Strumenti che utilizzo</h3>
      
      <!-- Vengono mostrate le immagini degli strumenti utilizzati presenti nello store -->
      <div v-for="skill in store.skills" class="d-flex justify-content-between flex-wrap gap-5 mb-5">
        <div v-for="strumenti in skill.strumentiUtilizzati"  class="box col-3 justify-content-center align-items-center">
          <img :src="`/assets/${strumenti.img}`" :alt="strumenti.name">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
*{
  letter-spacing: 1px;
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
    padding-left: 247px !important;
  }
}

@media (min-width: 400px) and (max-width : 600px) {
  .padding-xs {
    padding-top: 60px !important;
    padding-left: 80px !important;
  }
}
.box{
  display: flex;
  justify-content: centers;
  border: 1px solid cornflowerblue;
  height: 100px;
  &:hover{
    box-shadow: 5px 5px cadetblue;
    scale: 1.2;
  }
  img{
    width: 3rem;
  }
}

</style>
