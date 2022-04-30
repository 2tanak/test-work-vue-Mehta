<template>
  <div
    class="row price mr-auto ml-auto"
    v-for="(item, index) in data"
    :key="index"
  >
    <div
      class="col-md-7 d-flex flex-column justify-content-around align-items-start"
    >
      <h5 class="card-title">{{ item.type }}</h5>

      <p class="card-text">{{ item.price }}$</p>
    </div>
    <div class="col-md-5 d-flex align-items-start justify-content-start">
      <img
        style="width: 80%"
        class="auto align-self-center"
        src="@/assets/img/auto.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultBlock",

  data() {
    return {};
  },
  props: {
    data: {
      type: [],
    },
  },
};
</script>
<style scope="less">
.card-title {
  font-weight: bold;
  font-size: 25px;
}
.card-text {
  font-weight: normal;
  font-size: 20px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #78a1bb;
}

.price {
  padding: 20px 0;
  width: 80%;
  background: #fff;
  border-radius: 20px;
  margin-bottom: 20px;
}
</style>
