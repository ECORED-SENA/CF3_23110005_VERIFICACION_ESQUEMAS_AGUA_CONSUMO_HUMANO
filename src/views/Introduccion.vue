<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="fade")
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="zoom-out") Bienvenidos a este componente formativo y como primera instancia, vamos a ver el siguiente video que nos dará una introducción general al tema para luego empezar a desarrollar cada uno de los contenidos:

    .row.justify-content-center.bgvideos.mt-5(data-aos="fade-up-right")
      .col-lg-10.p-5.fff
        figure.w
          .video(data-aos="zoom-out-up")
            iframe(width="560" height="215" src="https://www.youtube.com/embed/wDW-DVuZv4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
