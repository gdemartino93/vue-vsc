<template>
  <section class="main-code padding-lg">
    <div class="col-10 col-md-8 col-lg-10 d-flex flex-column justify-content-center mx-auto">
      <h3 class="text-center fw-bold fs-3 mb-4">ChatGPT:</h3>
      <p></p>
      <div class="col-4">
        <form action="" method="post" @submit.prevent="getReply">
          <input class="form-control" type="text" placeholder="Default input" aria-label="default input example" v-model="message">
          <button class="btn btn-success" type="submit">Invia</button>
        </form>
      </div>
      <div v-for="(item, index) in frasi" :key="index" class="d-flex flex-column">
        <span class="domanda">{{ item[0].messaggio }}</span>
        <span class="risposta">{{ item[1].risposta }}</span>
      </div>
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
      OPENAI_API_KEY: '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',
    };
  },
  methods: {
    getReply() {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.OPENAI_API_KEY
      };
      const data = {
        'model': 'gpt-3.5-turbo',
        'messages': [{'role': 'user', 'content': this.message}],
        'temperature': 0.7
      };
      axios.post('https://api.openai.com/v1/chat/completions', data, { headers })
        .then(response => {
          this.risposta = response.data.choices[0].message.content;
          this.frasi = [...this.frasi, [{"messaggio" : this.message},{"risposta": this.risposta} ]];
          this.message = "";
        })
        .catch(error => {
          console.error(error);
        });
    }
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
  .domanda{
    padding: 10px;
    background: green;
    border-radius: 10px;
    color: white;
    width: 30%;
    align-self: flex-start;
    text-align: center;
  }
  .risposta{
    padding: 10px;
    background: cornflowerblue;
    border-radius: 10px;
    color: white;
    width: 30%;
    align-self: flex-end;
    text-align: center;
  }
  </style>