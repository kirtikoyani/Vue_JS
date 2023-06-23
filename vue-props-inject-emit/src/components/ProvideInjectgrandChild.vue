<template>
<div class="student-card">
    <h3>Roll No: {{ student.rollNo }}</h3>
    <h4>Name: {{ student.name }}</h4>
    <button v-if="!isEditing" @click="editName">Edit Name</button>
    <div v-if="isEditing">
        <input type="text" id="fname" :value="editedName" @input="editedName = $event.target.value" />
        <button @click="saveName">Save</button>
        <button @click="cancelEdit">Cancel</button>
    </div>
</div>
</template>

<script>
// import { ref } from 'vue';

export default {
    props: ['student'],
    data() {
        return {
            isEditing: false,
            editedName: this.student.name,
        };
    },
    inject: ['updateStudentName'],
    methods: {
        editName() {
            this.isEditing = true;
        },

        cancelEdit() {
            this.isEditing = false;
        },

        saveName() {
            const updatedStudent = {
                ...this.student,
                name: this.editedName
            };
            this.updateStudentName(updatedStudent);
            console.log(updatedStudent)
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
