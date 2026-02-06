import { _ as _sfc_main$1 } from './SeoMeta-7ENNswF2.mjs';
import { defineComponent, ref, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'fast-xml-parser';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import '@unhead/addons';
import '@unhead/schema-org/vue';

const menuSections = [
  // ─── DESAYUNO SALADO ───
  {
    id: "desayuno-salado",
    label: "Desayuno Salado",
    color: "accent",
    subsections: [
      {
        title: "Desayuno Salado",
        items: [
          {
            name: "El Tico",
            price: "\u20A17.500",
            description: "Huevos al gusto (2), gallo pinto, natilla cremosa, maduros, tortilla, pico de gallo, aguacate y tocineta o queso frito."
          },
          {
            name: "Huevos Benedictinos",
            price: "\u20A17.300",
            description: "Dos huevos pochados sobre muffin ingl\xE9s, papas al romero, mini ensalada y salsa holandesa. Prote\xEDna a escoger:",
            options: ["Salm\xF3n curado en casa", "Pierna de cerdo ahumado casero", "Tocineta casera", "Vegetales salteados"]
          },
          {
            name: "Omelette al Gusto",
            price: "\u20A17.200",
            description: "Tres huevos con 4 ingredientes a escoger (2 de cada categor\xEDa), con pan de la casa y mini ensalada.",
            options: ["Zucchini asado", "Tomate", "Cebolla rostizada", "Albahaca", "Queso de cabra", "Queso Mozzarella", "Hongos mixtos", "Jam\xF3n de pierna"]
          },
          {
            name: "Omelette Hongos Salvajes",
            price: "\u20A17.500",
            description: "Tres huevos con mezcla de hongos salvajes (champi\xF1\xF3n, ostra, porcini), queso mozzarella y juliana de morrones con pan de la casa y mini ensalada."
          },
          {
            name: "Huevos Turcos \xC7ilbir",
            price: "\u20A16.500",
            description: "Base cremosa de yogur natural y Labneh, salsa romesco, hojuelas de hinojo frito, brotes de eneldo, 2 huevos pochados, ghee de piment\xF3n ahumado y hojuelas picantes, servidos con Naan."
          },
          {
            name: "Tostada de Aguacate",
            price: "\u20A16.300",
            description: "Tostada de pan de masa madre, queso labneh, cubierto de cintas de pepino, salm\xF3n curado en caf\xE9, aguacate, cebolla encurtida y queso Bagaces, servida con ensalada."
          },
          {
            name: "Arreglado Cafeoteca",
            price: "\u20A16.500",
            description: "Rollo de hojaldre crujiente, carne mechada, frijoles arreglados, queso fundido, tomate, lechuga y salsa tica."
          },
          {
            name: "Croissant Relleno",
            price: "\u20A15.400",
            description: "Jam\xF3n de pierna, queso de cabra, aguacate y salsa romesco."
          },
          {
            name: "Croque Franc\xE9s",
            price: null,
            description: "Croissant relleno de jam\xF3n de pierna, mezcla de queso suizo con mozzarella, salsa B\xE9chamel y un toque de mostaza Dijon.",
            variants: [
              { name: "Monsieur: Cl\xE1sico", price: "\u20A14.500" },
              { name: "Madame: Con huevo frito", price: "\u20A15.200" }
            ]
          }
        ]
      },
      {
        title: "Adicionales",
        note: "Puede agregar estos ingredientes al plato de su preferencia.",
        items: [
          { name: "Huevo al gusto (2)", price: "\u20A1900" },
          { name: "Tocineta", price: "\u20A12.000" },
          { name: "Jam\xF3n de pierna ahumado", price: "\u20A1900" },
          { name: "Queso", price: "\u20A11.700" },
          { name: "Hongos mixtos", price: "\u20A1900" },
          { name: "Ensalada", price: "\u20A12.000" },
          { name: "Aguacate", price: "\u20A11.000" },
          { name: "Pinto", price: "\u20A11.000" }
        ]
      }
    ]
  },
  // ─── DESAYUNO DULCE ───
  {
    id: "desayuno-dulce",
    label: "Desayuno Dulce",
    color: "leaf",
    subsections: [
      {
        title: "Desayuno Dulce",
        items: [
          {
            name: "Frutas de Temporada",
            price: "\u20A16.200",
            description: "Yogur natural, granola de la casa o avena en hojuelas, ch\xEDa y miel de abeja Milflores."
          },
          {
            name: "Pancakes Cl\xE1sicos",
            price: "\u20A15.200",
            description: "Tres pancakes servidos con miel de maple, caramelo salado, crema batida y fresas."
          },
          {
            name: "Tostadas Francesas",
            price: "\u20A16.500",
            description: "Pan casero con chispas de chocolate, servidas con maple, compota de frutos rojos, crumble de galleta y crema inglesa."
          },
          {
            name: "Croissant Dulce",
            price: "\u20A15.400",
            description: "Relleno de crema batida de mascarpone, fresas frescas y leche condensada."
          },
          {
            name: "Arrollado de Canela",
            price: "\u20A13.500",
            description: "Esponjoso, relleno de crema de canela, con lustre de queso y pralin\xE9 de pecanas."
          }
        ]
      }
    ]
  },
  // ─── BEBIDAS CALIENTES ───
  {
    id: "bebidas-calientes",
    label: "Bebidas Calientes",
    color: "primary",
    subsections: [
      {
        title: "A Base de Espresso",
        items: [
          { name: "Espresso", price: "\u20A11.250" },
          { name: "Espresso doble", price: "\u20A11.450" },
          { name: "Ristretto", price: "\u20A11.100" },
          { name: "Macchiato (espresso con espuma)", price: "\u20A11.450" },
          { name: "Cortado (espresso con leche)", price: "\u20A11.450" },
          { name: "Affogato (helado con espresso)", price: "\u20A12.500" },
          { name: "Americano 6oz", price: "\u20A11.600" },
          { name: "Americano 10oz", price: "\u20A11.900" },
          { name: "Americano con leche 6oz", price: "\u20A12.000" },
          { name: "Americano con leche 10oz", price: "\u20A12.500" },
          { name: "Cappuccino 6oz", price: "\u20A12.000" },
          { name: "Cappuccino 10oz", price: "\u20A12.500" },
          { name: "Latte 6oz", price: "\u20A12.000" },
          { name: "Latte 10oz", price: "\u20A12.500" },
          { name: "Flat White 6oz", price: "\u20A12.000" },
          { name: "Mochaccino", price: "\u20A12.600" },
          { name: "Cappuchai, aromatizado con chai", price: "\u20A13.500" }
        ]
      },
      {
        title: "Sin Caf\xE9",
        items: [
          { name: "Chai", price: "\u20A13.500" },
          { name: "Chocolate", price: "\u20A12.500" },
          { name: "Leche dorada con miel", price: "\u20A12.750" },
          { name: "Matcha Grado Ceremonial (sin endulzar)", price: "\u20A13.750" }
        ]
      },
      {
        title: "T\xE9s Sencha Tea Co",
        note: "Precio \xFAnico \u20A12.000",
        items: [
          { name: "Sunrise: t\xE9 verde y frutas", price: "\u20A12.000" },
          { name: "Roses & Berries: t\xE9 verde, frutas y flores", price: "\u20A12.000" },
          { name: "Perla Negra: t\xE9 negro, verde, frutas y flores", price: "\u20A12.000" },
          { name: "English Breakfast: t\xE9 negro", price: "\u20A12.000" }
        ]
      },
      {
        title: "Infusiones Sencha Tea Co",
        note: "Precio \xFAnico \u20A12.000",
        items: [
          { name: "Manzanilla: flores de camomila", price: "\u20A12.000" },
          { name: "Bora Bora: mezcla frutos rojos", price: "\u20A12.000" },
          { name: "Cool Mint: hierba buena y zacate de lim\xF3n", price: "\u20A12.000" }
        ]
      },
      {
        title: "M\xE9todos de Filtrado",
        note: "Nuestros caf\xE9s provienen de micro-lotes de fincas de caf\xE9 especial, manejadas por las familias productoras y con alta calidad. Ofrecemos caf\xE9s de todas las regiones cafetaleras de Costa Rica con m\xFAltiples variedades bot\xE1nicas, procesos y m\xE9todos de preparaci\xF3n muy variados. Nuestros baristas pueden recomendarle el caf\xE9 seg\xFAn su gusto y preferencias.",
        items: [
          { name: "1 Taza", price: "\u20A12.200" },
          { name: "2 Tazas", price: "\u20A13.500" }
        ]
      },
      {
        title: "Leches Disponibles",
        note: "Entera 3%, Descremada 0%, Deslactosada 2%, Leche de almendra, Leche de coco, Leche de Avena.",
        items: []
      }
    ]
  },
  // ─── BEBIDAS FRÍAS ───
  {
    id: "bebidas-frias",
    label: "Bebidas Fr\xEDas",
    color: "purple-brand",
    subsections: [
      {
        title: "Bebidas Fr\xEDas",
        items: [
          { name: "T\xE9 fr\xEDo natural con lim\xF3n (sin az\xFAcar)", price: "\u20A12.200" },
          { name: "Limonada de Clitoria (levemente endulzada)", price: "\u20A12.200" },
          { name: "Jugo de Naranja (100% natural)", price: "\u20A12.200" },
          { name: "Jugo Toronja Rosada (Florida's Natural)", price: "\u20A12.200" }
        ]
      },
      {
        title: "Gaseosas",
        items: [
          { name: "Agua Carbonatada Cafeoteca (Botella 1Lt)", price: "\u20A12.200" },
          { name: "Coca Cola Zero (Botella 300ml)", price: "\u20A12.200" }
        ]
      },
      {
        title: "Vino (por copa)",
        items: [
          { name: "Tinto: Peque\xF1a Vasija, Syrah Malbec, Argentina", price: "\u20A13.750" },
          { name: "Blanco: Peque\xF1a Vasija, Sauvignon Blanc, Semill\xF3n, Argentina", price: "\u20A13.750" }
        ]
      },
      {
        title: "Sodas Naturales (Cafeoteca)",
        items: [
          { name: "Tamarindo", price: "\u20A12.200" },
          { name: "Fresa con Bals\xE1mico", price: "\u20A12.200" }
        ]
      },
      {
        title: "Sodas Naturales (Salt Traders)",
        items: [
          { name: "Maracuy\xE1", price: "\u20A12.500" },
          { name: "Fresada (Fresa con lim\xF3n)", price: "\u20A12.500" },
          { name: "Lim\xF3n Mandarino y Jengibre", price: "\u20A12.500" }
        ]
      },
      {
        title: "Mocktails (Cocktail sin alcohol)",
        items: [
          { name: "Coffee Tonic de Tamarindo", price: "\u20A13.500", description: "Infusi\xF3n de caf\xE9 con pulpa de fruta natural, lim\xF3n, miel y agua t\xF3nica." },
          { name: "Arabica Mule", price: "\u20A13.500", description: "Cerveza de jengibre, lim\xF3n, espresso y concentrado de jengibre." },
          { name: "Naranjada de caf\xE9", price: "\u20A13.500", description: "Naranja, caf\xE9, naranja confitada." }
        ]
      },
      {
        title: "Cocktails",
        items: [
          { name: "L\xE1grimas de Catrina", price: "\u20A14.200", description: "C\xF3ctel de reducci\xF3n de Jamaica, mezcal, lim\xF3n y licor de chile de \xE1rbol." },
          { name: "Mimosa", price: "\u20A14.200" },
          { name: "Sangr\xEDa tinta con frutas", price: "\u20A14.200" },
          { name: "Sangr\xEDa blanca con manzana verde", price: "\u20A14.200" }
        ]
      },
      {
        title: "Bebidas Sobre Hielo Base Espresso",
        note: "Preparadas sin endulzar a menos de que indique lo contrario.",
        items: [
          { name: "Iced Americano", price: "\u20A12.200" },
          { name: "Iced Latte", price: "\u20A12.500" },
          { name: "Iced Mochaccino", price: "\u20A12.600" },
          { name: "Iced Leche Dorada (con miel)", price: "\u20A12.750" },
          { name: "Iced Matcha", price: "\u20A13.500" },
          { name: "Iced Chai", price: "\u20A13.500" },
          { name: "Iced Chocolate de la casa", price: "\u20A12.500" }
        ]
      }
    ]
  },
  // ─── POSTRES & PANADERÍA DULCE ───
  {
    id: "postres",
    label: "Postres & Panader\xEDa",
    color: "secondary",
    subsections: [
      {
        title: "Postres & Panader\xEDa Dulce",
        items: [
          { name: "Galletas", price: "\u20A11.500", description: "Galletas de chocochip, de chocolate blanco y pistacho, de chocolate negro y caramelo con sal." },
          { name: "Alfajor", price: "\u20A1950", description: "Galleta de mantequilla, relleno con dulce de leche." },
          { name: "Mini Postres", price: "\u20A12.100", description: "Nuestros postres en versi\xF3n mini." },
          { name: "Brownie", price: "\u20A13.600", description: "Delicioso y melcochudo." },
          { name: "Fondant de Chocolate", price: "\u20A15.100", description: "Quequito de chocolate con centro suave, servido caliente con helado." },
          { name: "Queque del D\xEDa", price: "\u20A13.100", description: "Lim\xF3n con amapola / Ayote con pecanas / Banano." },
          { name: "Cake de Frambuesa", price: "\u20A13.500", description: "Con manzana y crocante de galleta de pistacho." },
          { name: "Tarte Tatin", price: "\u20A15.100", description: "Tarta volcada de manzana acaramelada al horno, servido caliente con helado." },
          { name: "Cheesecakes", price: "\u20A15.500", description: "Base de galleta de vainilla (marmoleado vainilla y chocolate, con compota de frambuesa y pitahaya), base de brownie (relleno de vainilla con caramelo salado y pralin\xE9 de pecanas), base de galleta de pistacho (relleno de vainilla y salsa de mora)." },
          { name: "Pie de Pecanas", price: "\u20A15.100", description: "Tarta crocante rellena de pecanas caramelizadas, servida caliente con helado." },
          { name: "Pie de Lim\xF3n o Maracuy\xE1", price: "\u20A14.100", description: "Tarta crocante rellena de crema con lim\xF3n o maracuy\xE1." },
          { name: "Tarta de Frambuesa", price: "\u20A15.500", description: "Concha de galleta, rellena de crema pastelera de vainilla y frambuesas frescas." },
          { name: "Bombitas", price: "\u20A13.500", description: "Dos bombitas de p\xE2te \xE0 choux, rellenas de crema pastelera. Sabores de temporada." }
        ]
      },
      {
        title: "Panader\xEDa",
        items: [
          {
            name: "Croissant",
            price: null,
            variants: [
              { name: "Sencillo", price: "\u20A12.500" },
              { name: "Jam\xF3n y Queso", price: "\u20A13.950" },
              { name: "Nutella", price: "\u20A12.950" },
              { name: "Frangipane", price: "\u20A12.950" }
            ]
          },
          { name: "Pain au Chocolat", price: "\u20A12.800", description: "Hojaldre relleno de chocolate." },
          { name: "Chausson aux Pommes", price: "\u20A12.850", description: "Empanada de hojaldre rellena de compota de manzana." },
          { name: "Arrollado de Canela", price: "\u20A13.500", description: "Esponjoso, relleno de crema de canela, con lustre de queso y pralin\xE9 de pecanas." },
          { name: "Arrollado de Frambuesa", price: "\u20A13.100", description: "Esponjoso, relleno de compota de frambuesa con glaze y pralin\xE9 de almendras." },
          { name: "Danesas Saladas del D\xEDa", price: "\u20A12.600", description: "Trenzas de hojaldre con rellenos variados." },
          { name: "Empanadas Salte\xF1as", price: "\u20A12.800", description: "Empanadas de carne mechada y queso, o caprese (tomate, mozzarella y albahaca)." },
          { name: "Canasta de Panes (2-3 personas)", price: "\u20A16.850", description: "Servidos con mantequilla, queso crema y mermelada casera de temporada. Incluye focaccia, croissant, pan de masa madre y bollitos." }
        ]
      },
      {
        title: "Helados Softie",
        note: "Peque\xF1o \u20A11.500 / Grande \u20A12.500 / Topping \u20A1500",
        items: [
          { name: "Vainilla", price: null },
          { name: "Temporada", price: null },
          { name: "Combinado", price: null }
        ]
      }
    ]
  },
  // ─── BOCAS Y ENTRADAS ───
  {
    id: "bocas-entradas",
    label: "Bocas y Entradas",
    color: "leaf",
    subsections: [
      {
        title: "Bocas y Entradas",
        items: [
          { name: "Crema de Tomates Asados", price: "\u20A16.200", description: "Tomate asado, caldo vegetal y crema. Servida con pesto, queso de cabra cremoso y pan de masa madre." },
          { name: "Gallos de Papa Achiotada", price: "\u20A16.300", description: "Tres tortillas de ma\xEDz servidas con picadillo de papa con chorizo ahumado, culantro y gajos de toronja." },
          { name: "Tacos de Hongo Ostra", price: "\u20A16.500", description: "Tres tortillas de ma\xEDz servidas con hongos ostra, puerros asados, crema de chile paname\xF1o y aguacate." },
          { name: "Ceviche Blanco", price: "\u20A18.250", description: "Leche de coco, mango pint\xF3n, cebolla morada, jengibre y chile paname\xF1o. Servido con chips de tub\xE9rculos variados." }
        ]
      },
      {
        title: "Sandwiches & Ensaladas",
        note: "Todos nuestros sandwiches se sirven con ensalada o patatas bravas a escoger.",
        items: [
          { name: "Bowl de Ensalada Multicolor", price: "\u20A18.100", description: "Fideos de frijol, repollo morado en escabeche, rabanitos encurtidos, elote rostizado, juliana de zanahoria, pepino, tomate cherry, pesto de hierbas frescas, crocante de mara\xF1\xF3n frito y vinagreta de tamarindo." },
          { name: "Ensalada de At\xFAn", price: "\u20A18.250", description: "Fideos soba, at\xFAn sellado con ajonjol\xED, aderezo de wasabi, edamame, vainicas salteadas, pesto de hierbabuena y man\xED picado." },
          { name: "Sandwich de Pollo", price: "\u20A16.950", description: "Pechuga de pollo, mix de verdes, cremoso de queso azul y compota de higos, en pan focaccia." },
          { name: "Sandwich Parisino", price: "\u20A16.950", description: "Jam\xF3n ahumado casero, pepinillos en conserva, queso, aderezo de mostaza, cebolla encurtida y verdes variados, en pan estilo baguette." },
          { name: "Sandwich de Roast Beef", price: "\u20A16.950", description: "Lomo de res estilo roast beef, tomates asados, cebolla caramelizada, queso Gouda gratinado, lechuga romana y aderezo de mostaza en grano, en pan multigrano." },
          { name: "Hamburguesa de Pollo", price: "\u20A111.950", description: "Milanesa de pollo empanizada, ensalada tipo coleslaw, pan Challah, servida con papas rostizadas." },
          { name: "Hamburguesa Cafeoteca", price: "\u20A112.100", description: "Torta de 8 oz de carne de primera a la parrilla, queso manchego, hongos salteados, cebolla caramelizada al bals\xE1mico y aguacate. Servida con ensalada y papas rostizadas." }
        ]
      }
    ]
  }
];
const menuCategories = [
  { id: "all", label: "Todo" },
  { id: "desayuno-salado", label: "Desayuno Salado" },
  { id: "desayuno-dulce", label: "Desayuno Dulce" },
  { id: "bebidas-calientes", label: "Bebidas Calientes" },
  { id: "bebidas-frias", label: "Bebidas Fr\xEDas" },
  { id: "postres", label: "Postres & Panader\xEDa" },
  { id: "bocas-entradas", label: "Bocas y Entradas" }
];
const __default__ = {
  name: "MenuPage"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const activeCategory = ref("all");
    const filteredSections = computed(() => {
      if (activeCategory.value === "all") return menuSections;
      return menuSections.filter((s) => s.id === activeCategory.value);
    });
    function sectionColorBg(color) {
      var _a;
      const map = {
        "accent": "bg-accent",
        "leaf": "bg-leaf",
        "primary": "bg-primary",
        "purple-brand": "bg-purple-brand",
        "secondary": "bg-secondary",
        "olive": "bg-olive"
      };
      return (_a = map[color]) != null ? _a : "bg-primary";
    }
    function sectionColorText(color) {
      var _a;
      const map = {
        "accent": "text-accent",
        "leaf": "text-leaf",
        "primary": "text-primary",
        "purple-brand": "text-purple-brand",
        "secondary": "text-secondary",
        "olive": "text-olive"
      };
      return (_a = map[color]) != null ? _a : "text-primary";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SeoMeta = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SeoMeta, null, null, _parent));
      _push(`<section class="px-4 sm:px-6 lg:px-8 pt-6 pb-2"><div class="relative w-full h-48 sm:h-56 lg:h-72 rounded-2xl overflow-hidden shadow-xl group"><img alt="Caf\xE9 de especialidad siendo servido en Cafeoteca" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkWAZPmgKGO0cLyt1QX1YYvxqbHhhCIUZUGvwC9uu62v0Uaq07MgaHAs_LroYiDwyf3zsh1A8RE5Sm06AgAs_Gj2jNGPvIi7Sy4YuDI3mJ-Sole9RuCPxGiGU1yuamJOwLz9ZlaBdbkd5xC5jP2-CiBc6k7raM0AIPtNuvzS5w4QCweWQjYxTeKJ7m7ew7LOxpKDX8PC0agA4s0WAPNBaU-Bg14aZqK4tOzdsikQMnVHaAia7FlmKQyu8SYneoUSfAynPOaDDE8GI" loading="eager" width="1200" height="288"><div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div><div class="absolute bottom-0 left-0 p-6 sm:p-8 text-white"><h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-1">Nuestro Men\xFA</h1><p class="text-sm sm:text-base text-gray-200 max-w-lg"> Precios incluyen impuestos de venta y servicio. </p></div></div></section><nav class="sticky top-[72px] z-30 bg-background-light/90 backdrop-blur-md border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-8"><h2 class="sr-only">Categor\xEDas del Men\xFA</h2><div class="flex space-x-2 sm:space-x-3 overflow-x-auto hide-scrollbar pb-1 lg:justify-center"><!--[-->`);
      ssrRenderList(unref(menuCategories), (category) => {
        _push(`<button class="${ssrRenderClass([
          "flex-shrink-0 px-4 py-2 rounded-full font-medium transition text-xs sm:text-sm whitespace-nowrap",
          unref(activeCategory) === category.id ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105" : "bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary"
        ])}">${ssrInterpolate(category.label)}</button>`);
      });
      _push(`<!--]--></div></nav><div class="px-4 sm:px-6 lg:px-8 py-8 space-y-12 lg:space-y-16"><!--[-->`);
      ssrRenderList(unref(filteredSections), (section) => {
        _push(`<section><!--[-->`);
        ssrRenderList(section.subsections, (sub, subIdx) => {
          _push(`<div class="${ssrRenderClass(["mb-10 lg:mb-14", subIdx > 0 ? "mt-8" : ""])}"><div class="flex items-center gap-3 mb-6"><div class="${ssrRenderClass(["w-1 h-8 rounded-full", sectionColorBg(section.color)])}"></div><h2 class="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-gray-900">${ssrInterpolate(sub.title)}</h2></div>`);
          if (sub.note) {
            _push(`<p class="text-gray-500 text-sm sm:text-base mb-6 max-w-2xl leading-relaxed italic">${ssrInterpolate(sub.note)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (sub.items.length === 0) {
            _push(`<!--[--><!--]-->`);
          } else {
            _push(`<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5"><!--[-->`);
            ssrRenderList(sub.items, (item) => {
              _push(`<article class="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"><div class="flex justify-between items-start gap-3 mb-1"><h3 class="font-bold text-gray-900 text-sm sm:text-base leading-snug">${ssrInterpolate(item.name)}</h3>`);
              if (item.price) {
                _push(`<span class="${ssrRenderClass(["font-serif font-bold text-sm sm:text-base whitespace-nowrap", sectionColorText(section.color)])}">${ssrInterpolate(item.price)}</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
              if (item.description) {
                _push(`<p class="text-gray-500 text-xs sm:text-sm leading-relaxed mt-1">${ssrInterpolate(item.description)}</p>`);
              } else {
                _push(`<!---->`);
              }
              if (item.variants && item.variants.length) {
                _push(`<div class="mt-2 space-y-1"><!--[-->`);
                ssrRenderList(item.variants, (variant) => {
                  _push(`<div class="flex justify-between text-xs sm:text-sm"><span class="text-gray-600">${ssrInterpolate(variant.name)}</span><span class="${ssrRenderClass(["font-semibold", sectionColorText(section.color)])}">${ssrInterpolate(variant.price)}</span></div>`);
                });
                _push(`<!--]--></div>`);
              } else {
                _push(`<!---->`);
              }
              if (item.options && item.options.length) {
                _push(`<div class="mt-2 flex flex-wrap gap-1.5"><!--[-->`);
                ssrRenderList(item.options, (opt) => {
                  _push(`<span class="text-[10px] sm:text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">${ssrInterpolate(opt)}</span>`);
                });
                _push(`<!--]--></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</article>`);
            });
            _push(`<!--]--></div>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></section>`);
      });
      _push(`<!--]-->`);
      if (unref(filteredSections).length === 0) {
        _push(`<div class="text-center py-16"><span class="material-icons-outlined text-5xl text-gray-300">restaurant_menu</span><p class="text-gray-400 mt-4">No hay items en esta categor\xEDa.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="py-8 lg:py-14 text-center relative"><div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 lg:w-72 h-48 lg:h-72 bg-primary/10 rounded-full blur-xl -z-10"></div><h2 class="font-display font-bold text-2xl lg:text-3xl text-primary mb-2">\xBFC\xD3MO TE GUSTA EL CAF\xC9?</h2><p class="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6">\xA1CONTIGO!</p><p class="font-serif italic text-gray-600 text-sm sm:text-base max-w-md mx-auto"> Con tiempo, con conversaci\xF3n, con lo que pasa entre sorbo y sorbo. </p></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=menu-ChRgKmY_.mjs.map
