<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    columns: []
})

const width = ref((100 / props.columns.length) + "%")

</script>

<template>
    <!-- <div class="container"> -->
        <div id="blank">
            <div v-for="column in columns" class="column neo">
                <div class="column-title neo" v-html="column.title"></div>
                <div class="column-description neo" v-html="column.description"></div>
                <div class="column-image neo">
                    <img :src="column.image.source" :alt="column.image.alt">
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>

<style scoped>
/* .container {
    width: 100%;
    height: 100vh;
} */

#blank {
    display: flex;
    height: 100%;
    width: 100%;
    gap: 3px;
}

.column {
    /* border: 1px solid black; */
    display: flex;
    flex-flow: column wrap;
    height: auto;
    gap: 3px;
}
.column-title {
    /* border: 1px solid black; */
    text-align: center;
    width: 100%;
}

.column-description {
    padding: 0.5rem;
    /* border: 1px solid black; */
    text-align: justify;
    width: 100%;
}

.column-image {
    /* border: 1px solid black; */
    padding: 2px;
}

@media screen and (max-width: 1024px) {
    #blank {
        flex-flow: row wrap;

    }
    .column {
        height: 100%;
        min-width: 100%;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {

}


@media screen and (min-width: 1025px) {
    
    .column {
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        max-width: v-bind(width);
    }
    .column-image {
        max-width: 1025px;
    }
}
</style>