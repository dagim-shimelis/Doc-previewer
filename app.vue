<template>
  <div class="centerContent font-poppins">
    <NuxtLayout>
      <NuxtLoadingIndicator
        :height="5"
        color="repeating-linear-gradient(to right,#3b9ed7 0%,#c3e0f4 50%,#3b9ed7 100%)"
      />
      <NuxtPage />
      <div
        v-if="useRuntimeConfig().public.mode == 'development'"
        class="fixed px-3 py-2 text-sm font-bold text-white bg-gray-900 rounded bottom-4 left-4 z-50"
      >
        <span class="hidden xs:inline-block sm:hidden">XS</span>
        <span class="hidden sm:inline-block md:hidden">SM</span>
        <span class="hidden md:inline-block lg:hidden">MD</span>
        <span class="hidden lg:inline-block xl:hidden">LG</span>
        <span class="hidden xl:inline-block 2xl:hidden">XL</span>
        <span class="hidden 2xl:inline-block 3xl:hidden">2XL</span>
        <span class="hidden 3xl:inline-block 4xl:hidden">3XL</span>
        <span class="hidden 4xl:inline-block 4_2xl:hidden">4XL</span>
        <span class="hidden 4_2xl:inline-block 5xl:hidden">4_2XL</span>
        <span class="hidden 5xl:inline-block">5XL</span>
      </div>
    </NuxtLayout>
  </div>
</template>

<style>
/* Common */
@import "./node_modules/@syncfusion/ej2-base/styles/material.css";
@import "./node_modules/@syncfusion/ej2-dropdowns/styles/material.css";

/* Splitter */
@import "./node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";

/* TreeView */
@import "./node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "./node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";

/* Folder */
@import "./node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "./node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "./node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "./node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "./node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "./node_modules/@syncfusion/ej2-pdfviewer/styles/material.css";

#app {
  margin: 60px auto;
  max-width: 700px;
}
</style>
