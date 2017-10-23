<template>
  <landingpage></landingpage>
</template>

<script>
import LandingPage from './landingpage/LandingPage.vue'

export default {
  components: {
    'landingpage': LandingPage
  },

  name: 'HelloWorld',
  login: false,

  mounted: function () {
    if (localStorage.getItem('JWT') != null) {
      this.$router.push('dashboard')
    }
  }
}
</script>

