<template>
    <div>

        <img :src="`http://localhost:5000/${pic}`" alt=""> <br>
        <div>
            <input type="file" name=" " id="" @change="f">
        </div>

        <button @click="upload(file)">upload</button> <br>
        <label fro="">username
            <input type="text" name="" v-model="username" id="">
            <button @click="editprofile(username,email)">Edit</button>     
        </label> <br>
        <label fro="">email
            <input type="text" name="" v-model="email" id="">
            <button @click="editprofile(username,email)">Edit</button>     
        </label> <br>

        <div>
            <nuxt-link to="/user/">
                back
            </nuxt-link>
        </div>
    </div>
</template>    

<script setup>
import { service } from '../composable/service'

const pic = ref("")
const username = ref("")
const email = ref("")
const file = ref(null)

const {profile,editprofile,upload,getuser} = service()

const f =(e) =>{
    file.value = e.target.files[0]
}

const ld = async () =>{
    const user = await getuser()
    const res = await profile()
    // pic.value = res[0].profile
    // username.value = user.username
    // email.value = user.email
}

onMounted(ld)


</script>

<sryle lang="sacc" scoped>

</sryle>