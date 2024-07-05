<script setup>
import { defineProps, ref, watch } from 'vue';
import meses from '@/components/utils/meses.js';
const props = defineProps({
    minAge: {
        type: Number,
        default: 18,
    },
});

const dia = ref('');
const mes = ref('');
const ano = ref('');
const error_check = ref(false);
const error_message = ref('');

function Verifica() {
    if (dia.value.length < 1 || mes.value.length < 1 || ano.value.length < 1 || dia.value > 31 || mes.value > 12 || ano.value > new Date().getFullYear()) {
        error('Preencha todos os campos!');
        return false;
    }

    const data = new Date(ano.value, mes.value - 1, dia.value);

    const idade = new Date().getFullYear() - data.getFullYear() //lembrar de fazer mais precisamente

    if (idade < props.minAge) {
        error('Você deve ter no mínimo ' + props.minAge + ' anos!');
        return false;
    } else {
        removeError();
        return data;
    }

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


watch(dia, () => {
    removeError()
});
watch(mes, () => {
    removeError()
});
watch(ano, () => {
    removeError()
});

defineExpose({
    Verifica,
});
</script>
<template>
    <div class="birthdate-div">
        <div class="input-div">
            <input v-model="dia" name="dia" class="input" type="tel" required>
            <label for="dia" class="input-label">Dia</label>
        </div>
        <div class="input-div">
            <select v-model="mes" name="mes" class="input" required>
                <option v-for="mes in meses" v-bind:value="mes.numero">{{ mes.nome }}</option>
            </select>
            <label for="mes" class="input-label">Mês</label>
        </div>
        <div class="input-div">
            <input v-model="ano" name="ano" class="input" type="tel" required>
            <label for="ano" class="input-label">Ano</label>
        </div>
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
    margin: 0 0.2rem;
    display: flex;
    width: 85%;
    flex-grow: 1;
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