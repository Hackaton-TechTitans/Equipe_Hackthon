<script setup>

import { ref } from 'vue';
import estados from './estados';



</script>
<template>

    <form class="form">
      <h3>Formulario Vue</h3>
      <label for="nome">Nome</label>
      <input type="text" id="nome" name="nome" v-model="nome" required>

      <label for="email">Email</label>
      <input type="email" id="email" name="email" v-model="email" required>

      <label for="senha">Senha</label>
      <input type="password" id="senha" name="senha" v-model="senha" required>

      <label for="senha_confirmacao">Confirmação de Senha</label>
      <input type="password" id="senha_confirmacao" name="senha_confirmacao" v-model="senha_confirmacao" required>

      <label for="nascimento">Data de Nascimento</label>
      <input type="date" id="nascimento" name="nascimento" v-model="nascimento" required>

      <label for="endereco">Endereço</label>
      <input type="text" id="endereco" name="endereco" v-model="endereco" required>

      <label for="cidade">Cidade</label>
      <input type="text" id="cidade" name="cidade" v-model="cidade" required>

      <label for="estado">Estado</label>
      <select v-model="estado">
        <option v-for="estado in estados" :value="estado.sigla">{{ estado.nome }}</option>
      </select>

      <label for="hobbies">Hobbies</label>
      <input type="text" id="hobbies" name="hobbies" v-model="hobbies" required>
      <label for="biografia">Biografia</label>
      <textarea id="biografia" name="biografia" v-model="biografia" required></textarea>


      <button type="submit">Enviar</button>


    </form>
</template>
<style>
  
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

  body {
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgb(35, 33, 44);
    color: white;
    font-family: 'Roboto', sans-serif;
  }
  .form {
    color: rgb(217, 217, 217);
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    padding: 20px;
    border: 2px solid rgb(135, 202, 222);
    border-radius: 15px;
  }
  input, select, textarea {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgb(135, 202, 222);
  }
  h3{
    font-size: 2rem;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  button{
    margin-top: 10px;
    background-image: linear-gradient(90deg, rgba(135, 202, 222, 1) 0%, rgb(103, 191, 218) 100%);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>