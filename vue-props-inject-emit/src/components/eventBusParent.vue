<template>
    <div>
        <h1>new...............</h1>
      <h1>Subjects</h1>
      <eventBusChild v-for="subject in subjects" :key="subject.id" :subject="subject" :students="students" />
    </div>
  </template>

  <script>
  import eventBusChild from './eventBusChild.vue';
  import { EventBus } from '../event-bus.js';
  export default {
    data() {
      return {
        subjects: [
          { id: 1, name: 'Mathematics', description: 'Advanced math subject' },
          { id: 2, name: 'Science', description: 'Study of natural phenomena' },
        ],
        students: [
          { id: 1, rollNo: 1, name: 'John' },
          { id: 2, rollNo: 2, name: 'Jane' },
          { id: 3, rollNo: 3, name: 'Bob' },
          { id: 4, rollNo: 4, name: 'Alice' },
        ],
      };
    },
    components: {
        eventBusChild,
    },
    mounted() {
    EventBus.$on('name-updated', this.updateStudentName);
  },
  methods: {
    updateStudentName(updatedStudent) {
      this.students = this.students.map((student) => {
        if (student.id === updatedStudent.id) {
          return updatedStudent;
        }
        return student;
      });
    },
  },
  };
  </script>
