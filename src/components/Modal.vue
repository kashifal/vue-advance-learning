<template>
  <div v-if="isOpen">Modal is showing</div>
</template>

<script setup>
import { ref, defineExpose } from "vue";

//close
const isOpen = ref(false);
const name = "kasjif";
//function
const open = () => {
  isOpen.value = !isOpen.value;
};
//defineExpose
//child to parent
defineExpose({
  open,
  isOpen,
  name,
});
</script>
