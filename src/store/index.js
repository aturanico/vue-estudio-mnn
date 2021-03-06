import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    addTitle: process.env.VUE_APP_TITLE,
    search: null,
    tasks: [
      {
          id:1,
          title: "Wake up",
          done: false,
          dueDate: "2021-04-21"
      },
      {
          id:2,
          title: "get banana",
          done: false,
          dueDate: "2021-04-23"
      },
       {
          id:3,
          title: "eat banana",
          done: false,
          dueDate: null
      },
    ],
    snackbar: {
          show: false,
          text: ''                                                                                                                                                                                                                  
    },
    sorting: false
    
  },
  mutations: {   
    setSearch(state, value){
      state.search = value
    },
    addTask(state, newTaskTitle){
      let newTask = {
          id:  Date.now(),
          title: newTaskTitle,
          done: false
      }
      state.tasks.push(newTask)     
    },
    doneTask(state, id){
      let task = state.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },
    updateTask(state, payload){
      //console.log('load ' + payload.title)
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.title = payload.title
    },
    updateTaskDuedate(state, payload){
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.dueDate = payload.dueDate
    },
    setTasks(state, tasks){
      state.tasks = tasks
    },
    deleteTask(state, id){
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    snackbar(state, text){
      let timeout= 0
      if(state.snackbar.show){
        state.snackbar.show = false
        timeout = 300
      }
      setTimeout(() => {
        state.snackbar.show = true
        state.snackbar.text = text
      }, timeout)
    },
    hideSnackbar(state){
      state.snackbar.show = false
    },
    toggleSorting(state){
      state.sorting = !state.sorting
    }
  },
  actions: {
    addTask({ commit }, newTaskTitle){
      commit('addTask', newTaskTitle)
      commit('snackbar', 'Tarea Agregada')
    },
    updateTask({ commit }, payload){
      commit('updateTask', payload)
      commit('snackbar', 'Tarea Editada')
    },
    updateTaskDuedate({ commit }, payload){
      commit('updateTaskDuedate', payload)
      commit('snackbar', 'Dia actualizado')
    },
    deleteTask({ commit}, id){
      commit('deleteTask', id)
      commit('snackbar', 'Tarea Eliminada')
    }

  },
  getters:{
    tasksFiltered(state){
      if(!state.search){
        return state.tasks
      }
      return state.tasks.filter(task =>
        task.title.toLowerCase().includes(state.search.toLowerCase())
        )
    }
  },
  modules: {},
});
