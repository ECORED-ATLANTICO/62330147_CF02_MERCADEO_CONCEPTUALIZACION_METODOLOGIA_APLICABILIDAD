<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Diseño de estrategias

    .container
      .row.mb-3.justify-content-center.align-items-center
        .bg-color-3.p-0
          .row.justify-content-center.align-items-center
            
            .col-lg-5.col-md-8.mb-3.mb-lg-0.mt-4.mt-lg-0
              figure
                img(src="@/assets/curso/tema5/img01.png", data-aos="zoom-in")

            .col-lg-7.mb-0.mb-lg-0(data-aos="fade-right").p-5.p-lg-4
              p.mb-3 El diseño de estrategias de <em>marketing</em> orientadas al consumidor constituye uno de los enfoques más relevantes en la gestión empresarial moderna, ya que coloca las necesidades, expectativas y experiencias del cliente en el centro de las decisiones organizacionales. Las empresas que adoptan este enfoque logran construir relaciones duraderas con sus clientes, incrementar la fidelización y fortalecer su posicionamiento competitivo.
              p.mb-0 La formulación de estrategias centradas en el cliente requiere el análisis sistemático de la información del mercado, la identificación de segmentos con alto potencial y el desarrollo de propuestas de valor diferenciadas que respondan de manera efectiva a sus necesidades. En este capítulo se abordan los fundamentos de las estrategias centradas en el cliente y la construcción de propuestas de valor orientadas al mercado objetivo.

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Formulación

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-3 Las estrategias centradas en el cliente se basan en la comprensión profunda del comportamiento del consumidor, sus necesidades y expectativas, con el propósito de diseñar acciones comerciales orientadas a generar experiencias satisfactorias y relaciones sostenibles (Kotler & Keller, 2016). Este enfoque implica que las organizaciones adapten sus productos, servicios y procesos a las preferencias del cliente, priorizando la creación de valor antes que la simple venta de productos.
        p.mb-0 En la práctica empresarial, la formulación de estrategias centradas en el cliente requiere el uso de herramientas de análisis de datos, estudios de satisfacción y monitoreo de la experiencia del consumidor. Empresas como Amazon implementan sistemas de recomendación personalizados que utilizan información de compra y navegación para ofrecer productos alineados con los intereses del cliente, fortaleciendo su fidelización.
      .col-lg-3.col-md-8  
        figure
          img(src="@/assets/curso/tema5/img04.png", data-aos="zoom-in")


    .row.align-items-center.mb-5
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/tema5/img03.svg").mx-auto
      .col-lg
        p.mb-3 La implementación de estrategias centradas en el cliente también implica el diseño de programas de servicio posventa, atención personalizada y comunicación continua con el consumidor. Estas acciones fortalecen la confianza del cliente y generan ventajas competitivas sostenibles.

        .cajon.bg-color-c2.p-4.mb-0
          p.mb-0 <b>Insight:</b> las empresas que gestionan activamente la experiencia del cliente pueden incrementar la fidelización hasta en un 25 %.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Tabla 3.
          span Características de las estrategias centradas en el cliente

        .tabla-a.color-acento-contenido.mb-0
          table
            caption Nota. Elaboración propia con base en Kotler & Keller, (2016).
            thead
              tr
                th(width="20%") Característica
                th Descripción
            tbody
              tr
                td Enfoque en necesidades.
                td Las decisiones empresariales se fundamentan en el análisis sistemático de necesidades, expectativas, motivaciones y problemas del cliente, utilizando estudios de mercado, análisis de datos y retroalimentación continua para diseñar soluciones de valor.
              tr
                td Personalización.
                td Consiste en adaptar productos, servicios, mensajes y experiencias según las características y preferencias de cada segmento o cliente individual, apoyándose en tecnologías de información, CRM y análisis de comportamiento de consumo.
              tr
                td Experiencia del cliente.
                td Implica gestionar de manera integral cada punto de contacto entre la empresa y el consumidor, asegurando consistencia en el servicio, calidad en la atención y satisfacción durante todo el ciclo de compra y posventa.
              tr
                td Relación a largo plazo.
                td Se orienta a construir vínculos sostenibles mediante programas de fidelización, comunicación permanente, atención personalizada y generación de confianza, buscando incrementar la recompra y el valor del cliente en el tiempo.
    

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right").mb-3.mb-lg-0
        .tarjeta-cita-fondo-2.p-4.p-lg-5
          .row.justify-content-start.align-items-center
            .col-lg-7.z-3
              p.mb-4.fw-bold Escucha el podcast
              TarjetaAudio.color-acento-botones.mb-0(
                texto="<h4 class='mb-0'>xxxxx</h4>"
                :audio="require('@/assets/curso/tema5/img05.png')"
                @audio-hover="mostrarIndicadorTarjetaAudio = true"
                style="border: none !important; padding: 0 !important; background: transparent !important;"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-lg-auto
              img(
                src='@/assets/curso/tema5/img05.png',
                class="img-flotante-tema6"
              )
    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Propuesta de valor


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/img06.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-3(data-aos="fade-right") La propuesta de valor representa el conjunto de beneficios que una empresa ofrece a su mercado objetivo para satisfacer sus necesidades mejor que la competencia, esta propuesta integra atributos funcionales, emocionales y económicos que generan diferenciación y posicionamiento en el mercado.
        
        .container.mb-4
          .row.align-items-center.bg-color-2.p-4.mb-0.br-15
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema5/img07.svg").mx-auto
            .col-lg
              p.mb-0 La construcción de una propuesta de valor requiere identificar claramente el segmento objetivo, comprender sus necesidades prioritarias y diseñar beneficios específicos que respondan a dichas expectativas. Por ejemplo, la empresa Tesla ha construido su propuesta de valor alrededor de la innovación tecnológica, la sostenibilidad ambiental y el alto desempeño de sus vehículos eléctricos, diferenciándose significativamente de la competencia.

        p.mb-0 Una propuesta de valor efectiva debe comunicarse de manera clara en todas las acciones de <em>marketing</em> de la organización, incluyendo campañas publicitarias, diseño de productos, estrategias de precios y experiencia del cliente. Cuando las empresas alinean su propuesta de valor con las necesidades del consumidor, logran mayor preferencia de marca y posicionamiento competitivo.


        
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12          
        .titulo-sexto.mb-4.color-acento-contenido
          h5 
            b Figura 4. 
            span Elementos de la propuesta de valor
        figure.mb-2
          img.d-none.d-lg-block(src='@/assets/curso/tema5/img08.svg', alt='Beneficio funcional. Solución concreta a una necesidad. Beneficio emocional. Experiencia positiva del consumidor. Diferenciación. Elementos únicos frente a la competencia. Evidencia de valor. Garantías, certificaciones, testimonios.').mx-auto
          img.d-block.d-lg-none(src='@/assets/curso/tema5/img09.svg', alt='Beneficio funcional. Solución concreta a una necesidad. Beneficio emocional. Experiencia positiva del consumidor. Diferenciación. Elementos únicos frente a la competencia. Evidencia de valor. Garantías, certificaciones, testimonios.').mx-auto

        figcaption 
          b Nota. 
          | SENA, (2026).   


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12.mb-5      
        .bg-color-5
          .row.justify-content-center.align-items-center.p-4
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema5/img10.svg", data-aos="zoom-in").mx-auto
            .col-lg
              .row.justify-content-center.align-items-center
                .col-lg.mb-3.mb-lg-0
                  p.mb-0 Lo invitamos a ver el siguiente video educativo por medio del cual podrá profundizar en temática desarrollada.
                  p.mb-0 <b>Propuesta de valor</b>
                  p.mb-0 Descripción: este video presenta el concepto de propuesta de valor y el proceso básico de diseño, destacando cómo las empresas pueden solucionar necesidades o problemas reales de los clientes para generar preferencia, fidelidad y diferenciación competitiva. Se mencionan ejemplos y explicaciones didácticas que facilitan su aplicación práctica en la formulación de estrategias de <em>marketing</em>.
 
                .col-lg-auto.text-center
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Zeih25sCGfw" target="_blank")
                    span Ver video
                    i.fas.fa-play

                            
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .tarjeta-cita-fondo.p-4.p-lg-5
          .row.justify-content-end.align-items-center
            .col-lg-auto
              img(
                src='@/assets/curso/tema1/img32.png',
                class="img-flotante-tema3"
              )
            .col-lg-7(style="position: relative; z-index: 3;").mb-0.mb-lg-0
              .bloque-texto-b.p-0
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  h5.mb-0.text-bold
                    | Las estrategias que se construyen con honestidad hacia el cliente reflejan la integridad con la que una organización entiende su responsabilidad social.
                  i.fas.fa-quote-right

                
            



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
