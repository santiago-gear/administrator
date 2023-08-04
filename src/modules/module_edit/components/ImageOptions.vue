<script setup lang="ts">

import FileUpload from 'primevue/fileupload'
import Button from 'primevue/button';
import { ref } from 'vue';

const props = defineProps({
    image:{
        type:Object,
        required:true,
    }
})

const imageRef = ref(props.image)

let image = '' 
const alt = ref('')
function uploadImage(event){

    const blob = event.files[0]
    let reader = new FileReader()
    
    reader.readAsDataURL(blob)

    reader.onload = function(){
        image = reader.result
    } 
}

function saveImage(){ 
    props.image.source = image
    props.image.alt = alt.value
}

function removeImage(){
    props.image.source = ''
    props.image.alt = ''
}

</script>

<template>

    <div v-if="props.image.source" class="image-container">
        <div class="image" :style="{backgroundImage:`url(${props.image.source})`}">
        </div>
    </div>

    <FileUpload id="inputFiles" name="file[]" @select="uploadImage" :customUpload="true" @upload="saveImage" :multiple="false" accept="image/*" :fileLimit="1" :maxFileSize="1000000">
            <template #header="{ chooseCallback, files }">
        <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
            <div class="flex gap-2">
                <Button @click="chooseCallback()" icon="pi pi-images" rounded outlined></Button>
                
            </div>
        </div>
        </template>
            <template #empty>
                <p>Arrastra tu archivo para subir.</p>
            </template>
    </FileUpload>
    <div class="mt-2 flex justify-content-end gap-2">
        <Button  label="Subir Imagen" icon="pi pi-cloud-upload" size="small" rounded="true" severity="success" @click="saveImage()"/>
        <Button  label="Quitar Imagen" icon="pi pi-trash" size="small" rounded="true" severity="danger" @click="removeImage" />
    </div>
</template>

<style scoped>

.image-container{
    border-radius: 10px;
    text-align: center;
}

.image{
    margin: 0 auto;
    margin-bottom: 1rem;
    width: 100px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
}
</style>

