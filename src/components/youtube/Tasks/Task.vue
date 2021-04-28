<template>
    <div @click="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <div>aqui</div>
        <h3>{{ task.text }}</h3>
        <p>{{task.id}} - {{task.day}}</p>
        <v-icon 
            color="red"
            @click="$emit('delete-task', id)"    
        >mdi-heart
        </v-icon>
    </div>
   
</template>

<script>
export default {
    name:"task",
    props:{
        task: Object
    },
    
    

   

}
</script>

<style scope>
    .task{
        background: #f4f4f4;
        border: 1px solid black;
        border-radius: 0px 15px 0px 15px;
        margin: 5px;
        padding: 10px 5px;
        cursor: poiuter;
    }
    .reminder{
        color:hotpink;
        border-left: 5px solid green;
    }
    h3{
        display:flex;
        align-items: center;
        justify-content: space-between;
    }

</style>