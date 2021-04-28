<template>
  <div>
      {{title}}
      <Button 
        @btn-click="$emit('toggle-add-task')" 
        :text="showAddTask ? 'Cerrar' : 'Nueva tarea'" 
        :color="showAddTask ? 'red' : 'blue'" />
  </div>
</template>

<script>
import Button from '@/components/youtube/Botones/Button.vue';

export default {
    name:"Header",
    props:{
        title: {
            type: String,
            default: "Hola Edwin Trabaja E"
        },
        showAddTask: Boolean
    },
    components:{
        Button
    },
    emits:['toggle-task']

}
</script>

<style>

</style>