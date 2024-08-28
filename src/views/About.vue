<template>
  <div>
    <Navbar />
    <h1>About Us</h1>
    <p>This is the about page content.</p>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'About',
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
