<template>
  <form>
    <div class="form-group">
      <input class="form-control taskInput" v-model="task_string"
             v-on:keyup.enter="onEnterClick"
             placeholder="Enter task description">
    </div>
  </form>
</template>

<script>
  export default {
    name: 'TaskInput',
    props: ['items'],
    data () {
      return {
        task_string: ''
      }
    },
    methods: {
      onEnterClick: function () {
        this.$http.post('http://skive-backend.herokuapp.com/tasks', {'data': this.task_string}).then(response => {
          this.items.push(response.data)
        }, response => {
        })
      }
    }
  }
</script>

<style>
  .taskInput {
    box-shadow: 0 40px 50px rgba(0,0,0,0.25);
    outline: none;
    padding: 20px;
    border-radius: 4px;
    font-family: 'Russo One', sans-serif;
  }
</style>
