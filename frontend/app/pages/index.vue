<template>
    <div>

        <label for="login">login:</label>
    </div>
    <div>
        <input type="text" name="login" id="login" placeholder="Username" v-model="username">
    </div>
        
    <div>
        <input type="password" name="password" id="password" placeholder="Password" v-model="password">
    </div>
    <div>
        <button type="button" @click="login(username,password)">login</button>     
        
    </div>

   
    <div>
    <nuxt-link to="register">
    <button type="button">register</button> 
    </nuxt-link> 
    <label fro="">username
        <input type="text" name="" v-model="usrtname" id="">
        <button @click="editprofile(username,email)">Edit</button>     
    </label> <br>
    <label fro="">email
        <input type="text" name="" v-model="email" id="">
        <button @click="editprofile(username,email)">Edit</button>     
    </label>
</div>
</template>
    

<script setup>
import { service } from '@/composable/service.js'   

const { login } = service()

const username = ref('') 
const password = ref('') 


</script>

<style lang="scss" scoped>

</style>