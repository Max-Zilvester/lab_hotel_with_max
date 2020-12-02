<template>
  <div> 
    <h2>Add a Guest</h2>
    <form v-on:submit="handleSubmit" method="post" id='games-form'>
        <label for="name">Guest Name</label>
        <input type="text" id="name" v-model="name" />   

        <label for="email">Guest Email</label>
        <input type="text" id="email" v-model="email" />  

        <label for="status">Guest Status</label>
        <input type="text" id="status" v-model="status" />   

        <input type="submit" value="Save" id="save" /> 
    </form>  
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import GuestService from '@/services/GuestService.js'

export default {
    name: 'guests-form',
    data() {
        return {
            name: '',
            email: '',
            status: ''
        }
    },

    methods: {
        handleSubmit(e) {
            e.preventDefault()
            const guests = {
                name: this.name, 
                email: this.email, 
                status: this.status
        }
        GuestService.postGuests(guest)
        .then(res => eventBus.$emit('guest-added', res));
        .this.name = this.email = this.status = "";
        
        }
    }

}
</script>

<style>

</style>