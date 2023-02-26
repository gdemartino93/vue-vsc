<script>
import { store } from '../../store/store';

export default {

  data() {
    return {
      store

    };
  },

  mounted() {
    
  }
};
</script>

<template>
  <section class="main-code padding-lg">
    <div class="col-10 col-md-8 col-lg-10 d-flex flex-column justify-content-center mx-auto">
        <h3 class="text-center fw-bold fs-3 mb-4">Parlo di me:</h3>
        <!-- parte testo -->
        <p class="">Mi chiamo Gianluca De Martino ed ho 29 anni. <br>
          La passione per l'informatica è nata quando ero ancora bambino. Infatti, nonostante la mia giovane età, ho un ricordo nitido del modem 56k e del relativo suono, ma anche dell'icona di Internet Explorer che doveva completare il giro del mondo per caricare la pagina.  <br>
          Mi piace programmare e rimanere sempre aggiornato su nuove tecnologie e qualcosa l'ho finalmente imparata, credo...🤷‍♂️ <br>
          Ogni volta che posso, mi diverto a sperimentare con le librerie e i framework più moderni di JavaScript, come React.js e Vue.js, ma non mi dispiace anche sperimentare con Laravel. <br>
          Inoltre sono orgolioso di dire che ho creato questo sito portfolio da zero ed oltre ad essere un modo per mettere in pratica le mie abilità spero che possa anche dimostrare le mie competenze e soprattutto la mia passione per questo mondo. <br>
          Il mio obiettivo è continuare a crescere come sviluppatore e contribuire alla realizzazione ed al mantenimento di progetti innovativi.
        </p>
      </div>
      <!-- fine parte testo -->
      <div class="col-10 col-md-8 col-lg-10 d-flex flex-column justify-content-center mx-auto">
        <h3>Front-End</h3>
          <div v-for="skill in store.skills" class="d-flex flex-wrap justify-content-around">
            <div v-for="skillFront in skill.frontEnd" class="box col-3">
                <h3>{{ skillFront.name }}</h3>
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
    padding-left: 300px !important;
  }
}

@media (min-width: 400px) and (max-width : 600px) {
  .padding-xs {
    padding-top: 60px !important;
    padding-left: 80px !important;
  }
}
.box{
  border: 1px solid grey;
  height: 80px;
}

</style>
