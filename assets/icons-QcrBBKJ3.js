import { g as defineStore, h as reactive, i as computed } from './index-De3N5Jaj.js';

const customerData = {
  data: {
    id: "12345678",
    name: "Giuseppe",
    surname: "Caso"
  },
  areas: [
    {
      id: "gnr",
      translation: "general",
      to: { name: "General" }
    },
    {
      id: "cmm",
      translation: "communication",
      to: { name: "Communication" }
    },
    {
      id: "stt",
      translation: "statistics",
      to: { name: "Statistic" }
    },
    {
      id: "mnn",
      translation: "managements",
      to: { name: "Management" }
    }
  ]
};

const useCustomerData = defineStore("useCustomerData", () => {
  const state = reactive(structuredClone(customerData));
  const customerID = computed(() => state.data.id);
  const completeName = computed(() => `${state.data.name} ${state.data.surname}`);
  const customerAreas = computed(() => state.areas ?? []);
  return {
    state,
    customerID,
    completeName,
    customerAreas
  };
});
const useCustomerDataStore = useCustomerData();

const defaultPanelIcons = {
  icons: [
    {
      id: "str",
      icon: "iconStar"
    },
    {
      id: "prt",
      icon: "iconPrint"
    }
  ],
  actions: [
    {
      id: "adm",
      icon: "iconAdministration"
    },
    {
      id: "fld",
      icon: "iconFolder"
    },
    {
      id: "src",
      icon: "iconSearch"
    }
  ]
};

const useDefaultPanelIcons = defineStore("useDefaultPanelIcons", () => {
  const state = reactive(structuredClone(defaultPanelIcons));
  const defaultIcons = computed(() => state.icons ?? []);
  const defaultActions = computed(() => state.actions ?? []);
  return {
    state,
    defaultIcons,
    defaultActions
  };
});
const useDefaultPanelIconsStore = useDefaultPanelIcons();

export { useDefaultPanelIconsStore as a, useCustomerDataStore as u };
