<!-- pass data parent component to child component -->
<template>
<h1>pass data to child component</h1>
<ParentCom name="kirti koyani" :parent="parent" :getData="getData" :getUserName="getUserName" />
<childCom name="prince koyani" :child="child" :getData="getData" />
</template>

<script>
import childCom from './childCom.vue';
import ParentCom from './parentCom.vue';
export default {
    name: 'towWayBinding',
    components: {
        childCom,
        ParentCom
    },
    data() {
        return {
            parent: {
                name: '',
                email: 'kittu@jhd.dda'
            },
            child: {
                name: 'pisu',
                email: 'pissu@jhd.dda'
            }
        }
    },
    methods: {
        getUserName(name) {
            this.parent.name = name;
            alert(`Hyy!!! i am ${name}`)
        },
        getData(name, email) {
            console.warn("parent function called")
            alert(`Hyy!!! i am ${name} & my email is ${email}`)
        }
    }

}
</script>
