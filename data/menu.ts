export interface MenuItem {
  name: string
  price: string | null
  description?: string
  variants?: { name: string; price: string }[]
  options?: string[]
}

export interface MenuSubSection {
  title: string
  note?: string
  items: MenuItem[]
}

export interface MenuSection {
  id: string
  label: string
  color: string
  subsections: MenuSubSection[]
}

export const menuSections: MenuSection[] = [
  // ─── DESAYUNO SALADO ───
  {
    id: 'desayuno-salado',
    label: 'Desayuno Salado',
    color: 'accent',
    subsections: [
      {
        title: 'Desayuno Salado',
        items: [
          {
            name: 'El Tico',
            price: '₡7.500',
            description: 'Huevos al gusto (2), gallo pinto, natilla cremosa, maduros, tortilla, pico de gallo, aguacate y tocineta o queso frito.',
          },
          {
            name: 'Huevos Benedictinos',
            price: '₡7.300',
            description: 'Dos huevos pochados sobre muffin inglés, papas al romero, mini ensalada y salsa holandesa. Proteína a escoger:',
            options: ['Salmón curado en casa', 'Pierna de cerdo ahumado casero', 'Tocineta casera', 'Vegetales salteados'],
          },
          {
            name: 'Omelette al Gusto',
            price: '₡7.200',
            description: 'Tres huevos con 4 ingredientes a escoger (2 de cada categoría), con pan de la casa y mini ensalada.',
            options: ['Zucchini asado', 'Tomate', 'Cebolla rostizada', 'Albahaca', 'Queso de cabra', 'Queso Mozzarella', 'Hongos mixtos', 'Jamón de pierna'],
          },
          {
            name: 'Omelette Hongos Salvajes',
            price: '₡7.500',
            description: 'Tres huevos con mezcla de hongos salvajes (champiñón, ostra, porcini), queso mozzarella y juliana de morrones con pan de la casa y mini ensalada.',
          },
          {
            name: 'Huevos Turcos Çilbir',
            price: '₡6.500',
            description: 'Base cremosa de yogur natural y Labneh, salsa romesco, hojuelas de hinojo frito, brotes de eneldo, 2 huevos pochados, ghee de pimentón ahumado y hojuelas picantes, servidos con Naan.',
          },
          {
            name: 'Tostada de Aguacate',
            price: '₡6.300',
            description: 'Tostada de pan de masa madre, queso labneh, cubierto de cintas de pepino, salmón curado en café, aguacate, cebolla encurtida y queso Bagaces, servida con ensalada.',
          },
          {
            name: 'Arreglado Cafeoteca',
            price: '₡6.500',
            description: 'Rollo de hojaldre crujiente, carne mechada, frijoles arreglados, queso fundido, tomate, lechuga y salsa tica.',
          },
          {
            name: 'Croissant Relleno',
            price: '₡5.400',
            description: 'Jamón de pierna, queso de cabra, aguacate y salsa romesco.',
          },
          {
            name: 'Croque Francés',
            price: null,
            description: 'Croissant relleno de jamón de pierna, mezcla de queso suizo con mozzarella, salsa Béchamel y un toque de mostaza Dijon.',
            variants: [
              { name: 'Monsieur: Clásico', price: '₡4.500' },
              { name: 'Madame: Con huevo frito', price: '₡5.200' },
            ],
          },
        ],
      },
      {
        title: 'Adicionales',
        note: 'Puede agregar estos ingredientes al plato de su preferencia.',
        items: [
          { name: 'Huevo al gusto (2)', price: '₡900' },
          { name: 'Tocineta', price: '₡2.000' },
          { name: 'Jamón de pierna ahumado', price: '₡900' },
          { name: 'Queso', price: '₡1.700' },
          { name: 'Hongos mixtos', price: '₡900' },
          { name: 'Ensalada', price: '₡2.000' },
          { name: 'Aguacate', price: '₡1.000' },
          { name: 'Pinto', price: '₡1.000' },
        ],
      },
    ],
  },

  // ─── DESAYUNO DULCE ───
  {
    id: 'desayuno-dulce',
    label: 'Desayuno Dulce',
    color: 'leaf',
    subsections: [
      {
        title: 'Desayuno Dulce',
        items: [
          {
            name: 'Frutas de Temporada',
            price: '₡6.200',
            description: 'Yogur natural, granola de la casa o avena en hojuelas, chía y miel de abeja Milflores.',
          },
          {
            name: 'Pancakes Clásicos',
            price: '₡5.200',
            description: 'Tres pancakes servidos con miel de maple, caramelo salado, crema batida y fresas.',
          },
          {
            name: 'Tostadas Francesas',
            price: '₡6.500',
            description: 'Pan casero con chispas de chocolate, servidas con maple, compota de frutos rojos, crumble de galleta y crema inglesa.',
          },
          {
            name: 'Croissant Dulce',
            price: '₡5.400',
            description: 'Relleno de crema batida de mascarpone, fresas frescas y leche condensada.',
          },
          {
            name: 'Arrollado de Canela',
            price: '₡3.500',
            description: 'Esponjoso, relleno de crema de canela, con lustre de queso y praliné de pecanas.',
          },
        ],
      },
    ],
  },

  // ─── BEBIDAS CALIENTES ───
  {
    id: 'bebidas-calientes',
    label: 'Bebidas Calientes',
    color: 'primary',
    subsections: [
      {
        title: 'A Base de Espresso',
        items: [
          { name: 'Espresso', price: '₡1.250' },
          { name: 'Espresso doble', price: '₡1.450' },
          { name: 'Ristretto', price: '₡1.100' },
          { name: 'Macchiato (espresso con espuma)', price: '₡1.450' },
          { name: 'Cortado (espresso con leche)', price: '₡1.450' },
          { name: 'Affogato (helado con espresso)', price: '₡2.500' },
          { name: 'Americano 6oz', price: '₡1.600' },
          { name: 'Americano 10oz', price: '₡1.900' },
          { name: 'Americano con leche 6oz', price: '₡2.000' },
          { name: 'Americano con leche 10oz', price: '₡2.500' },
          { name: 'Cappuccino 6oz', price: '₡2.000' },
          { name: 'Cappuccino 10oz', price: '₡2.500' },
          { name: 'Latte 6oz', price: '₡2.000' },
          { name: 'Latte 10oz', price: '₡2.500' },
          { name: 'Flat White 6oz', price: '₡2.000' },
          { name: 'Mochaccino', price: '₡2.600' },
          { name: 'Cappuchai, aromatizado con chai', price: '₡3.500' },
        ],
      },
      {
        title: 'Sin Café',
        items: [
          { name: 'Chai', price: '₡3.500' },
          { name: 'Chocolate', price: '₡2.500' },
          { name: 'Leche dorada con miel', price: '₡2.750' },
          { name: 'Matcha Grado Ceremonial (sin endulzar)', price: '₡3.750' },
        ],
      },
      {
        title: 'Tés Sencha Tea Co',
        note: 'Precio único ₡2.000',
        items: [
          { name: 'Sunrise: té verde y frutas', price: '₡2.000' },
          { name: 'Roses & Berries: té verde, frutas y flores', price: '₡2.000' },
          { name: 'Perla Negra: té negro, verde, frutas y flores', price: '₡2.000' },
          { name: 'English Breakfast: té negro', price: '₡2.000' },
        ],
      },
      {
        title: 'Infusiones Sencha Tea Co',
        note: 'Precio único ₡2.000',
        items: [
          { name: 'Manzanilla: flores de camomila', price: '₡2.000' },
          { name: 'Bora Bora: mezcla frutos rojos', price: '₡2.000' },
          { name: 'Cool Mint: hierba buena y zacate de limón', price: '₡2.000' },
        ],
      },
      {
        title: 'Métodos de Filtrado',
        note: 'Nuestros cafés provienen de micro-lotes de fincas de café especial, manejadas por las familias productoras y con alta calidad. Ofrecemos cafés de todas las regiones cafetaleras de Costa Rica con múltiples variedades botánicas, procesos y métodos de preparación muy variados. Nuestros baristas pueden recomendarle el café según su gusto y preferencias.',
        items: [
          { name: '1 Taza', price: '₡2.200' },
          { name: '2 Tazas', price: '₡3.500' },
        ],
      },
      {
        title: 'Leches Disponibles',
        note: 'Entera 3%, Descremada 0%, Deslactosada 2%, Leche de almendra, Leche de coco, Leche de Avena.',
        items: [],
      },
    ],
  },

  // ─── BEBIDAS FRÍAS ───
  {
    id: 'bebidas-frias',
    label: 'Bebidas Frías',
    color: 'purple-brand',
    subsections: [
      {
        title: 'Bebidas Frías',
        items: [
          { name: 'Té frío natural con limón (sin azúcar)', price: '₡2.200' },
          { name: 'Limonada de Clitoria (levemente endulzada)', price: '₡2.200' },
          { name: 'Jugo de Naranja (100% natural)', price: '₡2.200' },
          { name: 'Jugo Toronja Rosada (Florida\'s Natural)', price: '₡2.200' },
        ],
      },
      {
        title: 'Gaseosas',
        items: [
          { name: 'Agua Carbonatada Cafeoteca (Botella 1Lt)', price: '₡2.200' },
          { name: 'Coca Cola Zero (Botella 300ml)', price: '₡2.200' },
        ],
      },
      {
        title: 'Vino (por copa)',
        items: [
          { name: 'Tinto: Pequeña Vasija, Syrah Malbec, Argentina', price: '₡3.750' },
          { name: 'Blanco: Pequeña Vasija, Sauvignon Blanc, Semillón, Argentina', price: '₡3.750' },
        ],
      },
      {
        title: 'Sodas Naturales (Cafeoteca)',
        items: [
          { name: 'Tamarindo', price: '₡2.200' },
          { name: 'Fresa con Balsámico', price: '₡2.200' },
        ],
      },
      {
        title: 'Sodas Naturales (Salt Traders)',
        items: [
          { name: 'Maracuyá', price: '₡2.500' },
          { name: 'Fresada (Fresa con limón)', price: '₡2.500' },
          { name: 'Limón Mandarino y Jengibre', price: '₡2.500' },
        ],
      },
      {
        title: 'Mocktails (Cocktail sin alcohol)',
        items: [
          { name: 'Coffee Tonic de Tamarindo', price: '₡3.500', description: 'Infusión de café con pulpa de fruta natural, limón, miel y agua tónica.' },
          { name: 'Arabica Mule', price: '₡3.500', description: 'Cerveza de jengibre, limón, espresso y concentrado de jengibre.' },
          { name: 'Naranjada de café', price: '₡3.500', description: 'Naranja, café, naranja confitada.' },
        ],
      },
      {
        title: 'Cocktails',
        items: [
          { name: 'Lágrimas de Catrina', price: '₡4.200', description: 'Cóctel de reducción de Jamaica, mezcal, limón y licor de chile de árbol.' },
          { name: 'Mimosa', price: '₡4.200' },
          { name: 'Sangría tinta con frutas', price: '₡4.200' },
          { name: 'Sangría blanca con manzana verde', price: '₡4.200' },
        ],
      },
      {
        title: 'Bebidas Sobre Hielo Base Espresso',
        note: 'Preparadas sin endulzar a menos de que indique lo contrario.',
        items: [
          { name: 'Iced Americano', price: '₡2.200' },
          { name: 'Iced Latte', price: '₡2.500' },
          { name: 'Iced Mochaccino', price: '₡2.600' },
          { name: 'Iced Leche Dorada (con miel)', price: '₡2.750' },
          { name: 'Iced Matcha', price: '₡3.500' },
          { name: 'Iced Chai', price: '₡3.500' },
          { name: 'Iced Chocolate de la casa', price: '₡2.500' },
        ],
      },
    ],
  },

  // ─── POSTRES & PANADERÍA DULCE ───
  {
    id: 'postres',
    label: 'Postres & Panadería',
    color: 'secondary',
    subsections: [
      {
        title: 'Postres & Panadería Dulce',
        items: [
          { name: 'Galletas', price: '₡1.500', description: 'Galletas de chocochip, de chocolate blanco y pistacho, de chocolate negro y caramelo con sal.' },
          { name: 'Alfajor', price: '₡950', description: 'Galleta de mantequilla, relleno con dulce de leche.' },
          { name: 'Mini Postres', price: '₡2.100', description: 'Nuestros postres en versión mini.' },
          { name: 'Brownie', price: '₡3.600', description: 'Delicioso y melcochudo.' },
          { name: 'Fondant de Chocolate', price: '₡5.100', description: 'Quequito de chocolate con centro suave, servido caliente con helado.' },
          { name: 'Queque del Día', price: '₡3.100', description: 'Limón con amapola / Ayote con pecanas / Banano.' },
          { name: 'Cake de Frambuesa', price: '₡3.500', description: 'Con manzana y crocante de galleta de pistacho.' },
          { name: 'Tarte Tatin', price: '₡5.100', description: 'Tarta volcada de manzana acaramelada al horno, servido caliente con helado.' },
          { name: 'Cheesecakes', price: '₡5.500', description: 'Base de galleta de vainilla (marmoleado vainilla y chocolate, con compota de frambuesa y pitahaya), base de brownie (relleno de vainilla con caramelo salado y praliné de pecanas), base de galleta de pistacho (relleno de vainilla y salsa de mora).' },
          { name: 'Pie de Pecanas', price: '₡5.100', description: 'Tarta crocante rellena de pecanas caramelizadas, servida caliente con helado.' },
          { name: 'Pie de Limón o Maracuyá', price: '₡4.100', description: 'Tarta crocante rellena de crema con limón o maracuyá.' },
          { name: 'Tarta de Frambuesa', price: '₡5.500', description: 'Concha de galleta, rellena de crema pastelera de vainilla y frambuesas frescas.' },
          { name: 'Bombitas', price: '₡3.500', description: 'Dos bombitas de pâte à choux, rellenas de crema pastelera. Sabores de temporada.' },
        ],
      },
      {
        title: 'Panadería',
        items: [
          {
            name: 'Croissant',
            price: null,
            variants: [
              { name: 'Sencillo', price: '₡2.500' },
              { name: 'Jamón y Queso', price: '₡3.950' },
              { name: 'Nutella', price: '₡2.950' },
              { name: 'Frangipane', price: '₡2.950' },
            ],
          },
          { name: 'Pain au Chocolat', price: '₡2.800', description: 'Hojaldre relleno de chocolate.' },
          { name: 'Chausson aux Pommes', price: '₡2.850', description: 'Empanada de hojaldre rellena de compota de manzana.' },
          { name: 'Arrollado de Canela', price: '₡3.500', description: 'Esponjoso, relleno de crema de canela, con lustre de queso y praliné de pecanas.' },
          { name: 'Arrollado de Frambuesa', price: '₡3.100', description: 'Esponjoso, relleno de compota de frambuesa con glaze y praliné de almendras.' },
          { name: 'Danesas Saladas del Día', price: '₡2.600', description: 'Trenzas de hojaldre con rellenos variados.' },
          { name: 'Empanadas Salteñas', price: '₡2.800', description: 'Empanadas de carne mechada y queso, o caprese (tomate, mozzarella y albahaca).' },
          { name: 'Canasta de Panes (2-3 personas)', price: '₡6.850', description: 'Servidos con mantequilla, queso crema y mermelada casera de temporada. Incluye focaccia, croissant, pan de masa madre y bollitos.' },
        ],
      },
      {
        title: 'Helados Softie',
        note: 'Pequeño ₡1.500 / Grande ₡2.500 / Topping ₡500',
        items: [
          { name: 'Vainilla', price: null },
          { name: 'Temporada', price: null },
          { name: 'Combinado', price: null },
        ],
      },
    ],
  },

  // ─── BOCAS Y ENTRADAS ───
  {
    id: 'bocas-entradas',
    label: 'Bocas y Entradas',
    color: 'leaf',
    subsections: [
      {
        title: 'Bocas y Entradas',
        items: [
          { name: 'Crema de Tomates Asados', price: '₡6.200', description: 'Tomate asado, caldo vegetal y crema. Servida con pesto, queso de cabra cremoso y pan de masa madre.' },
          { name: 'Gallos de Papa Achiotada', price: '₡6.300', description: 'Tres tortillas de maíz servidas con picadillo de papa con chorizo ahumado, culantro y gajos de toronja.' },
          { name: 'Tacos de Hongo Ostra', price: '₡6.500', description: 'Tres tortillas de maíz servidas con hongos ostra, puerros asados, crema de chile panameño y aguacate.' },
          { name: 'Ceviche Blanco', price: '₡8.250', description: 'Leche de coco, mango pintón, cebolla morada, jengibre y chile panameño. Servido con chips de tubérculos variados.' },
        ],
      },
      {
        title: 'Sandwiches & Ensaladas',
        note: 'Todos nuestros sandwiches se sirven con ensalada o patatas bravas a escoger.',
        items: [
          { name: 'Bowl de Ensalada Multicolor', price: '₡8.100', description: 'Fideos de frijol, repollo morado en escabeche, rabanitos encurtidos, elote rostizado, juliana de zanahoria, pepino, tomate cherry, pesto de hierbas frescas, crocante de marañón frito y vinagreta de tamarindo.' },
          { name: 'Ensalada de Atún', price: '₡8.250', description: 'Fideos soba, atún sellado con ajonjolí, aderezo de wasabi, edamame, vainicas salteadas, pesto de hierbabuena y maní picado.' },
          { name: 'Sandwich de Pollo', price: '₡6.950', description: 'Pechuga de pollo, mix de verdes, cremoso de queso azul y compota de higos, en pan focaccia.' },
          { name: 'Sandwich Parisino', price: '₡6.950', description: 'Jamón ahumado casero, pepinillos en conserva, queso, aderezo de mostaza, cebolla encurtida y verdes variados, en pan estilo baguette.' },
          { name: 'Sandwich de Roast Beef', price: '₡6.950', description: 'Lomo de res estilo roast beef, tomates asados, cebolla caramelizada, queso Gouda gratinado, lechuga romana y aderezo de mostaza en grano, en pan multigrano.' },
          { name: 'Hamburguesa de Pollo', price: '₡11.950', description: 'Milanesa de pollo empanizada, ensalada tipo coleslaw, pan Challah, servida con papas rostizadas.' },
          { name: 'Hamburguesa Cafeoteca', price: '₡12.100', description: 'Torta de 8 oz de carne de primera a la parrilla, queso manchego, hongos salteados, cebolla caramelizada al balsámico y aguacate. Servida con ensalada y papas rostizadas.' },
        ],
      },
    ],
  },
]

// Category groups for the filter tabs
export const menuCategories = [
  { id: 'all', label: 'Todo' },
  { id: 'desayuno-salado', label: 'Desayuno Salado' },
  { id: 'desayuno-dulce', label: 'Desayuno Dulce' },
  { id: 'bebidas-calientes', label: 'Bebidas Calientes' },
  { id: 'bebidas-frias', label: 'Bebidas Frías' },
  { id: 'postres', label: 'Postres & Panadería' },
  { id: 'bocas-entradas', label: 'Bocas y Entradas' },
]
