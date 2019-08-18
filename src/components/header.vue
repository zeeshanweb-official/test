<template>
<div class="sticky-top ">
 <nav class="navbar navbar-expand-lg navbar-black">
   
              <div class="btn-group">
                <a href="javascript:;"  class="p1">
                  <div class="btn-group"><a href="javascript:;" class="dropdown-toggle navcolor" data-toggle="dropdown" aria-haspopup="true"
                      aria-expanded="false">English <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                    <ul class="dropdown-menu top-menu">
                      <li><a  class="navcolor" href="javascript:;">English <img src="../assets/eng.png" class="mx-2" width="16" height="16" alt="Eng" /></a></li>
                      <li><a  class="navcolor" href="javascript:;">Spanish <img src="../assets/spain.png" class="mx-2" width="16" height="12" alt="Spanis" /></a></li>
                    </ul>
                  </div>
                </a>
              </div>
  <ul class="navbar-nav mr-auto">
      <router-link tag="li" class="nav-item ml-4 d-block navcolor d-lg-none" to="/companyLogin">
                    <a  class="navcolor"> <i class="fa fa-address-book"></i> &nbsp;Company Login</a>
      </router-link>
    </ul>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <router-link tag="li" class="nav-item ml-4 navcolor" to="/companyLogin">
                    <a  class="navcolor"> <i class="fa fa-address-book"></i> &nbsp;Company Login</a>
      </router-link>
    </ul>
    <span class="navbar-text">
      <ul class="navbar-nav">
        <router-link tag="li" class="nav-item navcolor mx-2" to="/Help">
                    <a  class="navcolor"> <i class="fa fa-question-circle"></i> &nbsp;Help</a>
      </router-link>
      <li  class="nav-item navcolor mx-2" data-toggle="modal" data-target="#myLogin">
        <div class="button">
                    <a  class="navcolor"> <i class="fa fa-user"></i>&nbsp; Sign In</a>
        </div>
      </li>
      <li  class="nav-item navcolor mx-2" data-toggle="modal" data-target="#mySignup">
        <div class="button">
                    <a  class="navcolor mr-2"> <i class="fa fa-user-plus"></i> &nbsp;Register</a>
        </div>
      </li>
      <div class="btn-group ">
              <a href="javascript:;">
              <div class="btn-group"><a href="javascript:;" class="dropdown-toggle navcolor" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><i class="fa fa-user-circle"></i> &nbsp;Rohan Sulaiman <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul class="dropdown-menu right-menu">
                  <li>
                  <div class="online-invisible">
                    <a class="user-online" href="javascript:;">Online</a>
                    <a class="user-invisible" href="javascript:;">Invisible</a>
                  </div>
                  </li>
                  <li><div class="user-profile-a"><a class="navcolor" href="javascript:;"><i class="fa fa-user-circle" aria-hidden="true"></i> &nbsp;Rohan Solaiman</a></div></li>
                  <li><div class="user-profile-a"><a class="navcolor" href="javascript:;"><i class="fa fa-cog" aria-hidden="true"></i> &nbsp;Setting</a></div></li>
                  <li><div class="user-profile-a"><a class="navcolor" href="javascript:;"><i class="fa fa-sign-out" aria-hidden="true"></i> &nbsp;Logout</a></div></li>
                </ul>
              </div>
            </a>
              </div>
      </ul>
    </span>
  </div>
</nav>
    <!-- <nav class="navbar navbar-light navbar-expand-md bg-white nav-2 p-0">
        <div class="container-fluid px-0">
          <router-link class="navbar-brand px-3" to="/"><img src="../assets/images/logo.png" /></router-link>
            <button data-toggle="collapse" data-target="#navcol-1" class="navbar-toggler"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
              <div class="collapse navbar-collapse"
                id="navcol-1">
                <ul class="nav navbar-nav d-flex ml-auto">
                  <router-link v-for="link in routerLinks" :key="link.index" tag="li" exact-active-class="active" class="nav-item underline" :to="`${link.to}`"><a class="nav-link"> <i :class="`${link.class}`"></i> {{link.title}}</a></router-link>
                  <router-link tag="li" exact-active-class="active" class="nav-item newcls" to="/JobPosting"><a class="nav-link text-white bg-success" style="padding:11px;"> <i class="fa fa-plus"></i> Post Your Job</a></router-link>
                </ul>
            </div>
        </div>
    </nav>
 -->
<div id="app" class="container-fluid p-0 " style="
    line-height: 1.3;
">
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
        <router-link class="navbar-brand px-3" to="/"><img src="../assets/images/logo.png" /></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNavDropdown" class="navbar-collapse collapse">
            
           <ul class="nav navbar-nav ml-auto">
                  <router-link v-for="link in routerLinks" :key="link.index" tag="li" exact-active-class="active" class="nav-item underline" :to="`${link.to}`"><a class="nav-link"> <i :class="`${link.class}` "></i> &nbsp; {{link.title}}</a></router-link>
                </ul>
        </div>
    </nav>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      routerLinks:[
        {to:'/', class:'fa fa-home' , title:'Home'},
        {to:'/FoodServices', class:'fa fa-cutlery' , title:'Food Service'},
        {to:'/BuyServices', class:'fa fa-money' , title:'Buy Services'},
        {to:'/OurServices', class:'fa fa-wrench' , title:'Our Services'},
        {to:'/JobPortal', class:'fa fa-file-text-o' , title:'Job Portal'},
        {to:'/MemberShip', class:'fa fa-users' , title:'Be Partner'},
        {to:'/JobPosting', class:'fa fa-plus' , title:'Post Your Job', ownclass:'newcls'},
      ]

    }
  },
   methods:{
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
.navbar-light .navbar-nav .nav-link {
    color: #000;
}


.active:after{
  content: 'shani';
  background-color: red;
}
.active > a{
  color:#97be2e !important;
}
.underline:last-child{
  background-color: #208873;
}
.underline:last-child > a{
  color: #f8fafb !important;
}
.underline:last-child::after{
  
  width: 112%;
  margin-left:-6% !important;
}

.underline:first-child::after{
  width: 118%;
  margin-left:-6% !important;
}
.button{
  cursor: pointer;
}
.navcolor{
      color: #9ea7b3;
      text-transform: uppercase;
} 
.underline { 
  display:inline-block; 
  margin:0;
  text-transform:uppercase;
  font-weight: bolder; 
  border-right: 1px solid #dde0e4;
  font-family: 'Lato', sans-serif;
  font-size: 13px; 
  padding: 8px 10px 0px 8px;
  letter-spacing: .01px;
  }  
.underline:after {
  display:block;
  content: '';
  border-bottom: solid 5px #97be2e;  
  position: relative;
  top: 5px;
  width: 113%;
  margin-left:-6% !important;
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}
.underline:hover:after { transform: scaleX(1); }

.dropdown-menu.right-menu{
  right: 0px;
    left: -25px;
    width: 170px;
    border: 1px solid rgb(212, 210, 210);
    border-radius: 5px;
  line-height: 2.5;
  font-size: 12px;
  z-index: 1025;
}
.user-profile-a{
  padding: 10px;

}

.online-invisible{
  padding: 10px;
}
.online-invisible>a{
  width: 40%;
  padding: 10px;
}
.user-online{
  border: 1px solid black;
  border-radius: 5px 0px 0px 5px;
  background-color: #9ac034;
  color: white;
}
.user-invisible{
  border: 1px solid black;
  border-left: none;
  color: black;
  border-radius: 0px 5px 5px 0px;
   transition: background-color 0.5s ease;
}
.user-invisible:hover{
  background-color: #9ac034;
  color: white;
}
.top-menu{
  background-color: #222534;;
  min-width:110px;
  padding: 10px; 
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 42px;
  z-index: 1023;

}
.dropdown-toggle:after { content: none }
a:hover{
  text-decoration: none;
}
.navbar-black,.nav-2{
  background-color: #222534;
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #9ea7b3;
}
.nav-2{
  font-size: 14px;
  font-weight: bolder;
}
.navbar-toggler-icon{
  background-color: aliceblue;
}
.active{
  color: #97be2e !important;
  border-bottom: solid 5px #97be2e;  
}
.navbar-brand {
     padding-top: 0px !important; 
     padding-bottom: 0px !important; 
     }
</style>
