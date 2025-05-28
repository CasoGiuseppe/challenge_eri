import { l as defineStore, m as reactive, c as computed, d as defineComponent, n as inject, s as storeToRefs, g as createElementBlock, h as createBaseVNode, j as createVNode, w as withCtx, k as unref, F as Fragment, y as createTextVNode, z as toDisplayString, b as createBlock, e as openBlock } from './index-Dm0sDQBW.js';
import AccordionInfo from './AccordionInfo-A3cyP_p-.js';
import AccordionBody from './AccordionBody-DizAweUR.js';
import BaseIcon from './BaseIcon-fHB-rS2y.js';
import BaseButton from './BaseButton-RyIuu33-.js';
import TableList from './TableList-f-2BM99y.js';
import BasePill from './BasePill-DrQmZx_9.js';
import { c as keyUseTranslation } from './symbols-r3KuG7tB.js';
import { u as useCustomerDataStore, a as useDefaultPanelIconsStore } from './icons-BItDAopt.js';
import './index-DusSqiUz.js';
import './index-0W8rK_An.js';
import './TransitionIs.scss_vue_type_style_index_1_src_true_lang-Civtt9kr.js';
import './_plugin-vue_export-helper-pcqpp-6-.js';
import './constants-BI8JlXcQ.js';
import './index-B6jKDidR.js';
import './StateError.scss_vue_type_style_index_0_src_true_lang-2DCNpXzv.js';
import './iconAdd-Cp7lZhaF.js';
import './StateLoader-C0CigkCi.js';
import './ComponentIs.scss_vue_type_style_index_0_src_true_lang-CuuajyPo.js';

const accountData = {
  data: {
    id: "015454156 909/9782034",
    characteristic: "807-0000000000000"
  },
  table: {
    head: [
      {
        id: "acc",
        translation: "account"
      },
      {
        id: "cr",
        translation: "currency"
      },
      {
        id: "ctr",
        translation: "category"
      },
      {
        id: "desc",
        translation: "description"
      },
      {
        id: "stt",
        translation: "status"
      }
    ],
    body: [
      {
        row: [
          {
            id: "1",
            label: "41985151551562121"
          },
          {
            id: "2",
            label: "0000"
          },
          {
            id: "3",
            label: "001- Current account"
          },
          {
            id: "4",
            label: "Compte courant"
          },
          {
            id: "5",
            label: "00000",
            state: "active"
          }
        ]
      },
      {
        row: [
          {
            id: "1",
            label: "41985142342341562121"
          },
          {
            id: "2",
            label: "0001"
          },
          {
            id: "3",
            label: "002- Current account"
          },
          {
            id: "4",
            label: "Compte courant"
          },
          {
            id: "5",
            label: "00001",
            state: "inactive"
          }
        ]
      },
      {
        row: [
          {
            id: "1",
            label: "4198523232341562121"
          },
          {
            id: "2",
            label: "0002"
          },
          {
            id: "3",
            label: "003- Current account"
          },
          {
            id: "4",
            label: "Compte courant"
          },
          {
            id: "5",
            label: "00002",
            state: "inactive"
          }
        ]
      }
    ]
  }
};

const useAccountData = defineStore("useAccountData", () => {
  const state = reactive(structuredClone(accountData));
  const accountID = computed(() => state.data.id);
  const accountCharacteristic = computed(() => state.data.characteristic);
  const tableInfoHead = computed(() => state.table?.head ?? []);
  const tableInfoBody = computed(() => state.table?.body ?? []);
  return {
    state,
    accountID,
    accountCharacteristic,
    tableInfoHead,
    tableInfoBody
  };
});
const useAccountDataStore = useAccountData();

const _hoisted_1 = { class: "account-board" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AccountBoard",
  setup(__props) {
    const useTranslation = inject(keyUseTranslation);
    const { translate } = useTranslation();
    const { customerID, completeName } = storeToRefs(useCustomerDataStore);
    const { defaultIcons: DEFAULT_ICONS, defaultActions: DEFAULT_ACTIONS } = storeToRefs(useDefaultPanelIconsStore);
    const {
      accountID,
      accountCharacteristic,
      tableInfoHead: DEFAULT_HEAD,
      tableInfoBody: DEFAULT_BODY
    } = storeToRefs(useAccountDataStore);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("section", _hoisted_1, [
          createVNode(AccordionBody, {
            hasIcon: "iconCustomer",
            actions: unref(DEFAULT_ICONS),
            open: ""
          }, {
            summary: withCtx(() => [
              createTextVNode(toDisplayString(unref(translate)({ key: `CUSTOMER.client`, options: { id: unref(customerID), name: unref(completeName) } })) + " - " + toDisplayString(unref(translate)({
                key: `ACCOUNT.labels.characteristic`,
                options: { chr: unref(accountCharacteristic) }
              })), 1)
            ]),
            actions: withCtx(({ property: { id, icon } }) => [
              createVNode(BaseIcon, {
                id,
                name: icon
              }, null, 8, ["id", "name"])
            ]),
            content: withCtx(() => [
              createVNode(AccordionInfo, { actions: unref(DEFAULT_ACTIONS) }, {
                summary: withCtx(() => [
                  createTextVNode(toDisplayString(unref(translate)({ key: `CUSTOMER.client`, options: { id: unref(customerID) } })), 1)
                ]),
                content: withCtx(() => [
                  createTextVNode(toDisplayString(unref(translate)({ key: `MOCKS.panels.client` })), 1)
                ]),
                actions: withCtx(({ property: { id, icon } }) => [
                  createVNode(BaseButton, {
                    id,
                    hasIcon: icon,
                    size: "s",
                    isRounded: false,
                    unsetStyle: true,
                    style: { "--custom-foreground": "black" }
                  }, null, 8, ["id", "hasIcon"])
                ]),
                _: 1
              }, 8, ["actions"]),
              createVNode(AccordionInfo, { actions: unref(DEFAULT_ACTIONS) }, {
                summary: withCtx(() => [
                  createTextVNode(toDisplayString(unref(translate)({ key: `CUSTOMER.client`, options: { id: unref(customerID) } })) + " " + toDisplayString(unref(translate)({ key: `ACCOUNT.account`, options: { id: unref(accountID) } })), 1)
                ]),
                content: withCtx(() => [
                  createTextVNode(toDisplayString(unref(translate)({ key: `MOCKS.panels.client` })), 1)
                ]),
                actions: withCtx(({ property: { id, icon } }) => [
                  createVNode(BaseButton, {
                    id,
                    hasIcon: icon,
                    size: "s",
                    isRounded: false,
                    unsetStyle: true,
                    style: { "--custom-foreground": "black" }
                  }, null, 8, ["id", "hasIcon"])
                ]),
                _: 1
              }, 8, ["actions"])
            ]),
            _: 1
          }, 8, ["actions"])
        ]),
        createVNode(AccordionBody, {
          hasIcon: "iconAddDocument",
          actions: unref(DEFAULT_ICONS),
          open: ""
        }, {
          summary: withCtx(() => [
            createTextVNode(toDisplayString(unref(translate)({ key: `MOCKS.panels.listAccount`, options: { account: unref(accountID) } })), 1)
          ]),
          content: withCtx(() => [
            createVNode(TableList, {
              id: "account-data",
              head: unref(DEFAULT_HEAD),
              body: unref(DEFAULT_BODY)
            }, {
              head: withCtx(({ property: { translation } }) => [
                createTextVNode(toDisplayString(unref(translate)({ key: `MOCKS.tables.${translation}` })), 1)
              ]),
              body: withCtx(({ property: { id, label, state } }) => [
                state ? (openBlock(), createBlock(BasePill, {
                  key: 0,
                  variant: state,
                  id
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(state), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "id"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(label), 1)
                ], 64))
              ]),
              _: 1
            }, 8, ["head", "body"])
          ]),
          _: 1
        }, 8, ["actions"])
      ], 64);
    };
  }
});

export { _sfc_main as default };
