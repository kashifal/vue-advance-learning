<template>
  <div class="h-screen w-screen flex-col flex items-center justify-center">
    <pre>{{ form }}</pre>
    <form @submit="submitForm">
      <Input
        type="email"
        placeholder="Enter your email"
        label="Email"
        v-model="form.email"
        name="email"
        class=""
      />
      <Input
        type="password"
        placeholder="Enter your password"
        label="Password"
        v-model="form.password"
        name="password"
        class=""
      />
      <Button type="submit" text="next" />
      <Button type="button" @click="show" text="Test" />
    </form>

    <h1 class="text-4xl font-semibold text-gray-700 m-8">
      Composables {{ x + y }}
    </h1>
  </div>
  <p>{{ model?.isOpen }}</p>
  <p>{{ model.name }}</p>
  <Modal ref="model" />
  <button @click="openFunc">Open Modal</button>
</template>

<script setup>
import { ref } from "vue";
import Input from "./components/Input.vue";
import Button from "./components/Button.vue";
import { useMouse } from "./composables/useMouse";
import Modal from "./components/Modal.vue";

const model = ref({});
const { x, y } = useMouse();
const form = ref({
  name: "",
  email: "",
  password: "",
});
const submitForm = (e) => {
  e.preventDefault();
  console.log("submitted");
};

const testFunc = () => {
  alert("wow");
};

const openFunc = () => {
  console.log(model.value.open());
};
const show = () => {
  alert("show");
};
</script>
