<template>
<!--  <b-navbar class="test13" toggleable="md" type="dark">
   <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="mx-auto">
          <b-nav-item href="#">
            <icon name="inbox" scale="3"></icon>
          </b-nav-item>
          <b-nav-item href="#">
            <icon name="list" scale="3"></icon></b-nav-item>
          <b-nav-item href="#"><icon name="folder-open" scale="3"></icon></b-nav-item>
          <b-nav-item href="#"><icon name="calendar" scale="3"></icon></b-nav-item>


        </b-navbar-nav>

    </b-collapse>

  </b-navbar> -->
</template>

<script>
  import 'vue-awesome/icons'

  export default {
    name: 'DashBoardNav',
    data () {
      return {
      }
    },
    methods: {
      handleLogout () {
        localStorage.removeItem('JWT')
        this.$router.push('/')
      }
    },
    mounted: function () {
    }
  }
</script>

<style>
.navbar {
  background-color: #3cc47c;
  height: 78px;

}
.navbar .navbar-brand {
  color: #ffffff;
}
.navbar .navbar-brand:hover,
.navbar .navbar-brand:focus {
  color: #ffffff;
}
.navbar .navbar-text {
  color: #ffffff;
}
.navbar .navbar-nav .nav-link {
  color: #ffffff;
  border-radius: .25rem;
  margin: 0 0.25em;
}
.navbar .navbar-nav .nav-link:not(.disabled):hover,
.navbar .navbar-nav .nav-link:not(.disabled):focus {
  color: #ffffff;
}

.nav-item:hover {
  background-color: #f2b632 ;
  height: auto;
}


.navbar .navbar-nav .nav-item.active .nav-link,
.navbar .navbar-nav .nav-item.active .nav-link:hover,
.navbar .navbar-nav .nav-item.active .nav-link:focus,
.navbar .navbar-nav .nav-item.show .nav-link,
.navbar .navbar-nav .nav-item.show .nav-link:hover,
.navbar .navbar-nav .nav-item.show .nav-link:focus {
  color: #ffffff;
  background-color: #ec2125;
  font-family: 'Russo One', sans-serif;
}
.navbar .navbar-toggle {
  border-color: #ec2125;
}
.navbar .navbar-toggle:hover,
.navbar .navbar-toggle:focus {
  background-color: #ec2125;

}
.navbar .navbar-toggle .navbar-toggler-icon {
}
.navbar .navbar-collapse,
.navbar .navbar-form {
  border-color: #ffffff;
  font-size: 25px;

  font-family: 'Cuprum', sans-serif;

}
.navbar .navbar-link {
  color: #ffffff;
}
.navbar .navbar-link:hover {
  color: #ffffff;
}

@media (max-width: 575px) {
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ffffff;
  }
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #ffffff;
  }
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #ffffff;
    background-color: #ec2125;
  }
}

@media (max-width: 767px) {
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ffffff;
  }
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #ffffff;
  }
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #ffffff;
    background-color: #ec2125;
  }
}

@media (max-width: 991px) {
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ffffff;
  }
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #ffffff;
  }
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #ffffff;
    background-color: #ec2125;
  }
}

@media (max-width: 1199px) {
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ffffff;
  }
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #ffffff;
  }
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #ffffff;
    background-color: #ec2125;
  }
}

.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item {
  color: #ffffff;
}
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:hover,
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:focus {
  color: #ffffff;
}
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item.active {
  color: #ffffff;
  background-color: #ec2125;
}

.navbar-nav > li{
  padding-left:15px;
  padding-right:15px;
  margin-left: 5px;
  margin-right: 5px;
}



</style>
