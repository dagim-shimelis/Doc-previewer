<script setup>
import { TreeViewComponent as EjsTreeview } from "@syncfusion/ej2-vue-navigations";

const emits = defineEmits(["openDoc"]);
const data = [
  {
    nodeId: "01",
    nodeText: "Documents",
    expanded: true,
    nodeIcon: "/icons/iconamoon--folder-thin.png",
    nodeChild: [
      {
        nodeId: "01-01",
        nodeText: "Instructions",
        nodeIcon: "/icons/iconamoon--folder-thin.png",
        expanded: true,
        nodeChild: [
          {
            nodeId: "01-01-01",
            nodeText: "First Phase Instructions",
            nodeIcon: "/icons/icomoon-free--file-pdf.png",
            isPdf: true,
            pdfPath:
              "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
          },
          {
            nodeId: "01-01-02",
            nodeText: "Second Phase Instructions",
            nodeIcon: "/icons/icomoon-free--file-pdf.png",
            isPdf: true,
            pdfPath:
              "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
          },
        ],
      },
      {
        nodeId: "01-02",
        nodeText: "Templates",
        nodeIcon: "/icons/iconamoon--folder-thin.png",
        nodeChild: [
          {
            nodeId: "01-02-01",
            nodeText: "First Phase Templates",
            nodeIcon: "/icons/icomoon-free--file-pdf.png",
            isPdf: true,
            pdfPath:
              "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
          },
        ],
      },
    ],
  },
];

const fields = {
  dataSource: data,
  id: "nodeId",
  text: "nodeText",
  child: "nodeChild",
};

const openDoc = (data) => {
  if (data.isPdf) {
    emits("openDoc", data.pdfPath);
  }
};
</script>

<template>
  <div class="h-[832px] m-2 rounded-xl border border-gray-200 bg-white py-2">
    <ejs-treeview id="treeview" :fields="fields" :nodeTemplate="'nodeTemplate'">
      <template v-slot:nodeTemplate="{ data }">
        <div @click="openDoc(data)" class="flex items-center gap-x-4">
          <img :src="data.nodeIcon" class="w-5 h-5" alt="item Icon" />
          <div>{{ data.nodeText }}</div>
        </div>
      </template>
    </ejs-treeview>
  </div>
</template>

<style>
.e-fullrow,
.e-fullsrow {
  @apply ml-2;
}
.e-list-text {
  @apply font-poppins text-gray-800 hover:!text-primary-500;
}

.e-active .e-list-text {
  @apply !text-primary-500;
}

.e-active .e-fullrow,
.e-active .e-fullsrow {
  @apply !bg-primary-100 !rounded-md !border-0;
}
</style>
