<template>
<div>
    <h1>slot child </h1>
    <p>dsjjsfd</p>
    <header>
        <slot name="header">dsfddfdf</slot>
    </header>
    <content>
        <slot name="main"></slot>
        <slot name="content"></slot>
    </content>
    <footer>
        <slot name="footer"><br><button><a href="#">Me!!</a></button></slot>
    </footer>
</div>
</template>

<script>
export default {
    name: 'slotChild',
}
</script>
