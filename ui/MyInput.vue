<template>
    <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="input"
    :placeholder=placeholder
    >
  
</template>

<script setup>
import { defineProps } from 'vue';
import { stringifyQuery } from 'vue-router';

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: "Введите текст..."
    }
})

</script>

<style scoped>
.input {
    padding: 10px 20px;
    box-sizing: border-box;
    background-color: rgb(213, 240, 231);
    border-radius: 5px;
}
</style>