<template>
  <div class="max-w-2xl mx-auto">
    <SeoMeta />

    <!-- Category Navigation -->
    <nav class="px-6 py-4">
      <h2 class="sr-only">Categorías del Menú</h2>
      <div class="flex space-x-3 overflow-x-auto hide-scrollbar pb-2">
        <button
          v-for="category in categories"
          :key="category.id"
          :class="[
            'flex-shrink-0 px-5 py-2.5 rounded-full font-medium shadow-sm transition text-sm',
            activeCategory === category.id
              ? 'bg-purple-brand text-white shadow-lg shadow-purple-brand/30 transform hover:scale-105 active:scale-95'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-secondary hover:text-secondary',
          ]"
          @click="activeCategory = category.id"
        >
          {{ category.label }}
        </button>
      </div>
    </nav>

    <main class="px-6 space-y-8">
      <!-- Featured Banner -->
      <section class="mt-2">
        <div class="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl group">
          <img
            alt="Café de especialidad siendo servido en Cafeoteca"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkWAZPmgKGO0cLyt1QX1YYvxqbHhhCIUZUGvwC9uu62v0Uaq07MgaHAs_LroYiDwyf3zsh1A8RE5Sm06AgAs_Gj2jNGPvIi7Sy4YuDI3mJ-Sole9RuCPxGiGU1yuamJOwLz9ZlaBdbkd5xC5jP2-CiBc6k7raM0AIPtNuvzS5w4QCweWQjYxTeKJ7m7ew7LOxpKDX8PC0agA4s0WAPNBaU-Bg14aZqK4tOzdsikQMnVHaAia7FlmKQyu8SYneoUSfAynPOaDDE8GI"
            loading="eager"
            width="600"
            height="256"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div class="absolute bottom-0 left-0 p-6 text-white">
            <span class="px-2 py-1 bg-secondary text-black text-xs font-bold uppercase rounded mb-2 inline-block">
              Destacado
            </span>
            <h1 class="font-serif text-2xl font-bold mb-1">Cosecha 25/26</h1>
            <p class="text-sm text-gray-200 line-clamp-2">
              Recepción de muestras de café de especialidad. Prueba lo nuevo de la temporada.
            </p>
          </div>
        </div>
      </section>

      <!-- Specialty Coffee -->
      <section v-show="activeCategory === 'cafe' || activeCategory === 'all'">
        <div class="flex items-center justify-between mb-4">
          <h2 class="font-display font-bold text-xl text-purple-brand">Café de Especialidad</h2>
        </div>
        <div class="space-y-4">
          <article
            v-for="item in coffeeItems"
            :key="item.name"
            class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 transition-transform active:scale-[0.99]"
          >
            <div class="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
              <img :alt="item.alt" :src="item.image" class="w-full h-full object-cover" loading="lazy" width="80" height="80" />
            </div>
            <div class="flex-1">
              <div class="flex justify-between items-start">
                <h3 class="font-bold text-gray-800 text-base">{{ item.name }}</h3>
                <span class="font-serif font-bold text-purple-brand">{{ item.price }}</span>
              </div>
              <p class="text-xs text-gray-500 mt-1 mb-2 font-serif leading-relaxed">{{ item.description }}</p>
              <div class="flex gap-2">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] rounded-full uppercase tracking-wider font-semibold"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- Pastry Section -->
      <section v-show="activeCategory === 'pasteleria' || activeCategory === 'all'">
        <div class="flex items-center justify-between mb-4">
          <h2 class="font-display font-bold text-xl text-leaf">Pastelería de Rebe</h2>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <article
            v-for="item in pastryItems"
            :key="item.name"
            class="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
          >
            <div class="h-32 overflow-hidden relative">
              <img :alt="item.alt" :src="item.image" class="w-full h-full object-cover" loading="lazy" width="300" height="128" />
              <div v-if="item.badge" class="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                <span class="text-xs font-bold text-leaf">{{ item.badge }}</span>
              </div>
            </div>
            <div class="p-3">
              <h3 class="font-bold text-sm text-gray-800">{{ item.name }}</h3>
              <p class="text-[10px] text-gray-500 font-serif line-clamp-2 my-1">{{ item.description }}</p>
              <div class="flex justify-between items-center mt-2">
                <span class="font-serif font-bold text-gray-800 text-sm">{{ item.price }}</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- Tagline -->
      <section class="py-8 text-center relative">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-brand/10 rounded-full blur-xl -z-10" />
        <h2 class="font-display font-bold text-2xl text-purple-brand mb-2">¿CÓMO TE GUSTA EL CAFÉ?</h2>
        <p class="font-display font-bold text-3xl text-secondary mb-6">¡CONTIGO!</p>
        <p class="font-serif italic text-gray-600 text-sm max-w-xs mx-auto">
          Con tiempo, con conversación, con lo que pasa entre sorbo y sorbo.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const activeCategory = ref('all')

const categories = [
  { id: 'all', label: 'Todo' },
  { id: 'cafe', label: 'Café de Especialidad' },
  { id: 'pasteleria', label: 'Pastelería' },
  { id: 'brunch', label: 'Brunch' },
  { id: 'bebidas', label: 'Bebidas' },
]

const coffeeItems = [
  {
    name: 'V60 Pour Over',
    price: '₡2.500',
    description: 'Método de goteo manual que resalta la claridad y acidez del café.',
    tags: ['Suave', 'Floral'],
    alt: 'Café V60 Pour Over preparado en Cafeoteca',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCieWCi1OujAP6gdfTCmp93lqqnXyN8Y8R-T1U8H2Cd1Xg456r3GYaZUqrPcXtYAW1ohyDVfgpYx6HhjCHEBmOfaTBT9heinO_JjDZF80LuqCOTqSG3eOppaozrp5qmHcYnMBsquhw8TRki0llDNzyVNceNKZYn72p68tMKoBX04wggUNswvJCdEOnKVy1QdzRY9pZEU9Mqzf0TspSWY8xixoIZ_ZtEhP5gSvxBHYjNkNXiLVN5tcK2t2rm4fWVQHRdvoE8b15hH6g',
  },
  {
    name: 'Flat White',
    price: '₡2.800',
    description: 'Espresso doble con una capa fina de leche micro-texturizada.',
    tags: ['Cremoso'],
    alt: 'Flat White con latte art en Cafeoteca',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZC40mvxG7dC1th-WtGMIP1F5fVWSGMJZnFg4xhS3Yz0pk4Br9tDBAFuyOsTN4No799Dhakm0GuQWibIOoG525VqsserTAO7X_usI5y2bn2FQTWs0RON5A8sPnNCj5Y_bPp2ve3HeWCoI4n87R-tgH8w0GRUzVRo_2eScoNiYyQjwZNQLmPGHsSazBbS8xsp_tP6FEGJxdduRNV1gbMfUW3_X71w4vtZFpb7m01Qz_1vrlxeRm62TR8jj86yVjMz6sY5y70YEGxVQ',
  },
]

const pastryItems = [
  {
    name: 'Tartaleta de Frambuesa',
    price: '₡3.200',
    description: 'Crema pastelera suave con frambuesas frescas.',
    badge: 'Nuevo',
    alt: 'Tartaleta de frambuesa artesanal de la pastelería de Cafeoteca',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAushNe_wg61qzjtlpr2O0RoDdlee5aSMGj_zHhbzgkbhD-qW0dfwU2nXpFczTLM8ety4G_ulK-SDYb8-6dBcipLEZSxveL8egaMw-PRh3WuQZ7x4WUQql-JFY29pAMMHv7ci0eiO7kjd0v-dXlBSjXsTm7OUBhbGPIA1J6fbF0Wh0mSJ5H1X1WLvEsXJN8PxOomM6O0iqvPTrOtep-RF-4HWDczEC3He_8JWmtqe9Cns35tcRPldHNUd1i0JqMUWxMmddv2IX50Xk',
  },
  {
    name: 'Croissant de Almendras',
    price: '₡2.900',
    description: 'Relleno de frangipane y cubierto de almendras.',
    badge: null,
    alt: 'Croissant de almendras horneado en Cafeoteca',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDZcjyk1YdnDqsITmXbae0qG8abzc9CF20wFD50A2fAqNAu-3QF_HBeeceg7-9thdNbX7iLtlVpTS4A59fPynzuJ_BLWy1CaDyVYATjpjug0WXryJvDrDWHbbUDGCTaBoMtdUI4s1_IRBZvRdo7bFiBhrXJR3JeKF-7t-JTJe9fIs8HnxTneFWfbXVfr2lcthUjXA1Mmbt1rkxXmwSoteAJII8u2w8GnsqdX6Z0xNKLVi9Do1xLsVNdgnbg0c-5ncJ-_DPdsU6SKb8',
  },
]
</script>

<script lang="ts">
export default {
  name: 'MenuPage',
}
</script>
