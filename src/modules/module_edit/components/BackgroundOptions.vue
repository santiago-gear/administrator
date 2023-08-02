
<script setup lang="ts">
import ColorPicker from 'primevue/colorpicker'
import FileUpload from 'primevue/fileupload'
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton'
import Dropdown from 'primevue/dropdown'
import Slider from 'primevue/slider'
import { ref } from 'vue';


const props = defineProps({
    background:{
        Object,
        required:true,
    }
})

let image = ''

const color = ref({})
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
    props.background.styles.backgroundColor = `rgba(${r},${g},${b},${alpha})`
}

function updateBackgroundImage(){
    props.background.styles.backgroundSize= backgroundSize.value
    if(backgroundPosition.value != 'manual'){
        props.background.styles.backgroundPosition = backgroundPosition.value
    }else{ 
        props.background.styles.backgroundPosition = `${backgroundPositionX.value}% ${backgroundPositionY.value}%`
    }  
}

function uploadImage(event){

    const blob = event.files[0]
    let reader = new FileReader()
    
    reader.readAsDataURL(blob)

    reader.onload = function(){
        image = reader.result
    } 

}

function saveImage(){
    props.background.styles = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'contain',
        backgroundPosition:'center'
        }


}

function removeImage(){
    props.background.styles = {backgroundColor:props.background.styles.backgroundColor}
}



</script>

<template>
        <div class="background-options">
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

                <FileUpload id="inputFiles" name="file[]" @select="uploadImage" :customUpload="true" @upload="saveImage" :multiple="false" accept="image/*" :fileLimit="1" :maxFileSize="1000000">
                    <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
                        <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
                            <div class="flex gap-2">
                                <Button @click="chooseCallback()" icon="pi pi-images" rounded outlined></Button>
                                <Button @click="saveImage()" icon="pi pi-cloud-upload" rounded outlined severity="success" :disabled="!files || files.length === 0"></Button>
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
</style>