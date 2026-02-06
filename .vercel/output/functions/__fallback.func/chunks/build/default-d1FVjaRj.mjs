import { _ as __nuxt_component_0$1 } from './nuxt-link-D5B5-Q_B.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import { v as vueExports } from '../nitro/nitro.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderTeleport } from '@vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import '@unhead/addons';
import '@unhead/schema-org/vue';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@vue/shared';
import 'entities/decode';
import 'estree-walker';
import 'source-map-js';
import '@vue/runtime-dom';
import 'consola';
import 'fast-xml-parser';

const _imports_0 = publicAssetsURL("/logo.png");
const _sfc_main$2 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = vueExports.ref(false);
    const navLinks = [
      { to: "/", label: "Inicio" },
      { to: "/menu", label: "Men\xFA" },
      { to: "/nosotros", label: "Nosotros" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(vueExports.mergeProps({ class: "sticky top-0 z-50 bg-background-light/80 backdrop-blur-md shadow-sm transition-all duration-300" }, _attrs))} data-v-72f5f464><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center" data-v-72f5f464><button aria-label="Abrir men\xFA de navegaci\xF3n" class="p-2 rounded-full hover:bg-gray-100 transition-colors md:hidden" data-v-72f5f464><span class="material-icons-outlined text-gray-700" data-v-72f5f464>menu</span></button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2",
        "aria-label": "Cafeoteca Inicio"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Cafeoteca Logo" class="h-10 w-auto" data-v-72f5f464${_scopeId}>`);
          } else {
            return [
              vueExports.createVNode("img", {
                src: _imports_0,
                alt: "Cafeoteca Logo",
                class: "h-10 w-auto"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex items-center gap-8" aria-label="Navegaci\xF3n principal" data-v-72f5f464><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.to,
          to: link.to,
          class: "text-sm font-body font-semibold text-gray-700 hover:text-primary transition-colors uppercase tracking-wider",
          "active-class": "text-primary"
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                vueExports.createTextVNode(vueExports.toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><a href="https://wa.me/50684533232" target="_blank" rel="noopener noreferrer" class="bg-green-600 text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-green-700 transition-colors flex items-center gap-2" data-v-72f5f464><span class="material-icons-outlined text-base" data-v-72f5f464>chat</span> Reservar </a></nav>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/nosotros",
        "aria-label": "Ubicaci\xF3n y contacto",
        class: "p-2 rounded-full hover:bg-gray-100 transition-colors md:hidden"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="material-icons-outlined text-gray-700" data-v-72f5f464${_scopeId}>place</span>`);
          } else {
            return [
              vueExports.createVNode("span", { class: "material-icons-outlined text-gray-700" }, "place")
            ];
          }
        }),
        _: 1
      }, _parent));
      ssrRenderTeleport(_push, (_push2) => {
        if (vueExports.unref(isMenuOpen)) {
          _push2(`<div class="fixed inset-0 z-[100] md:hidden" data-v-72f5f464><div class="absolute inset-0 bg-black/40" data-v-72f5f464></div><nav class="absolute left-0 top-0 h-full w-72 bg-background-light shadow-2xl p-8 flex flex-col gap-6" data-v-72f5f464><button aria-label="Cerrar men\xFA" class="self-end p-2 rounded-full hover:bg-gray-100" data-v-72f5f464><span class="material-icons-outlined" data-v-72f5f464>close</span></button><!--[-->`);
          ssrRenderList(navLinks, (link) => {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              key: link.to,
              to: link.to,
              class: "text-lg font-display font-semibold text-gray-800 hover:text-primary transition-colors",
              onClick: ($event) => isMenuOpen.value = false
            }, {
              default: vueExports.withCtx((_, _push3, _parent2, _scopeId) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(link.label)}`);
                } else {
                  return [
                    vueExports.createTextVNode(vueExports.toDisplayString(link.label), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push2(`<!--]--></nav></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-72f5f464"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(vueExports.mergeProps({ class: "bg-surface-dark text-white mt-12" }, _attrs))}><div class="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-14"><div class="lg:flex lg:justify-between lg:items-start lg:gap-12"><div class="text-center lg:text-left mb-8 lg:mb-0">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "inline-block mb-4"
  }, {
    default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Cafeoteca" class="h-12 w-auto brightness-0 invert mx-auto lg:mx-0"${_scopeId}>`);
      } else {
        return [
          vueExports.createVNode("img", {
            src: _imports_0,
            alt: "Cafeoteca",
            class: "h-12 w-auto brightness-0 invert mx-auto lg:mx-0"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="text-gray-400 text-sm max-w-xs mx-auto lg:mx-0"> Caf\xE9 de especialidad, cultura y comunidad en el coraz\xF3n de Barrio Escalante. </p></div><nav class="flex justify-center gap-8 mb-8 lg:mb-0" aria-label="Navegaci\xF3n del pie de p\xE1gina">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-gray-400 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider"
  }, {
    default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Inicio`);
      } else {
        return [
          vueExports.createTextVNode("Inicio")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/menu",
    class: "text-gray-400 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider"
  }, {
    default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Men\xFA`);
      } else {
        return [
          vueExports.createTextVNode("Men\xFA")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/nosotros",
    class: "text-gray-400 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider"
  }, {
    default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Nosotros`);
      } else {
        return [
          vueExports.createTextVNode("Nosotros")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav><div class="flex justify-center lg:justify-end gap-5"><a href="https://www.instagram.com/cafeoteca_costarica/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors" aria-label="Instagram"><span class="material-icons-outlined">photo_camera</span></a><a href="https://www.facebook.com/cafeotecacostarica/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors" aria-label="Facebook"><span class="material-icons-outlined">facebook</span></a><a href="mailto:info@cafeoteca.cr" class="text-gray-400 hover:text-white transition-colors" aria-label="Correo electr\xF3nico"><span class="material-icons-outlined">email</span></a></div></div><div class="border-t border-gray-700 mt-8 pt-6 text-center"><p class="text-gray-600 text-[10px] uppercase tracking-widest"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Cafeoteca. Todos los derechos reservados. </p></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __nuxt_component_0;
  const _component_AppFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(vueExports.mergeProps({ class: "relative min-h-screen" }, _attrs))}><div class="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-20"><div class="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-secondary organic-blob-1 blur-3xl mix-blend-multiply"></div><div class="absolute top-[20%] right-[-20%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-primary organic-blob-2 blur-3xl mix-blend-multiply"></div><div class="absolute bottom-[-10%] left-[10%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] bg-tertiary organic-blob-1 blur-3xl mix-blend-multiply"></div></div><div class="relative z-10 pb-24 md:pb-8">`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<main class="max-w-7xl mx-auto">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div><div class="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full px-4 max-w-md md:hidden"><a href="https://wa.me/50688888888" target="_blank" rel="noopener noreferrer" class="w-full bg-green-600 text-white rounded-full py-4 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"><span class="material-icons-outlined text-xl">chat</span><span class="font-bold tracking-wide">Reservar Mesa</span><span class="w-2 h-2 bg-green-300 rounded-full animate-pulse group-hover:bg-white"></span></a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-d1FVjaRj.mjs.map
