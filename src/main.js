import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './styles/styles.scss'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAddressCard, faFile, faHouse, faLightbulb, faMinus, faMoon, faUserSecret,faXmark } from '@fortawesome/free-solid-svg-icons'

import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faMinus,faWindowRestore,faXmark,faHouse,faAddressCard,faFile,faMoon,faLightbulb)

const app = createApp(App)


app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
