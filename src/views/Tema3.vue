<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ejecución de unidades y equipos de sistema
    .row.justify-content-center(data-aos="fade-up-right")
      .col-lg-7
        p En el pasado las comunidades solo se preocupaban por mejorar la apariencia del agua, pero no sabían de los problemas microbiológicos o químicos que no son vistos al ojo humano. Es por ello que, con la evolución se fueron creando equipos que servían para la mejora de las condiciones fisicoquímicas y microbiológicas, donde uno de esos equipos en el laboratorio fue el equipo de prueba de jarras para el control de coagulación. ¿Sabe qué es, qué hace o qué más se puede encontrar? Por acá un pequeño recorderis…
        p Este equipo es un agitador mecánico con 3 o 6 paletas que opera de 0 a 100 revoluciones por minuto; hoy en día se encuentran equipos de hasta 400 revoluciones por minuto. También, se hallan los sistemas de dosificación, que facilitan la dosificación de coagulantes químicos en la jarra para el test, para lo que se requiere un equipo auxiliar que consta de cronómetro, medidor de turbiedad, pH y color.
      .col-lg-5
        img(src='@/assets/curso/tema3/img1.png', alt='Texto que describa la imagen')
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-up")
      h2 3.1. Conceptos, tipos y características de programación 
    .row.justify-content-center(data-aos="fade-up-right")
      .col-lg-5.aaas
        img(src='@/assets/curso/tema3/img2.png', alt='Texto que describa la imagen')

      .col-lg-7
        p Dentro de los tipos de programación que se pueden encontrar para mantenimiento se encuentra el manual de operaciones, que es donde se realizan todas las actividades por el ser humano, automatizado que se da por medio de la ayuda y operación de máquinas de nuevas tecnologías, es decir, por medio de controladores se ponen en marcha los equipos de la planta y estos los opera un personal calificado y capacitado en dichas labores. 
        p.bgtexto.p-4 Al personal se le capacita en todo el funcionamiento y conocimiento de fichas técnicas, tanto de equipos como del uso de las sustancias químicas que se adicionan, encontrando coagulantes o sustancias de limpieza al utilizar en los mantenimientos preventivos de tanques, desarenadores, filtros y rejillas del sistema compuesto de la planta. 
        p A continuación, se expondrán algunos de los conceptos más relevantes de la programación de mantenimientos: 

    .row.justify-content-center.mt-5(data-aos="fade-up-right")
      .col-lg-10
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img3.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="7.6%" y="47%" numero="")
            p <strong>1. Mantenimiento:</strong>   se refiere a las acciones que se deben realizar en las estructuras y equipos, con el fin de prevenir o reparar daños (UNATSABAR, 2005).

          .tarjeta.color-acento-botones.p-3(x="30%" y="10%" numero="")
            p <strong>2. Mantenimiento correctivo:</strong>   acciones que se realizan para reparar daños que se producen por efectos del deterioro o mal funcionamiento de un sistema y que no ha sido posible evitar con el mantenimiento preventivo (UNATSABAR, 2005).
          .tarjeta.color-acento-botones.p-3(x="62%" y="5%" numero="")
            p <strong>3. Mantenimiento preventivo:</strong>    serie de acciones que se realizan para la conservación de las instalaciones y equipos para evitar fallas en su funcionamiento (UNATSABAR, 2005).
          .tarjeta.color-acento-botones.p-3(x="86%" y="35%" numero="")
            p <strong>4. Operación:</strong>     es la acción de hacer funcionar correctamente las obras del sistema de abastecimiento de agua (UNATSABAR, 2005).
          .tarjeta.color-acento-botones.p-3(x="97%" y="89%" numero="")
            p <strong>5. Sedimentación:</strong>      proceso para eliminar los sólidos sedimentables de un tanque bajo condiciones de semireposo (Gray, 1994).
    p Conociendo lo anterior, es necesario saber que dentro de las características de programación de mantenimiento se debe diseñar una herramienta de trabajo para el operador de la planta de tratamiento; se requiere que esta persona conozca perfectamente el funcionamiento de todas las estructuras que están dentro de la planta, así mismo, conocer la operación y el cronograma de mantenimientos de la misma. Dicha herramienta de trabajo para el operador es la creación del manual de operaciones de la planta de tratamiento para la cual se está operando, donde se aclaran qué tipos de equipos se utilizan allí y se conocen perfectamente las fichas técnicas de estos equipos; todo esto se logra también con la continua capacitación del personal, además de contar con herramientas como lo son las fichas de registros de datos diarios, para así realizar los cálculos de caudal y de calidad del agua. 
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-up")
      h2 3.2. Programación de mantenimiento
    .row.justify-content-center(data-aos="fade-up-right")
      .col-lg-9.mt-4
        p Para la programación de mantenimiento se debe saber en todo momento cómo está funcionando cada unidad de la planta y por eso se requiere periódicamente realizar ciertas actividades tales como toma de muestras en cada proceso de agua: coagulada, floculada, sedimentada, filtrada y clorada. Con todas estas muestras se irán determinando diferentes parámetros importantes para el resultado final de calidad del agua. 

        p.mt-4 Para la programación de dichos mantenimientos se deben realizar verificaciones periódicas tales como:

      .col-lg-3
        img(src='@/assets/curso/tema3/img4.svg', alt='Texto que describa la imagen')

    .tarjeta.tarjeta--azul.p-4.mb-5.mt-5
      SlyderA(tipo="b")(data-aos="fade-up-right")
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            p Verificación diaria de todas las estructuras hidráulicas, con el fin de identificar si hay algún indicio de fisuras o problemas de funcionamiento y corregirlos a tiempo.
          .row.justify-content-center
            .col-lg-10
              figure
                img(src='@/assets/curso/tema3/img5.png', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            p Verificación diaria del caudal que ingresa a la planta para garantizar un buen tratado de potabilización.
          .row.justify-content-center
            .col-lg-10
              figure
                img(src='@/assets/curso/tema3/img6.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            p Verificación del funcionamiento del dosificador para el proceso de coagulación y floculación.
          .row.justify-content-center
            .col-lg-10
              figure
                img(src='@/assets/curso/tema3/img7.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            p Verificación de velocidad en los sedimentadores. 
          .row.justify-content-center
            .col-lg-10
              figure
                img(src='@/assets/curso/tema3/img8.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            p Verificación de que existan repuestos para reparaciones si se presentara alguna eventualidad.
          .row.justify-content-center
            .col-lg-10
              figure
                img(src='@/assets/curso/tema3/img9.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            p Verificación de características físicoquímicas y bacteriológicas del agua, en agua cruda y agua tratada.
          .row.justify-content-center
            .col-lg-10
              figure
                img(src='@/assets/curso/tema3/img10.png', alt='Texto que describa la imagen')

    p Las anteriores verificaciones son todas las que se deben tener presentes e incluir en la programación de mantenimiento, ya que se deben realizar todos los mantenimientos sin afectar los procesos y dejar de tratar las aguas, puesto que la planta debe funcionar las 24 horas del día para garantizar el caudal requerido por la población a la que se le entregará este servicio.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-up")
      h2 3.3. Clases de recursos para realizar mantenimientos
    p A continuación, se muestra un paso a paso sobre el adecuado mantenimiento de los tanques de homogeneización:

    .row.justify-content-center.mt-5(data-aos="fade-up-right")
      .col-lg-9.mt-4
        img(src='@/assets/curso/tema3/img11.svg', alt='Texto que describa la imagen')
    p Recuerde que los insumos necesarios para realizar estos mantenimientos son:
    .row.bgmm
      .col-lg-12.px-lg-5.px-4
        .row.justify-content-center.bg4
          .col-lg-8.mb-5(data-aos="fade-up-right")
            img(src='@/assets/curso/tema3/img12.svg', alt='Texto que describa la imagen')
          
    .row.bajar.mt-5
      .col-lg-7.bgtexto.mt-5
        p.p-4 Una inadecuada intervención en cuanto a las actividades de mantenimiento y la falta de pericia de los operarios y estandarización de los procedimientos son los causantes de los altos sobrecostos, por este motivo es de gran importancia que el coordinador de la planta lleve al día los cronogramas y programaciones de mantenimiento preventivo y predictivos de la planta, así se presentarán menos riesgos y eventualidades que puedan frenar o disminuir el funcionamiento de la planta de tratamiento de agua potable. 
      .col-lg-3.bgtexto.mt-5
        p.p-4 
    
    .row.mt-5
      .col-lg-7
      .col-lg-5
        img(src='@/assets/curso/tema3/img13.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema3',
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
