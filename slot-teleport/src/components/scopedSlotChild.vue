<template>
    <div>
        <slot :lclData="data"></slot>
        <slot v-for="x in foods"
    :foodName="x.name"
    :foodDesc="x.desc"
    :foodUrl="x.url" ></slot>
    </div>

</template>

<script>
export default {
    data() {
        return {
            data: 'This is local data',
            foods: [
          { name: 'Apple', desc: 'Apples are a type of fruit that grow on trees.', url: 'img_apple.svg' },
          { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', url: 'img_pizza.svg' },
          { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', url: 'img_rice.svg' },
          { name: 'Fish', desc: 'Fish is an animal that lives in water.', url: 'img_fish.svg' },
          { name: 'Cake', desc: 'Cake is something sweet that tastes good but is not considered healthy.', url: 'img_cake.svg' }
       ]
        }
    }
}
</script>

<style></style>