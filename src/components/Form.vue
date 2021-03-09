<template>
  <form
    @submit.prevent="search"
    class="form-inline d-flex justify-content-center my-5"
  >
    <input
      id="search-bar"
      type="text"
      class="py-1"
      placeholder="search"
      classList="form-control"
      :value="query"
      @input="query = $event.target.value"
    />
    <button type="submit" value="search" class="btn btn-primary py-1 ml-2">
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>
<script>
import Input from "./Input.vue";
export default {
  name: "Form",
  component: {
    Input,
  },
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
<style lang="scss" scoped>
#search-bar {
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: #0062cc;
  &:focus {
    outline: #0062cc auto 1px;
  }
}
</style>