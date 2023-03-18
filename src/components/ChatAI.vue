<template>
  <section class="main-code padding-lg">
    <div class="col-10 col-md-8 col-lg-10 d-flex flex-column justify-content-center mx-auto">
      <h3 class="text-center fw-bold fs-3 mb-4">ChatGPT:</h3>
      <p>ChatGPT è diventato uno strumento indispensabile per gli sviluppatori. <br>
      Questo modello di AI, può aiutare gli sviluppatori a risparmiare tempo e sforzi preziosi durante lo sviluppo di applicazioni. Ad esempio, ChatGPT può essere utilizzato per generare documentazione, messaggi di errore e avvisi, messaggi di feedback degli utenti e molto altro. <br> Inoltre, gli sviluppatori possono utilizzare ChatGPT per automatizzare il processo di testing e revisionare il codice. <br> In breve, ChatGPT rappresenta uno strumento che può fare la differenza nella vita di ogni sviluppatore, permettendo loro di concentrarsi sui compiti più importanti e di migliorare la qualità del loro lavoro. <br>
      </p>

      <div v-for="(item, index) in frasi" :key="index" class="d-flex flex-column my-3 col-12 gap-4" >
        <div class="box-domanda col-12 col-md-4 col-lg-5 animate__animated animate__bounceInLeft" v-if="item[0].messaggio">
          <span class="domanda" >{{ item[0].messaggio }}</span>
        </div>
        <div class=" box-risposta align-self-end col-12 col-md-4 col-lg-5 animate__animated  animate__backInRight" v-if="item[1].risposta">
          <span class="risposta">{{ item[1].risposta }}</span>
        </div>
      </div>
      <span class="fs-2 text-danger align-self-end animate__animated  animate__flash" v-if="isWriting">Sta scrivendo</span>

      <div class="col-12">
        <form action="" method="post" @submit.prevent="getReply" class="my-5">
          <input class="form-control" type="text" placeholder="Chiedimi tutto quello che vuoi" aria-label="Chiedimi tutto quello che vuoi" v-model="message">
          <button class="btn btn-success my-2" type="submit" v-if="message.length > 0">Invia</button>
        </form>
      </div>

      <span class="italic" v-if="!isWorking">
  Se non dovesse funzionare, molto probabilmente sarà passato del tempo e io mi sarò dimenticato di aggiornare la key, quindi se hai 10 secondi, mandami un messaggio tramite il form in Home Page, così provvedo a sistemare il tutto.
</span>
<div ref="lastMessage" class="my-5"></div>
    </div>
    
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: '',
      frasi:[],
      risposta: '',
      isWorking : false,
      isWriting : false
    };
  },
  methods: {
    async getReply() {
  this.isWriting = true;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + import.meta.env.VITE_API_KEY
  };
  const data = {
    'model': 'gpt-3.5-turbo',
    'messages': [{'role': 'user', 'content': this.message}],
    'temperature': 0.7
  };
  this.frasi = [...this.frasi, [{"messaggio" : this.message},{"risposta": ""} ]];

  // svuota l'input dell'utente
  this.message = "";

  await axios.post('https://api.openai.com/v1/chat/completions', data, { headers })
    .then(response => {
      this.risposta = response.data.choices[0].message.content;
      this.frasi = [...this.frasi, [{}, {"risposta": this.risposta}]];
      // set iswriting to hide is writing msg
      this.isWriting = false;
      // set isworking to hide disclaimer
      this.isWorking = true;

      this.$refs.lastMessage.scrollIntoView({ behavior: 'smooth', block: 'end' })
    })
    .catch(error => {
      console.error(error);
      this.isWorking = false;
    });
}
},
  mounted(){
  }
}
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
      width: 3rem;
    }
  }


  .italic{
    font-style: italic;
    text-decoration: underline;
  }
  .box-domanda{
    padding: 10px;
    background-color: green;
    border-radius: 15px;
      .domanda{
        color: white;
    }
  }
  .box-risposta{
  padding: 10px;
  background-color: cornflowerblue;
  border-radius: 15px;
      .risposta{
      color: white;
      
    }
  }
  </style>