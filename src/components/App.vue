<template>
    <div>
        <p>Hello, World!</p>
        <counter/>
    </div>
</template>

<script>
  import Counter from './Counter'
  export default {
    components: {Counter},
  }
</script>

<style scoped>
    * {
        border: 1px solid red;
    }
</style>
