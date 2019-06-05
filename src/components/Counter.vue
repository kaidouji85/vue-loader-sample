<template>
    <div>
        <button @click="decrement">-</button>
        <span>{{count}}</span>
        <button @click="increment">+</button>
    </div>
</template>

<script>
    export default {
      data: () => ({
        count: 0
      }),
      methods: {
        increment() {
          this.count ++;
        },
        decrement() {
          this.count --;
        }
      }
    };
</script>
