<script setup>
import {
  SplitterComponent as EjsSplitter,
  PanesDirective as EPanes,
  PaneDirective as EPane,
} from "@syncfusion/ej2-vue-layouts";

const docPath = ref("");
const openDoc = (path) => {
  docPath.value = path;
};
</script>

<template>
  <div>
    <ejs-splitter id="default-splitter" height="850px">
      <e-panes>
        <e-pane
          content="#left-pane-content"
          min="340px"
          max="500px"
          size="340px"
        ></e-pane>
        <e-pane content="#middle-pane-content"></e-pane>
        <e-pane
          content="#right-pane-content"
          min="100px"
          max="400px"
          size="300px"
          :collapsible="true"
        ></e-pane>
      </e-panes>
    </ejs-splitter>

    <div id="left-pane-content" style="display: none">
      <TreeView @open-doc="openDoc" />
    </div>
    <div id="middle-pane-content" style="display: none">
      <div>
        <DocEmpty v-if="docPath === ''" />
        <DocPreviewer v-else :docPath="docPath" />
      </div>
    </div>
    <div id="right-pane-content" style="display: none">
      <MetaData />
    </div>
  </div>
</template>
