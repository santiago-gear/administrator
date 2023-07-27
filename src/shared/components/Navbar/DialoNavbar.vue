<script setup lang="ts">

</script>

<template>
    <nav id="navbar">
            <div id="logo">
                <img src="../../../assets/image/Layer_1.svg" alt="">
            </div>

            <div id="menu">
                <i class="pi pi-bars bars"></i>
            </div>

            <div></div>
        </nav>

        <!-- <hr id="separator"/> -->
</template>

<style>
    #navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 83.18%;
    min-height: 128px;
    margin: 0 auto;
    border-bottom: 1px solid black;
    /* background-color: #fff; */
}

#separator {
    margin: 0 auto;
    /* margin-top: 32px; */
    width: 83.18%;
    border: 1.5px solid black;
}

#logo {
    width: 116px;
    height: 65px;
}

.bars {
    font-size: 32px;
}

</style>