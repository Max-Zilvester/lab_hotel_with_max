<template>
  <div class="guests-list">
      <h3>{{ guest.name }}</h3>

  </div>
</template>

<script>
import GuestService from '@/services/GuestService.js'

export default {
    name: 'guests-list',
    props: ['guests']
}
</script>

<style>

</style>