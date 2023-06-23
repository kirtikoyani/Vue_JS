<template>
    <div class="student-card">
      <h3>Roll No: {{ student.rollNo }}</h3>
      <h4>Name: {{ student.name }}</h4>
      <button v-if="!isEditing" @click="editName">Edit Name</button>
      <div v-if="isEditing">
        <!-- <input type="text" v-model="editedName"> -->
        <input type="text" id="fname" :value="editedName" @input="editedName = $event.target.value" />
        <button @click="saveName">Save</button>
        <button @click="cancelEdit">Cancel</button>
      </div>
    </div>
  </template>

  <script>
  import { EventBus } from '../event-bus.js';

  export default {
    props: ['student'],
    data() {
      return {
        isEditing: false,
        editedName: this.student.name,
      };
    },
    methods: {
      editName() {
        this.isEditing = true;
      },
      saveName() {
        const updatedStudent = {
                ...this.student,
                name: this.editedName
            };
        EventBus.$emit('name-updated', updatedStudent);
        this.isEditing = false;
      },
      cancelEdit() {
        this.isEditing = false;
      },
    },
  };
  </script>

  <style scoped>
  .student-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
