<template>
    <h1>Simple Form</h1>
    <ul>
        <li v-for="item in err" v-bind:key="item">
            {{ item }} is not valid
        </li>
    </ul>
    <h4>{{form}}</h4>
    <label for="name">Name : </label>
    <input type="text" placeholder="enter email" v-model="form.email">
    <br><br>
    <label for="password">Password : </label>
    <input type="password" placeholder="enter password" v-model="form.password">
    <br>
    <h3>Gender</h3>
    <label for="male">male</label>
    <input type="radio" name="gender" v-model="form.gender" value="male" id="male">
    <label for="female">female</label>
    <input type="radio" name="gender" v-model="form.gender" value="female" id="female">
    <br><br>
    <select v-model="form.country">
        <option value="India">India</option>
        <option value="China">China</option>
        <option value="USA">USA</option>
    </select>
    <h3>Technologies</h3>
    <label for="java">Java</label>
    <input type="checkbox" name="" v-model="form.technology" value="java" id="java">
    <label for="php">Php</label>
    <input type="checkbox" name="" v-model="form.technology" value="php" id="php">
    <label for="js">Js</label>
    <input type="checkbox" name="" v-model="form.technology" value="js" id="js">
    <br><br>
    <button v-on:click="getData()" type="button">Get Values</button>

</template>

<script>
export default {
    name: 'towWayBinding',
    data() {
        return {
            form: {
                email: '',
                password: '',
                technology: [],
                gender: '',
                country: ''
            },
            err: []
        }
    },
    methods: {
        getData() {
            this.err = [];
            for (const item in this.form) {
                if (this.form[item] == "" || this.form[item].length === 0) {
                    this.err.push(item)
                }
            }
            if (this.err.length == 0) {
                alert('Data has been submitted');
            }
            console.warn(`${this.err}`)
        }
    }
}
</script>
