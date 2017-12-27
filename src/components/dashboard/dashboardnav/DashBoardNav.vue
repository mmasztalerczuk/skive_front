<template>
<b-navbar toggleable="md" type="dark">
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="mx-auto">
          <b-nav-item href="#">Projects</b-nav-item>
          <b-nav-item href="#">Plan</b-nav-item>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import 'vue-awesome/icons'

  export default {
    name: 'DashBoardNav'
  }
</script>


<style>
.navbar {
  background-color: #7cc4bf;
  height: 48px;
}
</style>
