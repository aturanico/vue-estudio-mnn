<template>
  <div class="duedate">
      <v-dialog
        ref="dialog"
        :value="true"
        :return-value.sync="date"
        persistent
        width="290px"
      >
      <v-date-picker
          v-model="date"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            @click="$emit('close')"
            text
            color="primary"            
          >
            Cancelar
          </v-btn>
          <v-btn
            @click="saveDuedate"
            text
            color="primary"            
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
  </div>
</template>

<script>
export default {
    name:"DialogDue",
    props:['task'],
    data() {
        return {
           date: null
        }
    },
    methods:{
      saveDuedate(){
        let payload = {
          id: this.task.id,
          dueDate: this.date
        }
        this.$store.dispatch('updateTaskDuedate', payload)
        this.$emit('close')
      }                       
    },
    mounted() {
        if(this.task.dueDate){
            this.date = this.task.dueDate
        }
    },
    

}
</script>

<style>

</style>