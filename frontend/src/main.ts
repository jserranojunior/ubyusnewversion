import { createApp } from "vue";
import "./style.css";
import { Icon } from "@iconify/vue";

import App from "./components/App.vue";
import router from "./routes";

createApp(App).component("Icon", Icon).use(router).mount("#app");
