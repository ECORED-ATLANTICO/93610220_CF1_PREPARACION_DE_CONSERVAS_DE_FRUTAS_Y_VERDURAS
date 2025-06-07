<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Factores que afectan la calidad de frutas y verduras

    figure
      img.mb-4(src="@/assets/curso/temas/tema4/1.png" alt="Imagen de factores que afectan la calidad de frutas y verduras")
    
    p La calidad de frutas y verduras está determinada por características organolépticas, nutricionales y sanitarias, pero estas pueden verse alteradas por diversos factores. Identificarlos permite implementar estrategias que preserven la frescura, inocuidad y valor nutritivo de los productos.

    Separador

    #t_4_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 4.1 Factores internos
    .fullwidth-bg.fullwidth-bg--7.d-none.d-lg-block
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5.z-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los factores internos son aquellos que dependen de las características inherentes del producto vegetal y varían según la especie, variedad, estado de madurez y fisiología de la planta. Entre los factores más relevantes se incluyen:

    .row.justify-content-center.align-items-stretch.z-2
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .numbered-card.p-4.color-amarillo-claro
          span.numbered-card__number.numbered-card__number--yellow 01
          .numbered-card__img.mb-4
            figure
              img(src="@/assets/curso/temas/tema4/3.png" alt="Imagen de factores internos")
          h5.numbered-card__title Composición química
          p.text-center.font-small El contenido de azúcares, ácidos, agua, entre otros, influye directamente en el sabor, la textura y la calidad general del producto. Estos componentes afectan la percepción sensorial y la estabilidad del vegetal durante su almacenamiento y transformación.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .numbered-card.p-4.color-verde-claro
          span.numbered-card__number.numbered-card__number--green 02
          .numbered-card__img.mb-4
            figure
              img(src="@/assets/curso/temas/tema4/4.png" alt="Imagen de factores internos")
          h5.numbered-card__title Estado de madurez
          p.text-center.font-small Este factor determina la resistencia del producto al manejo postcosecha y su susceptibilidad al deterioro. Los productos inmaduros tienden a ser más vulnerables a daños mecánicos y a un mayor deterioro, mientras que los productos en su punto óptimo de madurez suelen tener mejores características de calidad y mayor vida útil.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .numbered-card.p-4.color-amarillo-claro
          span.numbered-card__number.numbered-card__number--yellow 03
          .numbered-card__img.mb-4
            figure
              img(src="@/assets/curso/temas/tema4/5.png" alt="Imagen de factores internos")
          h5.numbered-card__title Actividad enzimática
          p.text-center.font-small Las enzimas presentes en el producto vegetal juegan un papel crucial en procesos como el pardeamiento y el ablandamiento. Estas reacciones pueden alterar el color, la textura y el sabor del producto, afectando su aceptación en el mercado.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .numbered-card.p-4.color-verde-claro
          span.numbered-card__number.numbered-card__number--green 04
          .numbered-card__img.mb-4
            figure
              img(src="@/assets/curso/temas/tema4/6.png" alt="Imagen de factores internos")
          h5.numbered-card__title Respiración y transpiración
          p.text-center.font-small Estos procesos fisiológicos afectan la pérdida de peso y la calidad del producto durante la postcosecha. La respiración consume energía y produce calor, mientras que la transpiración provoca la pérdida de agua, lo que puede deteriorar la textura y el aspecto visual del producto.

    Separador

    #t_4_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 4.2 Factores externos

    p.mb-4.mb-lg-5.z-2 Los factores externos están relacionados con las condiciones ambientales y el manejo del producto desde la cosecha hasta el consumo, y tienen un impacto significativo en su calidad y vida útil. Entre los factores más relevantes se incluyen:

    .fullwidth-bg.fullwidth-bg--2.d-none.d-lg-block
    .tarjeta.conservas-slyder.p-4.p-lg-5.pb-lg-4.mb-4.mb-lg-5.z-2
      SlyderA(tipo="b")
        .row.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema4/7.png', alt='Manos recolectando tomates')
          .col-md-6.col-lg-8
            h5 Temperatura
            p La temperatura influye directamente en la tasa de respiración del producto vegetal. Un exceso de calor acelera el proceso de maduración y deterioro, mientras que temperaturas bajas pueden provocar daños por frío, afectando la textura y el sabor.
        .row.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema4/8.png', alt='Manos recolectando tomates')
          .col-md-6.col-lg-8
            h5 Huemedad relativa
            p Los valores bajos de humedad favorecen la deshidratación del producto, lo que puede provocar su marchitamiento y una pérdida considerable de peso, reduciendo su frescura y atractivo.
        .row.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema4/9.png', alt='Estados de un banano en diferentes condiciones')
          .col-md-6.col-lg-8
            h5 Luz
            p La exposición a la luz tiene efectos sobre la pigmentación, promoviendo la formación de ciertos colores en los vegetales. También influye en la fotosíntesis residual y puede desencadenar la aparición de brotes en algunas especies, afectando su calidad y aspecto visual.
        .row.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema4/10.png', alt='Manos recolectando tomates')
          .col-md-6.col-lg-8
            h5 Manejo de postcosecha
            p La manipulación inadecuada durante la postcosecha puede causar golpes, cortes o contaminaciones, lo que compromete la integridad física y microbiológica del producto, reduciendo su vida útil y calidad.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-right")(src="@/assets/curso/temas/tema4/11.png" alt="Imagen decorativa")
      .col-lg-7
        p.mb-0 A continuación, se presenta una comparación entre los factores internos y externos que afectan la calidad de los productos vegetales. Estos factores influyen de manera significativa en sus características físicas y organolépticas, desde su cosecha hasta el consumo, y su comprensión es clave para asegurar la conservación y el manejo adecuado de los productos.


    .row.justify-content-center.align-items-center.mb-3.mb-lg-4.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 3. 
          span Comparación factores internos y externos que afectan la calidad
        
        .tabla-a.color-acento-contenido.mb-2
          table.conservas-table
            caption <strong>Nota</strong>: Sena (2025).
            thead
              tr(style="background: #9EB682;")
                th Tipo de factor
                th(colspan="2") Ejemplos principales
                th(colspan="2") Efectos comunes
            tbody
              tr
                td Interno
                td(colspan="2") Estado de madurez, contenido de agua y actividad enzimática.
                td(colspan="2") Ablandamiento, pardeamiento, alteraciones en textura y sabor.
              tr
                td Externo
                td(colspan="2") Temperatura, humedad relativa, luz y manejo postcosecha.
                td(colspan="2") Daños mecánicos, pérdida de color, deshidratación y aparición de brotes.






</template>

<script>
export default {
  name: 'Tema4',
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
