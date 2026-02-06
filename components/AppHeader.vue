<template>
  <header class="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md shadow-sm transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <!-- Mobile hamburger -->
      <button
        aria-label="Abrir menú de navegación"
        class="p-2 rounded-full hover:bg-gray-100 transition-colors md:hidden"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="material-icons-outlined text-gray-700">menu</span>
      </button>

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2" aria-label="Cafeoteca Inicio">
        <img src="/logo.png" alt="Cafeoteca Logo" class="h-10 w-auto" />
      </NuxtLink>

      <!-- Desktop navigation -->
      <nav class="hidden md:flex items-center gap-8" aria-label="Navegación principal">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm font-body font-semibold text-gray-700 hover:text-primary transition-colors uppercase tracking-wider"
          active-class="text-primary"
        >
          {{ link.label }}
        </NuxtLink>
        <a
          href="https://wa.me/50684533232"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-green-600 text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-green-700 transition-colors flex items-center gap-2"
        >
          <span class="material-icons-outlined text-base">chat</span>
          Reservar
        </a>
      </nav>

      <!-- Mobile location icon -->
      <NuxtLink to="/nosotros" aria-label="Ubicación y contacto" class="p-2 rounded-full hover:bg-gray-100 transition-colors md:hidden">
        <span class="material-icons-outlined text-gray-700">place</span>
      </NuxtLink>

      <!-- Mobile navigation drawer -->
      <Teleport to="body">
        <Transition name="drawer">
          <div v-if="isMenuOpen" class="fixed inset-0 z-[100] md:hidden">
            <div class="absolute inset-0 bg-black/40" @click="isMenuOpen = false" />
            <nav class="absolute left-0 top-0 h-full w-72 bg-background-light shadow-2xl p-8 flex flex-col gap-6">
              <button
                aria-label="Cerrar menú"
                class="self-end p-2 rounded-full hover:bg-gray-100"
                @click="isMenuOpen = false"
              >
                <span class="material-icons-outlined">close</span>
              </button>

              <NuxtLink
                v-for="link in navLinks"
                :key="link.to"
                :to="link.to"
                class="text-lg font-display font-semibold text-gray-800 hover:text-primary transition-colors"
                @click="isMenuOpen = false"
              >
                {{ link.label }}
              </NuxtLink>
            </nav>
          </div>
        </Transition>
      </Teleport>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/menu', label: 'Menú' },
  { to: '/nosotros', label: 'Nosotros' },
]
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.3s ease;
}
.drawer-enter-active nav,
.drawer-leave-active nav {
  transition: transform 0.3s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}
.drawer-enter-from nav,
.drawer-leave-to nav {
  transform: translateX(-100%);
}
</style>
