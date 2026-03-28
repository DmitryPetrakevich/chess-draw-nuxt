<template>
    <button 
    class="btn"
    :class="`btn-${size}`"
    >
    <img
    v-if="icon"
    :src="icon"
    :alt="iconAlt"
    class="btn-icon"
    >

    <span class="btn-text">
        <slot></slot>
    </span>
    </button>
  
</template>

<script setup>
const props = defineProps({
    size: {
        type: String,
        default: 'middle',
        validator: (value) => ['small', 'middle', 'large'].includes(value)
    },
    icon: {
        type: String,
        default: null
    },
    iconAlt: {
        type: String,
        default: 'icon'
    }
})

</script>

<style scoped lang="less">
.btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(223, 225, 225);
    padding: 10px 20px;
    font-size: 14px;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;

    &-small {
        padding: 6px 12px;
        font-size: 12px;
    }

    &-large {
        padding: 14px 28px;
        font-size: 16px;
    }
}

.btn-icon {
    width: 1.5em;
    height: 1.5em;
}

.btn-text {
    display: inline-block;
}
</style>