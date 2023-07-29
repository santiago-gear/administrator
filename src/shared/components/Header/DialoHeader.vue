<script setup lang="ts">
    

    import {ref} from 'vue'
    import Button from 'primevue/button'
 

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
    <div id="start">
        <div id="social">
            <div>
                <i class="pi pi-facebook" style="font-size: 1.5rem"></i>
            </div>
            <div>
                <i class="pi pi-instagram" style="font-size: 1.5rem"></i>
            </div>
            <div>
                <i class="pi pi-linkedin" style="font-size: 1.5rem"></i>
            </div>
            <div>
                <i class="pi pi-youtube" style="font-size: 1.5rem"></i>
            </div>
        </div>

        <div id="main">
            <div id="company-name">
                <h1 :style="[
                        elements.title.styles,
                        { color: '#'+elements.title.styles.color}
                    ]">{{ elements.title.value}}</h1>
            </div>

            <div style="width: 40%; font-size: 24px;">
                <p :style="[
                        elements.description.styles,
                        {color: '#'+elements.description.styles.color}
                    ]">{{elements.description.value}}</p>
            </div>
            <Button :label="elements.button.value" :pt="{root:{style: elements.button.styles}}"/>
        </div>
    </div>
</template>

<style scoped>

#start {
    display: flex;
    /* justify-content: stretch; */
    /* flex-wrap: wrap; */
    background-color: #EEEEEE;
    height: 88.15%;
}

#social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #EEEEEE;
    width: 5%;
    flex-basis: 6;
    height: 80%;
}

#main {
    /* font-size: 120px; */
    /* width: 100%; */
    flex-grow: 9;
}

#company-name {
    display: flex;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    /* width: 100%; */
    align-items: end;
    font-size: 7.4vw;
    flex-basis: 2;
}

</style>