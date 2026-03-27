<template>
    <div class="header">
        <div class="header__container">
            <h1>Жеребьевка</h1>
            
            <nav class="header-nav">
                <NuxtLink to="/" class="link">← На главную</NuxtLink>
            </nav>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px 10px;
    box-sizing: border-box;
}

h1 {
    color: white;
}

.header-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-start;
    gap: 15px;
}

.link {
    text-decoration: none;
    color: @text-light;
}
</style>