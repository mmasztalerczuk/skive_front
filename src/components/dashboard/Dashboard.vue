<template>
  <div>
  <b-container fluid>
    <b-row>
      <b-col cols="1">
      </b-col>
      <b-col cols="8" class="elo">
        <form>
          <div class="form-group">
            <input class="form-control myinput" v-model="task_string" v-on:keyup.enter="onEnterClick"
                   placeholder="Enter task description">
          </div>
        </form>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="1">
                <b-container class="bv-example-row" fluid>
          <b-row class="top-buffer">
            <b-col cols="6" >
              <button type="button" class="btn menuleft btn-block"><icon name="inbox" scale="2"></icon></button>
              </b-col>
            <b-col cols="6"></b-col>
          </b-row>
          <b-row class="top-buffer">
            <b-col cols="6" ><button type="button" class="btn menuleft btn-block" ><icon name="list" scale="2"></icon></button></b-col>
            <b-col cols="6"></b-col>
          </b-row>
          <b-row class="top-buffer">
            <b-col cols="6" ><button type="button" class="btn menuleft btn-block" ><icon name="folder-open" scale="2"></icon></button></b-col>
            <b-col cols="6"></b-col>
          </b-row>
          <b-row class="top-buffer">
            <b-col cols="6" ><button type="button" class="btn menuleft btn-block"><icon name="calendar" scale="2"></icon></button></b-col>
            <b-col cols="6"></b-col>
          </b-row>
        </b-container>
      </b-col>
      <b-col cols="4" class="elo2 mytable">
          <div class="form-group" v-for="item in items.filter(active)" v-bind:key="item.id">
            <h5>
              <b-badge variant="primary" v-for="hash in item.hash" :key="hash">
                {{ hash }}
              </b-badge>
            </h5>
              <div class="myinput2">
                <b-container class="bv-example-row" fluid>
                  <b-row>
                    <b-col cols="2">
                      <button type="button" class="btn btn-info btn-circle btn-lg"></button>
                    </b-col>
                    <b-col cols="8">
                      <b-row>
                        <b-col cols="12">
                          {{item.description}}
                        </b-col>
                      </b-row>
                      <b-row class="smalltxt">
                        <b-col cols="12">
                          {{item.description}}
                        </b-col>
                      </b-row>
                    </b-col>
                    <b-col cols="2">
                      <button type="button" class="btn btn-primary">Done</button>
                    </b-col>
                  </b-row>

                </b-container>


              </div>
         <!--     <b-form-input class="myinput2" @click.native="tiger(item)" @keydown.native="update_task(item)" :value="item.description"></b-form-input>
-->
          </div>
<!--
          <div class="form-group" v-for="item in items.filter(inactive)" v-bind:key="item.id ">
            <b-input-group>
              <b-input-group-button slot="left">
                <b-dropdown variant="success" right split text="Undone">
                  <b-dropdown-item>Item 1</b-dropdown-item>
\                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
              </b-input-group-button>
              <b-form-input class="myinput2" :value="item.description"></b-form-input>
              <b-input-group-button slot="right">
                <b-btn variant="warning">{{ item.project }} </b-btn>
              </b-input-group-button>
            </b-input-group>
          </div> -->
      </b-col>
      <b-col col></b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
import DashBoardNav from './dashboardnav/DashBoardNav.vue'
import Menu from './menu/Menu.vue'
import 'vue-awesome/icons'

export default {
  components: {
    'dashboard-nav': DashBoardNav,
    'leftmenu': Menu
  },

  name: 'DashBoard',
  login: false,
  data () {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      task_string: '',
      fields: {
        actions: {label: ' '},
        description: {label: 'Description', thClass: 'col-11'}
      },
      items: []
    }
  },
  methods: {
    tiger: function (item) {
      item.description = item.data
    },
    update_task (item) {
      if (event.which === 13) {
        let taskId = item['id']
        this.$http.put('http://skive-backend.herokuapp.com/tasks/' + taskId, { 'data': event.target.value }).then(response => {
          this.items.push(response.data)
          let id = this.items.indexOf(item)
          this.items.splice(id, 1)
        }, response => {})
      }
    },
    onEnterClick: function () {
      this.$http.post('http://skive-backend.herokuapp.com/tasks', { 'data': this.task_string }).then(response => {
        this.items.push(response.data)
        // alert(response.data)
      }, response => {
      })
    },
    setInactive (item) {
      let taskId = item['id']
      this.$http.put('http://skive-backend.herokuapp.com/tasks/' + taskId, { 'data': item.data, 'arguments': { 'active': false } }).then(response => {
        item.active = false
      }, response => {
      })
    },
    active (item) {
      return item.active
    },
    inactive (item) {
      return !item.active
    }
  },
  mounted: function () {
    this.$http.get('http://skive-backend.herokuapp.com/tasks').then(response => {
      var array = JSON.parse(response.data)
      for (let s of array) {
        this.items.push(s)
      }
    }, response => {})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body{
    background: #d9d9d9;
  }

  .myinput {
    box-shadow: 0 40px 50px rgba(0,0,0,0.25);
    outline: none;
    padding: 20px;
    border-radius: 4px;
    font-family: 'Russo One', sans-serif;
  }

  .myinput2 {
    outline: none;
    font-family: 'Russo One', sans-serif;
    outline: none;
    padding: 23px;
    border-radius: 4px;
    font-family: 'Russo One', sans-serif;
    background-color: #ffffff;
  }

  .mytable {


  }

  .menuleft {
    background: white;
    padding: 5px;
    border-radius: 4px;
  }
  .elo {
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 1%;
  }

  .top-buffer { margin-top:5px; }

  .btn-circle {
  height: 45px;
  width: 45px;
  border-radius: 50%;
}

  .container-fluid {

    padding-left: 0px;

}

  .elo2 {
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 1%;
  }
  .flip-list-move {
    transition: transform 1s;
  }
</style>
