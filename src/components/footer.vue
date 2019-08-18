<template>
    <div class="fixed-bottom">
        <!--[ header ] -->
  <!--[ container ] -->

  <!--[ footer ] -->
  <div id="row">
    <div class="footer col-md-6 offset-md-3">
        <div class="row pt-3">
        <div class="col-md-6 col-sm-6 col-xs-4 px-2 text-left">
              <div class="sec-bottom">&copy; 2017 Realtor. All Rights Reserved.</div>
            </div>
            <div class="col-md-6  col-sm-6 text-left px-0 row">
                <div class="col-md-1 col-sm-1 text-right px-0">
                </div>
                <div class="col-md-5 col-sm-7 px-0 text-right text-sm-left">
                    <a class="textmodrate" href="js:">Privacy Policy</a>
                </div>
                <div class="col-md-5 col-sm-3 px-0 text-right ">
                    <a class="textmodrate" href="js:">Terms of Use</a>
                </div>
            </div>
            </div>
        </div>
    </div>
  </div>


</template>


<style>
    .textmodrate{
      color:#8297a8 !important;
      transition: color 0.3s ease;
      font-size: 14px;
    }
    .textmodrate:hover{
      color:#42ebff !important;
      text-decoration: none;
    }
    .sec-bottom{
      color:#8297a8 !important;
    }
html {
  min-height: 100%;
  position: relative;
}
html body {
  margin-bottom: 100px;
}
.footer {
  bottom: 0;
  width: 100%;
  position: absolute;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 5px 5px 0px 0px;
}
@media (min-width: 901px) and (max-width: 992px) {
  .footer{
    width: 40%;
    margin-left: 30%;
    font-size: 14px;
  }
}

@media (min-width: 768px) and (max-width: 900px) { 
  .footer{
    font-size: 10px;
  }
  .textmodrate{
    font-size: 12px;
  }
}
@media (min-width: 993px) and (max-width: 1400px) {
.footer{
    width: 40%;
    margin-left: 30%;
    font-size: 14px;
  }
}

</style>