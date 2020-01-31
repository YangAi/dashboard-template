<template>
    <v-container>
        <the-crud resource="message" />
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
