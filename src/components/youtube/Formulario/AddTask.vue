<template>
 <form @submit="onSubmit">
   
    <div class="form-group col-md-6">
      <label for="text">Title</label>
      <input 
            type="text" 
            class="form-control" 
            id="text"
            v-model="text" 
            placeholder="add text">
    </div>

    <div class="form-group col-md-6">
      <label for="day">day</label>
      <input 
            type="text" 
            class="form-control" 
            id="day"
            v-model="day" 
            placeholder="add day">
    </div>

    <div class="form-group">
        <div class="form-check">
        <label class="form-check-label" for="reminder">Set reminder   
        <input 
            class="form-check-input" 
            type="checkbox" 
            id="reminder"
            v-model="reminder">            
        </label>
        </div>
    </div>

  <button type="submit" class="btn btn-primary btn-sm">Guardar</button>

</form>



</template>

<script>
export default {
    name:"AddTask",
    data() {
        return {
            text: '',
            day: '',
            reminder: false
        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault()

            if(!this.text){
                alert('agregar tarea')
                return
            }

            const newTask = {
                id: Math.floor(Math.random() * 100000),
                text: this.text,
                day: this.day,
                reminder: this.reminder
            }

            //console.log(newTask)
            this.$emit('add-task', newTask)

            this.text=''
            this.day=''
            this.reminder=''

            

        }
    },
}


</script>

<style>

</style>