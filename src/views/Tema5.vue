<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Alteraciones físicas, químicas y microbiológicas

    .fullwidth-bg.fullwidth-bg--8.d-none.d-lg-block
    .row.justify-content-center.align-items-stretch.z-2
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        figure
          img.mb-4(data-aos="fade-up")(src="@/assets/curso/temas/tema5/1.png" alt="Imagen decorativa")
      .col-lg-8
        p Las frutas y verduras están expuestas a diversos tipos de alteraciones durante la cosecha, el transporte, el almacenamiento y la comercialización. Estas alteraciones afectan su calidad visual, sensorial y sanitaria, y se clasifican en tres grandes grupos: físicas, químicas y microbiológicas.

        #t_5_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
          h3 5.1 Alteraciones físicas

        p Son daños visibles que comprometen la apariencia y aceptabilidad del producto. Generalmente ocurren por malas prácticas de manejo. Incluyen:

        ul.checklist
          li <strong>Golpes y cortes</strong>: ocurren durante la cosecha, transporte o almacenamiento.
          li <strong>Deshidratación</strong>: causada por baja humedad relativa.
          li <strong>Quemaduras por frío o calor</strong>: daño tisular al almacenar fuera del rango de temperatura óptimo.
          li <strong>Cambios de color y textura</strong>: por maduración o senescencia acelerada.

    Separador

    #t_5_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 5.2 Alteraciones químicas

    p.mb-4.mb-lg-5.z-2 Se deben a reacciones internas, naturales o inducidas que modifican la composición del alimento, afectando su sabor, color, valor nutritivo y estabilidad:

    .row.justify-content-center.align-items-center.z-2
      .col-sm-6.col-lg-3
        figure
          img.mb-4(data-aos="fade-up")(src="@/assets/curso/temas/tema5/2.png" alt="Imagen decorativa")
      .col-lg-9
        TabsA.color-secundario
          .tarjeta.bg-color-secundario-s10.p-4.rounded-2(titulo="Pardeamiento enzimático")
            p Es un cambio de color que oscurece frutas y verduras cuando se cortan o dañan. Ocurre por la acción de una enzima llamada polifenoloxidasa (PPO), que reacciona con el oxígeno del aire. 
          .tarjeta.bg-color-secundario-s10.p-4.rounded-2(titulo="Liposoxidación")
            p Es la degradación de las grasas insaturadas presentes en algunos vegetales, especialmente durante el almacenamiento. Esta reacción provoca sabores y olores rancios, afectando la calidad sensorial del producto.
          .tarjeta.bg-color-secundario-s10.p-4.rounded-2(titulo="Reacciones de Maillard")
            p Ocurren cuando los azúcares naturales se combinan con proteínas en presencia de calor, lo que genera un cambio de color (dorado) y sabor característico. Es común durante procesos de cocción o secado.

    Separador
    #t_5_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 5.3 Alteraciones microbiológicas

    p.mb-4.mb-lg-5 Son causadas por la acción de microorganismos como bacterias, hongos y levaduras, que se desarrollan en condiciones de humedad y temperatura favorables. Estas alteraciones representan un riesgo para la inocuidad y generan importantes pérdidas económicas.

    .row.justify-content-start.align-items-stretch.z-2
      .col-sm-6.col-lg-4.mb-4.mb-xl-0
        .numbered-card.p-4.color-verde-claro(data-aos="flip-left")
          .numbered-card__img.mb-4
            figure
              img(src="@/assets/curso/temas/tema5/3.png" alt="Imagen de factores internos")
          h5.numbered-card__title Podredumbre blanda bacteriana
          p.text-center.font-small <em>Erwinia spp.</em> es una bacteria que descompone los tejidos de frutas y hortalizas, generando una textura blanda, acuosa y un olor desagradable. Común en condiciones de mal manejo y almacenamiento prolongado.
      .col-sm-6.col-lg-4.mb-4.mb-xl-0
        .numbered-card.p-4.color-amarillo-claro(data-aos="flip-up")
          .numbered-card__img.mb-4
            figure
              img(src="@/assets/curso/temas/tema5/4.png" alt="Imagen de factores internos")
          h5.numbered-card__title Moho gris
          p.text-center.font-small <em>Botrytis cinerea</em> es un hongo que prolifera en ambientes húmedos. Se caracteriza por una capa gris visible que acelera la descomposición de frutas blandas y jugosas, especialmente en postcosecha.
      .col-sm-6.col-lg-4.mb-4.mb-xl-0
        .numbered-card.p-4.color-verde-claro(data-aos="flip-right")
          .numbered-card__img.mb-4
            figure
              img(src="@/assets/curso/temas/tema5/5.png" alt="Imagen de factores internos")
          h5.numbered-card__title <em>Antracnosis</em>
          p.text-center.font-small <em>Colletotrichum spp.</em> produce lesiones negras y hundidas que afectan la apariencia y calidad comercial de muchas frutas tropicales. Es común en climas cálidos y con exceso de humedad.
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
