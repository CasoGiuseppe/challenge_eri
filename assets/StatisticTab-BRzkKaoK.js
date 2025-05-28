import { d as defineComponent, j as inject, c as createElementBlock, t as toDisplayString, u as unref, o as openBlock, q as keyUseTranslation } from './index-De3N5Jaj.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StatisticTab",
  setup(__props) {
    const useTranslation = inject(keyUseTranslation);
    const { translate } = useTranslation();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("h3", null, toDisplayString(unref(translate)({ key: `MOCKS.panels.statistics` })), 1);
    };
  }
});

export { _sfc_main as default };
