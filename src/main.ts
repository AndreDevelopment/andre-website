import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { reveal } from "./reveal";

createApp(App).directive("reveal", reveal).mount("#app");
