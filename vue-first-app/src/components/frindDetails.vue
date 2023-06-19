<template>
  <div ref="myComponentRef">
    <h2>{{ name }}{{ isFavorite ? '(Favorite)' : ''}}</h2>
    <button @click="detailsShow=!detailsShow">{{ detailsShow ? 'Hide' : 'Show' }} </button>
    <ul v-if="detailsShow">
      <li><strong>Phone : </strong>{{ phoneNumber }}</li>
      <li><strong>Email : </strong>{{ emailAddress }}</li>
    </ul>
    <input ref="input1">
    <button @click="logInputValue">Log Input Value</button>
  </div>
  <hr>
</template>

<script>
export default {
  name: 'friendDetails',
  // props:['name','phoneNumber','emailAdress'],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function(value) {
      //   return value === '1' || value === '0';
      // }
    },
  },
  data() {
    return {
      detailsShow: false,
      friend: {
        id: 'kitti',
        name: 'kirti koyani',
        phone: '83748598457',
        email: 'kirti@gmail.com'
      }
    }
  },
  methods: {
    logInputValue() {
      console.log(this.$refs.input1.value);
    },
    some() {
      console.log('some method called');
    },
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
