<template>
  <header>
  <div class='container'>
    <figure>
	<div class='logo'>
      <img src="../assets/img/xing.png" alt="">
	  FastService
	  </div>
    </figure>
	<div class="header-content">
	<h2>Delivery cost</h2>
	<h3>Enter name of the city to count delivery cost</h3>
	</div>
  </div>
  


  </header>
</template>

<script>



export default {
  name: 'GameHeader',
  components: {
   
  },

 
};
</script>
<style scope="less">
/* Delivery cost */
.header-content{
	margin-top:50px;
}
.logo{
font-weight: bold;
font-size:15px;
}
h2{
/* Delivery cost */
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 48px;
color: #283044;


}
h3{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
color: rgba(40, 48, 68, 0.5);
font-size:15px!important;

}

</style>