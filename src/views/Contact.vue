<template>
  <div>
    <Navbar />
    <h1>Contact Us</h1>
    <p>This is the contact page content.</p>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Contact',
  components: {
    Navbar
  }
}
</script>

<style scoped>
h1 {
  color: #333;
}
</style>
