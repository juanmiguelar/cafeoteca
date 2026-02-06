<template>
  <footer class="bg-surface-dark text-white py-8 px-6 text-center mt-12">
    <h3 class="font-serif text-2xl font-bold mb-4">CAFEOTECA</h3>
    <p class="text-gray-400 text-xs mb-6 max-w-xs mx-auto">
      Café de especialidad, cultura y comunidad en el corazón de Barrio Escalante.
    </p>
    <div class="flex justify-center gap-6 mb-8">
      <a
        href="https://www.instagram.com/cafeoteca/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-400 hover:text-white transition-colors"
        aria-label="Instagram"
      >
        <span class="material-icons-outlined">photo_camera</span>
      </a>
      <a
        href="https://www.facebook.com/cafeoteca/"
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
    <p class="text-gray-600 text-[10px] uppercase tracking-widest">
      © {{ new Date().getFullYear() }} Cafeoteca. Todos los derechos reservados.
    </p>
  </footer>
</template>
