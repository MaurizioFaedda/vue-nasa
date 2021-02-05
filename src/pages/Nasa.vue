<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="d-flex flex-wrap justify-content-center">
          <Form @newSearch="searchMedia" />
          <div class="d-flex flex-wrap justify-content-center">
            <Card
              v-for="(media, index) in NasaMedia"
              :key="index"
              :title="media[0].data.title"
              :image="media.links[0].href"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./../components/Card.vue";
import Form from "./../components/Form.vue";
export default {
  name: "Nasa",
  components: {
    Card,
    Form,
  },
  data() {
    return {
      NasaMedia: {},
    };
  },
  methods: {
    searchMedia(query) {
      const self = this;
      this.axios
        .get(this.base_url + query + "&media_type=image")
        .then((response) => {
          self.NasaMedia = response.data.collection.items;
        });
    },
  },
};
</script>