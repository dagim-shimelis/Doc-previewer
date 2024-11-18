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
          :collapsible="true"
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

<style>
.e-splitter {
  margin: 0 auto;
}
.e-pane {
  text-align: start;
  align-items: start;
  display: grid;
  height: 100%;
}

/*  split bar color */
.e-splitter .e-split-bar.e-split-bar-horizontal {
  background: #8dc8ec80;
}

/* split bar color in hover and active state */
.e-splitter .e-split-bar.e-split-bar-horizontal.e-split-bar-hover,
.e-splitter .e-split-bar.e-split-bar-horizontal.e-split-bar-active {
  background: #3b9ed7;
}

/*  split bar resize handle color */
.e-splitter .e-split-bar.e-split-bar-horizontal .e-resize-handler {
  color: #8dc8ec;
}

/*  split bar resize handle color in hover and active state */
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-hover
  .e-resize-handler,
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-active
  .e-resize-handler {
  color: #3b9ed7;
}

/* split bar arrows */
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-hover
  .e-navigate-arrow.e-arrow-left::before,
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-active
  .e-navigate-arrow.e-arrow-left::before,
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-hover
  .e-navigate-arrow.e-arrow-left::after,
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-active
  .e-navigate-arrow.e-arrow-left::after,
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-hover
  .e-navigate-arrow.e-arrow-right::before,
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-active
  .e-navigate-arrow.e-arrow-right::before,
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-hover
  .e-navigate-arrow.e-arrow-right::after,
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-active
  .e-navigate-arrow.e-arrow-right::after {
  background-color: #8dc8ec;
}

/* split bar arrows - circular border */
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-hover
  .e-navigate-arrow.e-arrow-left,
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-hover
  .e-navigate-arrow.e-arrow-right {
  border-color: #3b9ed7;
}
</style>
