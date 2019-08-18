<template>
<div class="container-fluid mb-5 mx-0 px-0">
 <carousel :autoplay="true" :nav="false" :dots="false">

    <img src="https://placeimg.com/300/200/any?1">

    <img src="https://placeimg.com/300/200/any?2">

    <img src="https://placeimg.com/300/200/any?3">

    <img src="https://placeimg.com/300/200/any?4">
</carousel>
<div class="prev1">
	<i class="fa fa-arrow-circle-left" style="font-size:40px; margin-top:120px; color: white; cursor:pointer"></i>
</div>
<div class="next1">
	
	<i class="fa fa-arrow-circle-right" style="font-size:40px; margin-top:120px; color: white; cursor:pointer"	></i>
</div>
</div>
</template>

<script>
  import carousel from 'vue-owl-carousel'

  export default {
    name: 'App',
    components: {
     carousel 
    }
  }
</script>
<style>
.owl-prev{
	position: fixed;
	left: 0px;
	bottom: 100px;
}
.owl-item{
	border:5px solid white;
}
.prev1,.next1{
	position: absolute;
	width: 40px;
	height: 295px;
	background-color: rgb(60, 60, 60);
	bottom: 105px;
	z-index: 1;
}
.next1{
	right: 0px;
}
</style>