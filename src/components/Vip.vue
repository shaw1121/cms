<template>
  <div>
      vip
      <h2>{{count}}</h2>
      <button @click="increment">加+</button>
      <button @click="decrement">减-</button>
      <h3>{{duplicateNum}}</h3>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    ...mapGetters([
      'duplicateNum'
    ])
    // duplicate() {
    //   return this.$store.getters.duplicateNum
    // }
  },
  methods: {
    ...mapMutations([
      'decrement'
    ]),
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>

<style>

</style>