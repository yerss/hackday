<template>
  <div>
    <p> {{ marker_data.address }} </p>
    <button @click=""> View </button>
  </div>
</template>

<script>
export default {
  name: 'marker-view',
  props: {
    marker_data: {
      type: Object,
      default () {
        return {}
      },
    }
  },
  methods: {
  },
}
</script>

<style scoped>

</style>
