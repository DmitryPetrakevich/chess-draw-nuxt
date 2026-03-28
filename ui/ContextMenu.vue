<template>
  <Teleport to="body">
    <div v-if="isOpen" class="context-menu-overlay" @click="closeMenu">
      <div
        v-if="isOpen"
        ref="menuRef"
        class="context-menu"
        :style="{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }"
        @click.stop
      >
        <slot> </slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close", "update:isOpen"]);

const position = ref({ x: 0, y: 0 });
const menuRef = ref(null);

const openMenu = (e) => {
  e.preventDefault();

  let x = e.clientX;
  let y = e.clientY;

  if (menuRef.value) {
    const rect = menuRef.value.getBoundingClientRect();
    if (x + rect.width > window.innerWidth)
      x = window.innerWidth - rect.width - 10;
    if (y + rect.height > window.innerHeight)
      y = window.innerHeight - rect.height - 10;
  }

  position.value = { x, y };
  emit("update:isOpen", true);
};

const closeMenu = () => {
  emit("update:isOpen", false);
  emit("close");
};

defineExpose({ openMenu });
</script>

<style scoped lang="less">
.context-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9998;
  background: transparent;
}

.context-menu {
  position: fixed;
  z-index: 9999;
  background: @white-500;
  border: 1px solid @border-medium;
  border-radius: 8px;
  padding: 3px;
  min-width: 120px;
  font-size: 14px;
  font-family: @font-mono;
  animation: fadeInScale 0.1s ease forwards;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>