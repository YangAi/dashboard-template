<template>
    <v-container>
        <the-crud resource="record">
            <template v-slot:field.action.append="{ item }">
            </template>
            <template v-slot:detail.actions="{ detail }">
                <v-btn color="primary">action slot</v-btn>
            </template>
        </the-crud>
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
