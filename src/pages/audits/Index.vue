<template>
    <v-container>
        <the-crud resource="audit" />
    </v-container>
</template>

<script>
import TheCrud from '../../plugins/crud/components/TheCrud'
export default {
  name: 'Index',
  components: { TheCrud }
}
</script>

<style scoped>

</style>
