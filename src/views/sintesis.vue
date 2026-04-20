<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-3.justify-content-center.align-items-center
      .col-lg-2.col-md-8.mb-4.mb-lg-0.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/img01.svg", data-aos="zoom-in")
      .col-lg-10
        p.mb-3 El Componente formativo 02 ofrece al aprendiz una comprensión integral del comportamiento del consumidor como base para la formulación de estrategias de mercadeo efectivas, abordando las variables culturales, sociales, personales y psicológicas que influyen en las decisiones de compra, así como los métodos de análisis que permiten interpretar las dinámicas del mercado.
        p.mb-0 Asimismo, el componente integra el análisis del consumidor con el diseño de estrategias comerciales, la construcción de propuestas de valor y la preparación de esquemas estratégicos base para el plan de mercadeo, fortaleciendo la capacidad del aprendiz para transformar la información del mercado en acciones estratégicas orientadas al logro de objetivos organizacionales.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
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
