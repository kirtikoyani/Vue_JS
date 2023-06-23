<template>
    <div class="subject-card">
      <h2>{{ subject.name }}</h2>
      <p>{{ subject.description }}</p>
      <eventBusGrandChild v-for="student in students" :key="student.id" :student="student" />
    </div>
  </template>

  <script>
  import eventBusGrandChild from './eventBusGrandChild.vue';

  export default {
    props: ['subject', 'students'],
    components: {
        eventBusGrandChild,
    }
  };
  </script>
