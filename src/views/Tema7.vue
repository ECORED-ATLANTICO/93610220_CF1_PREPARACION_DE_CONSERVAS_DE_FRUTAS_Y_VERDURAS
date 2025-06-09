<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Aspectos higiénicos en la elaboración de conservas

    .row.justify-content-center.align-items-center.z-2
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/temas/tema7/1.png" alt="Imagen decorativa")
      .col-lg-7
        p El proceso de elaboración de conservas requiere una atención rigurosa a normas higiénicas que aseguren la inocuidad de los alimentos, la estabilidad del producto a lo largo del tiempo y la protección del consumidor frente a posibles riesgos sanitarios. Estas normas comprenden desde la selección y preparación de los ingredientes, el uso de materiales adecuados, el control de equipos y procesos, hasta la aplicación de buenas prácticas de higiene y la incorporación de tecnologías innovadoras.
        .cajon.color-acento-contenido
          p.mb-0 El cumplimiento de normas higiénicas no solo es una exigencia regulatoria, según lo establecido por autoridades sanitarias nacionales e internacionales como el INVIMA o el Codex Alimentarius, sino también un elemento clave para garantizar la calidad organoléptica y microbiológica del alimento conservado.


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
