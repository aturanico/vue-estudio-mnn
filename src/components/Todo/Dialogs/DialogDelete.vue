<template>
    <div class="dialog">
       <v-dialog
        :value= true
        persistent
        max-width="290"
       >
      
        <v-card>
            <v-card-title class="headline">
            Eliminar Tarea
            </v-card-title>
            <v-card-text>¿Esta seguro de eliminar tarea?</v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                @click="$emit('close')"
                text                
            >
                No
            </v-btn>
            <v-btn
                @click="$store.dispatch('deleteTask', task.id)"
                color="red darken-1"
                text
                :task="task"             
            >
                Si
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>

    </div>
</template>


<script>

export default {
    name:"DeleteDialog",
    props: ['task']
}
</script>
