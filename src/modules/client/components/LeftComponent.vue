<template>
  <div class="content-left-items">
    <div class="row">
      <div class="col-md-6">
        <ul class="list-group list-group-flush">
          <li
            v-for="(sity, index) in showCountry"
            class="list-group-item"
            :key="index"
          >
            {{ sity }}
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <ul class="list-group list-group-flush">
          <li
            v-for="(sity, index) in showCountry2"
            class="list-group-item"
            :key="index"
          >
            {{ sity }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftBlock",

  data() {
    return {};
  },
  props: {
    country: {
      type: [],
    },
  },
  computed: {
    showCountry() {
      return this.country.slice(0, 6);
    },
    showCountry2() {
      return this.country.slice(6, 12);
    },
  },
};
</script>
