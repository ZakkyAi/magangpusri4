<template>
  <div>
    <Navbar />
    <h1>Database Overview</h1>
    <p>This page shows all databases and tables in the `drawing_app` database:</p>
    
    <h2>Databases:</h2>
    <ul>
      <li v-for="database in databases" :key="database.Database">
        {{ database.Database }}
      </li>
    </ul>

    <h2>Tables in drawing_app:</h2>
    <ul>
      <li v-for="table in tables" :key="table['Tables_in_drawing_app']" @click="fetchTableColumns(table['Tables_in_drawing_app'])">
        {{ table['Tables_in_drawing_app'] }}
      </li>
    </ul>

    <h2>Columns:</h2>
    <ul v-if="columns.length">
      <li v-for="column in columns" :key="column.Field">
        {{ column.Field }} ({{ column.Type }})
      </li>
    </ul>
    <p v-else>No columns available.</p>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Database',
  components: {
    Navbar
  },
  data() {
    return {
      databases: [],
      tables: [],
      columns: [],
      selectedTable: ''
    };
  },
  created() {
    this.fetchDatabases();
    this.fetchTables();
  },
  methods: {
    fetchDatabases() {
      axios.get('http://localhost:3000/api/databases')
        .then(response => {
          this.databases = response.data;
        })
        .catch(error => {
          console.error('Error fetching databases:', error);
        });
    },
    fetchTables() {
      axios.get('http://localhost:3000/api/tables')
        .then(response => {
          this.tables = response.data;
        })
        .catch(error => {
          console.error('Error fetching tables:', error);
        });
    },
    fetchTableColumns(tableName) {
      axios.get(`http://localhost:3000/api/table-columns/${tableName}`)
        .then(response => {
          this.columns = response.data;
          this.selectedTable = tableName;
        })
        .catch(error => {
          console.error('Error fetching table columns:', error);
        });
    }
  }
}
</script>

<style scoped>
h1 {
  color: #333;
}
h2 {
  color: #666;
}
</style>
