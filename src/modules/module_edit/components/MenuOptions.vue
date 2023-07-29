
<script setup>

import {onUpdated,ref} from 'vue'
import {useEditSectionStore } from '@/shared/stores/editSection.ts'

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
        <FileUpload name="demo[]" url="./upload.php" @upload="console.log('loaded')" :multiple="true" accept="image/*" :maxFileSize="1000000">
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