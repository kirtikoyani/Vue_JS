<template>
    <div>
      <h1>Subjects</h1>
      <!-- <Subject v-for="subject in subjects" :key="subject.id" :subject="subject" :students="students" /> -->
      <prop-drill-child  v-for="subject in subjects" :key="subject.id" :subject="subject" :students="students"/>
    </div>
  </template>

  <script>
import PropDrillChild from './propDrillChild.vue';

  export default {
    data() {
      return {
        subjects: [
          { id: 1, name: 'Mathematics', description: 'Advanced mathematics' },
          { id: 2, name: 'Science', description: 'Biology, Chemistry, and Physics' },
          // Add more subjects here
        ],
        students: [
          { id: 1, rollNo: '001', name: 'John Doe' },
          { id: 2, rollNo: '002', name: 'Jane Smith' },
          // Add more students here
        ],
      };
    },
    components: {
        PropDrillChild,
    },
  };
  </script>
