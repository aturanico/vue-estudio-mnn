<template>
  <div class="home">
    <v-container  class="grey lighten-5">
      <v-row dense>
        <v-col
          cols="12"
          sm="12"
        >
          <carousel />
        </v-col>
      </v-row>

       <v-row>
        <v-col>
        coño
        
         </v-col>   
      </v-row>            

     
      <footer-pie />
  
    </v-container>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  components: {
    'carousel': require('@/components/Carrucel/Carousel.vue').default,
    'footer-pie': require('@/components/Footer/Footer.vue').default,
    //'card-p': require('@/components/Tarjeta/Card.vue').default

  },
};
</script>
