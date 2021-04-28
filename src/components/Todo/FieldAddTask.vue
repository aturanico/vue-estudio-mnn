<template>
    <div class="FieldAddTask">
        <v-text-field
            v-model="newTaskTitle"
            @click:append="addTask"
            @keyup.enter="addTask"
            outlined
            label="Nueva Tarea"
            class="pa-3"
            hide-details
            clearable
        >

            <template v-slot:append>
                <v-icon
                    @click="addTask"
                    color="primary"
                    :disabled="fieldInvalid"
                >
                    mdi-plus
                </v-icon>
            </template>

        </v-text-field>
    </div>  
</template>

<script>
export default {
    name:"FieldAddTask",
    data() {
        return {
            newTaskTitle: ''
        }
    },    
    computed: {
        fieldInvalid(){
            return !this.newTaskTitle
        }
    },
    methods: {
        addTask(){
            if(!this.fieldInvalid){
                this.$store.dispatch('addTask', this.newTaskTitle)
                this.newTaskTitle = ''
            }
        }
    }
}
</script>

