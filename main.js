import * as pinia from "pinia";
import "virtual:windi.css";
import { createSSRApp } from "vue";
import App from "./App";

export function createApp() {
  const app = createSSRApp(App).use(pinia.createPinia());

  return {
    app,
    pinia,
  };
}
