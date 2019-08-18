<template>
<div class="container-fluid px-0">
<appheader></appheader>
<router-view></router-view>
<appFooter></appFooter>


  <div class="modal fade" tabindex="-1" role="dialog" id="myLogin">
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-section">
       <div class="modal-header text-center text-optimized">
        <h5 class="modal-title">Login</h5>
        <span class="text-changed">Already Registerd</span>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
        <div class="modal-body">
          <div class="form-modal">
            <p class="text-left" style="line-height:1px; color:rgb(60,60,60);margin-bottom:20px;  margin-top:15px; font-size:14px;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;">Please Correct the Following</p>
            <div class="form-group"><input type="text" class="form-control br-1 text-field" placeholder="Username"></div>
            <div class="form-group"><input type="text" class="form-control br-1 text-field" placeholder="Password"></div>
            <div class="row">
              <div class="col-md-6 text-left">
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" value="">Remember Me
                  </label>
                </div>
              </div>
              <div class="col-md-6 text-right"><span class="forgettext" data-dismiss="modal" data-toggle="modal"
                data-target="#myForgot">Forget Your Password</span></div>
            </div>
            
            <!-- <p class="text-center hbar">Sign up <a href="#" data-dismiss="modal" data-toggle="modal"
                data-target="#mySignup">Here</a> &nbsp; | &nbsp; <a href="#" data-dismiss="modal" data-toggle="modal"
                data-target="#myForgot">Forgot</a> Password</p> -->
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-changed btn-block">Login</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal signin -->
    <div class="modal fade" tabindex="-1" role="dialog" id="mySignup">
    <div class="modal-dialog modnew" role="document">
      <div class="modal-content modal-section">
       <div class="modal-header text-center ">
        <h5 class="modal-title title-changed">Create A New Account</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
        <div class="modal-body">
          <div class="form-modal">
            <div class="downward">
              <div class="form-check-inline">
              <input class="form-check-input" style="margin-right:3px;" type="radio" name="gender" id="male" value="male">
              <label class="form-check-label" for="male">Male
              </label>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div class="form-check-inline mb-2" >
              <input class="form-check-input" style="margin-right:3px;" type="radio" name="gender" id="female" value="female">
              <label class="form-check-label" for="female">Female
              </label>
            </div>
            </div>
            <div class="row">
              <div class="col-md-6 form-group">
                <input type="text" class="form-control text-field" placeholder="First Name">
              </div>
              <div class="col-md-6 form-group">
                <input type="text" class="form-control text-field" placeholder="Last Name">
              </div>
            </div>
            
            <div class="row">
              <div class="col-md-6 form-group">
                <input type="text" class="form-control text-field" placeholder="Email Address">
              </div>
              <div class="col-md-6 form-group">
                <input type="text" class="form-control text-field" placeholder="Confirm Email Address">
              </div>
            </div>
            
            <div class="row">
              <div class="col-md-6 form-group">
                <input type="text" class="form-control text-field" placeholder="Password">
              </div>
              <div class="col-md-6 form-group">
                <input type="text" class="form-control text-field" placeholder="Confirm Password">
              </div>
            </div>
            
              <div class="row">
                <div class="col-md">
                      <div class="progress-bar_wrap">
              <div class="progress-bar_item progress-bar_item-1"></div>
              <div class="progress-bar_item progress-bar_item-2"></div>
              <div class="progress-bar_item progress-bar_item-3"></div>
            </div>
            <span class="progress-bar_text"> </span>
                </div>
                <div class="col-md">
                      <div class="progress-bar_wrap">
              <div class="progress-bar_item progress-bar_item-1"></div>
              <div class="progress-bar_item progress-bar_item-2"></div>
              <div class="progress-bar_item progress-bar_item-3"></div>
            </div>
            <span class="progress-bar_text"> </span>
                </div>
              </div>
              <div class="form-check mt-4" >
              <input class="form-check-input" style="margin-right:1px; margin-left:-15px;"  data-toggle="modal" data-target="#largeModal" type="radio" name="agrmnt" id="agrmnt" value="agrmnt">
              <label class="form-check-label" for="agrmnt"> Accept Policy & Terms
              </label>
            </div>
 
           </div>
        </div>
        <div class="modal-footer">
           <button type="button" class="btn btn-changed btn-block">Signup</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal forget pswrd-->
    <div class="modal fade" tabindex="-1" role="dialog" id="myForgot">
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-section">
       <div class="modal-header text-center">
        <h5 class="modal-title">Forget your Password?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
        <div class="modal-body">
          <div class="form-modal">
            <div class="form-group"><input type="text" class="form-control text-field" placeholder="Email ID"></div>
            <div class="form-group"><input type="text" class="form-control text-field" placeholder="Confirm Email ID"></div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-changed btn-block">Send Password</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal-->

  <div class="modal fade" id="largeModal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Policy & Terms</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body" style="font-size:14px; line-height:19px; color:gray">
          <div class="row">
            <div class="col-md-8" style="border-right:1px solid #dad6d6;">
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint nemo unde laboriosam sit eligendi odio, modi tempore incidunt. Sed omnis explicabo veniam labore voluptatem aperiam ratione! Natus, id. Voluptatem quidem atque quaerat reiciendis, deleniti doloribus incidunt eaque perspiciatis similique repudiandae maiores perferendis a temporibus aut quis fugit quod, cum eum exercitationem in enim quibusdam dolorem? Nulla fugit autem odit laudantium, maxime earum, veniam quod molestias ab porro consequuntur adipisci sint illum dolorum vero debitis voluptatibus fuga labore! Reiciendis tenetur, in assumenda et fugiat fuga modi laborum facere tempore necessitatibus dolore ex exercitationem unde a illum officia placeat culpa laudantium repellat. Amet iste repellat quasi culpa facere modi ipsum eius voluptates nulla voluptas impedit vel enim dolorum corrupti accusamus tempore inventore dolorem optio iusto et, quo doloribus. Delectus commodi similique culpa architecto possimus reprehenderit unde laudantium, ea, perspiciatis asperiores dicta impedit sed. Iure explicabo quae placeat sint cum officiis. Quisquam laudantium deleniti sint, facilis tempora dolorum, aliquam veritatis repellendus consequuntur porro non architecto unde fugit rem blanditiis deserunt nisi! Adipisci facere nam illo ducimus, natus perspiciatis tempora alias vero. Nesciunt eius beatae ipsam vitae laudantium dolorem soluta sequi fuga amet quam tenetur itaque optio, recusandae pariatur tempore iusto suscipit incidunt delectus
               </p>
              <br><br><br>
               <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" value="">Option 1
                </label>
              </div>
               <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" value="">Option 2
                </label>
              </div>
               </div>
            <div class="col-md-4" >
              <img style="width:250px;" src="@/assets/images/policy.png" alt="">
            </div>
          </div>
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  



</div>



</template>
<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
export default {
  
  components:{
    appheader:header,
    appFooter:footer,
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:500&display=swap');
.form-modal{
  margin-left: 1px;
}
.modal-body{
  padding: 20px !important;
}
.br-1{
  border-radius: 5px !important; 
  height: 41px !important;
}
.text-optimized{
  padding-bottom:15px !important;
}
.downward{
  margin-top:8px;
  margin-left: -1px;
  margin-bottom: 7px;
}
.form-check-label{
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}
#male, #female{
  margin-top: -5px;
}
.title-changed{
  font-size: 18px !important;
  font-weight: 500;
  margin-top: 4px;
  font-family: Arial, Helvetica, sans-serif;
}
.btn-changed{
  border:1px solid #24b898;
  background-color: transparent;
  color: #24b898;
}
.btn-changed:focus{
  box-shadow: none;
}
.modal-footer{
  border-top: none !important;
}
.forgettext{
  color: #9ac034;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}
.text-changed{
  font-size: 18px;
  font-weight: 500;
}
.modal-footer>button{

}
.hbar>a{
  color: transparent;
  transition: color 0.3s ease;
}
.hbar>a:hover{
  color: #3ad1b0;
  text-decoration: none;
}
.hbar{
  font-size: 14px;
}
.modal-header{
    font-family: raleway;
    font-weight: 500;
    display: initial;
    font-size: 18px;
    padding-bottom: 15px;
    padding-top: 15px;
    border-bottom: none !important;
}
.text-field{
   font-size: 14px;
   height: 34px;
   
}
/* .text-field{
  padding: 0px;
  padding-left: 10px;
  font-size: 14px;
} */

.text-field:focus{
      box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(102,175,233,0.6);
}
.modal-header>h5{
  font-size: 25px;
}

.close:focus{
outline: none;
}
.close{
  font-size: 12px;
  display: inline-block !important;
  margin-top: -50px !important;
}
	
.modal-header{
  text-align: center;
  color: #292828;
}
@media (min-width: 576px){
.modal-dialog {
    max-width: 600px;
    margin: 1.75rem auto;
}
.modal-xl{
  max-width: 1000px;
}
}
.modal-dialog {
    position: relative;
    width: auto;
    margin:auto;
    pointer-events: none;
    margin-top: 30px;
}
.modnew{
  margin-left:28%;
}



.progress-bar_wrap {
  width: 250px;
  height: 5px;
  margin-top:-36px;
  background: #F6F6FA;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  border-radius: 5px;
}



.form-1 .progress-bar_item {
  display: inline-block;
  height: 100%;
  width: 33.33%;
  float: left;
  visibility: hidden;
  transition: background-color .2s, visisility .1s;
}

.form-1 .activebar {
  visibility: visible;
}


.progress-bar_text {
  display: inline-block;
  color: #aaa;
  margin-left: 5px;
  transition: .2s;
}



.form-6 .progress-bar_item {
  display: inline-block;
  height: 100%;
  width: 32.5%;
  margin-right: .8%;
  border-radius: 5px;
  float: left;
  
  transition: background-color .2s, visisility .1s;
}

.form-6 .progress-bar_item-1.activebar {
  background-color: #FF4B47;
}

.form-6 .progress-bar_item-2.activebar {
  background-color: #F9AE35;
}

.form-6 .progress-bar_item-3.activebar {
  background-color: #2DAF7D;
}

.form-2 .progress-bar_item {
  display: inline-block;
  height: 100%;
  width: 32.5%;
  margin-right: .8%;
  border-radius: 5px;
  float: left;
  
  transition: background-color .2s, visisility .1s;
}

.form-2 .progress-bar_item-1.activebar {
  background-color: #FF4B47;
}

.form-2 .progress-bar_item-2.activebar {
  background-color: #F9AE35;
}

.form-2 .progress-bar_item-3.activebar {
  background-color: #2DAF7D;
}







</style>
