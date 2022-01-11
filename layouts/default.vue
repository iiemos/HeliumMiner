<template>
  <div class="__default">
    <Nuxt />
  </div>
</template>
<script >
import Vue from 'vue'
// declare var window: Window & { fxeyeDomain: any };
export default Vue.extend({
  mounted () {
    this.$store.commit('setRoute',this.$route.path)
  },
})
</script>

<style>

</style>
