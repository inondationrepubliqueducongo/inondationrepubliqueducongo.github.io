import {createApp} from 'vue'
import Router from "../../components/Router.mjs"
import App from "../../components/App.mjs"

const app = createApp(App).use(Router);
app.mount('#app');