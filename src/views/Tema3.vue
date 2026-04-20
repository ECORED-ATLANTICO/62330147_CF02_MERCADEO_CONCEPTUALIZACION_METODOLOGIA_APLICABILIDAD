<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Análisis del consumidor

    .bg-full-width.bg-fondo-1.px-4.py-3
      img(src="@/assets/curso/tema3/img01.png", alt="Imagen decorativa")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text  El análisis del consumidor permite comprender las razones que motivan las decisiones de compra y los factores que determinan la preferencia por determinados productos o servicios. Las organizaciones que investigan de manera sistemática el comportamiento del consumidor logran identificar patrones de consumo, tendencias emergentes y oportunidades de mercado que facilitan la formulación de estrategias comerciales más efectivas y orientadas al cliente.
        
    .row.mb-3.justify-content-center.align-items-center
      .col-lg-2.col-md-8.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img02.svg", data-aos="zoom-in")
      .col-lg-10
        p.mb-3(data-aos="fade-right") La identificación de perfiles de consumidor, junto con la segmentación basada en estilos de vida, intereses y actitudes, permite a las empresas diseñar propuestas diferenciadas que incrementan la satisfacción del cliente y fortalecen la competitividad organizacional.

        p.mb-0(data-aos="fade-right") A lo largo de este capítulo se abordarán los principales métodos de análisis del comportamiento del consumidor, la identificación de perfiles de cliente, la segmentación psicográfica y conductual, así como la aplicación práctica de estos elementos en la toma de decisiones comerciales. El desarrollo se apoyará en ejemplos empresariales y herramientas de análisis que facilitan la comprensión de la relación entre conocimiento del consumidor y diseño de estrategias de mercado efectivas.
     

    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Métodos

    p.mb-4 El análisis del comportamiento del consumidor se apoya en métodos sistemáticos de investigación que permiten comprender cómo las personas identifican necesidades, evalúan alternativas y toman decisiones de compra, estos métodos incluyen técnicas cuantitativas y cualitativas orientadas a recopilar información sobre hábitos de consumo, preferencias, motivaciones y percepciones del mercado (Malhotra, 2019).

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img3.png", alt="alt")
        .bg-color-6.br-25
          .p-4
            h4.mb-3 Cuantitativa
            p.mb-0 Entre los métodos cuantitativos se encuentran las encuestas estructuradas, el análisis estadístico de bases de datos y los estudios de panel de consumidores, los cuales permiten identificar patrones de comportamiento medibles y comparables en el tiempo. Por ejemplo, las cadenas de supermercados analizan el historial de compras registrado en sus sistemas de fidelización para identificar tendencias de consumo y ajustar la oferta de productos según la demanda observada.
  
      .col-lg-6.col-md-12.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img4.png", alt="alt")
        .bg-color-1.br-25
          .p-4
            h4.mb-3 Cualitativa
            p.mb-0 Los métodos cualitativos como entrevistas en profundidad, grupos focales y observación del comportamiento del consumidor permiten comprender aspectos emocionales y motivacionales que no siempre pueden medirse numéricamente. Estas técnicas facilitan la interpretación de percepciones, actitudes y experiencias de compra, proporcionando información estratégica para el diseño de productos, campañas publicitarias y estrategias de posicionamiento.

    //-     .crd_hover_txt(data-aos="flip-left").tarjeta
    //-       .crd_hover_txt--img
    //-         figure
    //-           img(src="@/assets/curso/tema3/img03.png", alt="alt")
    //-       .crd_hover_txt--body
    //-         h4.mb-3 Reporte de ventas diarias
    //-         p.mb-0 Con este tipo de reportes, los gerentes podrán supervisar...
    
    //-   .col-xl-6.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
    //-     .crd_hover_txt(data-aos="flip-left").tarjeta
    //-       .crd_hover_txt--img
    //-         figure
    //-           img(src="@/assets/curso/tema1/11.png", alt="alt")
    //-       .crd_hover_txt--body
    //-         h4.mb-3 Reporte de ventas semanal
    //-         p.mb-0 Con estos reportes semanales, podrá encontrar las dificultades...
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Tabla 1.
          span Métodos de análisis del comportamiento del consumidor

        .tabla-a.color-acento-contenido.mb-0
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th Método
                th Características
                th Ventajas
                th Ejemplos de aplicación
            tbody
              tr
                td Encuestas.
                td Recopilan datos estructurados.
                td Permiten análisis estadístico.
                td Estudios de satisfacción.
              tr
                td Grupos focales.
                td Discusión guiada de consumidores.
                td Profundizan percepciones.
                td Evaluación de nuevos productos.
              tr
                td Observación.
                td Registro del comportamiento real.
                td Identifica hábitos reales.
                td Análisis en puntos de venta.
              tr
                td Analítica de datos.
                td Procesamiento de grandes bases de datos.
                td Detecta patrones de consumo.
                td Historial de compras digitales.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .cajon.bg-color-c1.p-4.mb-0
          p.mb-0 Pregunta de aplicación ¿Qué método sería más adecuado para evaluar la aceptación inicial de un nuevo servicio digital y por qué?



    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Perfiles

      
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img05.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-3(data-aos="fade-right") La identificación de perfiles de consumidor consiste en la clasificación de los clientes según características comunes que permiten comprender sus necesidades, preferencias y comportamientos de compra. Este proceso facilita la construcción de representaciones conocidas como buyer personas, que sintetizan información demográfica, psicográfica, conductual y motivacional relevante para la toma de decisiones comerciales.
        
        .container
          .row.align-items-center.bg-color-5.p-4.mb-0.br-15
            .col-lg
              p.mb-0 Las empresas utilizan herramientas de análisis de datos, estudios de mercado y sistemas de gestión de clientes (CRM) para identificar patrones de consumo y establecer perfiles representativos. Por ejemplo, una empresa de telecomunicaciones puede identificar perfiles como “usuarios intensivos de datos”, “clientes corporativos” o “consumidores de bajo consumo”, permitiendo diseñar planes de servicio diferenciados para cada segmento.  
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/img06.svg").mx-auto

    p.mb-4 Además, la construcción de perfiles de consumidor permite anticipar comportamientos de compra, mejorar la personalización de la comunicación comercial y optimizar las estrategias de fidelización. Las organizaciones que desarrollan perfiles claros de sus clientes logran incrementar la efectividad de sus campañas de marketing y fortalecer la relación con sus mercados objetivo.

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img07.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Ejemplo aplicado. Una cadena de gimnasios diseña programas diferenciados para perfiles como “usuarios orientados a salud”, “usuarios deportivos competitivos” y “usuarios recreativos”. Los perfiles de consumidor permiten orientar con mayor precisión la segmentación de mercados y el diseño de propuestas de valor diferenciadas.


    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Segmentación

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.mb-3.mb-lg-0
        p.mb-3(data-aos="fade-right") La segmentación psicográfica y conductual clasifica a los consumidores considerando variables relacionadas con estilos de vida, valores, personalidad, hábitos de compra y niveles de uso del producto. Este tipo de segmentación permite comprender dimensiones profundas del comportamiento del consumidor que van más allá de los criterios demográficos tradicionales (Armstrong & Kotler, 2017).
        
        .container
          .row.align-items-center
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/img08.svg").mx-auto
            .col-lg.p-0 
              .bg-color-5.p-4.mb-0.br-15
                p.mb-0 La segmentación psicográfica identifica características como intereses, actividades y opiniones de los consumidores, mientras que la segmentación conductual se centra en la frecuencia de compra, beneficios buscados, nivel de lealtad y ocasión de consumo. Por ejemplo, una empresa de bebidas energéticas puede segmentar su mercado en consumidores “deportivos”, “estudiantes” y “usuarios ocasionales”, cada uno con mensajes promocionales diferentes.
                
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema3/img09.svg", data-aos="zoom-in")


    p.mb-5 Este tipo de segmentación ha ganado relevancia gracias al uso de tecnologías de análisis de datos y plataformas digitales que permiten monitorear el comportamiento de los consumidores en tiempo real. Las organizaciones utilizan esta información para diseñar campañas personalizadas y desarrollar estrategias de marketing más efectivas, aumentando la probabilidad de conversión comercial.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/tema3/img10.svg")
        h3.titulo-con-imagen__texto Tipos de segmentación

    .bg-full-width.bg-fondo-3.tarjeta.mb-5
      .py-4.px-lg-0
        SlyderA(tipo="b").bg-color-white.p-3.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-2
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              h4.mb-3 Psicográfica
              p.mb-0 Usa variables como estilo de vida, valores, personalidad y se aplica en diseño de campañas emocionales.
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema3/img12.png", alt="Crema pastelera").mx-auto
          .row.justify-content-center.align-items-center.p-2
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              h4.mb-3 Conductual
              p.mb-0 Usa variables como la frecuencia de uso, beneficios buscados y lealtad y se aplica en programas de fidelización.
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema3/img13.png", alt="Crema pastelera").mx-auto

    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Posicionamiento
      
      

    .container
      .row.mb-5.justify-content-center.align-items-center
        .bg-color-2.p-0
          .row.justify-content-center.align-items-center
            
            .col-lg-5.col-md-8.mb-3.mb-lg-0.mt-4.mt-lg-0
              figure
                img(src="@/assets/curso/tema3/img14.png", data-aos="zoom-in")

            .col-lg-7.mb-0.mb-lg-0(data-aos="fade-right").p-5.p-lg-4

              p.mb-0 El análisis del consumidor se convierte en un insumo fundamental para la formulación de decisiones comerciales relacionadas con el diseño de productos, la fijación de precios, la selección de canales de distribución y la comunicación de marketing. Las empresas que fundamentan sus decisiones en información del consumidor logran reducir la incertidumbre y mejorar la efectividad de sus estrategias competitivas. 
                  
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-9.order-2.order-lg-1
        p.mb-3(data-aos="fade-right") En la práctica empresarial, el análisis del consumidor permite identificar oportunidades de mercado, detectar cambios en los hábitos de consumo y evaluar la aceptación de nuevos productos antes de su lanzamiento. Por ejemplo, las empresas de tecnología realizan pruebas piloto con segmentos específicos de usuarios para validar funcionalidades antes de lanzar versiones definitivas al mercado.
        
        .row.align-items-center.mb-0
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/tema3/img16.svg").mx-auto
          .col-lg
            p.mb-0 Asimismo, la información derivada del análisis del consumidor facilita la personalización de campañas publicitarias, el desarrollo de promociones dirigidas y la optimización de la experiencia del cliente en los diferentes puntos de contacto. Las organizaciones que integran el análisis del consumidor en sus procesos estratégicos logran fortalecer su posicionamiento y mejorar la satisfacción de sus clientes.
            
      .col-lg-3.col-md-8.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img17.png", data-aos="zoom-in")



    .bloque-texto-g.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Ejemplos aplicados. Una empresa de alimentos ajusta el tamaño de sus empaques luego de identificar, mediante estudios de consumo, una preferencia creciente por presentaciones individuales. Una compañía de servicios financieros adapta sus productos de crédito según los perfiles de riesgo y comportamiento de pago identificados en sus clientes.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Tabla 2.
          span Decisiones empresariales apoyadas en el análisis del consumidor

        .tabla-a.color-acento-contenido.mb-0
          table
            caption Nota. Adaptado de Schiffman & Wisenblit (2019).
            thead
              tr
                th Decisiones empresariales
                th Información utilizada
                th Beneficio estratégico
            tbody
              tr
                td Desarrollo de productos.
                td Preferencias y necesidades del consumidor.
                td Mayor aceptación del mercado.
              tr
                td Estrategias de precios.
                td Sensibilidad al precio.
                td Optimización de rentabilidad.
              tr
                td Comunicación comercial.
                td Perfil del consumidor.
                td Mayor efectividad publicitaria.
              tr
                td Distribución.
                td Hábitos de compra.
                td Mejora de cobertura de mercado.


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .tarjeta-cita-fondo.p-4.p-lg-5
          .row.justify-content-start.align-items-center
            .col-lg-7(style="position: relative; z-index: 3;").mb-0.mb-lg-0
              .bloque-texto-b.p-0
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  h5.mb-0
                    | Comprender al consumidor no solo permite vender mejor, también implica actuar con responsabilidad, respetando sus necesidades reales y promoviendo decisiones de consumo conscientes
                  i.fas.fa-quote-right
            .col-lg-auto
              img(
                src='@/assets/curso/tema1/img30.png',
                class="img-flotante-tema2"
              )


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
