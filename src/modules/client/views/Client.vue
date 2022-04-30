<template>
  <background />
  <div>
    <header-block :show-menu-button="false" />
     <base-block/>
   
  </div>
</template>

<script>
import "@/assets/css/style.less";
import HeaderBlock from "@/components/HeaderBlock";

import BaseBlock from "../components/BaseBlock";
import ImgBlock from "../components/ImgBlock.vue";
export default {
  name: "Client",
  components: {
    HeaderBlock,
    BaseBlock
  },
  
 
  
  
};
</script>
