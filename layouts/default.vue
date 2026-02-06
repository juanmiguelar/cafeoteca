<template>
  <div class="relative min-h-screen">
    <!-- Background blobs -->
    <div class="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-20">
      <div class="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-secondary organic-blob-1 blur-3xl mix-blend-multiply" />
      <div class="absolute top-[20%] right-[-20%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-primary organic-blob-2 blur-3xl mix-blend-multiply" />
      <div class="absolute bottom-[-10%] left-[10%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] bg-tertiary organic-blob-1 blur-3xl mix-blend-multiply" />
    </div>

    <div class="relative z-10 pb-24 md:pb-8">
      <AppHeader />
      <main class="max-w-7xl mx-auto">
        <slot />
      </main>
      <AppFooter />
    </div>

    <!-- Floating Reservar button — mobile & tablet only, hidden on desktop (nav has it) -->
    <div class="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full px-4 max-w-md md:hidden">
      <a
        href="https://wa.me/50688888888"
        target="_blank"
        rel="noopener noreferrer"
        class="w-full bg-green-600 text-white rounded-full py-4 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
      >
        <span class="material-icons-outlined text-xl">chat</span>
        <span class="font-bold tracking-wide">Reservar Mesa</span>
        <span class="w-2 h-2 bg-green-300 rounded-full animate-pulse group-hover:bg-white" />
      </a>
    </div>
  </div>
</template>
