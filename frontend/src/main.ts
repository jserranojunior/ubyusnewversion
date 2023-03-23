import { createApp } from "vue";
import "./style.css";
import { Icon } from "@iconify/vue";

import App from "./components/App.vue";

createApp(App).component("Icon", Icon).mount("#app");
