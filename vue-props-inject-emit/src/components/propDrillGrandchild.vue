<template>
<div class="student-card">
    <h3>Roll No: {{ student.rollNo }}</h3>
    <h4>Name: {{ student.name }}</h4>
    <button v-if="!isEditing" @click="editName">Edit Name</button>
    <div v-if="isEditing">
        <!-- <input type="text" v-model="editedName"> -->
        <input type="text" id="fname" :value="editedName" @input="editedName = $event.target.value" />
        {{ editedName }}
        <button @click="saveName">Save</button>
        <button @click="cancelEdit">Cancel</button>
    </div>
</div>
</template>

<script>
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
            // this.student.name = this.editedName;
            const updatedStudent = {
                ...this.student,
                name: this.editedName
            };
            this.isEditing = false;
            // console.log(updatedStudent)
            this.$emit('name-updated', updatedStudent);
        },
        // emitmethod(){
        //   this.$emit('name-updated', this.saveName());
        // },
        cancelEdit() {
            this.isEditing = false;
        },
    },
};
</script>
