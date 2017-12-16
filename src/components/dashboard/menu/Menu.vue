<template>
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
</template>

<script>
  export default {
    name: 'Menu'
  }
</script>

<style>
  .menuleft {
    background: white;
    padding: 5px;
    border-radius: 4px;
  }

  .top-buffer { margin-top:5px; }
</style>
