<script setup>
import {
  SplitterComponent as EjsSplitter,
  PanesDirective as EPanes,
  PaneDirective as EPane,
} from "@syncfusion/ej2-vue-layouts";
</script>

<template>
  <div>
    <ejs-splitter id="default-splitter" height="850px">
      <e-panes>
        <e-pane content="#left-pane-content" min="60px" size="300px"></e-pane>
        <e-pane content="#middle-pane-content"></e-pane>
        <e-pane content="#right-pane-content" min="60px" size="200px"></e-pane>
      </e-panes>
    </ejs-splitter>

    <div id="left-pane-content" style="display: none">
      <TreeView />
    </div>
    <div id="middle-pane-content" style="display: none">
      <DocPreviewer />
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
  text-align: center;
  align-items: center;
  display: grid;
}
</style>
