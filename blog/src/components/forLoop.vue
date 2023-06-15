<template>
<h1>For Loop</h1>
<ul>
    <li v-for="item in tech" :key='item'>
        {{ item }}
    </li>
</ul>
<ul>
    <li v-for="item in user" :key='item'>
       Name:  {{ item.name}} &
       Email :  {{ item.email }}
    </li>
</ul>
</template>


<script>
export default {
    name: 'forLoop',
    data() {
        return {
            tech: ['java', 'php', 'node', 'html'],
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

}
</script>
