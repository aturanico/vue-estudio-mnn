<template>
  <div>
      <div v-if="showAddTask">
        <AddTask @add-task="addTask" />
      </div>
      <Header  
        @toggle-add-task="toggleAddTask"
        title="Tarea"
        :showAddTask="showAddTask"
         />
      <Tasks 
        @toggle-reminder="toggleReminder" 
        @delete-task="deleteTask" 
        :tasks="tasks" />  

      <Footer />    
  </div>
</template>

<script>
import Header from '@/components/youtube/Header/Header.vue'
import Tasks from '@/components/youtube/Tasks/Tasks.vue'
import AddTask from '@/components/youtube/Formulario/AddTask.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    name:"youtube",
    data() {
        return {
            tasks: [],
            showAddTask: false
        }
    },
    methods:{
        deleteTask(id){
            if(confirm('Esta seguro de borrar')){
            //console.log('task', id)
            this.tasks = this.tasks.filter((task)=>task.id !== id)
            }
            
        },
        toggleReminder(id) {
            //console.log(id)
            this.tasks = this.tasks.map((task) => 
                 task.id === id ? {...task, reminder : !task.reminder } : task
             )
        },
        addTask(task){
            this.tasks = [...this.tasks, task]
        },
        toggleAddTask(){
            this.showAddTask = !this.showAddTask
        }
        
    },
    created() {
        this.tasks = [
            {
                id:1,
                text: "Lorem ipsum dolor sit.",
                day: "April 21st a 4:50",
                reminder: true,
            },
            {
                id:2,
                text: "Lorem dsf.",
                day: "April 23st a 4:50",
                reminder: false,
            },
            {
                id:3,
                text: "Lorem fhdfgh",
                day: "April 25st a 4:50",
                reminder: true,
            },
        ]
    },    
    components:{
        Header,
        Tasks,
        AddTask,
        Footer
        
    },
    



}
</script>

<style>

</style>