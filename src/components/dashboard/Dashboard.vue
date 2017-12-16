<template>
  <div>
  <b-container fluid>
    <b-row>
      <b-col cols="1">
      </b-col>
      <b-col cols="8" class="elo">
        <task-input v-bind:items="items"></task-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="1">
        <leftmenu></leftmenu>
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
                      <button type="button" class="btn btn-primary" v-on:click="setInactive(item)">Done</button>
                    </b-col>
                  </b-row>

                </b-container>


              </div>
          </div>
      </b-col>
      <b-col col></b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
import DashBoardNav from './dashboardnav/DashBoardNav.vue'
import Menu from './menu/Menu.vue'

import TaskInput from './taskinput/TaskInput.vue'

export default {
  components: {
    TaskInput,
    'dashboard-nav': DashBoardNav,
    'task-input': TaskInput,
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

<style>
  body {
    background: #d9d9d9;
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

  .elo {
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 1%;
  }

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
</style>
