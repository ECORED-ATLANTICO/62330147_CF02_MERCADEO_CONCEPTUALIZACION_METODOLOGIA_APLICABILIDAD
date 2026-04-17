export default {
  global: {
    Name: 'Consumidor y estrategias de mercadeo',
    Description:
      'El componente formativo desarrolla el análisis del comportamiento del consumidor y su aplicación en la formulación de estrategias de marketing orientadas al mercado objetivo. Integra variables del consumidor, segmentación psicográfica y diseño estratégico, permitiendo al aprendiz comprender cómo transformar la información del mercado en decisiones comerciales efectivas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comportamiento del consumidor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Decisión de compra',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tendencias',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Variables en el comportamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Culturales y sociales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Personales y demográficas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Psicológicas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Entornos digitales',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis del consumidor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Métodos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Perfiles',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Segmentación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Decisiones comerciales',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estrategias de marketing',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Elementos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Relacionamiento',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Adaptación',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Diseño de estrategias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Formulación',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Propuesta de valor',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Integración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Decisiones estratégicas',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Propuestas estratégicas',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Plan de mercadeo',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Consumidor',
      significado:
        'Persona que adquiere bienes o servicios para satisfacer necesidades.',
    },
    {
      termino: 'Segmentación',
      significado:
        'Proceso de dividir el mercado en grupos con características similares.',
    },
    {
      termino: 'Propuesta de valor',
      significado:
        'Beneficios diferenciados que una empresa ofrece al mercado objetivo.',
    },
    {
      termino: 'Marketing estratégico',
      significado:
        'Planificación de acciones comerciales orientadas a objetivos organizacionales.',
    },
    {
      termino: 'Mercado objetivo',
      significado:
        'Segmento seleccionado al que se dirigen las estrategias de marketing.',
    },
    {
      termino: 'Posicionamiento',
      significado: 'Lugar que ocupa una marca en la mente del consumidor.',
    },
    {
      termino: 'Mezcla de marketing',
      significado: 'Conjunto de variables producto, precio, plaza y promoción.',
    },
    {
      termino: 'Comportamiento del consumidor',
      significado: 'Estudio de decisiones y hábitos de compra de los clientes.',
    },
    {
      termino: 'Estrategia comercial',
      significado:
        'Conjunto de acciones orientadas al logro de metas de mercado.',
    },
    {
      termino: 'Fidelización',
      significado: 'Estrategias orientadas a mantener clientes recurrentes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez Sigüenza, J. F. (2024). <em>Los segmentos del marketing: análisis, definición y tipos</em>. RAE-IC, Revista de la Asociación Española de Investigación de la Comunicación, 11(21). raeic',
      link:
        'https://rodin.uca.es/bitstream/handle/10498/31668/Segmentacio_n%20de%20mercado.pdf?sequence=4',
    },
    {
      referencia:
        'Bermeo Muñoz, E. A., & Rincón Guio, C. (2018). <em>Manual de planeación estratégica de marketing</em>. Editorial Uninavarra.',
      link:
        'https://uninavarra.edu.co/wp-content/uploads/2018/06/Libro_Marketing.pdf',
    },
    {
      referencia:
        'HubSpot. (2023). <em>Qué es un mercado potencial y cómo analizarlo (con ejemplo)</em>. Blog HubSpot.',
      link: 'https://blog.hubspot.es/marketing/mercado-potencial',
    },
    {
      referencia:
        'Lull Noguera, J. J., & Galdón Salvador, J. L. (s.f.). <em>Análisis PESTEL: analizando el entorno para la toma de decisiones</em>. Universitat Politècnica de València.',
      link:
        'https://riunet.upv.es/server/api/core/bitstreams/97570a29-3092-4f94-ae68-a88103d601fd/content',
    },
    {
      referencia:
        'Pérez Ruiz, A. (s.f.). <em>Segmentación y posicionamiento</em>. Universidad de Cantabria.',
      link:
        'https://ocw.unican.es/pluginfile.php/1601/course/section/1059/Tema%203%20-%20Segmentacion%20y%20posicionamiento.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
