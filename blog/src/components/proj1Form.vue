<template>
<h1>Proj1 Form</h1>
<label for="name">Name : </label>
<input type="text" placeholder="enter name" name="name" v-model="name">
<br><br>
<label for="email">Email : </label>
<input type="text" placeholder="enter email" name="email" v-model="email">
<br><br>
<label for="password">Password : </label>
<input type="password" placeholder="enter password" name="password" v-model="password">
<br><br>
<label for="Address">Address : </label>
<input type="text" placeholder="enter Address" name="address" v-model="Address">
<br><br>
<h3>Gender</h3>
    <label for="male">male</label>
    <input type="radio" name="gender" v-model="gender" value="male" id="male">
    <label for="female">female</label>
    <input type="radio" name="gender" v-model="gender" value="female" id="female">
    <br><br>
    <select v-model="country"  name="country">
        <option value="India">India</option>
        <option value="China">China</option>
        <option value="USA">USA</option>
    </select>
    <h3>Technologies</h3>
    <label for="java">Java</label>
    <input type="checkbox" name="java" v-model="technology" value="java" id="java">
    <label for="php">Php</label>
    <input type="checkbox" name="php" v-model="technology" value="php" id="php">
    <label for="js">Js</label>
    <input type="checkbox" name="js" v-model="technology" value="js" id="js">
    <br><br>
<button v-on:click="getData()" type="button">Get Values</button>
</template>

<script>
import axios from "axios";
export default {
    name: 'formPor',
    data() {
        return {
            // form: {
            name: '',
            email: '',
            password: '',
            Address: '',
            technology: [],
            gender: '',
            country: ''
            // },
            // err: []
        }
    },
    methods: {
       async getData() {
            console.warn(this.email, this.Address, this.name,this.gender,this.technology,this.country)
          let result=await axios.post('http://localhost:3000/users', {
                name: this.name,
                email: this.email,
                gender: this.gender,
                password: this.password,
                address: this.Address,
                country: this.country,
                technology: this.technology,
            });
            console.warn(result)
        }
    }
}
</script>
// create json server
1. install json server --> sudo npm i -g json-server
2. make folder --> mkdir api
3. run this cmd --> sudo npm i -g json-server
4. see that url in browser  & make changes in api through api folder's db.json file
// first run it in terminal for working of api  ----> json-server --watch db.json