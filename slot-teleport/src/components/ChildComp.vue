<template>
    <div>
      <form>
        <slot name="formFields" :fields="fields" :handleSubmit="handleSubmit"></slot>
        <!-- <ul v-for="v in val" :key="v.value">
            <li>{{ v.value }}</li>
        </ul> -->
      </form>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        fields: [
          { label: 'Name', type: 'text', name: 'name', value: '' },
          { label: 'Email', type: 'email', name: 'email', value: '' },
          { label: 'Password', type: 'password', name: 'password', value: '' }
        ]
      };
    },
    methods: {
      handleSubmit() {
        // Handle form submission
        console.log('Form submitted!');
        console.log(this.fields);
      }
    }
  };
  </script>
