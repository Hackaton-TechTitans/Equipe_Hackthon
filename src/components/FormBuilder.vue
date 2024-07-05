<script setup>

import { defineProps, defineEmits, ref, onMounted } from 'vue';
import normal from './FormInputs/Normal.vue';
import birthdate from './FormInputs/Birthdate.vue';
import endereco from './FormInputs/Endereco.vue';
import list from './FormInputs/List.vue';
import textarea from './FormInputs/Textarea.vue';



const emits = defineEmits(['descricao']);

const paginaAtual = ref(0);

const titles = {
    0: 'Nome',
    1: 'Data de Nascimento',
    2: 'Endereço',
    3: 'Lista de Hobbies',
    4: 'Lista de Linguagens',
    5: 'Biografia',
};
const descricao = {
    0: 'Insira seu nome',
    1: 'Insira sua data de nascimento',
    2: 'Insira seu endereço',
    3: 'Insira seus hobbies',
    4: 'Insira suas linguagens de programação',
    5: 'Escreva sua biografia',
};

emits('descricao', descricao[paginaAtual.value]);

const nome = ref(null);
const sobrenome = ref(null);
const email = ref(null);
const password = ref(null);
const birthdateref = ref(null);
const enderecoref = ref(null);
const listadehobbies = ref(null);
const listadelinguagens = ref(null);
const biografia = ref(null);

const verificacoes = {
    0: nome,
    1: email,
    2: password,
    3: birthdateref,
    4: enderecoref,
    5: listadehobbies,
    6: listadelinguagens,
    7: biografia,
};

onMounted(() => {
    console.log(verificacoes[paginaAtual.value].value)
});
function paginaAnterior() {
    if (paginaAtual.value > 0) {
        paginaAtual.value--;
        emits('descricao', descricao[paginaAtual.value]);
    }
}

</script>

<template>
    <div class="form-contents">

        <normal v-if="paginaAtual === 0" v-model="nome" type="text" name="Nome" required=true />
        <normal v-if="paginaAtual === 0" v-model="sobrenome" type="text" name="Sobrenome (opcional)" required=false />

        <normal v-if="paginaAtual === 1" v-model="email" type="email" name="E-mail" required=true />

        <normal v-if="paginaAtual === 2" v-model="password" type="password" name="Senha" needVerify=true minLenght=8
            required=true />

        <birthdate v-if="paginaAtual === 3" v-model="birthdateref" minAge=18 maxAge=60 />

        <endereco v-if="paginaAtual === 4" v-model="enderecoref" />

        <list v-if="paginaAtual === 5" v-model="listadehobbies" name="Lista de Hobbies" />

        <list v-if="paginaAtual === 6" v-model="listadelinguagens" name="Lista de Linguagens" />

        <textarea v-if="paginaAtual === 7" v-model="biografia" name="Biografia" />

        <div class="input-div button-div">
            <button v-if="paginaAtual > 0" @click="paginaAnterior" class="button-avancar">Voltar</button>

            <button @click="proximaPagina" class="button-avancar">Avançar</button>

        </div>
    </div>
</template>
<style>
.form {
    display: flex;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    background-color: rgba(0, 0, 0, 0.5);

}

.form-contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.button-div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    top: 2rem;
}

.button-avancar {
    background-color: rgb(209, 70, 50);
    color: #f5f5f5;
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 24px;
    font-size: 1rem;
    margin: auto 10px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    outline-color: rgb(209, 70, 50);
}

.button-avancar:hover {
    opacity: 0.95;
    box-shadow: 0 0 3px rgb(209, 70, 50);
}

.button-avancar:active {
    opacity: 0.8;
    transform: scale(0.95);
}

.button-avancar:focus {
    outline-color: rgb(209, 70, 50);
    outline-style: solid;
    outline-width: 2px;
    outline-offset: 2px;
}
</style>