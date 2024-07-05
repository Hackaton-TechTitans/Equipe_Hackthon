<script setup>
import { defineProps, ref, watch } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    needVerify: {
        type: Boolean,
        required: false,
        default: false,
    },
    minLegth: {
        type: Number,
        required: false,
        default: 0,
    },
    maxLength: {
        type: Number,
        required: false,
        default: 100,
    },
});

const main = ref('');
const verification = ref('');
const error_check = ref(false);
const error_message = ref('');

function Verifica() {
    if(main.value.length < 1){
        error('Precisa de alguma coisa');
        return false;
    }

    if(props.type == 'email'){
        if(!main.value.includes('@')){
            error('Precisa ser um email');
            return false;
        }
    }

    if (props.needVerify) {
        if (verification.value != main.value) {
            error('Os campos não são iguais!')
            return false;
        }
    }
    if (main.value.length < props.minLegth) {
        error('O campo deve ter no mínimo ' + props.minLegth + ' caracteres!');
        return false;
    }
    if (main.value.length > props.maxLength) {
        error('O campo deve ter no máximo ' + props.maxLength + ' caracteres!');
        return false;
    }
    removeError();
    return main.value;
}

function error(message) {
    error_check.value = true;
    error_message.value = message;

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.add('error');
    });
    const labels = document.querySelectorAll('.input-label');
    labels.forEach(label => {
        label.classList.add('error');
    });
}
function removeError() {
    error_check.value = false;
    error_message.value = '';

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('error');
    });
    const labels = document.querySelectorAll('.input-label');
    labels.forEach(label => {
        label.classList.remove('error');
    });
}


watch(main, () => {
    removeError()
});
watch(verification, () => {
    removeError()
});

defineExpose({
    Verifica,
});
</script>
<template>
    <div class="input-div">
        <input v-model="main" v-bind:name="name" v-bind:id="name" class="input" v-bind:type="type" required>
        <label v-bind:for="name" class="input-label">{{ name }}</label>
    </div>
    <div v-if="props.needVerify" class="input-div">
        <input v-model="verification" v-bind:name="name" v-bind:id="name + '-verify'" class="input" v-bind:type="type" required>
        <label v-bind:for="name" class="input-label">{{ name }} (Digite novamente)</label>
    </div>
    <div class="errormessage" v-bind:hidden="!error_check">
        <p class="error">{{ error_message }}</p>
    </div> 
</template>
<style scoped>
.input-div {
    position: relative;
    margin: 0.5rem 0;
    display: flex;
    width: 85%;
}

.input {
    border: solid 2px #a7a7a7;
    border-radius: 13px;
    background: none;
    padding: 1rem;
    font-size: 1rem;
    color: #f5f5f5;
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.6);
}

.input-label {
    position: absolute;
    top: 1rem;
    font-size: 1rem;
    left: 15px;
    color: #7b7b7b;
    pointer-events: none;
    background-color: #210b0e;
    border-radius: 13px;
    transform-origin: top left;
    transform: translateY(0);
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), border 150ms cubic-bezier(0.4, 0, 0.2, 1);
}


.input:focus,
.input:valid {
    outline: none;
    border: 2px solid rgb(209, 90, 50);
}

.input:focus~.input-label,
.input:valid~.input-label {
    border-top: solid 0.2px rgb(209, 82, 50);
    transform: translateY(-1.5rem) scale(0.8);
    padding: 0 0.5em;
    color: rgb(209, 82, 50);
}
.error{
    color: red !important;
    margin: 0;
    border-color: red !important;
}
</style>