<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Decisiones estratégicas de marketing',
      titulo: 'Decisiones estratégicas de marketing',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión del análisis del consumidor y su aplicación en el diseño de estrategias de <em>marketing</em>.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,

          texto:
            '¿Cuál de las siguientes opciones define mejor el comportamiento del consumidor?',

          imagen: require('@/assets/actividad/imagen1.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto:
                'Proceso mediante el cual las empresas controlan los precios del mercado.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto:
                'Conjunto de decisiones y acciones que realizan las organizaciones para distribuir productos.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto:
                'Estudio de las actividades relacionadas exclusivamente con la publicidad digital.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto:
                'Proceso mediante el cual las personas seleccionan, compran, utilizan y evalúan productos o servicios para satisfacer necesidades.',

              esCorrecta: true,
            },
          ],

          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',

          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 2,

          texto:
            '¿Por qué es importante el estudio del consumidor dentro de las estrategias de marketing?',

          imagen: require('@/assets/actividad/imagen2.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto:
                'Porque permite eliminar completamente la competencia del mercado.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto:
                'Porque ayuda a comprender necesidades, hábitos y preferencias de los consumidores para orientar decisiones comerciales.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto:
                'Porque reemplaza las actividades de promoción y publicidad.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto:
                'Porque garantiza automáticamente el incremento de ventas de la empresa.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',

          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 3,

          texto:
            '¿Cuál de las siguientes etapas hace parte del proceso de decisión de compra del consumidor?',

          imagen: require('@/assets/actividad/imagen3.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Diseño de la estructura organizacional.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Reconocimiento de la necesidad.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'Control de inventarios físicos.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'Elaboración de estados financieros.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',

          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 4,

          texto:
            '¿Cuál de las siguientes variables corresponde a un factor psicológico del consumidor?',

          imagen: require('@/assets/actividad/imagen4.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Edad y ocupación.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Nivel de ingresos económicos.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto: 'Motivación y percepción.',

              esCorrecta: true,
            },

            {
              id: 'd',

              texto: 'Ubicación geográfica.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',

          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 5,

          texto: '¿Qué permite identificar la segmentación psicográfica?',

          imagen: require('@/assets/actividad/imagen1.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Los costos de producción empresarial.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto:
                'Los estilos de vida, intereses y valores de los consumidores.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'Las rutas de distribución de productos.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'Los procesos financieros internos.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',

          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 6,

          texto:
            '¿Cuál es la finalidad principal de analizar el comportamiento del consumidor?',

          imagen: require('@/assets/actividad/imagen2.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Sustituir completamente la publicidad empresarial.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Eliminar las decisiones estratégicas de marketing.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto:
                'Comprender las necesidades y hábitos de compra para mejorar estrategias comerciales.',

              esCorrecta: true,
            },

            {
              id: 'd',

              texto: 'Incrementar automáticamente las ventas.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',

          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 7,

          texto:
            '¿Qué elemento hace parte de la mezcla de marketing tradicional?',

          imagen: require('@/assets/actividad/imagen3.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Producto.',

              esCorrecta: true,
            },

            {
              id: 'b',

              texto: 'Diagnóstico estratégico.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto: 'Macroentorno organizacional.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'Segmentación geográfica.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',

          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 8,

          texto:
            '¿Por qué las empresas adaptan estrategias según segmentos de mercado?',

          imagen: require('@/assets/actividad/imagen4.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Para ofrecer el mismo producto a todos los consumidores.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto:
                'Para responder de manera más precisa a las características y necesidades de cada grupo.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'Para eliminar completamente la competencia.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'Para reemplazar la investigación de mercados.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',

          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 9,

          texto:
            '¿Qué caracteriza una estrategia de marketing centrada en el cliente?',

          imagen: require('@/assets/actividad/imagen1.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Se enfoca únicamente en reducir costos operativos.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto:
                'Prioriza las necesidades y experiencias del consumidor en las decisiones comerciales.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'Elimina el uso de herramientas digitales.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto:
                'Se orienta exclusivamente a procesos internos de producción.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',

          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 10,

          texto:
            '¿Cuál es el propósito principal de una propuesta de valor dentro del marketing?',

          imagen: require('@/assets/actividad/imagen2.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto:
                'Controlar las operaciones financieras de la organización.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Sustituir las actividades promocionales de la empresa.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto:
                'Diferenciar la empresa mediante beneficios relevantes para el consumidor.',

              esCorrecta: true,
            },

            {
              id: 'd',

              texto: 'Determinar exclusivamente los canales de distribución.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',

          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de las siguientes opciones corresponde a una variable cultural que influye en el comportamiento del consumidor?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tradiciones y costumbres sociales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Capacidad instalada de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estructura financiera empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Procesos logísticos internos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 12,
          texto: '¿Qué permite la identificación de perfiles de consumidor?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar exclusivamente los precios de venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la necesidad de segmentar el mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir los canales de distribución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Diseñar estrategias ajustadas a características específicas de los clientes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 13,
          texto:
            '¿Cuál es la función principal de la promoción dentro de la mezcla de marketing?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar estructuras financieras organizacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comunicar y persuadir al consumidor sobre los productos o servicios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Controlar procesos de manufactura industrial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar la investigación de mercados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 14,
          texto:
            '¿Por qué los entornos digitales influyen en el comportamiento de compra?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque facilitan el acceso a información, opiniones y experiencias de otros consumidores.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque eliminan completamente las tiendas físicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque reemplazan las decisiones personales de compra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque reducen automáticamente los precios de todos los productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 15,
          texto:
            '¿Cuál es el objetivo principal de las estrategias de marketing orientadas al consumidor?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar únicamente los costos de promoción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir completamente el análisis del mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Diseñar estrategias para satisfacer necesidades y generar valor al cliente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar los procesos de segmentación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 16,
          texto:
            '¿Qué permite el análisis del comportamiento del consumidor dentro de las decisiones comerciales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comprender hábitos y preferencias para formular estrategias más efectivas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar completamente la mezcla de marketing.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la competencia del mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar exclusivamente las finanzas empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 17,
          texto:
            '¿Cuál de las siguientes opciones corresponde a una variable demográfica del consumidor?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Valores culturales y estilos de vida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Edad y nivel de ingresos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Motivaciones psicológicas profundas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Percepción de marca en redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 18,
          texto:
            '¿Cuál es la finalidad de construir propuestas estratégicas de mercadeo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir exclusivamente los costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir el análisis del consumidor dentro del mercado objetivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Orientar acciones comerciales coherentes con las necesidades del mercado objetivo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar el uso de herramientas promocionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 19,
          texto:
            '¿Qué busca una empresa al formular una propuesta de valor orientada al mercado objetivo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ofrecer beneficios diferenciadores que respondan a las necesidades del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar completamente las estrategias de promoción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar el análisis competitivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir automáticamente los precios del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 20,
          texto:
            '¿Cuál es la relación entre el análisis del consumidor y las decisiones estratégicas de marketing?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El análisis del consumidor solo aplica en empresas digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las decisiones estratégicas reemplazan el estudio del consumidor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ambos procesos funcionan de manera independiente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El análisis del consumidor proporciona información para diseñar estrategias comerciales más efectivas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
