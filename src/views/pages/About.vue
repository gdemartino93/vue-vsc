<template>
  <section class="main-code padding-lg">
    <div class="col-10 col-md-8 col-lg-10 d-flex flex-column justify-content-center mx-auto">
      <h3 class="text-center fw-bold fs-3 mb-4">Parlo di me:</h3>
      <!-- parte testo -->
      <p>
        Sono Gianluca De Martino, uno sviluppatore specializzato nello sviluppo di applicazioni complesse con esperienza nei settori dell'energia e della logistica e transporti. <br>
        Nel settore della logistica, mi dedico alla digitalizzazione dei processi per ferrovie, porti e interporti, contribuendo all'ottimizzazione dei flussi operativi e all'integrazione tecnologica delle infrastrutture di trasporto. <br>

        Nel settore energetico, mi occupo di progetti dedicati al monitoraggio ambientale nei porti, sviluppando applicazioni che raccolgono e analizzano i dati sui parametri di inquinamento. Queste soluzioni permettono non solo di gestire le condizioni ambientali in tempo reale, ma anche di fornire al pubblico informazioni trasparenti e accessibili sulle condizioni ambientali di aree critiche, contribuendo a una maggiore consapevolezza e sostenibilità. <br>
        
        Lavoro con tecnologie come Angular per il frontend, C# con .NET per il backend, e RabbitMQ per la gestione dei messaggi, implementando architetture a microservizi per garantire scalabilità e efficienza. <br>
        Mi dedico costantemente all'apprendimento di nuove tecnologie. Il mio obiettivo è continuare a crescere come sviluppatore e contribuire attivamente a progetti che generano un impatto positivo nei settori in cui opero.
      </p>
    </div>
     <!-- sezione frontend -->
     <div class="col-10 col-md-8 col-lg-10 d-flex flex-column mx-auto">
      <h3 class="text-center mb-4 fw-bold fs-2 mt-3">Certificazioni</h3>
      <div v-for="cert in store.certifications" :alt="cert.name" class="box col-3 justify-content-center align-items-center">
        <a :href="cert.link" target="_blank" rel="noopener noreferrer">
          <img :src="`/assets/${cert.img}`" :alt="cert.name">
        </a>
      </div>

        <h3 class="text-center mb-4 fw-bold fs-2 mt-3">Tecnologie Front-End</h3>
          <div v-for="skill in store.skills" class="d-flex justify-content-between flex-wrap gap-5">
            <div v-for="skillFront in skill.frontEnd" class="box col-3 justify-content-center align-items-center">
                <img :src="`/assets/${skillFront.img}`" :alt="skillFront.name">
            </div>
          </div>
          <!-- sezione backend -->
          <h3 class="text-center my-4 fw-bold fs-2">Tecnologie Back-End</h3>
          <div v-for="skill in store.skills" class="d-flex justify-content-between flex-wrap gap-5">
            <div v-for="skillBack in skill.backEnd"  class="box col-3 justify-content-center align-items-center">
                <img :src="`/assets/${skillBack.img}`" :alt="skillBack.name">
            </div>
          </div>
          <!-- sezione strumenti utilizzati -->
          <h3 class="text-center my-4 fw-bold fs-2">Strumenti che utilizzo</h3>
          <div v-for="skill in store.skills" class="d-flex justify-content-between flex-wrap gap-5 mb-5">
            <div v-for="strumenti in skill.strumentiUtilizzati"  class="box col-3 justify-content-center align-items-center">
                <img :src="`/assets/${strumenti.img}`" :alt="strumenti.name">
            </div>
          </div>
      </div>
  </section>
</template>

<script>
import { store } from '../../store/store';
export default {
  data() {
    return {
      store,
      dataNascita: '07/12/1993',
      isVisible: false
    };
  },
  computed: {
    eta() {
      const dataCorrente = new Date();
      const dataNascitaDate = new Date(this.dataNascita);

      const differenzaAnni = dataCorrente.getFullYear() - dataNascitaDate.getFullYear();
      if (
        dataCorrente.getMonth() < dataNascitaDate.getMonth() ||
        (dataCorrente.getMonth() === dataNascitaDate.getMonth() && dataCorrente.getDate() < dataNascitaDate.getDate())
      ) {
        return differenzaAnni - 1;
      } else {
        return differenzaAnni;
      }
    }
  }
};
</script>
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
    width: 5rem;
  }
}

</style>
