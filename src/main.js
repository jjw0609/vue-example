import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from 'axios';

//createApp(App).use(router).mount("#app");

const app = createApp(App)

// [axios / http 통신]
app.config.globalProperties.$axios = axios

// [라우터 사용 설정]
app.use(router)

// [main 아이디 : 렌더링 시작점]
app.mount('#app')
