import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Database from '@/views/Database.vue'; // Database component imported

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/database', component: Database }, // Add this line to include the Database route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
