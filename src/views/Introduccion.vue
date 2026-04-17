<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-1.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El componente formativo aborda los fundamentos conceptuales y metodológicos necesarios para comprender el comportamiento del consumidor y la formulación de estrategias de mercadeo orientadas al mercado objetivo. Se centra en el análisis de factores psicológicos, sociales y culturales que influyen en las decisiones de compra, así como en la construcción de propuestas estratégicas coherentes con el diagnóstico del mercado. Este enfoque permite comprender el proceso mediante el cual las organizaciones transforman la información del mercado en acciones estratégicas que generan valor empresarial.
        

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-md-9.mb-4.mb-lg-0
        img(src="@/assets/curso/intro/img02.png", alt="alt")
      .col-lg-9.col-md-12
        p.mb-4 La importancia del componente radica en que las decisiones comerciales modernas requieren comprender profundamente a los consumidores y anticipar sus necesidades. Las empresas que logran interpretar correctamente las motivaciones, expectativas y hábitos de consumo tienen mayores posibilidades de posicionarse competitivamente en el mercado. Por ello, el estudio del comportamiento del consumidor y la formulación de estrategias de mercadeo constituyen competencias esenciales para profesionales del área comercial, marketing y gestión empresarial.
          
        .bg-color-2.p-4.mb-0.br-15
          .row.align-items-center 
            .col-lg
              p.mb-0 El contenido se desarrollará mediante el análisis conceptual, ejemplos empresariales, aplicación de modelos estratégicos y ejercicios de interpretación de casos reales de mercado. Cada capítulo integrará herramientas de análisis, tablas de apoyo conceptual y recursos audiovisuales educativos que facilitarán la comprensión práctica del contenido. Este enfoque permitirá al aprendiz conectar la teoría con situaciones empresariales reales y fortalecer su capacidad para diseñar estrategias comerciales efectivas.              
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/intro/img03.svg", style="max-width: 90px").mx-auto
              

    //- figure.mb-5
    //-   .video.mb-2
    //-     iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //-   figcaption Video: Leyenda del video

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
