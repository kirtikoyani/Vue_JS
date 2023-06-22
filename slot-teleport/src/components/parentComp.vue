<template>
    <div>
      <ChildComp>
        <template v-slot:formFields="{ fields, handleSubmit }">
          <div v-for="field in fields" :key="field.name">
            <label :for="field.name">{{ field.label }}</label>
            <input :type="field.type" :name="field.name" v-model="field.value">
         <p>{{ field.value }}</p>
          </div>
          <button @click.prevent="handleSubmit">Submit</button>
        </template>
      </ChildComp>
    </div>
  </template>

  <script>
  import ChildComp from '../components/ChildComp.vue';

  export default {
    components: {
      ChildComp
    }
  };
  </script>
