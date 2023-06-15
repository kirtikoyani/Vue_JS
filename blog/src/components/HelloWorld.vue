<template>
  <div class="hello">
    <h1 ref="user">Helloword</h1>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  beforeUnmount(){
    console.warn('before unmount',this.$refs["user"])
  },
  unmounted(){
    console.warn('unmounted..',this.$refs["user"])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

