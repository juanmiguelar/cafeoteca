import { defineComponent, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { a as useRoute, u as useHead, b as useSchemaOrg } from './server.mjs';
import { defineLocalBusiness } from '@unhead/schema-org/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SeoMeta",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const seoData = {
      "/": {
        title: "Cafeoteca \u2014 Caf\xE9 de Especialidad en Barrio Escalante, San Jos\xE9",
        description: "Cafeoteca: caf\xE9 de especialidad, micro-tostadur\xEDa y pasteler\xEDa artesanal en Barrio Escalante, San Jos\xE9, Costa Rica. Descubre caf\xE9 como cultura."
      },
      "/menu": {
        title: "Men\xFA \u2014 Cafeoteca | Caf\xE9 de Especialidad y Pasteler\xEDa",
        description: "Explora nuestro men\xFA de caf\xE9 de especialidad, pasteler\xEDa artesanal de Rebe y opciones de brunch en Cafeoteca, Barrio Escalante."
      },
      "/nosotros": {
        title: "Nosotros \u2014 Cafeoteca | 12 A\xF1os de Caf\xE9 Como Cultura",
        description: "Conoce la historia de Cafeoteca, nuestro equipo, el Proyecto Alm\xE1cigo y c\xF3mo llevamos 12 a\xF1os creando cultura de caf\xE9 en San Jos\xE9, Costa Rica."
      }
    };
    const current = computed(() => {
      var _a;
      return (_a = seoData[route.path]) != null ? _a : seoData["/"];
    });
    useHead({
      title: current.value.title
    });
    useHead({
      title: current.value.title,
      meta: [
        { property: "og:title", content: current.value.title },
        { name: "description", content: current.value.description },
        { property: "og:description", content: current.value.description },
        { property: "og:image", content: "/logo.png" },
        { name: "twitter:image", content: "/logo.png" },
        { name: "twitter:card", content: "summary" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "es_CR" },
        { property: "og:site_name", content: "Cafeoteca" }
      ]
    });
    useSchemaOrg([
      defineLocalBusiness({
        name: "Cafeoteca",
        description: "Caf\xE9 de especialidad, micro-tostadur\xEDa y espacio gastron\xF3mico en Barrio Escalante, San Jos\xE9, Costa Rica.",
        address: {
          streetAddress: "Barrio Escalante",
          addressLocality: "San Jos\xE9",
          addressCountry: "CR"
        },
        geo: {
          latitude: 9.9356,
          longitude: -84.0617
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCntQ0eW-ZyfLsa5NL0vE34jLgktpfOZhBbz5BZTrqc_iCTSiDkHuRUdrtCuOqVEzt0rkyyvOWZhzAFPMhFHqHsb8YqGnOwwxQgln3KKFiEcFxhGdBFZpr7SpQpRPp2zGwBieJ1E6UcscL0GA63JrfZ2DZesOSiDcFym_AwpQO8Sw32hTzG0mftH_KLE3NWt5pWLG9UdAiip8b0JprIbIGDbrpYLMr-9_KGl-3AQnEPOaE79xO9SWB_pDml0jUkRdrSP4rB-3IC8dc",
        telephone: "+506-8888-8888",
        priceRange: "\u20A1\u20A1",
        servesCuisine: ["Caf\xE9 de Especialidad", "Pasteler\xEDa", "Brunch"],
        openingHoursSpecification: [
          {
            dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "07:00",
            closes: "19:00"
          },
          {
            dayOfWeek: "Sunday",
            opens: "07:00",
            closes: "18:00"
          }
        ]
      })
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SeoMeta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=SeoMeta-7ENNswF2.mjs.map
