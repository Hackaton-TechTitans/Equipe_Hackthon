<script setup>
import { defineProps, ref, watch } from 'vue';
import estados from '@/components/utils/estados.js';

const endereco = ref('');
const cidade = ref('');
const estado = ref('');
const error_check = ref(false);
const error_message = ref('');

function Verifica() {
    if(endereco.value === '' || cidade.value === '' || estado.value === '') {
        error('Preencha todos os campos!');
        return false;
    }
    removeError();
    return {
        endereco: endereco.value,
        cidade: cidade.value,
        estado: estado.value,
    };
}

function error(message) {
    error_check.value = true;
    error_message.value = message;

    const inputs = document.querySelectorAll('.input');
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

    const inputs = document.querySelectorAll('.input');
    inputs.forEach(input => {
        input.classList.remove('error');
    });
    const labels = document.querySelectorAll('.input-label');
    labels.forEach(label => {
        label.classList.remove('error');
    });
}


watch(endereco, () => {
    removeError()
});
watch(cidade, () => {
    removeError()
});
watch(estado, () => {
    removeError()
});

defineExpose({
    Verifica,
});
</script>
<template>

    <div class="input-div">
        <input v-model="endereco" name="endereco" class="input" type="text" required>
        <label for="endereco" class="input-label">Endereço</label>
    </div>
    <div class="input-div">
        <input v-model="cidade" name="cidade" class="input" type="text" required>
        <label for="cidade" class="input-label">Cidade</label>
    </div>
    <div class="input-div">
        <select v-model="estado" name="estado" class="input" required>
            <option v-for="estado in estados" v-bind:value="estado.sigla">{{ estado.nome }}</option>
        </select>
        <label for="mes" class="input-label">Estado</label>
    </div>

    <div class="errormessage" v-bind:hidden="!error_check">
        <p class="error">{{ error_message }}</p>
    </div>
</template>
<style scoped>
select {
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

.input-div {
    position: relative;
    margin: 0.5rem 0.2rem;
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

.error {
    color: red !important;
    margin: 0;
    border-color: red !important;
}

.birthdate-div {
    display: flex;
    margin: 0 20px;
}
</style>