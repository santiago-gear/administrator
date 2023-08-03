<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
    rows: []
})

const element = ref(null)

function active(id) {
    if (element.value[id].childNodes[1].className.includes("row-content-active")) {
        element.value[id].childNodes[1].className = "row-content"
    } else {
        element.value[id].childNodes[1].className = "row-content-active";
    }
}


</script>

<template>
    <div class="container">
        <div class="accordion">
            <div @click="active(index)" class="row" v-for="(row, index) in rows" ref="element">
                <div class="row-header">
                    <h2>Marketing Marketing Marketing</h2>
                    <h2>+</h2>
                </div>
                <div class="row-content">
                    <div class="content-img">
                        <img src="https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg" alt="">
                    </div>
                    <div class="content-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec odio et augue convallis
                            mattis. Fusce egestas fringilla lacus, in venenatis magna efficitur sed. Nullam massa velit,
                            porta id orci id, varius vehicula felis. Cras quam nibh, pretium et ullamcorper a, pulvinar nec
                            augue.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    height: 100%;
    width: 100%;
    background-color: blueviolet;
}
.accordion {
    width: 100%;
    background-color: rgb(216, 198, 173);
    display: flex;
    flex-flow: row wrap;
    height: 100%;
}
.row {
    width: 100%;
    cursor: pointer;
}
.row-header {
    display: flex;
    justify-content: space-around;
    background-color: azure;
}
.row-content {
    height: 0;
}
.row-content-active {
    display: flex;
    flex-flow: row wrap;
    height: auto;
    padding: 0.2rem;
}


@media screen and (max-width: 480px) {}

@media screen and (min-width: 481px) and (max-width: 767px) {
    /* .row-content-active {
        justify-content: center;
        align-items: center;
    }
    .content-img {
        order: 2;
        display: none;
    }
    .content-text {
        min-width: 100%;
        background-color: brown;
        order: 1;
    } */
}

@media screen and (min-width: 768px) and (max-width: 1023px) {}

@media screen and (min-width: 1024px) {}
</style>