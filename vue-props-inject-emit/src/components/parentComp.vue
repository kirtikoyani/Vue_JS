<template>
<div>
    <h1>parent</h1>
    <child-comp
    v-for="datas in me"
    :key="datas.id"
    :id="datas.id"
    :name="datas.name"
    :std="datas.std"
    :email="datas.email"
    :avail="datas.avail"
    @toggle-age="toggleage"  @add="(i) => count += i" />
    <p>Count: {{ count }}</p>
    <child-comp name="jwejhre" std = 10 email="kdkde@fetch.r" avail = true  />
</div>
</template>

<script>
import childComp from './childComp.vue';
export default {
    components: {
        childComp
    },
    name: 'ParentComp',
    data() {
        return {
            count:0,
        me: [
        {
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
    },methods:{
        toggleage(friendId , some) {
      const identifiedme = this.me.find(
        (friend) => friend.id === friendId
      );
      identifiedme.avail = !identifiedme.avail;
      return some
    }
    }
}
</script>
