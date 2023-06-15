<template>
<h1 ref="user">Call Api</h1>
<ul v-for="item in list" class="item" :key="item.id">
    <li>{{ item.id }}</li>
    <li>{{item.first_name}} {{item.last_name}} </li>
    <li>{{ item.email }}</li>
    <li><img :src="item.avatar" /></li>
</ul>
</template>

<script>
import axios from 'axios'
export default {
    name: 'callApi',
    data() {
        return {
            list: []
        }
    },
    async mounted() {
        let result = await axios.get('https://reqres.in/api/users?page=1');
        console.warn(result.data.data)
        this.list = result.data.data;
    }
}
</script>

<style>
.item{
  display: flex;
}
.item img{
  width: 50px;
}

.item li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    border: 1px solid gray;
    text-align: center;
    padding: 5px;
}
</style>
