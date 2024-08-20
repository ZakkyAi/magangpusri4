<template>
    <div>
      <input v-model="drawingName" placeholder="Enter drawing name" />
      <button @click="saveDrawing">Save Drawing</button>
      <!-- Your canvas and other UI elements go here -->
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        userId: 1, // Replace with the actual user ID from your authentication system
        drawingName: '',
        shapes: [], // Your array of shape data
      };
    },
    methods: {
      saveDrawing() {
        const drawingData = {
          user_id: this.userId,
          name: this.drawingName,
          data: this.shapes,
        };
  
        axios.post('http://localhost:3000/api/shapes', drawingData)
          .then(response => {
            console.log('Drawing saved:', response.data);
          })
          .catch(error => {
            console.error('Error saving drawing:', error);
          });
      }
    }
  }
  </script>
  