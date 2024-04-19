<template>
  <div>
    <label class="block" :for="name">{{ label }}</label>
    <input
      :type="type"
      v-model="model"
      :placeholder="placeholder"
      :name="name"
      required
      :id="name"
      class="px-3 mt-2 py-1.5 rounded-sm ring-1 ring-gray-300"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const model = defineModel();
defineProps({
  label: String,
  placeholder: String,
  name: String,
  type: { type: String, default: "text" },
});

//defineExpose, defineModal
</script>
