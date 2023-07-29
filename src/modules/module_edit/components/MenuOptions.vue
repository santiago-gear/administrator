
<script setup>

import {onUpdated,ref} from 'vue'
import {useEditSectionStore } from '@/shared/stores/editSection.ts'
import {saveImageDB} from '../../module_drag_drop/services/getSections.service'

import ColorPicker from 'primevue/colorpicker'
import TextArea from 'primevue/textarea'
import FileUpload from 'primevue/fileupload'
import Button from 'primevue/button' 


const props = defineProps({
    element:{
        type:Object,
        required:false
    }
})

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
    props.element.source = image
}



</script>

<template>

    <div v-if="props.element.type == 'text'">
    
        <div class="styles">
            <label class="label">Color:</label><br>
            <ColorPicker v-model="props.element.styles.color"/>
        </div>
        <hr/>
        <div class="content">
            <label class="label"> Contenido: </label><br>
            <div class="align">    
                <Button size="small" icon="pi pi-align-left" aria-label="Filter" @click="props.element.styles.textAlign='left'"/>
                <Button size="small" icon="pi pi-align-center" aria-label="Filter" @click="props.element.styles.textAlign='center'"/>
                <Button size="small" icon="pi pi-align-justify" aria-label="Filter" @click="props.element.styles.textAlign='justify'"/>
                <Button size="small" icon="pi pi-align-right" aria-label="Filter" @click="props.element.styles.textAlign='right'"/>
            </div>
            <TextArea v-model="props.element.value"  rows="6" cols="40"/>
        </div>
    
    </div>


    <div v-else-if="props.element.type == 'image'">
        <FileUpload id="inputFiles" name="file[]" @select="uploadImage" customUpload="true" @upload="saveImage" :multiple="false" accept="image/*" fileLimit="1" :maxFileSize="1000000">
            <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
        <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
            <div class="flex gap-2">
                <Button @click="chooseCallback()" icon="pi pi-images" rounded outlined></Button>
                <Button @click="saveImage()" icon="pi pi-cloud-upload" rounded outlined severity="success" :disabled="!files || files.length === 0"></Button>
                <Button @click="clearCallback()" icon="pi pi-times" rounded outlined severity="danger" :disabled="!files || files.length === 0"></Button>
            </div>
        </div>
        </template>
            <template #empty>
                <p>Drag and drop files to here to upload.</p>
            </template>
        </FileUpload>
    </div>


</template>

<style scoped>

.label{
    display: inline-block;
    margin-bottom: 2px;
}

.styles{
    margin-bottom: .5rem;
}

.content{
    margin-top: .5rem;
}

.align{
    margin: 10px 0;
    display: flex;
    justify-content: space-evenly;
}
</style>