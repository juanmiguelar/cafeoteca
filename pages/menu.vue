<template>
  <div>
    <SeoMeta />

    <!-- Hero Banner -->
    <section class="px-4 sm:px-6 lg:px-8 pt-6 pb-2">
      <div class="relative w-full h-48 sm:h-56 lg:h-72 rounded-2xl overflow-hidden shadow-xl group">
        <img
          alt="Café de especialidad siendo servido en Cafeoteca"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkWAZPmgKGO0cLyt1QX1YYvxqbHhhCIUZUGvwC9uu62v0Uaq07MgaHAs_LroYiDwyf3zsh1A8RE5Sm06AgAs_Gj2jNGPvIi7Sy4YuDI3mJ-Sole9RuCPxGiGU1yuamJOwLz9ZlaBdbkd5xC5jP2-CiBc6k7raM0AIPtNuvzS5w4QCweWQjYxTeKJ7m7ew7LOxpKDX8PC0agA4s0WAPNBaU-Bg14aZqK4tOzdsikQMnVHaAia7FlmKQyu8SYneoUSfAynPOaDDE8GI"
          loading="eager"
          width="1200"
          height="288"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div class="absolute bottom-0 left-0 p-6 sm:p-8 text-white">
          <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-1">Nuestro Menú</h1>
          <p class="text-sm sm:text-base text-gray-200 max-w-lg">
            Precios incluyen impuestos de venta y servicio.
          </p>
        </div>
      </div>
    </section>

    <!-- Category Navigation (sticky) -->
    <nav class="sticky top-[72px] z-30 bg-background-light/90 backdrop-blur-md border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-8">
      <h2 class="sr-only">Categorías del Menú</h2>
      <div class="flex space-x-2 sm:space-x-3 overflow-x-auto hide-scrollbar pb-1 lg:justify-center">
        <button
          v-for="category in menuCategories"
          :key="category.id"
          :class="[
            'flex-shrink-0 px-4 py-2 rounded-full font-medium transition text-xs sm:text-sm whitespace-nowrap',
            activeCategory === category.id
              ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary',
          ]"
          @click="activeCategory = category.id"
        >
          {{ category.label }}
        </button>
      </div>
    </nav>

    <!-- Menu Sections -->
    <div class="px-4 sm:px-6 lg:px-8 py-8 space-y-12 lg:space-y-16">
      <section
        v-for="section in filteredSections"
        :key="section.id"
      >
        <!-- Section subsections -->
        <div
          v-for="(sub, subIdx) in section.subsections"
          :key="sub.title"
          :class="['mb-10 lg:mb-14', subIdx > 0 ? 'mt-8' : '']"
        >
          <!-- Subsection Title -->
          <div class="flex items-center gap-3 mb-6">
            <div :class="['w-1 h-8 rounded-full', sectionColorBg(section.color)]" />
            <h2 class="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-gray-900">
              {{ sub.title }}
            </h2>
          </div>

          <!-- Subsection note -->
          <p v-if="sub.note" class="text-gray-500 text-sm sm:text-base mb-6 max-w-2xl leading-relaxed italic">
            {{ sub.note }}
          </p>

          <!-- Items with no items (e.g. Leches Disponibles) -->
          <template v-if="sub.items.length === 0" />

          <!-- Grid of menu items -->
          <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5">
            <article
              v-for="item in sub.items"
              :key="item.name"
              class="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <!-- Name + Price -->
              <div class="flex justify-between items-start gap-3 mb-1">
                <h3 class="font-bold text-gray-900 text-sm sm:text-base leading-snug">{{ item.name }}</h3>
                <span
                  v-if="item.price"
                  :class="['font-serif font-bold text-sm sm:text-base whitespace-nowrap', sectionColorText(section.color)]"
                >
                  {{ item.price }}
                </span>
              </div>

              <!-- Description -->
              <p v-if="item.description" class="text-gray-500 text-xs sm:text-sm leading-relaxed mt-1">
                {{ item.description }}
              </p>

              <!-- Variants -->
              <div v-if="item.variants && item.variants.length" class="mt-2 space-y-1">
                <div
                  v-for="variant in item.variants"
                  :key="variant.name"
                  class="flex justify-between text-xs sm:text-sm"
                >
                  <span class="text-gray-600">{{ variant.name }}</span>
                  <span :class="['font-semibold', sectionColorText(section.color)]">{{ variant.price }}</span>
                </div>
              </div>

              <!-- Options -->
              <div v-if="item.options && item.options.length" class="mt-2 flex flex-wrap gap-1.5">
                <span
                  v-for="opt in item.options"
                  :key="opt"
                  class="text-[10px] sm:text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                >
                  {{ opt }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Empty state -->
      <div v-if="filteredSections.length === 0" class="text-center py-16">
        <span class="material-icons-outlined text-5xl text-gray-300">restaurant_menu</span>
        <p class="text-gray-400 mt-4">No hay items en esta categoría.</p>
      </div>

      <!-- Tagline -->
      <section class="py-8 lg:py-14 text-center relative">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 lg:w-72 h-48 lg:h-72 bg-primary/10 rounded-full blur-xl -z-10" />
        <h2 class="font-display font-bold text-2xl lg:text-3xl text-primary mb-2">¿CÓMO TE GUSTA EL CAFÉ?</h2>
        <p class="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6">¡CONTIGO!</p>
        <p class="font-serif italic text-gray-600 text-sm sm:text-base max-w-md mx-auto">
          Con tiempo, con conversación, con lo que pasa entre sorbo y sorbo.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { menuSections, menuCategories } from '~/data/menu'

const activeCategory = ref('all')

const filteredSections = computed(() => {
  if (activeCategory.value === 'all') return menuSections
  return menuSections.filter(s => s.id === activeCategory.value)
})

function sectionColorBg(color: string): string {
  const map: Record<string, string> = {
    'accent': 'bg-accent',
    'leaf': 'bg-leaf',
    'primary': 'bg-primary',
    'purple-brand': 'bg-purple-brand',
    'secondary': 'bg-secondary',
    'olive': 'bg-olive',
  }
  return map[color] ?? 'bg-primary'
}

function sectionColorText(color: string): string {
  const map: Record<string, string> = {
    'accent': 'text-accent',
    'leaf': 'text-leaf',
    'primary': 'text-primary',
    'purple-brand': 'text-purple-brand',
    'secondary': 'text-secondary',
    'olive': 'text-olive',
  }
  return map[color] ?? 'text-primary'
}
</script>

<script lang="ts">
export default {
  name: 'MenuPage',
}
</script>
