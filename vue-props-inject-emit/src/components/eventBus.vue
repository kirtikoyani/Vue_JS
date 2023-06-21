<template>
<div class="Item">
    <div v-for="item in filterItem" :key="item.id">
        <img :src='item.imageSrc' class="ItemImage">
    <div class="ItemDetails">
        <p><strong>{{item.name}}</strong></p>
        <p>Price: <strong>${{item.price}}</strong></p>
    </div>
    </div>

    <!-- <button class="Button" @click="addToCart(item)">Add To Cart</button> -->
</div>
</template>

<script>
import {
    EventBus
} from '../event-bus.js'
export default {
    name: 'shopItm',
    data() {
        return {
            searchVal: '',
            items: [{
                    id: 205,
                    name: 'Banana',
                    price: 1,
                    imageSrc: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFuYW5hfGVufDB8fDB8fHww&w=1000&q=80'
                },
                {
                    id: 148,
                    name: 'Orange',
                    price: 2,
                    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgAWGsfZ1t7tK3M7Zt5bLtnxqAhv95e7-QpBhLG7i&s'
                },
                {
                    id: 248,
                    name: 'Apple',
                    price: 1,
                    imageSrc: 'https://freepngimg.com/save/9556-apple-fruit-png/736x445'
                }
            ],
        }
    },
    methods: {
        addToCart(item) {
            this.$emit('update-cart', item)
        }
    },
    created() {
        EventBus.$on('search-value', (val) => {
            this.searchVal = val;
            // console.log(val)
        });
    },
    computed: {
        filterItem() {
            return this.items.filter(item => item.name.toLowerCase().includes(this.searchVal.toLowerCase()));
        }
    }
}
</script>
