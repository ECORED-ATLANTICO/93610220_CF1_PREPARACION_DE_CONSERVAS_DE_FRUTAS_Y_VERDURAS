<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1  Principales componentes de frutas y verduras

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las frutas y verduras contienen una amplia variedad de nutrientes esenciales y compuestos funcionales que las convierten en alimentos clave para la salud. Sus componentes no solo nutren, sino que también poseen efectos beneficiosos sobre funciones fisiológicas y mecanismos de defensa del organismo.

    Separador
    #t_2_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.1	Vitaminas y sus funciones
    
    p.mb-4.mb-lg-5 Las vitaminas presentes en frutas y verduras cumplen funciones fundamentales en el organismo, ya que intervienen en una amplia variedad de procesos fisiológicos esenciales para el crecimiento, la regeneración celular, el metabolismo energético y el fortalecimiento del sistema inmunológico.

    .row.justify-content-center.align-items-center.z-2.fullwidth-bg.fullwidth-bg--3.mb-4.mb-lg-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1. 
          span Vitaminas en las frutas y verduras 
        figure
          img.mb-4.z-2(data-aos="fade-right")(src="@/assets/curso/temas/tema2/2.png" alt="Frutas y verduras variadas")
          figcaption <strong>Fuente</strong>: SENA, 2025

    p.mb-4.mb-lg-5 Debido a su origen natural, estas vitaminas se encuentran en formas fácilmente asimilables por el cuerpo, lo que potencia sus efectos beneficiosos. Su presencia en la dieta diaria es clave para mantener un estado de salud óptimo y prevenir diversas deficiencias nutricionales. Entre las más destacadas por su abundancia y acción específica en estos alimentos se encuentran:

    .row.justify-content-center.align-items-center.z-2
      .col-8.col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/temas/tema2/3.png', alt='Imagen decorativa')
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordion-conservas")
          div(titulo="Vitamina C (ácido ascórbico)")
            p Antioxidante, favorece la absorción de hierro y fortalece el sistema inmunológico. Presente en cítricos, guayaba, pimientos, entre otros.

          div(titulo="Vitamina A (en forma de betacarotenos)")
            p Esencial para la visión, el crecimiento y la piel. Abundante en zanahoria, calabaza y mango.

          div(titulo="Vitamina K")
            p Importante en la coagulación sanguínea. Presente en vegetales de hojas verdes.

          div(titulo="Vitaminas del complejo B")
            p Intervienen en el metabolismo energético. Se encuentran en plátanos, aguacates y legumbres.

    Separador

    #t_2_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.2	Minerales esenciales

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/4.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los minerales son micronutrientes inorgánicos que cumplen funciones vitales en el organismo humano. A diferencia de las vitaminas, no pueden ser sintetizados por el cuerpo, por lo que deben obtenerse a través de la alimentación, especialmente mediante el consumo regular de frutas y verduras frescas. Estos elementos participan en procesos como la transmisión nerviosa, la contracción muscular, la formación de tejidos y el equilibrio de líquidos corporales. Algunos también actúan como cofactores enzimáticos, facilitando reacciones químicas esenciales para la vida. La presencia adecuada de minerales en la dieta es indispensable para el mantenimiento de la salud ósea, la función cardiovascular y la prevención de enfermedades crónicas. A continuación, se presentan los minerales más relevantes presentes en los vegetales y sus principales beneficios fisiológicos:
   
    .tarjeta.conservas-slyder.more-elements.p-4.p-lg-5.pb-lg-4.mb-4.mb-lg-5.z-2
      SlyderA(tipo="b")
        .row.align-items-center
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/17.png', alt='trigo, fríjoles, maíz, avena')
          .col-md-6.col-lg-7
            h4 Magnesio
            p <strong>Función</strong>: funcionamiento de músculos, huesos y dientes, ayuda en articulaciones.
            p <strong>Procedencia</strong>: trigo, fríjoles, maíz, avena, almendras, nueces, higos, verduras de hojas verdes, entre otras.
        .row.align-items-center
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/18.png', alt='verduras de hojas verdes')
          .col-md-6.col-lg-7
            h4 Calcio
            p <strong>Función</strong>: formación de huesos y dientes, coagulación sanguínea, funciones musculares.
            p <strong>Procedencia</strong>: verduras de hojas verdes, semillas de ajonjolí, perejil entre otras.
        .row.align-items-center
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/19.png', alt='cereales naturales, frijoles')
          .col-md-6.col-lg-7
            h4 Fósforo
            p <strong>Función</strong>: formación de huesos y dientes, creación de células.
            p <strong>Procedencia</strong>: cereales naturales, frijoles, lentejas, entre otras.
        .row.align-items-center
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/20.png', alt='frutas, vegetales de hojas verdes')
          .col-md-6.col-lg-7
            h4 Potasio
            p <strong>Función</strong>: funcionamiento de riñones y corazón, transmisión de señales nerviosas, control de niveles de agua.
            p <strong>Procedencia</strong>: frutas, vegetales de hojas verdes, papas entre otras.
        .row.align-items-center
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/21.png', alt='frutas y verduras')
          .col-md-6.col-lg-7
            h4 Flúor
            p <strong>Función</strong>: composición de huesos y dientes, previene caries dentales.
            p <strong>Procedencia</strong>: frutas y verduras.
        .row.align-items-center
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/22.png', alt='verduras de hojas verdes')
          .col-md-6.col-lg-7
            h4 Hierro
            p <strong>Función</strong>: producción de hemoglobina y transporte de oxígeno.
            p <strong>Procedencia</strong>: verduras de hojas verdes, higos, entre otras.
        .row.align-items-center
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/23.png', alt='cereales integrales')
          .col-md-6.col-lg-7
            h4 Selenio
            p <strong>Función</strong>: propiedades antioxidantes, prevención del cáncer, apoyo al corazón, hígado y órganos reproductivos.
            p <strong>Procedencia</strong>: cereales integrales, verduras, entre otras.
        .row.align-items-center
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/24.png', alt='cereales')
          .col-md-6.col-lg-7
            h4 Sodio
            p <strong>Función</strong>: funcionamiento de músculos y nervios, regulación de líquidos y digestión.
            p <strong>Procedencia</strong>: cereales.
        .row.align-items-center
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/25.png', alt='legumbres, frutos secos')
          .col-md-6.col-lg-7
            h4 Zinc
            p <strong>Función</strong>: desarrollo del cuerpo, piel y cabello.
            p <strong>Procedencia</strong>: legumbres, frutos secos, semillas de girasol, entre otras.

    Separador

    .fullwidth-bg.fullwidth-bg--4
    #t_2_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.3 Sustancias bioactivas y fitoquímicos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-10.col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema2/5.png', alt='Sustancias bioactivas y fitoquímicos')
      .col-lg-8
        p Las sustancias bioactivas, también conocidas como fitoquímicos, son compuestos presentes en los alimentos de origen vegetal que, aunque no son esenciales para la nutrición, tienen efectos beneficiosos sobre la salud cuando se consumen con regularidad.

        .cajon.color-acento-contenido.p-4(data-aos="fade-left")
          p.mb-0 Estos compuestos actúan en el organismo a nivel celular y metabólico, ayudando a prevenir diversas enfermedades crónicas y contribuyendo al bienestar general. Entre los principales tipos de sustancias bioactivas destacan:

    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .row.justify-content-center.z-2.mb-4.mb-lg-5
          .col-md-7.col-lg-4.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/6.png", alt="Desgaste de lóbulos")
              .crd_hover_txt--body.color-primario
                h5.text-center.text-white <em>Polifenoles</em>
                p.font-small.text-center.text-white.mb-0 Son potentes antioxidantes que ayudan a combatir el estrés oxidativo. Se han relacionado con la prevención de enfermedades cardiovasculares y neurodegenerativas.

          .col-md-7.col-lg-4.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/7.png", alt="frutas")
              .crd_hover_txt--body.color-secundario
                h5.text-center.text-white <em>Flavonoides</em>
                p.font-small.text-center.text-white Un tipo de polifenol presente en frutas cítricas, cebolla y otros vegetales. Poseen propiedades antiinflamatorias y protectoras del sistema inmunológico.

          .col-md-7.col-lg-4.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/8.png", alt="brocoli")
              .crd_hover_txt--body.color-acento-contenido
                h5.text-center <em>Glucosinolatos</em>
                p.font-small.text-center Abundantes en vegetales como el brócoli, la col y la coliflor. Estos compuestos tienen potencial anticancerígeno y favorecen la desintoxicación del organismo.

    .fullwidth-bg.fullwidth-bg--5
    p.mb-4.z-2 En las últimas décadas, el interés por los fitoquímicos ha crecido considerablemente gracias a los hallazgos científicos que demuestran sus efectos positivos a largo plazo. Entre los beneficios más estudiados se encuentran:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        ul.checklist(data-aos="fade-right")
          li Eliminación de toxinas y sustancias nocivas del cuerpo.
          li Neutralización de radicales libres, protegiendo las células del daño oxidativo.
          li Regulación de la presión arterial y mejora en la coagulación de la sangre.
          li Prevención de enfermedades cardiovasculares.
          li Retraso en los signos del envejecimiento y reducción del riesgo de enfermedades asociadas a la edad.
      .col-10.col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/9.png', alt='Imagen decorativa')

    p.mb-4.mb-lg-5.text-center.fw-bold.z-2 Un ejemplo práctico de estas sustancias son los pigmentos naturales que dan color a frutas y verduras, los cuales también se clasifican según su función bioactiva:

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5.z-2
      .col-8.col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/temas/tema2/10.png', alt='Imagen decorativa')
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordion-conservas")
          div(titulo="TERPENOS")
            p Compuestos bioactivos con función antioxidante.
            p.mb-0 <strong>Ejemplos</strong>
            ul.ms-3.checklist
              li <strong>Betacaroteno</strong>: presente en zanahoria, calabaza y espinaca.
              li <strong>Licopeno</strong>: abundante en tomate, sandía y guayaba.
            p.mb-0 <strong>Colores característicos</strong>
            ul.ms-3.checklist
              li Naranja, rojo y verde.
            p.mb-0 <strong>Beneficios para la salud</strong>
            ul.ms-3.checklist.mb-0
              li Neutralizan radicales libres.
              li Contribuyen a la salud ocular y cardiovascular.
              li Previenen el envejecimiento celular.

          div(titulo="FENOLES")
            p Grupo de compuestos antioxidantes, entre ellos los flavonoides.
            p.mb-0 <strong>Ejemplos</strong>
            ul.ms-3.checklist
              li <strong>Flavonoides</strong> como antocianinas en arándanos, moras y uvas negras.
            p.mb-0 <strong>Colores característicos</strong>
            ul.ms-3.checklist
              li morado y azul oscuro.
            p.mb-0 <strong>Beneficios para la salud</strong>
            ul.ms-3.checklist.mb-0
              li Protegen contra enfermedades cardiovasculares.
              li Tienen efecto antiinflamatorio.
              li Refuerzan el sistema inmunológico.

          div(titulo="TIOLES Y LIGNANOS")
            p Compuestos azufrados y polifenólicos con acción desintoxicante y antioxidante.
            p.mb-0 <strong>Ejemplos</strong>
            ul.ms-3.checklist
              li <strong>Tioles</strong>: presentes en cebolla, ajo, repollo y brócoli.
              li <strong>Lignanos</strong>: en trigo integral, cebada, linaza entre otros.
            p.mb-0 <strong>Beneficios para la salud</strong>
            ul.ms-3.checklist.mb-0
              li Eliminan toxinas del cuerpo.
              li Favorecen la salud digestiva y hepática.
              li Pueden contribuir a la prevención del cáncer.

    .cajon.color-acento-contenido.p-4(data-aos="fade-left")
      p.mb-0 El consumo variado y constante de frutas y verduras ricas en estos compuestos puede ser una estrategia natural y eficaz para promover una vida saludable y prevenir enfermedades crónicas.

    Separador
    .fullwidth-bg.fullwidth-bg--6

    #t_2_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.4 Esteroles vegetales

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/temas/tema2/11.png', alt='Imagen decorativa')
      .col-lg-8
        p Los esteroles vegetales son sustancias naturales que se encuentran en muchos alimentos de origen vegetal. Aunque no son colesterol, tienen una estructura parecida y cumplen funciones similares en el cuerpo: ayudan a formar algunas hormonas y a mantener las membranas de las células en buen estado.
        p Su principal beneficio es que reducen la absorción del colesterol malo (LDL) en el intestino, lo que ayuda a proteger el corazón y los vasos sanguíneos.
        .cajon.color-secundario.p-4
          p.mb-0 Están presentes en aceites como el de maíz, girasol y oliva, así como en frutos secos, lechuga, tomate y plátano.

    Separador

    #t_2_5(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.5 Pigmentos naturales

    figure
      img.mb-4(data-aos="fade-up")(src='@/assets/curso/temas/tema2/12.png', alt='Imagen decorativa')

    p.mb-4.text-center.fw-bold.z-2 Los pigmentos son compuestos que dan color y también cumplen funciones antioxidantes. Entre ellos se destacan:

    .row.justify-content-center.align-items-center.px-3.py-5.mb-3.mb-lg-5.factores-slider
      .col-sm-8.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/13.png', alt='Imagen decorativa')

      .col-lg-8.mb-3.mb-lg-0
        SlyderF(columnas="col-lg-6")
          .tarjeta.p-4.card-decoration.rounded-2
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/tema2/14.svg' alt='Icon decarativo')
            h5.text-center Clorofilas
            p.text-center Pigmento verde presente en vegetales de hoja. Ayuda a proteger las células del daño oxidativo y participa en procesos desintoxicantes. Presentes en espinaca y acelga.

          .tarjeta.p-4.card-decoration.rounded-2
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/tema2/15.svg' alt='Icon decarativo')
            h5.text-center Carotenoides
            p.text-center Incluyen el betacaroteno, que se convierte en vitamina A. Están en alimentos naranjas y protegen la visión y la piel.

          .tarjeta.p-4.card-decoration.rounded-2
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/tema2/16.svg' alt='Icon decarativo')
            h5.text-center Antocianinas
            p.text-center Pigmentos que dan tonos rojos, púrpuras o azules. Actúan como antioxidantes potentes, protegiendo el sistema cardiovascular.

    .cajon.color-secundario.p-4(data-aos="fade-left")
      p.mb-0 Estos pigmentos no solo embellecen los alimentos, sino que protegen las células del daño oxidativo.

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
