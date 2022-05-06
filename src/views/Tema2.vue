<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Identificación de anomalías e intervención según procedimientos técnicos
    .row.justify-content-center(data-aos="fade-up-right")
      .col-lg-8.mt-4
        p Dentro de las anomalías que se pueden presentar en el funcionamiento de una planta está el hecho de que no se realicen los mantenimientos preventivos, ya que de este se componen todas las actividades ordenadas en el tiempo establecido, identificando también los recursos que se necesitan para desarrollar dichas actividades; todo esto con el propósito de prevenir daños a equipos. Por este motivo, al prevenir accidentes realizando los mantenimientos preventivos se optimiza la eficiencia de los equipos en las instalaciones de la planta de tratamiento; también según las circunstancias en las que sucedan en la planta se presentarán imprevistos en donde se deberán ejecutar los mantenimientos correctivos, que son aquellos que consisten en una reparación inmediata y oportuna del daño que se presente en las instalaciones y equipos. Por ser algo inesperado es un tipo de mantenimiento que no puede ser programado, por lo que es importante disponer del recurso humano y físico para atender dichas eventualidades en el momento que sea, ya que el funcionamiento de la planta no puede, ni debe parar en ningún momento. 
        .row.bgtexto.p-4
          .col-lg-2.zzz
            img(src='@/assets/curso/tema2/img2.svg', alt='Texto que describa la imagen')

          .col-lg-10
            p El deterioro de los componentes y accesorios de un sistema de tratamiento de agua depende principalmente de las labores de funcionamiento que se ejecuten allí, es por eso que el mantenimiento preventivo y predictivo siempre se dirige a garantizar el buen funcionamiento del sistema, siendo continuo y óptimo para los equipos e instalaciones de la planta de tratamiento de agua.
      .col-lg-4
        img(src='@/assets/curso/tema2/img1.png', alt='Texto que describa la imagen')
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-up")
      h2 2.1. Manuales de operación y mantenimiento técnico    
    p Para el manejo de la información y análisis de los datos se dispone del Reglamento técnico del sector de agua potable y saneamiento RAS 2000. Pero ¿qué hace este reglamento? Pues bien, dispone de fórmulas y variables para obtener resultados de los procesos en los que se debe calcular y registrar datos dentro de la planta de tratamiento de agua potable. Algunos de estos cálculos se pueden usar para:
    
    .row.bgmm.mt-5
      .col-lg-12.px-lg-5.px-4    
        .row.justify-content-center.bg3(data-aos="fade-up-right")
          .col-lg-10
            ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/img3.svg', alt='Texto que describa la imagen')

              .tarjeta.color-acento-botones.p-3(x="2%" y="42%" numero="")
                p <strong>1. Captación:</strong>  se contempla una inspección preliminar, operación, monitoreo y algunas actividades de mantenimiento

              .tarjeta.color-acento-botones.p-3(x="37%" y="42%" numero="")
                p <strong>2. Coagulación:</strong>  este proceso se realiza dentro de la planta, buscando eliminar todas las impurezas.

              .tarjeta.color-acento-botones.p-3(x="73%" y="4%" numero="")
                p <strong>3. Floculador:</strong>   puede ser mecánico o hidráulico, es el encargado de realizar la agitación suave y pesada y así formar flóculos para una óptima sedimentación, se realiza inspección, mantenimientos y monitoreo.
              .tarjeta.color-acento-botones.p-3(x="73%" y="95%" numero="")
                p <strong>4. Sedimentación:</strong>    es el proceso donde se remueve el material en suspensión por gravedad.
              .tarjeta.color-acento-botones.p-3(x="38%" y="95%" numero="")
                p <strong>5. Filtración:</strong>     se pasa por sustancias porosas que ayuden a retener o remover dichas impurezas, revisión de tanques de almacenamiento y los muestreos que consisten en revisar una porción de agua en el laboratorio y verificar que cumpla los estándares requeridos por la ley.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-up")
      h2 2.2. Técnicas de manejo de información y análisis de los datos registrados 
    .row.bgmm(data-aos="fade-up-right")
      .col-lg-12.px-lg-5.px-4   
        .row.justify-content-center.bgtema2
          .col-lg-10.mb-5
            .bloque-texto-g.color-primario.p-5.p-sm-4.p-md-5
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/tema2/ico.svg')})`}"
              )
              .bloque-texto-g__texto.p-5
                p.mb-0 Para el manejo de la información y análisis de los datos se dispone del Reglamento técnico del sector de agua potable y saneamiento RAS 2000. Pero ¿qué hace este reglamento? Pues bien, dispone de fórmulas y variables para obtener resultados de los procesos en los que se debe calcular y registrar datos dentro de la planta de tratamiento de agua potable. Algunos de estos cálculos se pueden usar para:
            img.mb2.mt-5(src='@/assets/curso/tema2/gru.svg', alt='Texto que describa la imagen')
            

    .row.justify-content-center.mt-5(data-aos="fade-up-right")
      .col-lg-8.mt-4
        p Para la determinación de los análisis de la calidad del agua como lo son las características físicas, químicas y microbiológicas 	de la planta de tratamiento de agua potable se debe basar y llevar con los límites permisibles que da la Resolución 2115 de 2007. 
        p.bgtexto.p-4 Esta Resolución no establece unos valores aceptables para los parámetros: turbiedad, color aparente, conductividad, nitritos, nitratos, alcalinidad, cloruros, dureza total, hierro total, sulfatos, fosfatos, cloro residual, coliformes totales y escherichia coli; sino que estas pruebas de laboratorio arrojan todos estos datos para ser analizados y así determinar la calidad de agua que se está obteniendo y, si es viable o no en la planta de tratamiento o si por el contrario se deben hacer algunos planes de mejoramiento en ella.
      .col-lg-4.mt-4
        img(src='@/assets/curso/tema2/img5.png', alt='Texto que describa la imagen')
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-up")
      h2 2.3. Técnicas de manejo de información y análisis de los datos registrados    
    .row.justify-content-center(data-aos="fade-up-right")
      .col-lg-3
        img(src='@/assets/curso/tema2/img6.png', alt='Texto que describa la imagen')
      .col-lg-9.mt-4
        p Las plantas de tratamiento de agua potable involucran muchos procesos en los que debe pasar el material para lograr el producto final, que en este caso es la calidad del agua potable para consumo humano; es de allí donde se presentan los informes y su revisión por parte de los entes regulatorios que otorgan las licencias y permisos a dichas plantas. En el siguiente video se amplía esta información:
    figure.mt-4
      .video
        iframe(width="560" height="215" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)                 
</template>

<script>
export default {
  name: 'Tema2',
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
