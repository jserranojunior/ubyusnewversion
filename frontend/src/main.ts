import { createApp } from "vue";
import "./style.css";
import { Icon } from "@iconify/vue";

import App from "./components/App.vue";
import router from "./routes";

createApp(App).use(router).component("Icon", Icon).mount("#app");
