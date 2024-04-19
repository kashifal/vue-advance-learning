<template>
  <div
    class="absolute rounded-t-md -top-8 rounded-br-md bg-gray-100 px-2 text-sm py-0.5 text-gray-700 -right-8"
  >
    {{ text }}
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  text: String,
});
</script>
