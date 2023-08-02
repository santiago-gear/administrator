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

</script>

<template>

    <FileUpload id="inputFiles" name="file[]" @select="uploadImage" :customUpload="true" @upload="saveImage" :multiple="false" accept="image/*" :fileLimit="1" :maxFileSize="1000000">
            <template #header="{ chooseCallback, files }">
        <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
            <div class="flex gap-2">
                <Button @click="chooseCallback()" icon="pi pi-images" rounded outlined></Button>
                <Button @click="saveImage()" icon="pi pi-cloud-upload" rounded outlined severity="success" :disabled="!files || files.length === 0"></Button>
            </div>
        </div>
        </template>
            <template #empty>
                <p>Arrastra tu archivo para subir.</p>
            </template>
    </FileUpload>
</template>

<style scoped>
</style>

