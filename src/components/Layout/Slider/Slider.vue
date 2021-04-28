<template>
  <v-carousel hide-delimiters cycle>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >

      <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            {{ item.titulo }} Slide
          </div>
        </v-row>
    
    
    
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'laptop3.jpg',
            titulo: 'lo que sea'
          },
          {
            src: 'manipulation.jpg',
            titulo: 'edwin'
          },
          {
            src: 'mountains-2.jpg',
            titulo: 'sigue'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            titulo: 'trabajando'
          },
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>

<style>

</style>