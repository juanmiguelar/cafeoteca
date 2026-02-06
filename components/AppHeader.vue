<template>
  <header class="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md px-6 py-4 flex justify-between items-center shadow-sm transition-all duration-300">
    <button
      aria-label="Abrir menú de navegación"
      class="p-2 rounded-full hover:bg-gray-100 transition-colors"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span class="material-icons-outlined text-gray-700">menu</span>
    </button>

    <NuxtLink to="/" class="text-2xl font-display font-bold text-gray-900 tracking-widest">
      CAFE<span class="text-secondary inline-block transform -translate-y-1 text-sm">●</span>TECA
    </NuxtLink>

    <NuxtLink to="/menu" aria-label="Ver menú" class="p-2 rounded-full hover:bg-gray-100 transition-colors">
      <span class="material-icons-outlined text-gray-700">shopping_bag</span>
    </NuxtLink>

    <!-- Mobile navigation drawer -->
    <Teleport to="body">
      <Transition name="drawer">
        <div v-if="isMenuOpen" class="fixed inset-0 z-[100]">
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
