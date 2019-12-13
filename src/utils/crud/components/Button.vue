<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-btn
        :class="noMargin ? '' : 'mr-1'"
        :color="color"
        v-bind="$attrs"
        :icon="!dark"
        :fab="dark"
        :dark="dark"
        v-on="on"
        @click="emitClick()"
      >
        <v-icon
          :dark="dark"
          v-if="icon"
        >{{ icon }}</v-icon>
        <template v-if="text">{{ text }}</template>
      </v-btn>
    </template>
    <span>{{ tooltip }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'primary'
    },
    tooltip: {
      type: String
    },
    icon: {
      type: String
    },
    text: {
      type: String
    },
    noMargin: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitClick () {
      this.$emit('clicked')
    }
  }
}
</script>
