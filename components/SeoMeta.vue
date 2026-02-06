<template>
  <div />
</template>

<script setup lang="ts">
const route = useRoute()

const seoData: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Cafeoteca — Café de Especialidad en Barrio Escalante, San José',
    description:
      'Cafeoteca: café de especialidad, micro-tostaduría y pastelería artesanal en Barrio Escalante, San José, Costa Rica. Descubre café como cultura.',
  },
  '/menu': {
    title: 'Menú — Cafeoteca | Café de Especialidad y Pastelería',
    description:
      'Explora nuestro menú de café de especialidad, pastelería artesanal de Rebe y opciones de brunch en Cafeoteca, Barrio Escalante.',
  },
  '/nosotros': {
    title: 'Nosotros — Cafeoteca | 12 Años de Café Como Cultura',
    description:
      'Conoce la historia de Cafeoteca, nuestro equipo, el Proyecto Almácigo y cómo llevamos 12 años creando cultura de café en San José, Costa Rica.',
  },
}

const current = computed(() => seoData[route.path] ?? seoData['/'])

useHead({
  title: current.value.title,
})

useSeoMeta({
  title: current.value.title,
  ogTitle: current.value.title,
  description: current.value.description,
  ogDescription: current.value.description,
  ogImage: '/logo.png',
  twitterImage: '/logo.png',
  twitterCard: 'summary',
  ogType: 'website',
  ogLocale: 'es_CR',
  ogSiteName: 'Cafeoteca',
})

useSchemaOrg([
  defineLocalBusiness({
    name: 'Cafeoteca',
    description:
      'Café de especialidad, micro-tostaduría y espacio gastronómico en Barrio Escalante, San José, Costa Rica.',
    address: {
      streetAddress: 'Barrio Escalante',
      addressLocality: 'San José',
      addressCountry: 'CR',
    },
    geo: {
      latitude: 9.9356,
      longitude: -84.0617,
    },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCntQ0eW-ZyfLsa5NL0vE34jLgktpfOZhBbz5BZTrqc_iCTSiDkHuRUdrtCuOqVEzt0rkyyvOWZhzAFPMhFHqHsb8YqGnOwwxQgln3KKFiEcFxhGdBFZpr7SpQpRPp2zGwBieJ1E6UcscL0GA63JrfZ2DZesOSiDcFym_AwpQO8Sw32hTzG0mftH_KLE3NWt5pWLG9UdAiip8b0JprIbIGDbrpYLMr-9_KGl-3AQnEPOaE79xO9SWB_pDml0jUkRdrSP4rB-3IC8dc',
    telephone: '+506-8888-8888',
    priceRange: '₡₡',
    servesCuisine: ['Café de Especialidad', 'Pastelería', 'Brunch'],
    openingHoursSpecification: [
      {
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        dayOfWeek: 'Sunday',
        opens: '07:00',
        closes: '18:00',
      },
    ],
  }),
])
</script>
