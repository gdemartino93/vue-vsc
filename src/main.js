import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "mdb-vue-ui-kit/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./styles/styles.scss";
import "animate.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faAddressCard,
  faDesktop,
  faEnvelope,
  faFile,
  faHouse,
  faLightbulb,
  faMinus,
  faMoon,
  faStar,
  faUser,
  faUserSecret,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { faWindowRestore } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faMinus,
  faWindowRestore,
  faXmark,
  faHouse,
  faAddressCard,
  faFile,
  faMoon,
  faLightbulb,
  faLinkedinIn,
  faGithub,
  faEnvelope,
  faStar,
  faUser,
  faDesktop,
  faXmark
);

const app = createApp(App);

app.config.globalProperties.$key = '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'


app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

app.mount("#app");
