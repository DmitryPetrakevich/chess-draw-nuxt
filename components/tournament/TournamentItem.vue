<template>
    <div class="tournament-item">
        <div class="title">{{ title }}</div>
    </div>
  
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Турнир'
    }
})

</script>

<style scoped lang="less">
.tournament-item {
    width: 100%;
    padding: 10px;
    background-color: rgb(238, 215, 187);
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: rgb(208, 184, 154);
    }
}

</style>