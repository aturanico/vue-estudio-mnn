<template>
  <div class="taskmenu">
   <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
              color="primary"
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click="handleClick(index)"
              >
                <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
    </v-menu>

     <dialog-edit 
          v-if="dialogs.edit" 
          @close="dialogs.edit = false"
          :task="task"
    />

     <dialog-dueDate
          v-if="dialogs.dueDate" 
          @close="dialogs.dueDate = false"
          :task="task"
    />

    <dialog-delete 
          v-if="dialogs.delete" 
          @close="dialogs.delete = false"
          :task="task"
    />

   </div>
</template>

<script>
export default {
    name: "TaskMenu",
    props: ['task'],
    data() {
        return {
            dialogs: {
                edit: false,
                dueDate: false,
                delete: false
            },
            items: [
                { 
                    title: 'Editar',
                    icon: 'mdi-pencil',
                    click(){
                        this.dialogs.edit = true
                    }
                },
                { 
                    title: 'Fecha',
                    icon: 'mdi-calendar',
                    click(){
                        this.dialogs.dueDate = true
                    }
                },
                { 
                    title: 'Borrar',
                    icon: 'mdi-delete',
                    click(){
                        //console.log('eliminar')
                        this.dialogs.delete = true
                    }
                },
                { 
                    title: 'Clasificación',
                    icon: 'mdi-drag-horizontal-variant',
                    click(){
                        this.$store.commit('toggleSorting')
                    }
                },
            ],
        }
    },
    methods: {
        handleClick(index){
          this.items[index].click.call(this)          
        }
    },
    components:{
         'dialog-edit': require('@/components/Todo/Dialogs/DialogEdit.vue').default,
         'dialog-dueDate': require('@/components/Todo/Dialogs/DialogDueDate.vue').default,
         'dialog-delete': require('@/components/Todo/Dialogs/DialogDelete.vue').default,
    }
}
</script>

