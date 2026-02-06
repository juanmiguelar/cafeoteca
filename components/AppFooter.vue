<template>
  <footer class="bg-surface-dark text-white mt-12">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-14">
      <!-- Desktop: 3 columns. Mobile: stacked centered -->
      <div class="lg:flex lg:justify-between lg:items-start lg:gap-12">
        <!-- Brand -->
        <div class="text-center lg:text-left mb-8 lg:mb-0">
          <NuxtLink to="/" class="inline-block mb-4">
            <img src="/logo.png" alt="Cafeoteca" class="h-12 w-auto brightness-0 invert mx-auto lg:mx-0" />
          </NuxtLink>
          <p class="text-gray-400 text-sm max-w-xs mx-auto lg:mx-0">
            Café de especialidad, cultura y comunidad en el corazón de Barrio Escalante.
          </p>
        </div>

        <!-- Links -->
        <nav class="flex justify-center gap-8 mb-8 lg:mb-0" aria-label="Navegación del pie de página">
          <NuxtLink to="/" class="text-gray-400 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider">Inicio</NuxtLink>
          <NuxtLink to="/menu" class="text-gray-400 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider">Menú</NuxtLink>
          <NuxtLink to="/nosotros" class="text-gray-400 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider">Nosotros</NuxtLink>
        </nav>

        <!-- Social -->
        <div class="flex justify-center lg:justify-end gap-5">
          <a
            href="https://www.instagram.com/cafeoteca_costarica/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <span class="material-icons-outlined">photo_camera</span>
          </a>
          <a
            href="https://www.facebook.com/cafeotecacostarica/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <span class="material-icons-outlined">facebook</span>
          </a>
          <a
            href="mailto:info@cafeoteca.cr"
            class="text-gray-400 hover:text-white transition-colors"
            aria-label="Correo electrónico"
          >
            <span class="material-icons-outlined">email</span>
          </a>
        </div>
      </div>

      <!-- Divider + copyright -->
      <div class="border-t border-gray-700 mt-8 pt-6 text-center">
        <p class="text-gray-600 text-[10px] uppercase tracking-widest">
          © {{ new Date().getFullYear() }} Cafeoteca. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>
