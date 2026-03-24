<template>
    <div class="header">
        <div class="header__container">
            <h1>Жеребьевка</h1>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.header {
    width: 100%;
    height: 60px;
    background-color: black;
    box-sizing: border-box;
    border-radius: 5px;
}

.header__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}

h1 {
    color: white;
}
</style>