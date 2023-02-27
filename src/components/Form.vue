   <template>
    <section class="" @submit.prevent="sendMail" >
      <div class="form-container">

        <form class="col-12 d-flex flex-column gap-3 mt-4" ref="myForm">
          <div class="form-group">
            <input name="from_name" placeholder="Inserisci il tuo nome" type="text" v-model="from_name" class="form-control input-contact" v-bind:required="true">
          </div>
          <div class="form-group">
            <input name="email" placeholder="Inserisci la tua email" type="email" v-model="email" class="form-control input-contact" v-bind:required="true">
          </div>
          <div class="form-group">
            <input name="subject" placeholder="Oggetto" type="text" v-model="subject" class="form-control input-contact" v-bind:required="true">
          </div>
          <div class="form-group">
            <textarea class="form-control input-contact" name="message" placeholder="Scrivi il tuo messaggio" type="text" v-model="message" v-bind:required="true" id="msg"></textarea>
          </div>
          <div class="form-group">
            <input class="btn btn-success" type="submit" name="send" />
          </div>
        </form>
      </div>
    </section>
  </template>
  <script>
  import { store } from '../store/store';
  import emailjs from 'emailjs-com';
  
  export default {
    data() {
      return {
        store,
        from_name: '',
        email: '',
        subject: '',
        message: '',
      }
    },
    methods: {
      sendMail() {
        emailjs
          .sendForm('service_lbok7ri', 'template_3f71fuy', this.$refs.myForm, 't8h9c8YN5mcCudxCH')
          .then(() => {
            alert('Messaggio Inviato!');
            this.from_name = '';
            this.email = '';
            this.subject = '';
            this.message = '';
          })
          .catch((error) => {
            alert('Messaggio non inviato. Errore:', error);
          });
      }
    }
  }
  </script>
  <style lang="scss" scoped>
  *{
  letter-spacing: 1px;
  }
  .testo{
    line-height: 40px;
    padding-left: 50px;
  }
  .input-contact{
    background: var(--color-bg-aside-expanded);
    color: var(--color-text);
    &:focus{
      background-color: var(--color-bg-aside-expanded);
      color:  var(--color-text);
    }
  }
  </style>