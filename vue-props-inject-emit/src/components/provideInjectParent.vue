<template>
<div>
    <h1>Subjects</h1>
    <ProvideInjectChild v-for="subject in subjects" :key="subject.id" :subject="subject" />
</div>
</template>


<script>
import ProvideInjectChild from './ProvideInjectChild.vue';

export default {
    data() {
        return {
            subjects: [{
                    id: 1,
                    name: 'Mathematics',
                    description: 'Advanced math subject'
                },
                {
                    id: 2,
                    name: 'Science',
                    description: 'Study of natural phenomena'
                },
            ],
            students: [{
                    id: 1,
                    rollNo: 1,
                    name: 'John'
                },
                {
                    id: 2,
                    rollNo: 2,
                    name: 'Jane'
                },
            ],
        };
    },
    components: {
        ProvideInjectChild,
    },
    provide() {
        return {
            students: this.students,
            updateStudentName: this.updateStudentName,
        };
    },
    methods: {
        updateStudentName(updatedStudent) {
            const index = this.students.findIndex((student) => student.id === updatedStudent.id);
            if (index !== -1) {
                this.$set(this.students, index, updatedStudent);
            }
        },
    },
};
</script>
