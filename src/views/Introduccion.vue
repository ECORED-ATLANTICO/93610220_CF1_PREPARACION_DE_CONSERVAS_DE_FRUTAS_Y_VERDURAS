<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4.mb-lg-5 El componente formativo “Generalidades, ingredientes y aspectos higiénicos en la preparación de conservas” explora los principios fundamentales de la conservación de frutas y verduras, centrándose en su clasificación, composición, cambios poscosecha e higiene durante el proceso. Comprender estos elementos es clave para garantizar la inocuidad, durabilidad y calidad de las conservas elaboradas.

    .row.justify-content-center.align-items-center.mb-5.bg-color-secundario-s10
      .col-md-6.col-lg-3
        figure
          img(data-aos="fade-up")(src='@/assets/curso/introduccion/1.png', alt='Texto que describa la imagen').mx-auto
      .col-lg-9
        p.mb-0 A lo largo de este material, el aprendiz conocerá las diferencias entre frutas y verduras, sus componentes nutricionales como vitaminas, minerales y sustancias bioactivas, así como los mecanismos de alteración que afectan la calidad después de la cosecha. También se abordarán los ingredientes básicos y funcionales utilizados en la preparación de conservas, junto con los tipos de envases y sus características técnicas. Desde un enfoque práctico, se destacan las Buenas Prácticas de Manufactura (BPM), la higiene, la desinfección y la normativa sanitaria, capacitando al aprendiz para elaborar conservas seguras y de calidad.

    
    .video.mb-5
      <iframe width="560" height="315" src="https://www.youtube.com/embed/mdou0qrsGow?si=sMIZBtkr-BzQdegD" title="Video 1.	Generalidades, ingredientes y aspectos higiénicos en la preparación de conservas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>

<script>
export default {
  name: 'Introduccion',
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
