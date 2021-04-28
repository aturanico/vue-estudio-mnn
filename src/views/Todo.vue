<template>
   <div class="todo">
       <field-add-task/>
       <list-task  v-if="$store.state.tasks.length" />
       <no-task v-else />

       <button-done-sorting
        v-if="$store.state.sorting"
       />
  </div>
</template>

<script>
export default {
    name: "Todo",
    components: {
        'field-add-task': require('@/components/Todo/FieldAddTask.vue').default,
        'list-task': require('@/components/Todo/ListTask.vue').default,
        'no-task' : require('@/components/Todo/NoTask.vue').default,
        'button-done-sorting': require('@/components/Todo/Dialogs/ButtonDoneSorting.vue').default
    }
}
</script>


