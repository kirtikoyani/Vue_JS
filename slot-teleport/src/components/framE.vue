<template>
<div class="frame">
<h2>Child Component</h2>
<slot>This is the default content if nothing gets specified to go here</slot>
<slot></slot>
<div class="card">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</div>
</template>
<script>
export default {
    name:'framE',
    mounted(){
        console.log(this.$slots.default)
        console.log(this.$slots)
    }
}
</script>