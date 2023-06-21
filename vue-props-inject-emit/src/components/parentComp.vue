<template>
<div>
    <h1>parent</h1>
    <h2>props use pass data parent to child</h2>
    <h2>emit use pass data child to parent</h2>
    <h2>provide inject use pass data grandchild to parent</h2>
    <child-comp v-for="datas in me" :key="datas.id" :id="datas.id" :name="datas.name" :std="datas.std" :email="datas.email" :avail="datas.avail" @toggle-age="toggleage" @add="(i) => count += i" @multiply="(a,b)=>c=a*b" />

    <p>Count: {{ count }}</p>
    <p>Count: {{ c }}</p>
    <!-- <child-comp name="jwejhre" std = 10 email="kdkde@fetch.r" avail = true  /> -->
</div>
</template>

<script>
import childComp from './childComp.vue';
// import provide from 'vue';
export default {
    components: {
        childComp
    },
    name: 'ParentComp',
    data() {
        return {
            count: 0,
            c: 0,
            me: [{
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    std: 12,
                    email: 'manuel@localhost.com',
                    avail: true
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    std: 11,
                    email: 'julie@localhost.com',
                    avail: true
                },
                {
                    id: 'kittu',
                    name: 'kitu chibi',
                    std: 9,
                    email: 'kiti@localhost.com',
                    avail: false
                },
                {
                    id: 'pisu',
                    name: 'pisu bitu',
                    std: 8,
                    email: 'pisu@localhost.com',
                    avail: false
                },
            ],
        }
    },
    methods: {
        toggleage(friendId, some) {
            const identifiedme = this.me.find(
                (friend) => friend.id === friendId
            );
            identifiedme.avail = !identifiedme.avail;
            return some
        }
    },
    provide: {
        name1: 'kirti',
        items: [{
                id: 205,
                name: 'Banana',
                price: 1,
                imageSrc: 'Banana'
            },
            {
                id: 148,
                name: 'Orange',
                price: 2,
                imageSrc: 'Orange'
            },
            {
                id: 248,
                name: 'Apple',
                price: 1,
                imageSrc: 'Apple'
            }
        ], // Provide the 'name' property
    },
  //   provide() { // also write provide as function
  //   return {
  //     foods: this.foods
  //   }
  // }
}
</script>
