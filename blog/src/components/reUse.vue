<!-- reuse component -->
<template>
    <h1>reuse component</h1>
    <!-- <childCom name="kirti koyani" :user="user" :getData="getData" /> -->
    <ul>
        <li v-for="item in user" :key='item'>
           <!-- Name:  {{ item.name}} &
           Email :  {{ item.email }} -->
           <childCom :user="item" :getData="getData"/>
        </li>
    </ul>
    </template>


    <script>
    import childCom from './childCom.vue';
    export default {
        name: 'reUse',
        components: {
        childCom
        },
        data(){
            return{
                user: [{
                    name: 'kiti',
                    email: 'kjhkf@#gd.jfd'
                },
                {
                    name: 'pisu',
                    email: 'kghhkf@#gd.jfd'
                },
                {
                    name: 'erjr',
                    email: 'titjhkf@#gd.jfd'
                },
                {
                    name: 'erhjdf',
                    email: 'ljjhkf@#gd.jfd'
                },
            ]
            }
        },
        methods:{
            getData(name){
                console.warn("parent function called")
                alert("hii "+ name)
            }
        }

    }
    </script>
