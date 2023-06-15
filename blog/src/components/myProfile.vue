<template>
<h1>My Profile Page</h1>
<h2>Name: {{getName("urmii nalayak(mari bajuvadi)")}}</h2>
<h2>Email: {{email}}</h2>
<h2>Mobile: {{mobile=778586678}}</h2>
<h2>All Data: {{getData()}}</h2>
</template>


<script>
export default {
    name: 'myProfile',
    data() {
        return {
            name: 'urmii nalayak(mari bajuvadi)',
            email: 'kittu@yoo.com',

        }
    },
    methods: {
        getName(name) {
            return name
        },
        getData() {
            return {
                name: this.name,
                email: this.email
            }
        }
    }
}
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->


<style>
h1 {
    color: rgb(255, 8, 0);
}
</style>
