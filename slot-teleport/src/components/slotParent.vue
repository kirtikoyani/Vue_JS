<template>
<div>
    <h1>slot Parent</h1>
    <slot-child>
        <template v-slot:header>
            <h1>torist plase</h1>
        </template>
        <template v-slot:main>
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/0f/2b/0a/caption.jpg?w=300&h=300&s=1" />
        </template>
        <template v-slot:footer>
            <br><button><a href="#">good place</a></button>
        </template>
    </slot-child>
    <slot-child />
    <slot-child>
        <h1>jwehjhjre</h1>
    </slot-child>
    <slot-child>
        <template v-slot:header>
            <h1>torist plase</h1>
        </template>
        <template v-slot:content>
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/0f/2b/0a/caption.jpg?w=300&h=300&s=1" />
        </template>
        <template v-slot:footer>
            <br><button><a href="#">good place</a></button>
        </template>
    </slot-child>
</div>
</template>

<script>
import slotChild from './slotChild.vue'
export default {
    components: {
        slotChild
    },
    name: 'slotParent',

}
</script>
