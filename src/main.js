import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { tooltipPlugin } from "./plugins/tooltip";

createApp(App).use(tooltipPlugin).mount("#app");
