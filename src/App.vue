<template>
  <v-app id="inspire">
    <!-- navigation   -->
    
    <v-navigation-drawer
      v-model="drawer"
      :mobile-breakpoint="768"
      app
    >
     <v-img
        class="pa-4 pt-7"
        src="mountains.jpg"
        height="170"
         gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
     >
      <v-avatar size="70" class="mb-2">
      <img
        src="logok.png"
        alt="log"        
      >
      </v-avatar>
      <div class="white--text text-subtitle-1 font_weight-bold">
          Kimunn
        </div>
      <div class="white--text text-subtitle-2">SPA</div>
    
     
     
     </v-img>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- fin de navigation -->

    <v-app-bar
      app
      color="primary"
      dark
      src="mountains.jpg"
      prominent
      height="170"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="header-container pt-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer">            
          </v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search />
        </v-row>
        <v-row>
          <v-app-bar-title class="ml-4">
            {{  $store.state.addTitle }}
          </v-app-bar-title>
        </v-row>
        <v-row>
          <live-date-time />
        </v-row>
      </v-container>

          
     
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <Snackbar/>
    </v-main>
  </v-app>
</template>

<script>
  import Snackbar from './components/Mensajes/Snackbar.vue'
  export default {
    name:'App',
    data() {
      return {
        drawer: null,
        items: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard', to:'/' },
            { title: 'Todo', icon: 'mdi-format-list-checks', to:'/todo'},
            { title: 'About', icon: 'mdi-help-box', to:'/about' },
            { title: 'Layout2', icon: 'mdi-creation', to:'/youtube'},
            { title: 'Layout', icon:'mdi-heard', to:'/layout'}
          ]    
        }
    },
    components: {
        Snackbar,
        'search': require('@/components/Tools/Search.vue').default,
        'live-date-time': require('@/components/Tools/LiveDateTime.vue').default
    }
    

  }
</script>

<style lang="sass">
  .header-container
    max-width: nono !important
  
</style>