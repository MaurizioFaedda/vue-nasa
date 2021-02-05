<template>
  <div class="card" style="width: 18rem">
    <img class="card-img-top" :src="image" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">
        {{ title }}
      </h5>
      <p class="card-text">
        <em></em>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "image"],
};
</script>