<script setup>
import { defineProps, ref, watch } from 'vue';
import estados from '@/components/utils/estados.js';
const props = defineProps({
    name: {
        type: String,
        required: true,
    }
});

const items = ref([]);

const additemBtn = ref('');
const error_check = ref(false);
const error_message = ref('');

function Verifica() {
    if (items.value.length === 0) {
        error('Adicione um item!');
        return false;
    }
    removeError();
    return items.value;
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

function additem() {
    if (additemBtn.value.trim()) {
        items.value.push(additemBtn.value.trim())
        additemBtn.value = ''
    }
}

function removeLanguage(index) {
    items.value.splice(index, 1)
}


watch(additemBtn, () => {
    removeError()
});

defineExpose({
    Verifica,
});
</script>
<template>
    <div class="list-div">
        <div class="input-div itens-div">
            <p>{{ name }}:</p>
            <div class="itens">
                <span v-for="(item, index) in items" :key="index" class="tag">
                    {{ item }}
                    <button class="delete-btn" @click="removeLanguage(index)">X</button>
                </span>
            </div>
        </div>
        <div class="input-div">
            <input @keydown.enter.prevent="additem" v-model="additemBtn" v-bind:name="name" class="input" type="text"
                required>
            <label v-bind:for="name" class="input-label">Adicionar item</label>
        </div>
        <div class="errormessage" v-bind:hidden="!error_check">
            <p class="error">{{ error_message }}</p>
        </div>
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
    resize: none;
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

.list-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 68%;
    justify-content: flex-start
}

.itens-div {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: rgba(0, 0, 0, 0.6);
    flex-direction: column;
}

.itens-div p {
    margin: 0 auto;
    color: #dddddd;
}

.itens {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.tag{
    background-color: #e0e0e0;
    border-radius: 2px;
    padding: 2px 8px;
    margin: 2px;
    display: flex;
    align-items: center;
}

</style>