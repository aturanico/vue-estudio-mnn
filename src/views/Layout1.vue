<template>
  <div>
    <v-row>
      <v-col>
          <Slider />
      </v-col>
    </v-row>
     <v-row>
      <v-col
      sm="12"
      md="6"
      >
         <Card />
      </v-col>

       <v-col
      sm="12"
      md="6"
      >
         <Card />
      </v-col>
    </v-row>
    
       <Tarjeta />
       <Footer />
  </div>



 
</template>

<script>
export default {
  name:"Layout",
  components: {
    'Slider': require('@/components/Layout/Slider/Slider.vue').default,
    'Card': require('@/components/Layout/Card.vue').default,
    'Tarjeta': require('@/components/Layout/tarjeda.vue').default,
    'Footer': require('@/components/Footer/Footer.vue').default
  }

}
</script>

<style>

</style>