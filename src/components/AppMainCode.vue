
<script>

    export default {
      data(){
        return{
          OSect :"<section>",
            CSect :"</section>",
          Oh2 : "<h2>",
          Ch2 : "</h2>",
          Op : "<p>",
          Cp : "</p>",
        }
      }

}
</script>


<template>
    <section class="main-code padding-lg">
      <span class="tag">{{ OSect }}</span><br>

          &nbsp; <span class="tag">{{ Oh2 }}</span>
          <span class="fs-1 fw-bold">Ciao Mondo! 👋🏻</span>
          <span class="tag">{{ Ch2 }}</span> <br>

          &nbsp <span class="tag">{{ Op }}</span>
          <span class="">Sono <span class="fw-bold">Gianluca De Martino </span> - Jr. Full Stack Web Developer </span>
          <span class="tag">{{ Cp }}</span> 





<br><span class="tag">{{ CSect }}</span>
    </section>
</template>


<style lang="scss" scoped>
.tag{
  color: blue;
}
// resettare regole di default css
p{
  margin: 0 !important;
}
.riga{
  display: flex;
  align-items: center;
}
.main-code{
  background-color: var(--color-bg-code);
  color: var(--color-text);
  flex: 1;
  min-height: 100vh;
}
.padding-lg {
  padding-top: 60px !important;
  padding-left: 80px !important;
}



@media (min-width: 1200px) {
  .padding-lg {
    padding-top: 100px !important;
    padding-left: 300px !important;
  }
}
@media (min-width: 400px) {
  .padding-xs {
    padding-top: 60px !important;
    padding-left: 80px !important;
  }
}
</style>