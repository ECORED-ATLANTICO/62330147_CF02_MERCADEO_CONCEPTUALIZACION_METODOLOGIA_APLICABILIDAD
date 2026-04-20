<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Integración
      
    .bg-full-width.bg-fondo-1.px-4.py-3
      img(src="@/assets/curso/tema6/img01.png", alt="Imagen decorativa")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text La integración entre el análisis del consumidor y el diseño estratégico de marketing representa el punto en el que la información obtenida del mercado se transforma en decisiones empresariales concretas. Las organizaciones que logran convertir los datos del comportamiento del consumidor en estrategias estructuradas obtienen ventajas competitivas sostenibles, debido a que sus acciones comerciales responden a necesidades reales del mercado.
        

    .row.align-items-center.mb-3
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/tema6/img02.svg").mx-auto
      .col-lg
        p.mb-0 En este capítulo se estudia la relación entre el análisis del consumidor y las decisiones estratégicas, la construcción de propuestas estratégicas de mercadeo y la preparación del esquema estratégico base para el plan de marketing, integrando ejemplos empresariales, casos aplicados y herramientas prácticas que facilitan la aplicación del conocimiento en contextos organizacionales.

    separador

    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Decisiones estratégicas

    .row.mb-4.justify-content-center.align-items-center
      .bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema6/img03.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El análisis del consumidor constituye la base informativa sobre la cual se diseñan las decisiones estratégicas de marketing, ya que permite comprender necesidades, preferencias y patrones de comportamiento que orientan la formulación de productos, precios, canales y estrategias de comunicación. Cuando las organizaciones utilizan información confiable del consumidor, reducen la incertidumbre en la toma de decisiones comerciales.


    .row.mb-3.justify-content-center.align-items-center
      .col-lg-12.mb-4.mb-lg-4
        p.mb-0 La relación entre análisis del consumidor y estrategia se evidencia en la adaptación de productos y servicios a las características del mercado objetivo, además, la incorporación del análisis del consumidor en las decisiones estratégicas permite anticipar tendencias del mercado y ajustar las acciones comerciales de forma oportuna, incrementando la competitividad organizacional.


      .col-lg-10.col-md-12
        .cajon.bg-color-c3.p-4.mb-0
          p.mb-0 Insight. las empresas que integran analítica de clientes en la planificación estratégica aumentan la efectividad de sus campañas comerciales.

    separador

    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Propuestas estratégicas

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/img04.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-3(data-aos="fade-right") La construcción de propuestas estratégicas de mercadeo implica definir acciones organizadas orientadas al logro de objetivos comerciales, teniendo en cuenta el análisis del mercado, la segmentación y el posicionamiento del producto, estas propuestas establecen el rumbo de las actividades comerciales y orientan la asignación de recursos empresariales.

        .container.mb-4
          .row.align-items-center.bg-color-2.p-4.mb-0.br-15
            .col-lg
              p.mb-0 En el entorno empresarial, las propuestas estratégicas se elaboran mediante el análisis de oportunidades de mercado, el estudio de la competencia y la evaluación de capacidades organizacionales. Por ejemplo, una empresa de servicios financieros puede diseñar una estrategia orientada al segmento de jóvenes emprendedores mediante productos de crédito flexibles y campañas digitales especializadas.
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema6/img05.svg").mx-auto

        p.mb-0 La correcta formulación de propuestas estratégicas facilita la coordinación de las diferentes áreas de la organización, garantizando coherencia entre los objetivos corporativos y las acciones comerciales implementadas en el mercado.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/tema3/img10.svg")
        h3.titulo-con-imagen__texto xxxxxx

    .bg-full-width.bg-fondo-3.tarjeta.mb-5
      .py-4.px-lg-0
        SlyderA(tipo="b").bg-color-white.p-3.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-2
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              h4.mb-3 Mercado objetivo	
              p.mb-0 Segmento de consumidores seleccionado a partir del análisis de variables demográficas, psicográficas, conductuales y geográficas, cuya elección responde al potencial de rentabilidad, tamaño del mercado, accesibilidad y alineación con las capacidades de la empresa.
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema6/img06.png", alt="Crema pastelera").mx-auto
          .row.justify-content-center.align-items-center.p-2
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              h4.mb-3 Objetivos comerciales	
              p.mb-0 Metas cuantitativas y cualitativas orientadas al crecimiento de ventas, participación de mercado, posicionamiento de marca y fidelización de clientes, definidas en horizontes de corto, mediano y largo plazo y alineadas con la planeación estratégica organizacional.

            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema6/img07.png", alt="Crema pastelera").mx-auto
          .row.justify-content-center.align-items-center.p-2
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              h4.mb-3 Estrategias de marketing	
              p.mb-0 Conjunto de decisiones tácticas y estratégicas relacionadas con el diseño del producto o servicio, la política de precios, los canales de distribución y las acciones de comunicación y promoción, orientadas a satisfacer las necesidades del mercado objetivo y generar diferenciación competitiva.

            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema6/img09.png", alt="Crema pastelera").mx-auto
          .row.justify-content-center.align-items-center.p-2
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              h4.mb-3 Indicadores de gestión	
              p.mb-0 Métricas cuantificables utilizadas para medir el desempeño de las estrategias implementadas, tales como crecimiento de ventas, tasa de conversión, participación de mercado, retorno de inversión en marketing (ROI) y niveles de satisfacción del cliente.

            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema6/img08.png", alt="Crema pastelera").mx-auto

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
      .col-lg-10.col-md-12      
        .bg-color-5
          .row.justify-content-center.align-items-center.p-4
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema6/img10.svg", data-aos="zoom-in").mx-auto
            .col-lg
              .row.justify-content-center.align-items-center
                .col-lg.mb-4.mb-lg-0
                  p.mb-0 Veamos un ejemplo de una propuesta estratégica: 
                .col-lg-auto.text-center
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Zeih25sCGfw" target="_blank")
                    span Ver PDF
                    i.fas.fa-file-pdf

                  
    separador

    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3 Plan de marketing

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/img11.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-3(data-aos="fade-right") El esquema estratégico base del plan de marketing corresponde al documento estructurado que sintetiza la información del mercado, la segmentación del consumidor, los objetivos comerciales y las estrategias que la empresa implementará para alcanzar sus metas, este esquema sirve como guía de acción para la gestión comercial organizacional.
    
        .row.align-items-center.mb-0.br-15
          .col-lg
            p.mb-0 La preparación del esquema estratégico implica consolidar información del diagnóstico del mercado, análisis del consumidor, evaluación de la competencia y definición de estrategias de marketing, su elaboración facilita la coordinación de las acciones de marketing, permite monitorear resultados y favorece la toma de decisiones oportunas para ajustar las estrategias comerciales según la evolución del mercado.

          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/tema6/img12.svg").mx-auto
                
            

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-md-12.mb-5      
        .bg-color-5
          .row.justify-content-center.align-items-center.p-4
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema6/img13.svg", data-aos="zoom-in").mx-auto
            .col-lg
              .row.justify-content-center.align-items-center
                .col-lg.mb-4.mb-lg-0
                  p.mb-0 Lo invitamos a ver el siguiente video educativo por medio del cual podrá profundizar en temática desarrollada.
                  p.mb-0 Plan de marketing digital
                  p.mb-0 Descripción: este video del Sistema de Recursos Educativos Digitales SENA presenta los pasos para elaborar un plan de marketing digital.
 
                .col-lg-auto.text-center
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=owxaHr0-5kQ" target="_blank")
                    span Ver video
                    i.fas.fa-play

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right").mb-4
        .tarjeta-cita-fondo.p-4.p-lg-5
          .row.justify-content-end.align-items-center
            .col-lg-auto
              img(
                src='@/assets/curso/tema1/img25.png',
                class="img-flotante-tema1"
              )
            .col-lg-7(style="position: relative; z-index: 3;").mb-0.mb-lg-0
              .bloque-texto-b.p-0
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  h5.mb-0
                    | Las decisiones estratégicas responsables se construyen cuando el conocimiento del consumidor se combina con la integridad en la gestión empresarial.                 
                  i.fas.fa-quote-right



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



</template>

<script>
export default {
  name: 'Tema6',
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
