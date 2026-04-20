<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Variables en el comportamiento


    .container
      .row.mb-5.justify-content-center.align-items-center
        .bg-color-2.p-0
          .row.justify-content-center.align-items-center
            
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right").p-4

              p.mb-0.ms-0.ms-lg-3 El análisis del comportamiento del consumidor es muy importante, ya que permite comprender las razones que motivan la compra, el consumo y la preferencia por determinados productos o servicios. Las decisiones de compra no dependen únicamente de factores económicos, sino que están influenciadas por múltiples variables sociales, culturales, personales y psicológicas que interactúan de manera dinámica en el entorno del individuo.

            .col-lg-5.col-md-8.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/img02.png", data-aos="zoom-in")

    
    .row.mb-3.justify-content-center.align-items-center
      .col-lg-3.col-md-8.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img03.png", data-aos="zoom-in")
      .col-lg-9.mb-3.mb-lg-0.order-1.order-lg-2
        p.mb-3(data-aos="fade-right") En el contexto empresarial, el análisis de estas variables permite diseñar estrategias comerciales más precisas, orientadas a segmentos específicos del mercado y alineadas con las necesidades reales de los consumidores. Las organizaciones que comprenden los factores que influyen en el comportamiento de compra logran anticipar tendencias, mejorar la experiencia del cliente y fortalecer su posicionamiento competitivo.

        .container
          .row.align-items-center
            .col-lg.p-0 
              .bg-color-5.p-4.mb-0.br-15
                p.mb-0 El presente capítulo aborda las principales variables que inciden en el comportamiento del consumidor, analizando sus características, su impacto en la toma de decisiones y su aplicación práctica en la gestión empresarial. Asimismo, se examina el papel de los entornos digitales en la transformación de los hábitos de consumo, aspecto clave en el marketing contemporáneo.

            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img04.svg").mx-auto

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Culturales y sociales

    .row.mb-4.mb-lg-5.justify-content-center.align-items-center
      .col-lg-9.mb-3.mb-lg-0
        p.mb-3(data-aos="fade-right") Las variables culturales y sociales constituyen uno de los factores más influyentes en el comportamiento del consumidor, ya que determinan valores, creencias, normas y patrones de conducta que orientan las decisiones de compra dentro de una sociedad determinada. La cultura define qué productos son aceptados, cómo se consumen y cuáles atributos son valorados por los consumidores, mientras que los factores sociales, como familia, grupos de referencia y roles sociales, influyen en la formación de preferencias individuales y colectivas (Kotler & Keller, 2016).
        .container
            .row.align-items-center.bg-color-2.p-4.mb-0.br-15
              .col-lg-auto
                img.d-none.d-lg-flex(src="@/assets/curso/tema2/img05.svg").mx-auto
              .col-lg.p-0 
                p.mb-0 Desde la perspectiva del marketing, comprender las variables culturales permite diseñar estrategias comerciales alineadas con los contextos socioculturales del mercado objetivo, evitando errores de posicionamiento y facilitando la conexión emocional con los consumidores. Las empresas multinacionales suelen adaptar mensajes publicitarios, empaques y propuestas de valor de acuerdo con las características culturales de cada región, lo que demuestra la relevancia estratégica de este tipo de variables en la planificación comercial.

      .col-lg-3.col-md-8
        figure
          img(src="@/assets/curso/tema2/img06.png", data-aos="zoom-in").mx-auto


    .row.align-items-center.mb-5
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/tema2/img07.svg").mx-auto
      .col-lg
        p.mb-0 Los factores sociales complementan esta dinámica al influir en la manera en que las personas adoptan comportamientos de consumo a partir de la interacción con su entorno social. Las recomendaciones de familiares, amigos, líderes de opinión e influenciadores digitales pueden modificar percepciones sobre marcas y productos, generando procesos de aceptación o rechazo que impactan directamente la demanda del mercado.

    .row.mb-0.justify-content-center.align-items-center
      .col-lg-12
        .bloque-texto-g.bg-color-6.p-3.p-sm-4.p-md-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img08.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Ejemplo aplicado. La empresa McDonald’s adapta su menú según las características culturales de cada país. En India ofrece productos sin carne de res por razones culturales y religiosas, mientras que en Colombia incorpora productos con sabores locales, fortaleciendo la aceptación del consumidor.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Personales y demográficas

    .bg-full-width.bg-fondo-1.px-4.py-3
      img(src="@/assets/curso/tema2/img09.png", alt="Imagen decorativa")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text Las variables personales y demográficas corresponden a las características individuales de los consumidores que influyen en sus preferencias, hábitos de compra y capacidad adquisitiva. Entre estas variables se encuentran la edad, el género, el nivel educativo, la ocupación, el ingreso, el ciclo de vida familiar y el estilo de vida, factores que permiten comprender las necesidades específicas de diferentes grupos poblacionales.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img11.svg", data-aos="zoom-in")
      .col-lg-8
        p.mb-3(data-aos="fade-right") Desde el enfoque estratégico, el análisis de variables demográficas facilita la segmentación del mercado y la adaptación de productos y servicios a públicos específicos. Por ejemplo, las empresas de tecnología diseñan dispositivos con funcionalidades diferenciadas según grupos etarios, mientras que las instituciones financieras crean productos financieros dirigidos a jóvenes profesionales, familias o adultos mayores, demostrando la utilidad de estas variables en la planificación comercial.
        p.mb-0 Las variables personales también incluyen elementos relacionados con la personalidad y el estilo de vida, los cuales permiten identificar patrones de consumo asociados a actividades, intereses y opiniones. Este conocimiento ayuda a las organizaciones a diseñar estrategias de comunicación personalizadas, mejorando la conexión emocional con los consumidores y fortaleciendo la fidelización de clientes.

    
    .row.mb-3.justify-content-center.align-items-center
      .col-lg-10
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Edad", col="col-sm-4 col-md-4")
            .row.align-items-center.justify-content-center
              .col-lg-6.mb-4.mb-lg-0
                p.mb-0 Etapas del ciclo de vida.
                p.mb-0 Impacto en marketing: define necesidades específicas.
                p.mb-0 Ejemplo: productos infantiles o senior.
              .col-lg-6.col-md-8.alig
                figure
                  img(src="@/assets/curso/tema2/img12.png", data-aos="zoom-in").mx-auto
          .tarjeta.color-acento-botones--borde.p-4(titulo="Ingreso")
            .row.align-items-center.justify-content-center
              .col-lg-6.mb-4.mb-lg-0
                p.mb-0 Capacidad adquisitiva.
                p.mb-0 Impacto en marketing: determina niveles de precio.
                p.mb-0 Ejemplo: segmentación económica.
              .col-lg-6.col-md-8
                figure
                  img(src="@/assets/curso/tema2/img13.png", data-aos="zoom-in").mx-auto
          .tarjeta.color-acento-botones--borde.p-4(titulo="Ocupación")
            .row.align-items-center.justify-content-center
              .col-lg-6.mb-4.mb-lg-0
                p.mb-0 Actividad laboral.
                p.mb-0 Impacto en marketing: influye en estilo de consumo.
                p.mb-0 Ejemplo: equipos profesionales especializados.
              .col-lg-6.col-md-8
                figure
                  img(src="@/assets/curso/tema2/img14.png", data-aos="zoom-in").mx-auto
          .tarjeta.color-acento-botones--borde.p-4(titulo="Estilo de vida")
            .row.align-items-center.justify-content-center
              .col-lg-6.mb-4.mb-lg-0
                p.mb-0 Actividades e intereses.
                p.mb-0 Impacto en marketing: permite personalización.
                p.mb-0 Ejemplo: productos fitness o tecnológicos.
              .col-lg-6.col-md-8
                figure
                  img(src="@/assets/curso/tema2/img15.png", data-aos="zoom-in").mx-auto
              
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Psicológicas

      
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-9.mb-3.mb-lg-0
        p.mb-3(data-aos="fade-right") Las variables psicológicas explican los procesos internos que influyen en la forma en que los consumidores interpretan la información y toman decisiones de compra. Estas variables incluyen la motivación, la percepción, el aprendizaje y las actitudes, elementos que determinan la manera en que una persona evalúa alternativas y selecciona productos o servicios (Schiffman & Wisenblit, 2019).
        .container
            .row.align-items-center.bg-color-5.p-4.mb-0.br-15
              .col-lg-auto
                img.d-none.d-lg-flex(src="@/assets/curso/tema2/img16.svg").mx-auto
              .col-lg.p-0 
                p.mb-0 La motivación se refiere al impulso interno que orienta la conducta hacia la satisfacción de necesidades específicas, mientras que la percepción corresponde a la interpretación individual de estímulos del entorno, como publicidad, experiencias previas y recomendaciones sociales. Estas interpretaciones pueden variar entre individuos, lo que explica por qué un mismo producto puede generar diferentes niveles de aceptación en el mercado.
                
      .col-lg-3.col-md-8
        figure
          img(src="@/assets/curso/tema2/img17.png", data-aos="zoom-in")

    p.mb-4 El aprendizaje y las actitudes también desempeñan un papel fundamental en el comportamiento del consumidor, ya que las experiencias de consumo previas influyen en la formación de preferencias y lealtad hacia las marcas. Las empresas utilizan estrategias de marketing experiencial, programas de fidelización y servicio al cliente para generar experiencias positivas que fortalezcan la relación con el consumidor.


    .row.align-items-center.justify-content-center.mb-5
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img18.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-5")
          div(titulo="Motivación")
            p.ms-5 Impulsos que orientan la compra.
            p.ms-5 Impacto en marketing: define propuestas de valor.
            p.ms-5 Ejemplo: productos saludables por bienestar.
          div(titulo="Percepción")
            p.ms-5 Interpretación de estímulos.
            p.ms-5 Impacto en marketing: influye en posicionamiento. 
            p.ms-5 Ejemplo: diseño de empaques atractivos.
          div(titulo="Aprendizaje")
            p.ms-5 Experiencias previas.
            p.ms-5 Impacto en marketing: genera fidelización. 
            p.ms-5 Ejemplo: programas de recompensas.
          div(titulo="Actitudes")
            p.ms-5 Evaluaciones favorables o desfavorables. 
            p.ms-5 Impacto en marketing: determinan preferencia de marca.
            p.ms-5 Ejemplo: opiniones positivas del cliente.

    .row.mb-3.justify-content-center.align-items-center
      .col-lg-10
        .cajon.bg-color-c1.p-4.mb-0
          p.mb-0 Pregunta de aplicación ¿Qué estrategias podría aplicar una empresa para modificar percepciones negativas hacia su marca?


    separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Entorno digitales

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-9.mb-3.mb-lg-0
        p.mb-3(data-aos="fade-right") El desarrollo de las tecnologías digitales ha transformado profundamente el comportamiento del consumidor, generando nuevas formas de interacción entre empresas y clientes, las plataformas digitales, redes sociales, comercio electrónico y herramientas de inteligencia artificial influyen en la búsqueda de información, comparación de productos y toma de decisiones de compra.
        .container
            .row.align-items-center.bg-color-7.p-4.mb-0.br-15
              .col-lg-auto.d-none.d-lg-flex
                img(src="@/assets/curso/tema2/img19.svg").mx-auto
              .col-lg.p-2
                p.mb-0 Los consumidores actuales participan activamente en entornos digitales, consultando opiniones de otros usuarios, revisando reseñas y comparando precios en tiempo real antes de realizar una compra. Este comportamiento ha incrementado la importancia del marketing digital, obligando a las organizaciones a desarrollar estrategias de posicionamiento en línea, gestión de reputación digital y experiencias omnicanal que integren canales físicos y virtuales.
                
      .col-lg-3.col-md-8
        figure
          img(src="@/assets/curso/tema2/img20.png", data-aos="zoom-in")



    .row.align-items-center.mb-5
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/tema2/img21.svg").mx-auto
      .col-lg
        p.mb-0 Asimismo, el uso de análisis de datos y tecnologías de personalización permite a las empresas ofrecer recomendaciones de productos basadas en el comportamiento de navegación de los usuarios, incrementando la probabilidad de conversión y mejorando la experiencia del cliente. Esta transformación digital ha convertido la gestión de la información en un elemento estratégico para la competitividad empresarial.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-md-12.mb-4      
        .bg-color-5
          .row.justify-content-center.align-items-center.p-4
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema2/img22.svg", data-aos="zoom-in").mx-auto
            .col-lg
              .row.justify-content-center.align-items-center
                .col-lg.mb-3.mb-lg-0
                  p.mb-0 A continuación, un video donde se aprecia el comportamiento del consumidor.
                  p.mb-0 Comportamiento del consumidor
                  p.mb-0 Descripción: video del Ecosistema de Recursos Educativos Digitales SENA, en el cual se expone el comportamiento del consumidor en el entorno de mercadeo digital.
 
                .col-lg-auto.text-center
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=dhSD-ndBs6g" target="_blank")
                    span Ver video
                    i.fas.fa-play
        

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .tarjeta-cita-fondo.p-4.p-lg-5
          .row.justify-content-start.align-items-center
            .col-lg-7(style="position: relative; z-index: 3;").mb-0.mb-lg-0
              .bloque-texto-b.p-0
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  h5.mb-0
                    | La integridad en las decisiones personales también se refleja en las decisiones de consumo, porque elegir conscientemente implica responsabilidad social y ética.
                  i.fas.fa-quote-right
            .col-lg-auto
              img(
                src='@/assets/curso/tema1/img29.png',
                class="img-flotante-tema2"
              )





</template>

<script>
export default {
  name: 'Tema2',
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
