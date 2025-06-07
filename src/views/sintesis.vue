<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo “Generalidades, ingredientes y aspectos higiénicos en la preparación de conservas” permite comprender los fundamentos, procesos y herramientas que garantizan la calidad e inocuidad de frutas y verduras, desde su caracterización hasta su conservación. Se inicia con el estudio de las diferencias entre frutas y verduras, así como su clasificación según características botánicas y de consumo. Posteriormente, se profundiza en los componentes nutricionales esenciales como vitaminas, minerales, sustancias bioactivas y pigmentos, lo que permite establecer su importancia en la salud y su comportamiento en la poscosecha. Asimismo, se analizan los cambios fisiológicos que ocurren luego de la recolección y los mecanismos de alteración de la calidad, proporcionando herramientas para identificar los riesgos de pérdida de valor nutricional y comercial. Se presentan también los factores internos y externos que influyen en la calidad, así como las alteraciones físicas, químicas y microbiológicas, aplicables tanto en el almacenamiento como en la transformación de estos productos. La documentación aborda los métodos de conservación físicos, químicos y biotecnológicos utilizados en la industria y el hogar. Para fortalecer la aplicación de estos conceptos, se detallan los aspectos higiénicos en la elaboración de conservas, comparando prácticas tradicionales e innovadoras como la selección de ingredientes, equipos y las buenas prácticas de higiene y manipulación. Finalmente, se analiza el potencial de innovación en conservación como herramienta clave para la seguridad alimentaria, sostenibilidad y aprovechamiento de los recursos agrícolas.
    .row.justify-content-center
      .mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Generalidades, ingredientes y aspectos higiénicos en la preparación de conservas")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
