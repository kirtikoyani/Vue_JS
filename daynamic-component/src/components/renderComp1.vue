<template>
    <div>
        <h2>Component One</h2>
        <p>Choose food.</p>
        <label>
            <input type="radio" name="rbgFood" />
            Apple
        </label>
        <label>
            <input type="radio" name="rbgFood" />
            Cake
        </label>
    </div>
</template>

<script>
  export default {
    name: 'CompOne',
    data () {
      return {
        imgSrc: 'img_question.svg'
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
    img {
        float: right;
        height: 100px;
        margin-top: 20px;
    }
    label:hover {
        cursor: pointer;
    }
</style>