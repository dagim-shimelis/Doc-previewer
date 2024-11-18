<script setup>
const selected = ref("metadata");
const message = ref({
  text: "",
  icon: "",
});
const select = (item) => {
  selected.value = item;
  switch (item) {
    case "metadata":
      message.value.text = "Meta Data for the document";
      message.value.icon = "/icons/carbon--data-2.png";
      break;
    case "history":
      message.value.text = "History of the document";
      message.value.icon = "/icons/fluent--history-20-regular.png";
      break;
  }
};

onMounted(() => {
  select(selected.value);
});
</script>

<template>
  <div class="flex items-start gap-x-0">
    <div
      class="border m-2 rounded-xl flex flex-col items-center justify-center gap-y-4 h-[830px] opacity-50 text-center w-full"
    >
      <img :src="message.icon" class="w-10 h-10" alt="" />
      <p class="font-semibold font-poppins text-gray-600">
        {{ message.text }}
      </p>
    </div>
    <div class="flex flex-col w-[50px] h-full">
      <button
        @click="select('metadata')"
        class="btn"
        :class="selected == 'metadata' ? 'selected' : ''"
      >
        Meta Data
      </button>
      <button
        @click="select('history')"
        class="btn"
        :class="selected == 'history' ? 'selected' : ''"
      >
        History
      </button>
    </div>
  </div>
</template>

<style scoped>
.btn {
  @apply border-b-4 border-transparent mb-20 transform rotate-90 origin-center translate-y-[100%]  bg-white py-2 text-sm font-medium text-primary-500 whitespace-nowrap;
}

.btn.selected {
  @apply border-primary-200 text-primary-700;
}
.btn.selected:hover {
  @apply border-primary-200;
}

.btn:hover {
  @apply border-primary-50;
}
</style>
