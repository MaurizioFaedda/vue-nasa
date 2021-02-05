<template>
  <form
    @submit.prevent="search"
    class="form-inline d-flex justify-content-center"
  >
    <input
      type="text"
      placeholder="search"
      class="form-control"
      v-model="query"
    />
    <input type="submit" value="search" class="btn btn-primary ml-2" />
  </form>
</template>
<script>
export default {
  name: "Form",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    search() {
      this.$emit("newSearch", this.query);
    },
  },
};
</script>