<template>
    <div>
        YOU ARE LOGIN!!!! <br>
        id : {{ id }} <br>
        username : {{ username }} <br>
        email : {{ email }} <br>
        address : {{ address }} <br>

        <img :src="profile">

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { service } from '~/composable/service'
import { useStore } from '../composable/store'

const store = useStore()

const { getprofile } = service()

const username = ref("")
const id = ref("")
const email = ref("")
const address = ref("")
const profile = ref("")



const loaddata = async () => {
    await store.loaduser()
    const res = await getprofile(store.id);
console.log(res.data.data[0].profile)
    profile.value = `http://localhost:5000/${res.data.data[0].profile}`

    username.value = store.user.username
    id.value = store.user.id
    email.value = store.user.email
    address.value = store.user.address
}

onMounted(loaddata)

</script>

<style lang="scss" scoped>

</style>