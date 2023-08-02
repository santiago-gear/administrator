
<script setup lang="ts">

import {ref} from 'vue'


import ColorPicker from 'primevue/colorpicker'
import FileUpload from 'primevue/fileupload'
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton'
import Dropdown from 'primevue/dropdown'
import Slider from 'primevue/slider'


import Editor from 'primevue/editor';
import InputText from 'primevue/inputtext'
import ArrayItemOptions from './ArrayItemOptions.vue'
import TextOptions from './TextOptions.vue'
import ImageOptions from './ImageOptions.vue';
import BackgroundOptions from './BackgroundOptions.vue';

const props = defineProps({
    element:{
        type:Object,
        required:false
    }
})

const type = props.element.type ? props.element.type : ''

let image = ''

function uploadImage(event){

    const blob = event.files[0]
    let reader = new FileReader()
    
    reader.readAsDataURL(blob)

    reader.onload = function(){
        image = reader.result
    } 

}

function saveImage(){
    if(props.element.type == 'image'){
        props.element.source = image
    }
    else{
        props.element.styles = {
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'contain',
            backgroundPosition:'center'
        }
    }

}


const backgroundOption = ref('Color')

const backgroundSize = ref('contain')
const backgroundSizeOptions = ['contain','cover']

const backgroundPosition = ref('center')
const backgroundPositionOptions = ['top','bottom','center','left','right','manual']

const backgroundPositionX = ref('50')
const backgroundPositionY = ref('50')

const opacityRef = ref(100)

function updateBackgroundColor(){
    const {r,g,b} = color.value
    const alpha = opacityRef.value/100
    props.element.styles.backgroundColor = `rgba(${r},${g},${b},${alpha})`
}

function updateBackgroundImage(){
    props.element.styles.backgroundSize= backgroundSize.value
    if(backgroundPosition.value != 'manual'){
        props.element.styles.backgroundPosition = backgroundPosition.value
    }else{ 
        props.element.styles.backgroundPosition = `${backgroundPositionX.value}% ${backgroundPositionY.value}%`
    }  
}

function removeImage(){
    props.element.styles = {backgroundColor:props.element.styles.backgroundColor}
}


</script>

<template>


    <TextOptions v-if="type=='text'" :text="props.element"/>

    <ImageOptions v-else-if="type=='image'" :image="props.element"/>

    <BackgroundOptions v-else-if="type=='background'" :background="props.element"/>

    <ArrayItemOptions v-else :array="props.element"/>




</template>

<style scoped>



.text-options{
    margin-top: .5rem;
    text-align: center;
}

.align-buttons{
    margin: 10px auto;
    width: 80%;
    display: flex;
    justify-content: space-evenly;
}


.background-options{
    text-align: center;
}
.switch-button{
    margin: 0 auto 1rem auto;
}

.options{
    text-align: left;
    font-size: 1.5rem;
    font-weight: 500;
}

.size-position{
    display: flex;
    justify-content: space-evenly;
}

.manual{
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 1rem;
    
}

.color-options{
    display: flex;
    flex-direction: column;
    gap: .7rem;
}
.color-label{
    margin-right: 1rem;
}


</style>