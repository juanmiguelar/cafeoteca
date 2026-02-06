<template>
  <div>
    <SeoMeta />

    <!-- Hero Section -->
    <section class="px-4 py-6">
      <div class="relative w-full h-[450px] rounded-xl overflow-hidden shadow-xl group">
        <img
          alt="Mesa de madera con café de especialidad y postres artesanales bajo luz natural en Cafeoteca"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCntQ0eW-ZyfLsa5NL0vE34jLgktpfOZhBbz5BZTrqc_iCTSiDkHuRUdrtCuOqVEzt0rkyyvOWZhzAFPMhFHqHsb8YqGnOwwxQgln3KKFiEcFxhGdBFZpr7SpQpRPp2zGwBieJ1E6UcscL0GA63JrfZ2DZesOSiDcFym_AwpQO8Sw32hTzG0mftH_KLE3NWt5pWLG9UdAiip8b0JprIbIGDbrpYLMr-9_KGl-3AQnEPOaE79xO9SWB_pDml0jUkRdrSP4rB-3IC8dc"
          loading="eager"
          width="800"
          height="450"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
          <span class="bg-secondary text-black text-xs font-bold px-3 py-1 rounded-full w-fit mb-3 uppercase tracking-wider">
            Cosecha 25/26
          </span>
          <h1 class="text-white font-display text-4xl font-bold leading-tight mb-2">Café Como Cultura</h1>
          <p class="text-gray-200 text-sm font-medium opacity-90 mb-4">
            Recepción de muestras de café de especialidad.
          </p>
          <NuxtLink
            to="/menu"
            class="bg-white text-black font-semibold py-3 px-6 rounded-lg w-full sm:w-auto bg-opacity-90 active:scale-95 transition-transform flex items-center justify-center gap-2"
          >
            <span>Ver Menú</span>
            <span class="material-icons-outlined text-sm">arrow_forward</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Schedule Banner -->
    <section class="px-4 mb-8">
      <div class="bg-gradient-to-r from-primary to-pink-500 rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
        <div class="flex items-start gap-3 relative z-10">
          <span class="material-icons-outlined text-3xl">schedule</span>
          <div>
            <h2 class="font-display font-bold text-lg mb-1">Nuevo Horario</h2>
            <p class="text-sm opacity-90 mb-1"><span class="font-bold">Mar - Sáb:</span> 7am - 7pm</p>
            <p class="text-sm opacity-90"><span class="font-bold">Domingos:</span> 7am - 6pm</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Explore Section -->
    <section class="pl-4 mb-8">
      <div class="flex justify-between items-center pr-4 mb-4">
        <h2 class="font-display font-bold text-xl text-gray-900">Explorar</h2>
      </div>
      <div class="flex gap-4 overflow-x-auto hide-scrollbar pb-2 pr-4">
        <NuxtLink
          v-for="item in exploreItems"
          :key="item.title"
          :to="item.to"
          class="flex-shrink-0 w-36 flex flex-col gap-2 group cursor-pointer"
        >
          <div class="w-36 h-48 rounded-2xl overflow-hidden relative shadow-md">
            <img
              :alt="item.alt"
              :src="item.image"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              width="144"
              height="192"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div class="absolute bottom-3 left-3 text-white font-bold font-display text-sm" v-html="item.title" />
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Team / Almácigo Section -->
    <section class="px-4 mb-20">
      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-purple-200 rounded-full blur-2xl opacity-50" />
        <div class="relative z-10">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xs text-center leading-none p-1"
            >
              12<br />AÑOS
            </div>
            <span class="text-xs font-bold tracking-widest text-purple-600 uppercase">Proyecto Almácigo</span>
          </div>
          <h3 class="text-2xl font-display font-bold mb-3 text-gray-900">Conoce a nuestro equipo</h3>
          <p class="text-gray-600 mb-6 text-sm leading-relaxed">
            Detrás de cada taza hay una historia. Conoce a Rebe, nuestra pastelera que transforma ingredientes locales en
            obras de arte comestibles.
          </p>
          <div class="flex items-center gap-4">
            <img
              alt="Retrato de Rebe, pastelera de Cafeoteca"
              class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbMfvX02P6hVa32r-IBVNGByrPmu4e1IiGD3DWNe2snXlWdd7pyznASu4DYtitDVKmBBdjXYF4og8L5Y5FJhqiKXzLYkOUG91QkhEknMVR4SkwfsqmVgTAnzVYz3Z2QnY2QcTZtWk05Yy5TzDNvPjuVK6_slyfY-iL6Mn1TUpDuo4DcMdcAU04CbQxT2zqIFs95hnNK9Y_YW3eJegQ5e8f7rIKpBMAryYPHWI22IEA8uKhsAPIGiJAEoiCRRSG1wA1M3EiJJ1EBkQ"
              loading="lazy"
              width="48"
              height="48"
            />
            <NuxtLink
              to="/nosotros"
              class="text-sm font-bold text-primary hover:underline flex items-center gap-1"
            >
              Leer historia completa
              <span class="material-icons-outlined text-sm">arrow_forward</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const exploreItems = [
  {
    title: 'Café de<br/>Especialidad',
    alt: 'Granos de café de especialidad tostados en Cafeoteca',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCsD5HK5cyryCJLwHpJ2G7WavCOpH_kpVtaxw85wnH55j1B5SMlzv3EPh031vOoecYJImRyBNAxD0w8WgJicJ3lkYgwdVKI7hPPCZ_gsWoftyCbfl6SwYJRU1H3ru8p5tZq9-BC6M5UeT7z4YqApPowphFGeuAvQDyOpag-BzvPQFPMt8xoeEzBp5Ph-eBZnVPsPNMOP_wX6BvIEWDgdireBvEv9w_C-N9BtmvtuZJihJ7I2QmmrM76jej3SrK5gTcE7UY8H0CR6BI',
    to: '/menu',
  },
  {
    title: 'Micro<br/>Tostaduría',
    alt: 'Proceso de tostado artesanal en micro-tostaduría de Cafeoteca',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAM4_nF6GWnOVernr1o6Robuk4oICo9wNsYYax0NYcuG7i-o-GOf5_Nhq9k035NDSUtUq8Afa2RoZRweJ2Ex6_JZRAg8Xzng462ixtEtGkseluHjJ132BgUwp-JIUTw0sVwaBuWs3hUda2egTt2EIGhYMz_q_87JMWY96q1XEHqY4KtdUWVVI7SQ_LbfxQABgJZN0I4IE-fIePBfNg85dNEQgPhPPr1VYHwVZh7K87K9dewnfiRF4tb3Bg08qyZipU0C2Or0B6w-Wk',
    to: '/nosotros',
  },
  {
    title: 'Espacio<br/>Gastronómico',
    alt: 'Espacio gastronómico y ambiente acogedor de Cafeoteca',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCzRzcpNglnCzFBAp5DUL74O2uF4kJX0oVoz4ZSkQdLoOc_wHUG0G5rqifP7EZoVQSaew0dfcL4-jtELfErbDi1a_NmsRJMBLNXPilMs5yv1Ak2f9OHPhCF_ogWoDNhWhhXw44HPXcc0n7N1-bUIpyeu-WIbzjfxeKF2B6Iq1MXsFYA_QbHSBgfEvsUHMmnXxFNE0I_APXjBLl1KxHbRkbwJvJEO8g7Cql3nwGz8G1axfOauXnrrz5keKHDbcHmfitY8PJqtSwOtnQ',
    to: '/nosotros',
  },
]
</script>

<script lang="ts">
export default {
  name: 'HomePage',
}
</script>
