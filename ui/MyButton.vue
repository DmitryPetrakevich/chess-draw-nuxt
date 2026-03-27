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
    justify-content: center;
    align-items: center;
    background-color: rgb(223, 225, 225);
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
}
</style>