<template>
<h1>Get input feild value</h1>
<input type="text" placeholder="enter email" v-model="email">
<br><br>
<input type="password" placeholder="enter placeholder" v-model="password">
<br><br>
<h2>Technologies</h2>
<label for="java">Java</label>
<input type="checkbox" name="" v-model="technology" value="java" id="java">
<label for="php">Php</label>
<input type="checkbox" name="" v-model="technology" value="php" id="php">
<label for="js">Js</label>
<input type="checkbox" name="" v-model="technology" value="js" id="js">
<br><br>
<button v-on:click="getData()" type="button">Get Values</button>
<br><br>

<h2>Gender</h2>
<label for="male">male</label>
<input type="radio" name="gender" v-model="gender" value="male" id="male">
<label for="female">female</label>
<input type="radio" name="gender" v-model="gender" value="female" id="female">
<br><br>

<h4>Selected Technologies : {{technology}}</h4>
<h4>I am {{gender}}</h4>
</template>


<script>
export default {
    name: 'towWayBinding',
    data() {
        return {
            email:null,
            password:null,
            technology:[],
            gender:null
        }
    },
methods:{
    getData(){
        console.warn("values : ",this.email,this.password)
    }
}
}
</script>
