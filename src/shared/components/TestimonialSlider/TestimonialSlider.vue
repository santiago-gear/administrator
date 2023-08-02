<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
    quotes:[]
})

const width = ref(props.quotes.length*100 + "%")
const element = ref(null)

function slider(index) {
    element.value.style.transform = "translate(-" + index * 100 + "%)"
    console.log("translate(-"  + index * 100 + "%)")
}

</script>



<template>
    <div id="container">
        <div id="testimonials">
            <div id="view" ref="element">
                <div class="quote" v-for="quote in quotes">
                    <h1>{{quote.name}}</h1>
                </div>
            </div>
            <div id="control">
                <div v-for="(quote, index) in quotes" @click="slider(index)">{{quote.name}}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#container {
    background-color: blueviolet;
    height: 540px;
}

#testimonials {
    display: flex;
    flex-flow: row wrap;
    background-color: rgb(154, 105, 30);
    height: 100%;
    gap: 1px;
    /* overflow-x: hidden; */
    z-index: 0;
}

#view {
    display: flex;
    flex-flow: row nowrap;
    height: 90%;
    background-color: rgb(161, 199, 186);
    min-width: 300%;
}
.quote {
    background-color: rgb(76, 62, 130);
    min-width: 33.33%;
}

#control {
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: red;
    z-index: 9;
}
</style>