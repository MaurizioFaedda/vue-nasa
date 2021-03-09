<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :class="classList"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>
<script>
export default {
  name: "Input",
  props: ["type", "placeholder", "classList", "value"],
};
</script>