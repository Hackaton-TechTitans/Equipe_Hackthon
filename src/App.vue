<script setup>
import Background from './components/Background.vue';
import { ref } from 'vue';
import Form from './components/FormBuilder.vue';

const descricao = ref("Descrição");

const formPages = {
    0: {
        title: 'Bem-vindo',
        description: 'Insira seu nome',
        fields: [
            {
                model: 'normal',
                type: 'text',
                name: 'Nome',
                required: true,
                code: 'nome',
            },
            {
                model: 'normal',
                type: 'text',
                name: 'Sobrenome (opcional)', 
                required: false,
                code: 'sobrenome',
            },
        ],
    },
    1: {
        title: 'Endereço de e-mail',
        description: 'Insira seu endereço de e-mail',
        fields: [
            {
                model: 'normal',
                type: 'email',
                name: 'E-mail',
                required: true,
                code: 'email',
            },
        ],
    },
    2: {
        title: 'Senha',
        description: 'Insira sua senha',
        fields: [
            {
                model: 'normal',
                type: 'password',
                name: 'Senha',
                needVerify: true,
                minLenght: 8,
                required: true,
                code: 'senha',
            },
        ],
    },
    3: {
        title: 'Data de nascimento',
        description: 'Insira sua data de nascimento',
        fields: [
            {
                model: 'birthdate',
                name: 'Data de nascimento',
                required: true,
                minAge: 18,
                maxAge: 60,
                code: 'nascimento',
            },
        ],
    },
    4: {
        title: 'Endereço',
        description: 'Insira seu endereço',
        fields: [
            {
                model: 'endereco',
                name: 'Endereço',
                required: true,
                code: 'endereco',
            },
            
        ],
    },
    5: {
        title: 'Lista de Hobbies',
        description: 'Insira seus Hobbies',
        fields: [
            {
                model: 'list',
                name: 'Idiomas',
                required: true,
                code: 'idiomas',
            },
        ],
    },
    6: {
        title: 'Lista de Linguagens',
        description: 'Insira suas linguagens de programação',
        fields: [
            {
                model: 'list',
                name: 'Linguagens',
                required: true,
                code: 'linguagens',
            },
        ]
    },
    7: {
        title: 'Biografia',
        description: 'Escreva sua biografia',
        fields: [
            {
                model: 'textarea',
                name: 'Biografia',
                required: true,
                code: 'biografia',
            },
        ],
    },
    }

    function Descricao(desc) {
        descricao.value = String(desc);
    }

</script>
<template>
    <Background />
    <div class="content">
        <div class="deco">
            <div class="deco-info">
                <div class="logo">
                    <img src="/logo.png" alt="logo" width="52px">
                </div>
                <div class="title">
                    <h1>Form Dev-Web</h1>
                </div>
                <div class="desc">
                    <p>{{ descricao }}</p>
                </div>
            </div>
        </div>
        <div class="form">
            <Form :form="formPages" @descricao="Descricao" />
        </div>
    </div>
</template>a

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');



html,
body {
    font-family: 'Inter', sans-serif;
    height: 100%;
    width: 100%;
    margin: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}



.content {
    display: flex;
    height: 500px;
    width: 750px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    z-index: 1;
}

.deco {
    width: 90%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
}

.deco-info {
    color: #dddddd;
    display: flex;
    flex-direction: column;
    padding: 4rem 2.5rem;
}

.desc {
    font-size: 1rem;
    font-weight: 400;

}

.title h1 {
    margin: 0;
    font-weight: 400;
    font-size: 2.25rem;

}
</style>