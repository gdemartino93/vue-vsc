<template>
    <section class="col-10 col-md-8 col-lg-6 mx-auto d-flex flex-column gap-5">
      <div class="form-container">
        <p class="my-2">Contattami:</p>
        <form class=" col-12 d-flex flex-column gap-3"  @submit.prevent="sendMail" ref="myForm">
          <div class="form-group">
            <input name="from_name" placeholder="Inserisci il tuo nome" type="text" :value="inputFieldReset" class="form-control" required>
          </div>
          <div class="form-group">
            <input name="email" placeholder="Inserisci la tua email" type="email" :value="inputFieldReset" class="form-control" required>
          </div>
          <div class="form-group">
            <input name="subject" placeholder="Oggetto" type="text" :value="inputFieldReset" class="form-control" required>
          </div>
          <div class="form-group">
            <textarea class="form-control" name="message" placeholder="Scrivi il tuo messaggio" type="text" :value="inputFieldReset" required></textarea>
          </div>
          <div class="form-group">
            <input class="btn btn-success" type="submit" name="send" />
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  import emailjs from 'emailjs-com';
  import { ref } from 'vue';
  
  export default {
    setup() {
      const myForm = ref(null);
      const inputFieldReset = ref(null);
  
      const sendMail = () => {
        emailjs
          .sendForm('service_lbok7ri', 'template_3f71fuy', myForm.value, 't8h9c8YN5mcCudxCH')
          .then(() => {
            alert('Messaggio Inviato!');
            inputFieldReset.value = '';
          })
          .catch((error) => {
            alert('Message not sent. Error:', error);
          });
      };
  
      return {
        sendMail,
        myForm,
        inputFieldReset,
      };
    },
  };
  </script>
  