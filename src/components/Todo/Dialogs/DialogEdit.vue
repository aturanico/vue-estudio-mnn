<template>
    <div class="dialog">
       <v-dialog
        :value= true
        persistent
        max-width="290"
       >
      
        <v-card>
            <v-card-title class="headline">
            Editar Tarea
            </v-card-title>
            <v-card-text> 
                Titulo de tarea
                <v-text-field 
                    v-model="taskTitle"
                    @keyup.enter="saveTask"    
                />
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                @click="$emit('close')"
                text                
            >
                Cancelar
            </v-btn>
            <v-btn
                @click="saveTask"
                :disabled="taskTitleInvalid"
                color="red darken-1"
                text
                :task="task"             
            >
                Guardar
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>

    </div>
</template>


<script>

export default {
    name:"DialogEdit",
    props: ['task'],
    data() {
        return {
            taskTitle: null
        }
    },
    computed:{
        taskTitleInvalid(){
            return !this.taskTitle || this.taskTitle === this.task.title
        }
    },
    methods: {
        saveTask(){
            if(!this.taskTitleInvalid){
                let payload = {
                    id: this.task.id,
                    title: this.taskTitle
                }
                this.$store.dispatch('updateTask', payload)
                this.$emit('close')
            }
        }
    },
    mounted() {
        this.taskTitle = this.task.title
    },
}
</script>
