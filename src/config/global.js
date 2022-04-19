export default {
  global: {
    componenteFormativo:
      'Ejecución de mantenimiento de equipos acorde con protocolos',
    descripcionCurso:
      'Las plantas de tratamiento de agua potable se construyen con diferentes capacidades de almacenamiento, acorde a la población a la que esté dirigido el servicio. Es muy importante tener en cuenta los mantenimientos de una planta de tratamiento y tener control de calidad en los procesos por los que pasa el agua. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Cronograma de mantenimiento de unidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos, tipos y características de redes de agua',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de variables y principios de funcionamiento',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Manuales de operación y mantenimiento técnico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Manuales de operación y mantenimiento técnico',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Técnicas de manejo de información y análisis de los datos registrados',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Técnicas de manejo de información y análisis de los datos registrados',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ejecución de unidades y equipos de sistema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Conceptos, tipos y características de programación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Programación de mantenimiento',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Clases de recursos para realizar mantenimientos',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Acueducto, Agua y Alcantarillado de Bogotá. (2018). Informe mensual de actividades de abril. ',
      link:
        'https://www.acueducto.com.co/wps/html/resources/2018/PTAR/INFORME_FINAL_ABRIL_2018.pdf',
    },
    {
      referencia:
        'Chaparro, M. & Marín, A. (2019). Evaluación técnica de la planta de potabilización de agua vereda La Esmeralda municipio de Tocancipá. Universidad Católica de Colombia.',
      link:
        'https://repository.ucatolica.edu.co/bitstream/10983/24359/1/Evaluacion%20T%C3%A9cnica%20PTAP%20Tocancip%C3%A1%20vereda%20Esmeralda.pdf ',
    },

    {
      referencia:
        'El agua potable. (2016). La coagulación - floculación en el proceso de tratamiento. ',
      link: 'http://www.elaguapotable.com/coagulacion-floculacion.htm	',
    },
    {
      referencia: 'Gray, N. (1994). Calidad del agua potable. Acribia S.A.',
    },
    {
      referencia:
        'Resolución 622 de 2020. [Ministerio de Salud y Protección Social, Ministerio de Vivienda, Ciudad y Territorio]. Por la cual se adopta el protocolo de inspección, vigilancia y control de la calidad del agua para consumo humano suministrada por personas prestadoras del servicio público domiciliario de acueducto en zona rural, y se dictan otras disposiciones. Abril 20 de 2020. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%20622%20de%202020.pdf',
    },
    {
      referencia:
        'UNATSABAR. (2005). Procedimientos para la operación y mantenimiento de la red de distribución. UNATSABAR',
      link:
        'http://www.bvsde.opsoms.org/tecapro/documentos/agua/143esp-O&Mredesdisrtr.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Coagulación ',
      significado:
        'En el proceso de tratamiento del agua tiene por objeto preparar las partículas dispersas en el agua (mediante la anulación de las cargas superficiales) para lograr posteriormente, mediante la floculación, otras partículas más voluminosas y pesadas que puedan ser separadas más fácilmente del agua (El agua potable, 2016).',
    },
    {
      termino: 'Coagulante',
      significado:
        'Normalmente una sal de aluminio o de hierro es añadida al agua para formar un precipitado de hidróxido (Gray, 1994)',
    },
    {
      termino: 'Floculación',
      significado:
        'Proceso por el cual partículas suspendidas se aglomeran para formar flóculos mayores. Generalmente para llevar esto a cabo se adicionan al agua sales de aluminio y de hierro (Gray, 1994).',
    },
    {
      termino: 'Mantenimiento',
      significado:
        'Se refiere a las acciones que se deben realizar en las estructuras y equipos, con el fin de prevenir o reparar daños (UNATSABAR, 2005).',
    },
  ],
  complementario: [
    {
      texto:
        'Conceptos, tipos y características de redes de agua La red del agua. (2020) Redes de distribución [video]. YouTube. https://www.youtube.com/watch?v=NihYc_RHNls&t=452s',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NihYc_RHNls&t=452s',
    },
    {
      texto:
        'Manuales de operación y mantenimiento técnico Resolución 330 de 2017. [Ministerio de Vivienda, Ciudad y Territorio]. Por la cual se adopta el Reglamento Técnico para el Sector de Agua Potable y Saneamiento Básico – RAS y se derogan las resoluciones 1096 de 2000, 0424 de 2001, 0668 de 2003, 1459 de 2005, 1447 de 2005 y 2320 de 2009. Junio 8 de 2017. https://www.minvivienda.gov.co/sites/default/files/documentos/0330-2017.pdf',
      tipo: 'Resolución',
      link:
        'https://www.minvivienda.gov.co/sites/default/files/documentos/0330-2017.pdf ',
    },
    {
      texto:
        'Técnicas de manejo de información y análisis de los datos registrados Resolución 2115 de 2007. [Ministerio de la Protección Social y de Ambiente, Vivienda y Desarrollo Territorial]. Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano. Junio 22 de 2007. https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resoluci%C3%B3n_2115_de_2007.pdf ',
      tipo: 'Resolución',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resoluci%C3%B3n_2115_de_2007.pdf ',
    },
    {
      texto:
        'Programación de mantenimiento SENA. (s.f.). Operación y mantenimiento de plantas de potabilización de agua. SENA.  https://repositorio.sena.edu.co/sitios/calidad_del_agua/operacion_potabilizacion/index.html#',
      tipo: 'Documento web ',
      link:
        'https://repositorio.sena.edu.co/sitios/calidad_del_agua/operacion_potabilizacion/index.html# ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
