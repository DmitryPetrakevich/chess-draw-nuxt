<template>
    <button class="btn">
        <slot></slot>
    </button>
  
</template>

<script setup>
import { defineProps } from 'vue';

</script>

<style scoped lang="less">
.btn {
    display: inline-flex;
    background-color: aqua;
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    min-width: 200px;
}
</style>