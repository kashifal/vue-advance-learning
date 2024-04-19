<template>
  <button class="px-6 mt-4 rounded-md py-2 bg-rose-700 text-white" :type="type">
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: String,
  type: String,
});
</script>
