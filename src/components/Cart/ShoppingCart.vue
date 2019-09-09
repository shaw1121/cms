<template>
  <div>cart
    <h1>{{count}}</h1>
    <button @click="increment">通过action 加</button>
    <button @click="decrement">通过action 减</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement'
    ])
  }

}
</script>

<style>

</style>