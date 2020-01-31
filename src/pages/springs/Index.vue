<template>
    <v-container>
        <the-crud resource="spring">
            <template v-slot:edit.dialog.title="{ form }">
                Edit {{ _.isUndefined(form) ? '' : form.name }}
            </template>
            <template v-slot:detail.title="{ detail }">
                {{ detail.name }}
                <v-chip small color="primary" class="tw-ml-2">{{ _.capitalize(detail.status) }}</v-chip>
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

<style lang="scss" scoped>

</style>
