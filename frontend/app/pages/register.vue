<template>
    <div class = "login-box">

        <label for="login">Register</label>
        </div>
        <div>
        <input type="text" name="login" v-model="username" id="login" placeholder="Username">
        </div>
        
    <div>
        <input type="password" name="password" v-model="password"  id="password" placeholder="Password">
    </div>

    <div>
        <input type="email" name="email" id="email" v-model="email" placeholder="Email">
    </div>

    <div>
        <input type="text" name="address" id="address" v-model="address" placeholder="Address">
    </div>

    <div>
        <button type="button" @click="register(username,password,email,address)">register</button>     
    </div>
    <div>
    <nuxt-link to="/">
    <button type="button">back to login</button>
    </nuxt-link>
</div>
</template>
    

<script setup>
import { service } from '/composable/service'
const { register } = service()
const username = ref('') 
const email = ref('')
const password = ref('')
const address = ref('')


</script>

<style lang="scss" scoped>


</style>
