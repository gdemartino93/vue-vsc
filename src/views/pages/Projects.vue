<script>
import { store } from '../../store/store';
import Project from '../../components/Project.vue' 

export default {
    components: {
      Project
      
    },
  data() {
    return {
      store,

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
      <h3 class="text-center fw-bold fs-3 mb-4">Progetti</h3>
      <div class="col-12 d-flex justify-content-around flex-wrap gap-3 mx-auto ">
      <Project v-for="project in store.projects" :project="project" />

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
