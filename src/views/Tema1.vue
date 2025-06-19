<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades de frutas y verduras

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2
      .col-10.col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0.z-2(data-aos="fade-up")(src="@/assets/curso/temas/tema1/1.png" alt="Mujer preparando frutas y verduras")
      .col-lg-7
        p.mb-4.mb-xl-5 Frutas y verduras son productos vegetales que se caracterizan por su riqueza nutricional, frescura, y papel fundamental en la dieta humana. Aunque frecuentemente se agrupan bajo la misma categoría, presentan diferencias importantes en su estructura, sabor, función y características culinarias. Son altamente perecederos debido a su alto contenido de agua y a sus procesos metabólicos posteriores a la cosecha.
        .cajon.color-primario.p-4
          p.mb-0 Estas características exigen una correcta clasificación y conocimiento técnico para su manejo y conservación adecuada. Comprender sus propiedades facilita su aprovechamiento en procesos de transformación, como la elaboración de conservas.

    Separador

    #t_1_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.1	Diferencias entre frutas y verduras
    
    p.mb-4 Las frutas se desarrollan a partir del ovario de la flor y contienen semillas. Generalmente, tienen un sabor dulce o ácido y se consumen crudas. Por ejemplo, el mango, la manzana y la fresa. Las verduras, en cambio, incluyen otras partes comestibles de la planta, como hojas, tallos, raíces, bulbos o flores. Son menos dulces y se consumen cocidas o crudas, como la espinaca, la zanahoria o el brócoli.
 
    TabsC.color-acento-contenido
      .p-0(titulo="Frutas")
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-md-0
            h4 Frutas
            p.mb-4 Las frutas son productos que se desarrollan a partir del ovario de una flor, generalmente contienen semillas, y presentan un sabor dulce o ácido. Son mayormente consumidas crudas y aportan gran cantidad de vitaminas y agua.

            h4 Características principales
            ul.checklist.ms-4
              li Se desarrollan del ovario de la flor.
              li Contienen semillas.
              li Sabor dulce o ácido.
              li Mayormente se consumen crudas.
        
          .col-10.col-sm-8.col-lg-4
            figure
              img(data-aos="fade-left")(src='@/assets/curso/temas/tema1/2.png', alt='Frutas variadas')

      .p-0(titulo="Verdudas")
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-md-0
            h4 Verduras
            p.mb-4.pe-xl-5 Las verduras incluyen otras partes comestibles de la planta, como hojas, raíces, tallos, flores o bulbos. Tienen un sabor más suave o amargo y pueden consumirse cocidas o crudas según el tipo.

            h4 Características principales
            ul.checklist.ms-4
              li Provienen de hojas, tallos, raíces u otras partes.
              li Generalmente no contienen semillas.
              li Sabor suave o amargo.
              li Se consumen cocidas o crudas.
        
          .col-10.col-sm-8.col-lg-4
            figure
              img(data-aos="fade-left")(src='@/assets/curso/temas/tema1/3.png', alt='Frutas variadas')

    Separador

    #t_1_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.2	Clasificación de frutas

    p.mb-4 Las frutas pueden clasificarse por varios criterios: según su textura, contenido de agua o forma de crecimiento.

    .row.justify-content-center.align-items-center.z-2
      .col-8.col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/temas/tema1/4.png', alt='Frutas clasificadas por textura')
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordion-conservas")
          div(titulo="Por tipo de fruto")
            p Las frutas pueden clasificarse por la estructura de su fruto, es decir, si tienen pulpa jugosa o si son secas con bajo contenido de agua.
            ul.checklist.ms-4
              li <strong>Carnosas</strong>: tienen pulpa jugosa. <strong>Ejemplo</strong>: melón, sandía, mango entre otros.
              li <strong>Secas</strong>: presentan poco o nula cantidad de agua. <strong>Ejemplo</strong>: nueces y almendras.
          div(titulo="Por clima de cultivo")
            p El tipo de fruta también depende del clima donde se desarrolla. Se clasifican en tropicales y templadas, según la temperatura y altitud.
            ul.checklist.ms-4
              li <strong>Tropicales</strong>: requieren clima cálido. <strong>Ejemplo</strong>: papaya y guayaba.
              li <strong>Templadas</strong>: se cultivan en climas moderados y estaciones marcadas. <strong>Ejemplo</strong>: manzana y pera.
          div(titulo="Por comportamiento respiratorio")
            p Las frutas se clasifican según si continúan madurando o no después de la cosecha. Este criterio es clave para el almacenamiento y conservación.
            ul.checklist.ms-4
              li <strong>Climatéricas</strong>: continúan madurando después de cosechadas. <strong>Ejemplo</strong>: banana y mango.
              li <strong>No climatéricas</strong>: no maduran más tras la cosecha. <strong>Ejemplo</strong>: uva y piña.
         
    Separador
    .fullwidth-bg.fullwidth-bg--2.d-none.d-xl-block
    #t_1_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.3	Clasificación de verduras

    img.mb-4.mb-lg-5.z-2(data-aos="fade-up" src="@/assets/curso/temas/tema1/5.jpg" alt="Verduras clasificadas por parte de la planta")
    
    p.mb-4.text-center.fw-bold.z-2 Las verduras también pueden agruparse según la parte de la planta que se consume:

    .tarjeta.conservas-slyder.p-4.p-lg-5.pb-lg-4.mb-4.mb-lg-5.z-2
      SlyderA(tipo="b")
        .row.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/6.png', alt='lechuga, acelga, espinaca')
          .col-md-6.col-lg-8
            h5 Hojas comestibles
            p La temperatura influye directamente en la tasa de respiración del producto vegetal. Un exceso de calor acelera el proceso de maduración y deterioro, mientras que temperaturas bajas pueden provocar daños por frío, afectando la textura y el sabor.
            p <strong>Ejemplos</strong>: lechuga, acelga, espinaca, entre otras.
        .row.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/7.png', alt='zanahoria y remolacha.')
          .col-md-6.col-lg-8
            h5 Raíces comestibles
            p Son las partes subterráneas que almacenan nutrientes. Se caracterizan por su textura crujiente y alta concentración de carbohidratos. Son resistentes y se almacenan bien.
            p <strong>Ejemplos</strong>: zanahoria y remolacha.
        .row.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/8.png', alt='apio y espárrago')
          .col-md-6.col-lg-8
            h5 Tallos comestibles
            p Se consumen los tallos tiernos y fibrosos. Son crujientes y jugosos, con bajo contenido calórico. Se usan en ensaladas, sopas y batidos.
            p <strong>Ejemplos</strong>: apio y espárrago.
        .row.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/9.png', alt='cebolla y ajo')
          .col-md-6.col-lg-8
            h5 Bulbos comestibles
            p Los bulbos son estructuras subterráneas que almacenan nutrientes. Poseen compuestos sulfurados con propiedades antibacterianas. Se usan como base aromática en múltiples preparaciones.
            p <strong>Ejemplos</strong>: cebolla y ajo.
        .row.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/10.png', alt='brócoli y coliflor.')
          .col-md-6.col-lg-8
            h5 Flores comestibles
            p Son las flores de la planta que se cosechan antes de abrir. Ricas en antioxidantes como glucosinolatos. Se deben cocer ligeramente para conservar su valor nutricional.
            p <strong>Ejemplos</strong>: brócoli y coliflor.
        .row.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/11.png', alt='Manos recolectando tomates')
          .col-md-6.col-lg-8
            h5 Frutos verdes comestibles
            p Aunque botánicamente son frutos, se consumen inmaduros como verduras. Tienen alto contenido de agua y aportan frescura. Ideales para ensaladas.
            p <strong>Ejemplos</strong>: pepino, pimentón, tomate (inmaduro) entre otros.

    .cajon.color-secundario.p-4(data-aos="fade-left")
      p.mb-0 Esta clasificación permite aplicar tratamientos poscosecha específicos y elegir las mejores opciones para conservación y transformación.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
