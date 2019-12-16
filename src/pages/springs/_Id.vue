<template>
    <v-container>
        <v-card>
            <the-detail page :id="$route.params.id" resource="spring" />
        </v-card>
    </v-container>
</template>

<script>
import TheDetail from '../../plugins/crud/components/TheDetail'
export default {
  name: '_Id',
  components: { TheDetail }
}
</script>

<style scoped>

</style>
