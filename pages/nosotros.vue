<template>
  <div>
    <SeoMeta />

    <!-- Hero: Rebe Portrait -->
    <header class="relative pt-8 pb-12 px-4 overflow-hidden">
      <div class="absolute top-0 right-[-50px] w-64 h-64 bg-olive/20 rounded-full blur-3xl -z-10" />
      <div class="absolute bottom-20 left-[-40px] w-72 h-72 bg-purple-brand/20 rounded-full blur-3xl -z-10" />

      <div class="max-w-md mx-auto relative">
        <!-- Badge -->
        <div class="absolute top-4 left-0 z-20 w-32 h-32 transform -rotate-12 drop-shadow-lg">
          <div class="w-full h-full bg-purple-brand text-white flex flex-col items-center justify-center badge-clip p-4 text-center">
            <p class="text-[8px] uppercase tracking-widest mb-1">Proyecto Almácigo</p>
            <p class="text-3xl font-bold leading-none">12</p>
            <p class="text-xs font-bold uppercase mb-1">AÑOS</p>
            <div class="border-t border-white/40 w-8 my-1" />
            <p class="text-[7px] uppercase tracking-wider">Trayectoria Interna</p>
          </div>
        </div>

        <div class="relative rounded-t-[100px] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white">
          <img
            alt="Retrato de Rebe, pastelera de Cafeoteca, sonriendo con una tartaleta artesanal"
            class="w-full h-[500px] object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlOWF0_JtqzwYbVVKTv1ua-Vwx_kWLxcNrHTx-CNX8yJfgL2Al--6YPhyKd9f9j-9_lKRwNp0AUK7rqhCLMVzuB4xw22BZmmrGuHUAnmxpO6cLNRWbAc7ubzt-uGiJBowQrTBCEHJAjCBQ63qe_3nkVHAESdWVU7r0MJTufol76wF8OPtkn_zv2GUWeC6ObgZq74Y_i7yULEN34XFx7miVy2mUzo7xzS1GHIHudCk-Op3arVrZXgVWJMI88U6Oqhi9FnHI8JsRLfE"
            loading="eager"
            width="400"
            height="500"
          />
          <div class="absolute bottom-0 w-full bg-leaf/90 backdrop-blur-sm py-4 text-center">
            <h1 class="text-white font-bold text-xl tracking-wide uppercase">Rebe - Pastelera</h1>
          </div>
        </div>
      </div>
    </header>

    <!-- Culture Quote -->
    <section class="px-6 py-12 bg-gray-50 relative overflow-hidden">
      <div class="absolute -right-20 -top-20 w-80 h-80 bg-purple-brand/10 rounded-full blur-xl" />
      <div class="absolute -left-20 top-40 w-80 h-80 bg-secondary/10 rounded-full blur-xl" />

      <div class="max-w-md mx-auto text-center relative z-10">
        <p class="text-xs font-bold tracking-[0.2em] text-gray-500 mb-4 uppercase">Café Como Cultura</p>
        <h2 class="font-serif text-3xl text-gray-900 leading-tight mb-6">
          ¿Cómo te gusta <br />
          <span class="italic text-purple-brand">el café?</span>
        </h2>
        <div class="inline-block bg-secondary/20 px-6 py-2 rounded-full mb-8 transform -rotate-2">
          <span class="text-secondary font-extrabold text-2xl uppercase tracking-widest">¡Contigo!</span>
        </div>
        <p class="text-gray-600 font-medium leading-relaxed">
          Con tiempo, con conversación, con lo que pasa entre sorbo y sorbo.
        </p>
      </div>
    </section>

    <!-- Achievement Cards -->
    <section class="px-4 py-8 max-w-md mx-auto space-y-6">
      <article class="bg-white rounded-2xl p-6 shadow-lg border-l-8 border-accent flex flex-col gap-4">
        <div class="flex items-start justify-between">
          <div>
            <h2 class="font-bold text-xl text-gray-900 mb-1">Mundialmente Reconocidos</h2>
            <p class="text-accent font-bold text-sm uppercase tracking-wide">Top 100 Global</p>
          </div>
          <span class="material-icons-outlined text-4xl text-accent/20">emoji_events</span>
        </div>
        <p class="text-gray-600 text-sm leading-relaxed">
          Orgullosamente nombrados el <span class="font-bold text-gray-800">#76</span> de los mejores cafés del mundo.
          Nuestra pasión por el detalle nos ha llevado a cruzar fronteras.
        </p>
      </article>

      <article class="bg-white rounded-2xl p-6 shadow-lg border-l-8 border-olive flex flex-col gap-4">
        <div class="flex items-start justify-between">
          <div>
            <h2 class="font-bold text-xl text-gray-900 mb-1">Micro-Tostaduría</h2>
            <p class="text-olive font-bold text-sm uppercase tracking-wide">Cosecha 25/26</p>
          </div>
          <span class="material-icons-outlined text-4xl text-olive/20">local_fire_department</span>
        </div>
        <p class="text-gray-600 text-sm leading-relaxed">
          Recepción de muestras de café de especialidad. Tostamos en pequeños lotes para resaltar las notas únicas de cada
          origen costarricense.
        </p>
      </article>
    </section>

    <!-- Location & Schedule -->
    <section class="bg-gradient-to-br from-accent to-red-500 text-white py-12 px-6 rounded-t-[3rem] mt-8 relative overflow-hidden">
      <div class="absolute top-[-50px] right-[-50px] w-40 h-40 bg-white opacity-20 rounded-full blur-2xl" />
      <div class="absolute bottom-[-20px] left-[-20px] w-32 h-32 bg-yellow-300 opacity-20 rounded-full blur-xl" />

      <div class="max-w-md mx-auto relative z-10">
        <div class="text-center mb-10">
          <span class="inline-block w-12 h-1 bg-white/50 rounded-full mb-6" />
          <h2 class="font-serif text-3xl font-bold mb-2">¡Te Esperamos!</h2>
          <p class="text-white/80 text-sm tracking-wide uppercase">Barrio Escalante, San José</p>
        </div>

        <!-- Schedule -->
        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-inner mb-8">
          <div class="flex items-center gap-3 mb-4">
            <span class="material-icons-outlined">schedule</span>
            <h3 class="font-bold text-lg">Horario</h3>
          </div>
          <ul class="space-y-3 text-sm">
            <li class="flex justify-between border-b border-white/10 pb-2">
              <span class="opacity-80">Lunes</span>
              <span class="font-bold bg-white/20 px-2 py-0.5 rounded text-xs">CERRADO</span>
            </li>
            <li class="flex justify-between border-b border-white/10 pb-2">
              <span class="opacity-80">Martes a Sábado</span>
              <span class="font-bold">7:00 AM - 7:00 PM</span>
            </li>
            <li class="flex justify-between">
              <span class="opacity-80">Domingos</span>
              <span class="font-bold">7:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>

        <!-- Map placeholder -->
        <div class="rounded-2xl overflow-hidden shadow-lg border-2 border-white/30 h-48 relative bg-gray-200">
          <img
            alt="Mapa de ubicación de Cafeoteca en Barrio Escalante, San José"
            class="w-full h-full object-cover opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCacJQZqTNJaFJUY5f9aG33MFpMcU1gyfYoUfjtAyBcJp5-WZlSK80bpB4ah10kk9AjTLkdonu82_hD1echfD1dqY24N5o7LBPKbMmPpO_vw3v1Kb6PcFpWFNcl09o8lkacAWZ6cxJV7tugw8yTaXtEj5t947wgqUIz1aGsgQqTP1RSI13Q_3oi6VHhUJN6PDPHnWeADGOPLtrbS7wH44icCLonWiKYDO5m6Yi8-LWA2otyqfNJ_ZN4OAcifpeYgqP4FjoTgOvXtcE"
            loading="lazy"
            width="400"
            height="192"
          />
          <a
            href="https://maps.google.com/?q=Cafeoteca+Barrio+Escalante+San+Jose+Costa+Rica"
            target="_blank"
            rel="noopener noreferrer"
            class="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors group"
          >
            <span class="bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform group-hover:scale-105 transition-transform">
              <span class="material-icons-outlined text-accent">place</span>
              <span class="font-bold text-sm">Ver en Mapa</span>
            </span>
          </a>
        </div>

        <div class="mt-8 text-center">
          <a
            href="https://wa.me/50688888888"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full bg-white text-accent font-bold py-4 rounded-xl shadow-lg hover:bg-gray-50 transition-colors uppercase tracking-widest text-sm flex items-center justify-center gap-2"
          >
            <span class="material-icons-outlined">calendar_today</span>
            Reservar Mesa
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<script lang="ts">
export default {
  name: 'NosotrosPage',
}
</script>
