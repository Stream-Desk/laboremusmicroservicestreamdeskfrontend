import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import vuelidate from "@vuelidate/validators";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify);
// app.use(vuelidate);

app.mount("#app");
