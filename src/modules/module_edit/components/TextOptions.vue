
<script setup lang="ts">

import Button from 'primevue/button';
import Editor, { type EditorSelectionChangeEvent } from 'primevue/editor';
import ColorPicker from 'primevue/colorpicker';
import { ref } from 'vue';

const props = defineProps({
    text:{
        type:Object,
        required:true,
    }
})

const color = ref('')
let instance: any;

function setSelection(event:EditorSelectionChangeEvent){
    if (event.range){
        instance = event.instance        
    }
    
}

function setColor(){
    try{
        const a = instance.format('color','#'+color.value)
        props.text.value = instance.root.innerHTML
    }catch(error){

    }
}


</script>


<template>
        <div class="text-options">
            <div class="align-buttons">    
                <Button size="small" icon="pi pi-align-left" aria-label="Filter" @click="props.text.styles.textAlign='left'"/>
                <Button size="small" icon="pi pi-align-center" aria-label="Filter" @click="props.text.styles.textAlign='center'"/>
                <Button size="small" icon="pi pi-align-justify" aria-label="Filter" @click="props.text.styles.textAlign='justify'"/>
                <Button size="small" icon="pi pi-align-right" aria-label="Filter" @click="props.text.styles.textAlign='right'"/>
            </div>
            <div class="options">
                <Editor v-model="props.text.value" @selection-change="setSelection"  editorStyle="height: 10rem; text-align:left" >
                <template v-slot:toolbar>
                    <span class="ql-formats">
                        <select class="ql-header">
                            <option :value="1"></option>
                            <option :value="2"></option>
                            <option :value="3"></option>
                            <option selected></option>
                        </select>
                        
                        <button class="ql-bold"></button>
                        <button class="ql-italic"></button>
                        <button class="ql-underline"></button>
                        <button class="ql-strike"></button>
                        <button class="ql-link"></button>

                        <ColorPicker v-model="color" @update:modelValue="setColor"/>
                    </span>
                </template>
            </Editor>
            </div>
        </div>
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
.options{
    text-align: left;
    font-size: 1.5rem;
    font-weight: 500;
}
</style>