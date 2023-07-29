<script setup lang="ts">

import { ref } from 'vue';

const props = defineProps({
        elements:{
            type:Object,
            required:true,
            default:{}
        }
    })

const elements = ref(props.elements)

</script>

<template>
    <div id="about">
        <div class="item aboutme">
            <p :style="[elements.title.styles, {color:'#'+elements.title.styles.color}]">{{elements.title.value}}</p>
        </div>
        <div class="item description">
            <p>
                <span :style="[elements.start.styles, {color:'#'+elements.start.styles.color}]">{{elements.start.value}}</span> 
                <span :style="[elements.firstChange.styles, {color:'#'+elements.firstChange.styles.color}]" class="s1">{{ elements.firstChange.value }}</span>
                <span :style="[elements.middle.styles, {color:'#'+elements.middle.styles.color}]">{{ elements.middle.value }}</span> 
                <span :style="[elements.secondChange.styles, {color:'#'+elements.secondChange.styles.color}]" class="s2">{{elements.secondChange.value}}</span> 
                <span :style="[elements.end.styles, {color:'#'+elements.end.styles.color}]">{{ elements.end.value }}</span>
            </p>
        </div>
    </div>
</template>

<style>
    #about {
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        height: 100vh;
        background-color: black;
        color: white;
    }

    .item {
        width: 57%;
        margin-left: 156px;
    }

    .aboutme {
        margin-top: 170px;
        font-size: 1.6rem;
        margin-bottom: 32px;
    }

    .description {
        font-size: 2rem;
    }

    .s1 {
        color: rgb(114, 182, 13);
    }

    .s2 {
        color: rgb(22, 137, 214);
    }

</style>