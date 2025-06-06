<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Cambios fisiológicos y mecanismos de alteración

    .row.justify-content-center.align-items-center
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema3/1.png" alt="Imagen de cambios fisiológicos y mecanismos de alteración")
      .col-lg-7
        p Después de ser cosechadas, frutas y verduras continúan vivas y activas metabólicamente. Durante este proceso, se presentan cambios fisiológicos que pueden afectar su textura, sabor, color y valor nutritivo. Conocer estos cambios es clave para prevenir su deterioro y prolongar su vida útil.

    Separador

    #t_3_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.1 Cambios fisiológicos y metabólicos poscosecha

    figure
      img.mb-4(data-aos="fade-right")(src="@/assets/curso/temas/tema3/2.png" alt="Imagen de cambios fisiológicos y metabólicos poscosecha")

    p.mb-4 Los productos vegetales continúan respirando después de la cosecha. Este proceso implica el consumo de oxígeno y la liberación de dióxido de carbono y calor, lo cual acelera la maduración y senescencia. Otros procesos incluyen:

    .row.justify-content-center.align-items-center.z-2
      .col-8.col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/temas/tema3/3.png', alt='Imagen decorativa')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordion-conservas")
          div(titulo="Transpiración")
            p Es el proceso mediante el cual los vegetales pierden agua a través de sus tejidos, especialmente por la superficie de hojas, tallos o cáscaras. Esta pérdida de humedad provoca una disminución del peso, flacidez en los tejidos y eventualmente marchitamiento. La transpiración es más intensa en ambientes cálidos, secos o con mucho movimiento de aire.

          div(titulo="Producción de etileno")
            p El etileno es una hormona gaseosa producida naturalmente por muchas frutas y verduras. Actúa como un regulador del proceso de maduración. Su presencia acelera el ablandamiento de la pulpa, el cambio de color y el desarrollo de aromas. Frutas como el banano, tomate o manzana liberan etileno y también son sensibles a él.

          div(titulo="Conversión de almidón en azúcares")
            p Durante la maduración, los almidones (reservas de energía complejas) se descomponen en azúcares simples como glucosa o fructosa. Este proceso es lo que da lugar al dulzor característico en frutas como la papaya, el mango o el plátano.
  
    Separador
    #t_3_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.2 Mecanismos de alteración de la calidad

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/4.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Durante la poscosecha, los productos vegetales experimentan cambios que pueden comprometer su calidad comercial y valor nutricional. Estos cambios, conocidos como <strong>mecanismos de alteración</strong>, pueden clasificarse según su origen en fisiológicos, metabólicos y enzimáticos.
    
    .fullwidth-bg.fullwidth-bg--2.d-none.d-lg-block
    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .row.justify-content-center.z-2
          .col-md-7.col-lg-4.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema3/5.png", alt="Alteraciones fisiológicas en tomates")
              .crd_hover_txt--body.px-1.color-primario
                h5.text-center.text-white <em>Alteraciones fisiológicas</em>
                p.text-center.text-white.font-small Ocurren cuando se alteran los procesos bioquímicos internos del producto. Uno de los casos más comunes es la acumulación excesiva de etileno, una hormona natural que regula la maduración. En exceso, acelera el proceso de sobremaduración, llevando al ablandamiento y, finalmente, a la pudrición. Esto es típico en frutas climatéricas como el mango, el aguacate y el tomate. Se manifiestan como maduración acelerada, cambio de color o desarrollo de olores fuertes.

          .col-md-7.col-lg-4.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema3/6.png", alt="Alteraciones metabólicas")
              .crd_hover_txt--body.px-1.color-secundario
                h5.text-center.text-white <em>Alteraciones metabólicas</em>
                p.text-center.text-white.font-small Estas alteraciones son reacciones del producto frente a condiciones ambientales adversas. Por ejemplo, temperaturas muy bajas pueden provocar daños por frío, como el oscurecimiento de la cáscara en bananas o la aparición de manchas acuosas en tomates. También, una alta humedad puede acelerar la pérdida de firmeza en verduras de hoja, como la lechuga, debido a la absorción excesiva de agua. Son visibles como cambios físicos: manchas, deshidratación o textura blanda.

          .col-md-7.col-lg-4.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema3/7.png", alt="Alteraciones enzimáticas")
              .crd_hover_txt--body.px-1.color-acento-contenido
                h5.text-center <em>Alteraciones enzimáticas</em>
                p.text-center.font-small Las enzimas son catalizadores biológicos que regulan muchas transformaciones en frutas y hortalizas. Una de las más conocidas es la polifenoloxidasa, que al reaccionar con el oxígeno genera el pardeamiento enzimático, observable en productos como la manzana, la papa y la pera cuando se exponen al aire tras ser cortadas. Cambios en el color, especialmente el oscurecimiento, afectan la percepción del consumidor.


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
