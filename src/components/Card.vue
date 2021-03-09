<template>
  <div class="card w-25">
    <div class="box-image">
      <img class="" :src="image" alt="Card image cap" />
    </div>
    <div class="card-body">
      <h5 class="card-title">
        {{ title }}
      </h5>
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
  width: calc(100% / 3);
  height: 400px;
  margin: 30px;
  border: none;
  .box-image {
    width: 100%;
    height: 300px;
    transition: transform 0.2s;
    border-radius: 4px;
    &:hover {
      transform: scale(1.4);
      z-index: 1;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      object-fit: cover;
    }
  }
  .card-title {
    font-family: "Courier New", Courier, monospace;
  }
}
</style>