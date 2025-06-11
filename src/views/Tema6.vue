<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Procesos de conservación

    .row.justify-content-center.align-items-center
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema6/1.png" alt="Imagen decorativa")
      .col-lg-7
        p La conservación de frutas y verduras tiene como objetivo prolongar su vida útil, mantener sus características sensoriales y nutricionales, y prevenir su deterioro por causas físicas, químicas o biológicas. Para ello, se emplean diversos métodos que se agrupan en físicos, químicos y biotecnológicos.

    Separador

    #t_6_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 6.1 Métodos físicos

    .row.justify-content-center.align-items-center.z-2
      .col-8.col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/temas/tema6/2.png', alt='Imagen decorativa')
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordion-conservas")
          div(titulo="Refrigeración")
            p Disminuye la velocidad de respiración y el desarrollo microbiano. Se recomienda mantener temperaturas entre 0°C y 10°C.

          div(titulo="Congelación")
            p Detiene la actividad microbiana y enzimática, permitiendo una conservación prolongada.

          div(titulo="Deshidratación")
            p Elimina el agua disponible, evitando el crecimiento de microorganismos.

          div(titulo="Radiación ionizante")
            p Disminuye la carga microbiana sin afectar significativamente las propiedades sensoriales.

          div(titulo="Atmósferas modificadas")
            p Controla la composición de gases (O₂, CO₂ y N₂) dentro del empaque para ralentizar el deterioro.

    Separador

    #t_6_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 6.2 Métodos químicos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La conservación de frutas y verduras es fundamental para prolongar su vida útil, mantener sus propiedades nutricionales y organolépticas, y reducir las pérdidas durante su almacenamiento y transporte. Los métodos químicos son una opción eficaz para controlar el deterioro, utilizando sustancias naturales o recubrimientos que inhiben el crecimiento microbiano y la oxidación, mejorando la calidad del producto a lo largo del tiempo. A continuación, se presentan los principales métodos químicos utilizados en la conservación de estos productos.

    .fullwidth-bg.fullwidth-bg--2.d-none.d-lg-block
    .tarjeta--container.row.mb-5.z-2
      .col-md.tarjeta.p-5.color-amarillo-claro(data-aos="flip-left")
        .row.justify-content-center.mb-4
          figure
            img.numbered-card__img.mx-auto(src="@/assets/curso/temas/tema6/4.png" alt="Imagen de factores internos")
        h5.text-center Uso de conservantes naturales
        p.text-center.font-small Se utilizan compuestos como el ácido cítrico o ácido ascórbico, los cuales actúan inhibiendo las enzimas responsables de la oxidación y el deterioro de las frutas y verduras. Estos conservantes naturales ayudan a prolongar la frescura y mantener las características organolépticas del producto, como el sabor y el color.
      
      .col-md.tarjeta.p-5.color-verde-claro(data-aos="flip-right")
        .row.justify-content-center.mb-4
          figure
            img.numbered-card__img.mx-auto(src='@/assets/curso/temas/tema6/5.png', alt='Texto que describa la imagen')
        h5.text-center Recubrimientos comestibles
        p.text-center.font-small Se aplican capas delgadas de materiales naturales, como ceras comestibles o películas de quitosano, que forman una barrera protectora sobre la superficie de las frutas y verduras. Esto reduce la pérdida de agua y limita la entrada de oxígeno, lo que ayuda a mantener la textura, frescura y calidad del producto durante más tiempo.
      
    Separador

    #t_6_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 6.3 Métodos biotecnológicos

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-10.col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/temas/tema6/6.png" alt="Imagen decorativa")

      .col-lg-9
        p Los métodos biotecnológicos juegan un papel fundamental en la mejora de la producción agroindustrial, contribuyendo a la seguridad alimentaria, la calidad de los productos y la sostenibilidad de los procesos. A través de técnicas como la fermentación y la aplicación de microorganismos benéficos, se logra optimizar la conservación de los alimentos, mejorar sus características nutricionales y organolépticas, y prevenir el desarrollo de microorganismos patógenos. Estos métodos no solo son esenciales en la fabricación de productos como encurtidos y lácteos, sino que también abren oportunidades para innovar en la creación de productos funcionales que promuevan la salud de los consumidores, apoyando la transición hacia sistemas de producción más sostenibles y eficaces.

    TabsC.color-acento-contenido
      .p-0(titulo="Fermentación")
        .row.align-items-center.justify-content-center
          .col-10.col-sm-8.col-lg-4
            figure
              img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema6/7.png', alt='Fermentación')

          .col-lg-8.mb-4.mb-md-0
            h4 Fermentación
            p.mb-4.pe-xl-5 La fermentación es un proceso biotecnológico que se utiliza ampliamente en la producción de encurtidos y otros productos fermentados. Este proceso implica la transformación de los azúcares presentes en los alimentos en ácidos orgánicos, como el ácido láctico o acético, mediante la acción de microorganismos. La fermentación no solo mejora la conservación de los alimentos, sino que también contribuye al desarrollo de sabores característicos y beneficios para la salud, como la mejora de la digestibilidad y la producción de probióticos.


      .p-0(titulo="Aplicación de Microorganismos Benéficos")
        .row.align-items-center.justify-content-center
          .col-10.col-sm-8.col-lg-4
            figure
              img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema6/8.png', alt='Aplicación de Microorganismos Benéficos')
        
          .col-lg-8.mb-4.mb-md-0
            h4 Aplicación de Microorganismos Benéficos
            p.mb-4 El uso de microorganismos benéficos, como las bacterias lácticas, es fundamental para inhibir el crecimiento de patógenos en productos alimenticios. Las bacterias lácticas, por ejemplo, producen compuestos antimicrobianos y acidifican el ambiente, lo que ayuda a prevenir la proliferación de microorganismos indeseables.

  
</template>

<script>
export default {
  name: 'Tema5',
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
