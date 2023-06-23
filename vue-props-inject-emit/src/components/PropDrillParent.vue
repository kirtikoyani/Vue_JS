<template>
<div>
    <h1>Subjects</h1>
    <!-- <Subject v-for="subject in subjects" :key="subject.id" :subject="subject" :students="students" /> -->
    <prop-drill-child v-for="subject in subjects" :key="subject.id" :subject="subject" :students="students" @name-updat="getName" />
</div>
</template>


<script>
import PropDrillChild from './propDrillChild.vue';

export default {
    data() {
        return {
            subjects: [{
                    id: 1,
                    name: 'Mathematics',
                    description: 'Advanced mathematics'
                },
                {
                    id: 2,
                    name: 'Science',
                    description: 'Biology, Chemistry, and Physics'
                },
                // Add more subjects here
            ],
            students: [{
                    id: 1,
                    rollNo: '001',
                    name: 'John Doe'
                },
                {
                    id: 2,
                    rollNo: '002',
                    name: 'Jane Smith'
                },
                // Add more students here
            ],
        };
    },
    components: {
        PropDrillChild,
    },
    methods: {
        getName(saveName) {
            console.log(saveName);
            const index = this.students.findIndex((student) => student.id === saveName.id);
            if (index !== -1) {
                this.$set(this.students, index, saveName);
            }
        }
    }
};
</script>
