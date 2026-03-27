<template>
    <select 
    class="select"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    >
        <option
        v-for="option in options"
        :key="option.text"
        :value="option.text"
        class="option"
        >
            {{ option.text }}
        </option>

    </select>
  
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: String
    },

    options: {
        type: Array,
        required: true,
        default: () => []

    }
})

defineEmits(['update:modelValue'])

</script>

<style scoped lang="less">
.select {
    width: 100%;
    padding: 5px 20px;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 16px;
    cursor: pointer;

    &:focus {
        outline: none;
        border-color: #42b983;
    }
}
</style>