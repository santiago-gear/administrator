
<script setup>

import {onUpdated,ref} from 'vue'
import {useEditSectionStore } from '@/shared/stores/editSection.ts'
import {saveImageDB} from '../../module_drag_drop/services/getSections.service'

import ColorPicker from 'primevue/colorpicker'
import TextArea from 'primevue/textarea'
import FileUpload from 'primevue/fileupload'
import Button from 'primevue/button';
import Editor from 'primevue/editor';
import SelectButton from 'primevue/selectbutton'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import Slider from 'primevue/slider'


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



const color = ref('')
let instance;

function setSelection(event){
    if (event.range){
        instance = event.instance        
    }
    
}

function setColor(){
    try{
        const a = instance.format('color','#'+color.value)
        props.element.value = instance.root.innerHTML
    }catch(error){

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

    <div v-if="type == 'text'">
        <div class="text-options">
            <div class="align-buttons">    
                <Button size="small" icon="pi pi-align-left" aria-label="Filter" @click="props.element.styles.textAlign='left'"/>
                <Button size="small" icon="pi pi-align-center" aria-label="Filter" @click="props.element.styles.textAlign='center'"/>
                <Button size="small" icon="pi pi-align-justify" aria-label="Filter" @click="props.element.styles.textAlign='justify'"/>
                <Button size="small" icon="pi pi-align-right" aria-label="Filter" @click="props.element.styles.textAlign='right'"/>
            </div>
            <div class="options">
                <Editor v-model="props.element.value" @selection-change="setSelection"  editorStyle="height: 10rem; text-align:left" >
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

                        <ColorPicker v-model="color" @update:modelValue="setColor" :pt="{input:{class:'ql-color'}}"/>
                    </span>
                </template>
            </Editor>
            </div>
        </div>
    </div>


    <div v-else-if="type == 'image'">
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

    <div v-else class="background-options">
        <div class="switch-button">
            <SelectButton v-model="backgroundOption" :options="['Color','Imagen']" aria-labelledby="basic" ></SelectButton>
        </div>
        <div class="options">
            <div v-if="backgroundOption == 'Color'" class="color-options">
                <div>
                    <label for="" class="color-label">Color: </label>
                    <ColorPicker format="rgb" v-model="color" @update:modelValue="updateBackgroundColor"/>
                </div>
                <div>
                    <label for="">Opacidad: </label>
                    <Slider v-model="opacityRef" @update:modelValue="updateBackgroundColor"/>
                </div>
            </div>

            <div v-else>
                <div class="size-position">

                    <div>
                        <label for="size-label">Tamaño:</label><br>
                    <Dropdown id="size-label" v-model="backgroundSize" :options="backgroundSizeOptions" @change="updateBackgroundImage" :style="{width:'10rem', marginBottom:'1rem'}" />
                    
                    </div>
                    <div><label for="position-label">Posicion:</label><br>
                    <Dropdown id="position-label" v-model="backgroundPosition" :options="backgroundPositionOptions" @change="updateBackgroundImage" :style="{width:'10rem', marginBottom:'1rem'}" />
                    </div>
                </div>

                <div class="manual" v-if="backgroundPosition=='manual'">
                    <div class="X-slider">
                        <label for="">Posicion en X</label> <br> 
                        <Slider v-model="backgroundPositionX" @update:modelValue="updateBackgroundImage"    />
                    </div>
                    
                    <div class="Y-slider">
                        <label for="">Posicion en Y</label><br>
                        <Slider v-model="backgroundPositionY" @update:modelValue="updateBackgroundImage" />
                    </div>

                </div>

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
                <div :style="{textAlign:'center',marginTop:'1rem'}">
                    <Button label="Quitar Imagen" severity="danger" @click="removeImage"/>
                </div>
            </div>
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