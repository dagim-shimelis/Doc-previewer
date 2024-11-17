// plugins/syncfusion.js
import { registerLicense } from "@syncfusion/ej2-base";

export default defineNuxtPlugin(() => {
  // Register the Syncfusion license
  registerLicense(useRuntimeConfig().public.syncfusionLicense);
});
