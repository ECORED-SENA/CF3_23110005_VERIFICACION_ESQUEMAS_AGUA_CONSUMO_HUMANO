<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")

    p Este documento contiene toda la base que se debe tener en cuenta para que una planta de tratamiento de agua potable funcione al 100% , aclara los mantenimientos que existen y en qué momento y cómo realizarlos para la eficiencia de los procesos y sistemas que estén allí, así mismo, se identifica que con el buen funcionamiento de procesos y manejo por parte de operadores capacitados se podrá dar un buen uso y mejor vida útil a todos los equipos que están dispuestos en el sistema y en el laboratorio para realización de pruebas. 
    p Es de aclarar que todas las plantas no están diseñadas de la misma forma, ya que el diseño depende de las necesidades específicas en estas plantas, como se mencionó anteriormente se utilizan tratamientos químicos y biológicos. En el tratamiento químico está involucrado la desarenación, medición de caudal, dosificación de coagulante, mezcla rápida, floculación, sedimentación, filtración, cloración y acondicionamiento de pH; y el tratamiento biológico lleva desarenación, filtración, filtración en medios gruesos, filtración lenta en arena y cloración. Por todos estos procesos por los que pasa el agua que es tan importante recalcar la importancia de la operación y mantenimiento, debido que de ello depende el buen funcionamiento de los sistemas y su óptima utilización, aumentando la vida útil de equipos y en general de la planta.
    p Basado en lo anterior, a continuación, se presenta un esquema gráfico que los resume:

    .row.justify-content-center
      .col-lg-8
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
    .row.justify-content-center.mt-5
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
