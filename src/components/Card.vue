<template>
  <div class="card w-25">
    <div class="box-image">
      <img class="" :src="image" alt="Card image cap" />
    </div>
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

<style lang="scss" scoped>
.card {
  width: calc(100% / 4);
  height: 400px;
  .box-image {
    width: 100%;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>