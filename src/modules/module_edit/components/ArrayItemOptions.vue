

<script setup lang="ts">

import Button from 'primevue/button';
import ImageOptions from './ImageOptions.vue'
import FileUpload from 'primevue/fileupload';
import Carousel from 'primevue/carousel'
import { ref } from 'vue';

const props = defineProps({
    array:{
        type:Object,
        required:true,
    }
})

const type = props.array.type

let selectedFile = false;

const alt =ref('')


const newImage = {
    type:'image',
    source:'',
    alt:'',
}

function uploadImage (event){
    const blob = event.files[0]
    let reader = new FileReader()
    
    reader.readAsDataURL(blob)

    reader.onload = function(){
        newImage.source = reader.result
    } 
    selectedFile=true
    
}


function deleteElement(index){
    console.log(props.array.content)
    props.array.content.splice(index,1)
    console.log(props.array.content)
}

function insertElement(){
    if(selectedFile){
        newImage.alt = alt.value
        props.array.content.push(newImage) 
        selectedFile = false
    }
}

</script>


<template>

    <Carousel :value="props.array.content" :numVisible="3" :numScroll="3" :circular="true" orientation="horizontal">
        <template #item="slotProps">
            <div class="card">
                <img :src="slotProps.data.source" :alt="slotProps.data.alt" width="110" height="120">  
                <Button label="Delete"  @click="deleteElement(slotProps.index)" icon="pi pi-trash" severity="danger" />
                <p>{{ slotProps.data.alt }}</p>
            </div>
        </template>
    </Carousel>


    <div class="titulo-input">
        <label > Titulo:</label><br>
        <input type="text" v-model="alt">
    </div>
    
    <hr>
    <div class="fileupload">
        <FileUpload id="inputFiles" name="file[]" @select="uploadImage" :customUpload="true" :multiple="false" accept="image/*" :fileLimit="1" :maxFileSize="1000000">
            <template #header="{ chooseCallback, files }">
                <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
                    <div class="flex gap-2">
                        <Button @click="chooseCallback()" icon="pi pi-images" rounded outlined></Button>
                    </div>
                </div>
            </template>
            <template #empty>
                <p>Arrastra tus archivos para subir.</p>
            </template>
    </FileUpload>
    </div>
    
    <div style="text-align:right; margin-top: .5rem;">
        <Button label="Agregar"  @click="insertElement()" icon="pi pi-check" severity="success" />
    </div>
</template>

<style scoped>
.card{
    text-align: center;
    font-weight: 500;
    padding: 1rem;
}
.fileupload{
    margin-top: 1rem;
}

.titulo-input{
    margin-bottom: 1rem;
}

</style>