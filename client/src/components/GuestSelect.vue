<template>
    <div class="guest-select">
        <guest-select v-for="(guest, index) in guests" :key="index" :guests="guests"></guest-select>   


    </div>
  
</template>

<script>
import { eventBus } from '@/main.js'
import GuestService from '@/services/GuestService.js'


export default {


}
</script>

<style>

</style>