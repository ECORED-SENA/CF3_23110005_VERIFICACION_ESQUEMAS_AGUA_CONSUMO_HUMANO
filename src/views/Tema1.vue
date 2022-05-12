<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Cronograma de mantenimiento de unidades 
    .row.justify-content-center(data-aos="zoom-in-left")
      .col-lg-4(data-aos="fade-up-right")
        img(src='@/assets/curso/tema1/img1.png', alt='Texto que describa la imagen')
      .col-lg-8
        p.mt-4.p-3.bgtexto Se considera de gran importancia iniciar este componente con la programación de mantenimientos en las plantas de tratamiento de agua, ya que con estos cronogramas se garantiza un eficiente rendimiento de los procesos realizados en la planta. Asimismo, se tendrá en cuenta en el cronograma desde el mantenimiento preventivo hasta el mantenimiento correctivo en caso de presentarse.
        p Con el cronograma de mantenimiento se establece la programación de mantenimiento, la cual puede ser lanzada semanalmente en forma de órdenes de trabajo preventivo; de la misma forma, son relacionadas las actividades de mantenimiento llevadas a cabo, que no solo son las realizadas de forma preventiva, sino que suelen tomarse acciones correctivas ante la falla imprevista de algún equipo. La operación de estas plantas se da por medio de válvulas y unas pequeñas compuertas para regular el caudal de ingreso, ayudando así la evacuación de lodos, es decir, que el mantenimiento se dirige a la limpieza de toda la estructura y sus rejillas y, la intensidad de estos mantenimientos depende del caudal de agua a tratar y de la capacidad de los tanques. Siempre se deben tomar registros y disponer de todas las observaciones, puesto que esto ayudará a la toma de decisiones que optimicen la operación y el mantenimiento. 
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-up")
      h2 1.1. Conceptos, tipos y características de redes de agua 
    p La red de distribución es la encargada de distribuir el agua desde la planta de tratamiento o el tanque hasta la conexión del servicio a donde esta se prestará, dichas redes se pueden clasificar por la forma de funcionamiento como lo son: ramificadas, malladas o mixtas. También se clasifican las redes por diferenciación de presiones.
    p.mt-2 Algunos de los conceptos que hacen referencia a las redes de agua son: 

    .row.bgmm2.mb-5.mt-5
      .col-lg-12.px-lg-5.px-4
        .row
          .col-md-8
            img(data-aos="fade-up-right")(src='@/assets/curso/tema1/1.svg', alt='Texto que describa la imagen')
          .col-md-4
            .row.f1.aaaz
              .col-md-11
                p.mt-4.mb-5.aqw <strong>Estación de bombeo:</strong> son aquellas estructuras cuya función es elevar el fluido de un nivel energético menor a uno mayor.
            .row.f2
              .col-md-11
                p.mt-4.mb-5.aqw <strong>Tuberías:</strong> es el conducto que cumple con la función de transportar fluidos y pueden estar hechos en diferentes materiales como es el acero, cobre, hierro fundido, tubo de gres o fibrocemento.
            .row.f3
              .col-md-11
                p.mt-4.mb-5.aqw <strong>Tanques de almacenamiento:</strong> es aquel depósito que está destinado a almacenar el fluido, es el elemento fundamental en la red de abastecimiento de agua. Los tanques desde un punto de vista de ubicación y terreno pueden ser subterráneos, apoyados en una superficie o elevados, aquellos que están por encima de los techos.


    p.mb-5 Ahora bien, con respecto a los tipos de redes de agua que se encuentran están: 

    TabsC.color-acento-contenido(data-aos="fade-up-right")
      .py-3.py-md-4(titulo="Redes ramificadas")
        .row
          .col-md-1
          .col-md-5.mb-4.mb-md-0

            p.mt-5 Son las que consisten en presentar una tubería principal de la que después se desprenden tuberías secundarias y a su vez terciarias o de cuarto orden, según el predio en el que se presente esta red. En este tipo de red se pueden realizar los cálculos fácilmente, ya que se puede precisar con exactitud el caudal que circula y también es más económico. La desventaja es que en el momento en que se presenta una avería puede dejar en seco toda la red que le sigue al punto del daño.
        
          .col-md-5.mt-4
            figure
              img(src='@/assets/curso/tema1/img3.png', alt='Texto que describa la imagen')
          .col-mg-1
      .py-3.py-md-4(titulo="Redes malladas ")
        .row
          .col-md-1
          .col-md-5.mb-4.mb-md-0

            p.mt-5 Son aquellas que van formando cuadrículas, consiguiendo así que cada punto tenga más vías de consumo; existe un problema de indeterminación del agua, pero a diferencia de la anterior red si se presenta una avería no se va desocupar el resto de la red, sino que el agua va llegar por otras tuberías, puesto que el tramo afectado se puede aislar por válvulas. La dimensión de los tramos de la malla depende de la población y de la carencia del recurso.
        
          .col-md-5.mt-4
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='Texto que describa la imagen')
          .col-mg-1
    .row.justify-content-center.bg2(data-aos="fade-up-right")
      .col-lg-5
        img(src='@/assets/curso/tema1/img5.png', alt='Texto que describa la imagen')
      .col-lg-7.mt-5

        p.mt-5 Tomando en cuenta lo anterior, con las redes de distribución se pretende preservar la calidad y cantidad de agua y mantener las presiones en las distribuciones, todo esto compuesto de válvulas, tuberías y otros componentes del sistema. Hay que destacar que la inversión de la construcción de dichas infraestructuras es muy alta y varía según la red, si esta es pequeña o grande. 
        p.bgtexto.p-3 Todo este diseño y puesta en marcha se realiza con el ánimo de dar acceso a agua potable a las comunidades o los domicilios que la requieran. 
        p Es de aclarar que para garantizar que la calidad del agua llegue en óptimas condiciones a su punto final deben estar todos los componentes del sistema funcionando correctamente, es decir, que el principal objetivo de la operación es estar revisando las válvulas de entrada y salida del flujo de agua del tanque de almacenamiento y del sistema completo.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-up")
      h2 1.2. Tipos de variables y principios de funcionamiento   
    .row.justify-content-center(data-aos="fade-up-right")
      .col-lg-4
        img(src='@/assets/curso/tema1/img6.png', alt='Texto que describa la imagen')
      .col-lg-8
        p Las variables que se pueden presentar o que pueden cambiar aspectos y resultados de la cantidad y calidad del agua son inicialmente los caudales y la calidad del agua con la que llega a la toma y a los desarenadores.
        p.bgtexto.p-3 Es de tener en cuenta el test de jarras para calcular coagulantes y floculadores para así poder obtener un buen resultado en el tratamiento del agua de dicha planta.
        p Sabiendo esto, a continuación se presentan los tipos de variables y principios fundamentales de la calidad del agua: 
    .row.bgmm
      .col-lg-12.px-lg-5.px-4
        ImagenInfografica.color-secundario.mb-5.mt-5(data-aos="fade-up-right")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img7.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-4(x="16.5%" y="8%" numero="")
            .h4.mb-2 1. Regulación de caudal
            p • Se regula operando las válvulas o compuertas de entrada.
            p • Cuando llega el agua muy sucia se debe bajar el caudal para no saturar el sistema.

          .tarjeta.color-acento-botones.p-4(x="36%" y="50%" numero="")
            .h4.mb-2 2. Dosificación de químicos 
            p Se debe realizar el ensayo de jarras para determinar la dosis a aplicar a toda el agua que ingresa al sistema

          .tarjeta.color-acento-botones.p-4(x="53.5%" y="8%" numero="")
            .h4.mb-2 3. Lavado de filtros
            p • Se determina bajo criterios de filtros: tiempo de trabajo, calidad del agua y nivel de agua.
            p • Las purgas se realizan en las unidades de sedimentación, evitando  acumulación en los filtros.
          .tarjeta.color-acento-botones.p-4(x="74%" y="50%" numero="")
            .h4.mb-2 4. Operación de equipos electromecánicos
            p • Se conoce en qué momento se requiere el encendido o apagado de los equipos.
            p • Se conocen los controles y características de los mismos.
    .row.justify-content-center(data-aos="fade-up-right")
      .col-lg-9
        p.mt-4 Por lo anterior, es necesario medir la cantidad de agua que llega y la que puede ser tratada. Es así como dentro de los principios de funcionamiento se encuentra la <strong>desarenación,</strong> la cual es una tarea rutinaria para el operador de la planta.
        p Cabe resaltar que el propósito del desarenador es reducir el volumen de sólidos que pueden ingresar a la planta y así poder eliminar las interferencias que se puedan presentar en los procesos de la planta, así mismo, con la desarenación baja la turbiedad del agua dando paso a su clarificación. También dentro de los principios de un buen funcionamiento de una planta de tratamiento de agua se puede encontrar el <strong>ensayo de jarra.</strong>
      .col-lg-3
        img(src='@/assets/curso/tema1/img8.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.mt-5
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/ico.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-3
              .row.align-content-right.maaa
                .col-lg-11
                  h5.mb-0 Ensayo de jarra
                  p.mb-0 Se trata de una simulación de las condiciones en las que se realiza un proceso de coagulación y de sedimentación. Dependiendo del resultado de este ensayo se calcula la dosificación de coagulante que requiere cierta cantidad de agua ya que esta se mide mg/litro.


</template>

<script>
export default {
  name: 'Tema1',

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
