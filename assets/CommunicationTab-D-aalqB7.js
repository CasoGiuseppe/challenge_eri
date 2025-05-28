import { c as keyUseTranslation } from './symbols-r3KuG7tB.js';
import { d as defineComponent, n as inject, g as createElementBlock, z as toDisplayString, k as unref, e as openBlock } from './index-D2pe-F0k.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CommunicationTab",
  setup(__props) {
    const useTranslation = inject(keyUseTranslation);
    const { translate } = useTranslation();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("h3", null, toDisplayString(unref(translate)({ key: `MOCKS.panels.communication` })), 1);
    };
  }
});

export { _sfc_main as default };
