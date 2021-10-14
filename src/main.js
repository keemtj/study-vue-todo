import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faCheck, faTrash);

createApp(App).mount("#app");
