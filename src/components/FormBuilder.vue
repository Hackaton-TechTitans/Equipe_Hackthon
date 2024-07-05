<script setup>

import { ref, onMounted } from 'vue';
import normal from './FormInputs/Normal.vue';
import birthdate from './FormInputs/Birthdate.vue';
import endereco from './FormInputs/Endereco.vue';
import list from './FormInputs/List.vue';
import textarea from './FormInputs/Textarea.vue';



const emits = defineEmits(['descricao']);

const paginaAtual = ref(0);

const descricao = {
    0: 'Insira seu nome',
    1: 'Insira seu email',
    2: 'Insira sua senha',
    3: 'Insira sua data de nascimento',
    4: 'Insira seu endereço',
    5: 'Escreva seus hobbies',
    6: 'Insira sua linguagens de programação',
    7: 'Insira sua biografia',
};

emits('descricao', descricao[paginaAtual.value]);

const nome = ref();
const sobrenome = ref();
const email = ref();
const password = ref();
const birthdateref = ref();
const enderecoref = ref();
const listadehobbies = ref();
const listadelinguagens = ref();
const biografia = ref();

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

function proximaPagina() {
    if(verificacoes[paginaAtual.value].value.Verifica()) {
        paginaAtual.value++;
        emits('descricao', descricao[paginaAtual.value]);
    }
}

function paginaAnterior() {
    if (paginaAtual.value > 0) {
        paginaAtual.value--;
        emits('descricao', descricao[paginaAtual.value]);
    }
}

</script>

<template>
    <div class="form-contents">

        <normal v-if="paginaAtual === 0" ref="nome" type="text" name="Nome" required=true />
        <normal v-if="paginaAtual === 0" ref="sobrenome" type="text" name="Sobrenome (opcional)" required=false />

        <normal v-if="paginaAtual === 1" ref="email" type="email" name="E-mail" required=true />

        <normal v-if="paginaAtual === 2" ref="password" type="password" name="Senha" needVerify=true minLegth=8
            required=true />

        <birthdate v-if="paginaAtual === 3" ref="birthdateref" minAge=18 maxAge=60 />

        <endereco v-if="paginaAtual === 4" ref="enderecoref" />

        <list v-if="paginaAtual === 5" ref="listadehobbies" name="Lista de Hobbies" />

        <list v-if="paginaAtual === 6" ref="listadelinguagens" name="Lista de Linguagens" />

        <textarea v-if="paginaAtual === 7" ref="biografia" name="Biografia" />

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