<script setup>
import {
  PdfViewerComponent as EjsPdfviewer,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormDesigner,
  FormFields,
} from "@syncfusion/ej2-vue-pdfviewer";

const props = defineProps({
  docPath: {
    type: String,
    required: true,
  },
});

const documentPath = computed(() => props.docPath);
const resourceUrl =
  "https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2-pdfviewer-lib";
const pdfViewer = null;

provide("PdfViewer", [
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  Annotation,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
]);

const toolbarSettings = {
  showTooltip: true,
  toolbarItems: [
    "UndoRedoTool",
    "PageNavigationTool",
    "MagnificationTool",
    "PanTool",
    "SearchOption",
    "PrintOption",
    "DownloadOption",
  ],
};
</script>

<template>
  <div class="m-2 rounded-xl border border-gray-200 bg-white overflow-clip">
    <ejs-pdfviewer
      id="pdfViewer"
      :resourceUrl="resourceUrl"
      :documentPath="documentPath"
      :toolbarSettings="toolbarSettings"
      :style="{ height: '830px' }"
    >
    </ejs-pdfviewer>
  </div>
</template>
