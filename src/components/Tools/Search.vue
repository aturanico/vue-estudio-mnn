<template>
    <div class="search">
        <v-text-field
            :value="$store.state.search"
            @input="$store.commit('setSearch', $event)"
            @focus="searchclosed = false"
            @blur="searchclosed = true"
            class="expanding-search mt-1"
            :class="{'closed' : searchclosed && !$store.state.search }"
            prepend-inner-icon="mdi-magnify"
            placeholder="Buscar"
            filled
            dense
          ></v-text-field>
    </div>
  
</template>

<script>
export default {
    data() {
        return {
            
            searchclosed: true
        }
    },
}
</script>

<style lang="sass">
    .expanding-search
        transition: max-width 0.3s
        .v-input__slot
            cursor: pointer !important
            &:before, &:after
                border-color: transparent !important
        &.closed
            max-width: 45px
            .v-input__slot
                background: transparent !important

</style>