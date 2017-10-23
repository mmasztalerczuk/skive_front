<template>
 <b-navbar toggleable="md" type="dark">
    <b-nav is-nav-bar class="ml-auto">
      <g-signin-button
          :params="googleSignInParams"
          @success="onSignInSuccess"
          @error="onSignInError">
          Sign in with Google
      </g-signin-button>
    </b-nav>
</b-navbar>
</template>

<script>
  export default {
    name: 'LandingNav',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        login: false,
        googleSignInParams: {
          client_id: '763411515951-kis100i1n7b2bbqoemdac6r2uaq88737.apps.googleusercontent.com'
        }
      }
    },
    methods: {
      onSignInSuccess (googleUser) {
        const x = googleUser.getAuthResponse()
        localStorage.setItem('JWT', x.id_token)
        this.$router.push('dashboard')
      },
      onSignInError (error) {
        console.log('OH NOES', error)
      }
    },
    mounted: function () {
    }
  }
</script>

<style>
</style>
