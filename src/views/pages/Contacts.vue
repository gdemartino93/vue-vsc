<script>
import { store } from '../../store/store';
import Form from '../../components/Form.vue';

export default {
    components: {
        Form
    },
  data() {
    return {
      store,
      isVisible : false

    };
  },
  methods :{
  
  },

  mounted() {
    
  }
};
</script>

<template>
  <section class="main-code padding-lg">
    <div class="col-10 col-md-8 col-lg-10 d-flex flex-column justify-content-center mx-auto">
        <h3 class="text-center fw-bold fs-3 mb-4">Contattami</h3>
        <article>
            <span class="tag fw-bold fs-3">
                .contatti{ <br>
            </span>
            <div class="contact-text">
                <ul class="fs-5">
                    <li>Website : <a href="www.gianlucademartino.it">www.gianlucademartino.it;</a></li>
                    <li>Email : <a href="mailto:g.demartino9393@gmail.com">g.demartino9393@gmail.com;</a></li>
                    <li>Github : <a href="https://github.com/gdemartino93">gdemartino93;</a></li>
                    <li>Linkedin : <a href="https://www.linkedin.com/in/gianluca-demartino/">gianluca-demartino;</a></li>
                </ul>
            </div>

            <br>
            <span class="tag fw-bold fs-3 form-tag">
                .form{ <br>
            </span>
            <ul class="form-text fs-5">
                <li>Oppure: compila il form e ti ricontatterò il prima possibile;</li>
            </ul>
            <span class="tag fw-bold fs-3 form-tag">
             } <br>
            </span>
            <span class="tag fw-bold fs-3">
            }
            </span>
        </article>
        <Form class="contact-form col-10 col-md-8 col-lg-10 mx-auto d-flex flex-column gap-5 pb-5" />
      </div>



     
  </section>
</template>


<style lang="scss" scoped>
*{
  letter-spacing: 1px;
}
.tag{
    color: var(--color-text-tag);
}
.form-tag{
    padding-left: 70px;
}
.form-text{
    padding-left: 110px;
    color: var(--color-text);
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
    padding-left: 250px !important;
  }
}



</style>
