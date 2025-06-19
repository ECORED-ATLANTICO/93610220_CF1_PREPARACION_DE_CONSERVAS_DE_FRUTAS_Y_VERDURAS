export default {
  global: {
    Name:
      'Generalidades, ingredientes y aspectos higiénicos en la preparación de conservas',
    Description:
      'Este componente formativo aborda fundamentos teóricos y prácticos de la elaboración de conservas de frutas y verduras. Explora la clasificación, composición y alteraciones de los productos vegetales, así como el uso adecuado de ingredientes, envases y prácticas higiénicas. Permite al aprendiz garantizar la inocuidad, calidad y durabilidad de las conservas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
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
        titulo: 'Generalidades de frutas y verduras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Diferencias entre frutas y verduras',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación de frutas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Clasificación de verduras',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Principales componentes de frutas y verduras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Vitaminas y sus funciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Minerales esenciales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Sustancias bioactivas y fitoquímicos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Esteroles vegetales',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Pigmentos naturales',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Cambios fisiológicos y mecanismos de alteración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Cambios fisiológicos y metabólicos poscosecha',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Mecanismos de alteración de la calidad',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Factores que afectan la calidad de frutas y verduras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Factores internos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Factores externos',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Alteraciones físicas, químicas y microbiológicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Alteraciones físicas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Alteraciones químicas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Alteraciones microbiológicas',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Procesos de conservación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Métodos físicos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Métodos químicos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Métodos biotecnológicos',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Aspectos higiénicos en la elaboración de conservas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Ingredientes básicos en conservas',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Materiales y equipos necesarios',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Buenas prácticas de higiene y manipulación',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Innovaciones en conservación',
            hash: 't_7_4',
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
      tema: 'Ingredientes y aspectos higiénicos en la preparación de conservas',
      referencia:
        'Villar, L. (2010). Las mejores conservas. Editorial Integral.',
      tipo: 'PDF',
      descarga: '/downloads/libro-de-las-conservas.pdf',
    },
    {
      tema:
        'Prevención de pérdidas de alimentos poscosechas: frutas, hortalizas, raíces y tubérculos.',
      referencia:
        'Organización de las Naciones Unidas para la Agricultura y la Alimentación (FAO). (1993). Prevención de pérdidas de alimentos poscosecha: frutas, hortalizas, raíces y tubérculos (Colección FAO: Capacitación N.º 17/2). Roma: FAO..',
      tipo: 'Libro',
      link: 'https://www.fao.org/4/t0073s/T0073S00.htm#Contents',
    },
  ],
  glosario: [
    {
      termino: 'Betacarotenos',
      significado:
        'precursores de la vitamina A, presentes en alimentos como zanahoria y mango. Son esenciales para la visión, la piel y el sistema inmunológico.',
    },
    {
      termino: 'Climatéricas',
      significado:
        'frutas que siguen madurando después de ser cosechadas, como el mango y la banana.',
    },

    {
      termino: 'Esteroles',
      significado:
        "compuestos similares al colesterol que ayudan a reducir el colesterol LDL ('malo') en el cuerpo, favoreciendo la salud cardiovascular.",
    },

    {
      termino: 'Fitoquímicos',
      significado:
        'compuestos naturales en frutas y verduras que no son nutrientes esenciales, pero sí beneficiosos para la salud, con propiedades preventivas.',
    },

    {
      termino: 'Flavonoides',
      significado:
        'tipo de polifenol con propiedades antiinflamatorias y antioxidantes, que contribuyen a la prevención de enfermedades crónicas.',
    },

    {
      termino: 'Frutas',
      significado:
        'productos vegetales que se desarrollan a partir del ovario de la flor, contienen semillas y suelen tener sabor dulce o ácido.',
    },

    {
      termino: 'Minerales',
      significado:
        'micronutrientes inorgánicos esenciales para funciones como la formación de huesos, transporte de oxígeno y regulación del equilibrio hídrico.',
    },

    {
      termino: 'Pigmentos',
      significado:
        'sustancias que dan color a frutas y verduras, como las clorofilas, carotenoides y antocianinas. Actúan como antioxidantes.',
    },

    {
      termino: 'Polifenoles',
      significado:
        'fitoquímicos antioxidantes presentes en vegetales, que ayudan a prevenir enfermedades cardiovasculares y neurodegenerativas.',
    },

    {
      termino: 'Verduras',
      significado:
        'partes comestibles de plantas que no son frutas (como hojas, tallos, raíces o flores), generalmente con sabor menos dulce.',
    },

    {
      termino: 'Vitamina C',
      significado:
        'antioxidante presente en cítricos. Fortalece el sistema inmunológico, mejora la absorción del hierro y protege frente a infecciones.',
    },

    {
      termino: 'Vitaminas',
      significado:
        'nutrientes esenciales presentes en frutas y verduras, importantes para el sistema inmune, la piel, la visión y el metabolismo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Zapata, S., & Gómez, L. (2015). Sustancias bioactivas en los alimentos y su función en la salud humana. Revista Colombiana de Ciencias Químico-Farmacéuticas, 44(2), 183–198.',
      link:
        'https://www.academia.edu/32156732/SUSTANCIAS_BIOACTIVAS_EN_LOS_ALIMENTOS',
    },
    {
      referencia:
        'FAO. (2012). <em>Pérdidas y desperdicio de alimentos en el mundo</em>. Roma: Organización de las Naciones Unidas para la Agricultura y la Alimentación.',
      link: 'https://www.fao.org/4/i2697s/i2697s.pdf',
    },
    {
      referencia:
        'INTA. (2018). Manual de conservación de frutas y hortalizas. Instituto Nacional de Tecnología Agropecuaria.',
      link: '',
    },
    {
      referencia:
        'González, A., & Pardo, A. (2018). Microorganismos beneficiosos en la conservación de alimentos vegetales. Revista Colombiana de Ciencia y Tecnología de Alimentos, 12(2), 45–52.',
      link:
        'https://www.argentina.gob.ar/sites/default/files/2023/08/inta_manual_de_recetas_para_elaborar_conservas_2018.pdf',
    },
    {
      referencia:
        'Zapata, S., & Gómez, L. (2015). Componentes funcionales en frutas y verduras frescas. Editorial Académica Española.',
      link: '',
    },
    {
      referencia:
        'ZFAO. (2016). Manejo poscosecha de frutas y hortalizas. Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link: 'https://www.fao.org/4/x5056s/x5056s00.htm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Heydy Cristina Gonzalez Garcia',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Maria Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
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
