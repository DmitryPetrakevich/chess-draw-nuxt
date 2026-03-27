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

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
    }
})

</script>

<style scoped>
.input {
    padding: 5px 20px;
    box-sizing: border-box;
    background-color: rgb(246, 249, 248);
    border-radius: 5px;
}
</style>