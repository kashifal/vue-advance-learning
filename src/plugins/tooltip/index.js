import tooltipVue from "./tooltip.vue";
export const tooltipPlugin = {
  install(app, options) {
    app.component("ToolTip", tooltipVue);
  },
};
