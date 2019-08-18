<template>
<div class="container-fluid px-0 mx-0">
<div class="bg-1 align_end">
<div class="col-lg-6  offset-lg-3">
    <div class="row">
        <div class="col-lg-6 col-md-12 px-0">
          <div class="btn1">
            <span class="margintop">
            Hire Skilled People
            </span>
            <div class="btn btn_new1">
              Post a Job
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 px-0">
          <div class="btn2">
            <span class="margintop">
            Discover New Opportunuties
            </span>
            <div class="btn btn_new2">
              Be a Partner
            </div>
          </div>
        </div>
    </div>
</div>
</div>
<div class="bg-2">
  <div class="row">
    <div class="col-md-3 offset-md-9">
      <div class="imageSection">
        <div class="image1">
        </div>
        <div class="image2"></div>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.image1{
  background-image: URL('../../assets/images/appstore.png');
  width: 200px;
  height: 70px;
  background-repeat: no-repeat;
  margin-top: 220px;

}
.image2{
  background-image: url('../../assets/images/googleplay.png');
  width: 200px;
  height: 70px;
  background-repeat: no-repeat;
  margin-top: 10px;
}
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
.bg-1{
  background-image: url('../../assets/images/main1.png');
  color:white;
  width: 100%;
  height: 60vh;
  margin-bottom: 80px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
text-align: center;
box-sizing: border-box;
}
.bg-2{
  width: 100%;
  height: 60vh;
  background-repeat: no-repeat;
  background-image: url('../../assets/images/mobileApp.png');
  background-size: 100% 100%;
  box-sizing: border-box;
}
.align_end{
 padding-top: 46vh; 
}
.btn1{
  background-color: #00A651;
  height: 14vh;
  padding-top: 5px;
  box-sizing: border-box;
}
.btn2{
  background-color: #004A80;
  height: 14vh;
  padding-top: 5px;
}
.btn_new1{
  background-color: #070849;
  width: 240px;
font-weight: bold;
display:block;
margin-left: auto;
margin-right: auto;
margin-top: 10px;
}
.btn_new2{
  background-color: white;
  color:black;
  width: 240px;
font-weight: bold;
margin-top: 10px;
display:block;
margin-left: auto;
margin-right: auto;
}
.margintop{
  padding-top:10px;
}
</style>
