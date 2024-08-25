<template>
    <div>
      <Navbar />
      <h1>Welcome to Home Page</h1>
      <p>This is the home page content.</p>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue'
  
  export default {
    name: 'Home',
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
  