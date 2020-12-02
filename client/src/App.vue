<template>
  <div id="app">
    <guests-form />
    <guests-select :guests="guests" />
  
  </div>
  
</template>

<script>
 import { eventBus } from '@/main.js'
import GuestsForm from '@/components/GuestsForm.vue';
import GuestsList from '@/components/GuestsList.vue'
import GuestSelect from '@/components/GuestSelect.vue'


export default {
  name: 'app', 
  components: {
    'guests-form': GuestsForm,
    'guests-list': GuestsList,
    'guest-select': GuestSelect
  },
  data(){
    return{
      guests: []
    }
  },
  mounted(){
    this.fetchGuests(); 
    eventBus.$on('guest-added', (guest) => {
      this.guests.push(guest)
    })
  }


}
</script>

<style>

</style>