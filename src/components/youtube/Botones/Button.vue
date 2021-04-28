<template>
  <div class="button">
      <button @click="tocaBoton()" :style="{background: color}"  class="btn">{{text}}</button>
  </div>
</template>

<script>
export default {
  name:"Button",
  props:{
    text: String,
    color: String
  },
  methods: {
     tocaBoton(){
       this.$emit('btn-click')
    }
  }
}

</script>

<style>
  .btn{
    border: 1px solid red;
    padding: 10px;
    margin: 10px;
    width: 120px;
  }

</style>