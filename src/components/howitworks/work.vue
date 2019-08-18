<template>
<div class="col-md-3">
     <div class=" features-box">
            <div class="features-icon wow fadeInLeft" data-wow-delay="200ms"><i :class="work.class"></i></div>
            <div class="features-text wow fadeInLeft" data-wow-delay="300ms">
              <h3>{{work.title}}</h3>
              <p>{{work.text}}</p>
            </div>
    </div>
</div>
</template>
<script>
export default {
    props:[
        'work'
    ],
}
</script>
<style>
.features-box{margin-bottom:0px;}
.features-box {margin-bottom: 0;}
.features-box.mr20{margin-bottom:20px;}
.features-box:hover .features-text h3{color:#000;}
.features-icon{text-align: center;}
.features-icon i{    background: grey;
    padding: 22px;
	border-radius: 50%;
	font-size: 40px;
	color:#fff;
}
.features-text h3{color:#576a7a;font-size:22px;font-weight:400;text-align: center;}
.features-text p{color:#8297a8;line-height:24px}
.features-text a{color:#24b898;font-size:13px;}
.features-text a:hover{color:#000;}
.features-text a i{-webkit-transition: all .3s ease-in-out;-moz-transition: all .3s ease-in-out;-ms-transition: all .37s ease-in-out;-o-transition: all .3s ease-in-out;transition: all .3s ease-in-out;}
.features-text a:hover i{margin-left:10px;}
body.blue .features-text a {color: #2458b8;}
body.green .features-text a {color: #1da720;}
body.orange .features-text a {color: #ffae00;}
body.aqua .features-text a {color: #007582;}
body.purple .features-text a {color: #7f2346;}
body.maroon .features-text a {color: #9f3224;}
body.gray .features-text a {color: #919389;}
</style>
