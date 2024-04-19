import { onMounted, onUnmounted } from "vue";

export const useMouse = () => {
  const x = 10;
  const y = 20;

  return {
    x,
    y,
  };
};
