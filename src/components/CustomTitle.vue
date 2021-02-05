<template>
  <div>
    <h1>{{ titleText }}</h1>
  </div>
</template>

<script>
export default {
  name: "CustomTitle",
  props: ["titleText"],
};
</script>