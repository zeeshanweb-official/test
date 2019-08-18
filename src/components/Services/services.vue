<template>
<div class="container hr-after p-0">
    <div class="row my-5">
            <appService v-for="service in services" :key="service.index" :service="service"></appService>
    </div>
</div>
</template>
<script>
import service from './service'
export default {
  components:{
    appService:service,
  },
  data() {
    return {
      services:[
          {
            title:'Awesome Villa',
            address:'gulistan Colony SHahkot',
            image:'r-property-img.jpg',
            price:"$450",
            stars:4
          },
          {
            title:'Good Thing',
            address:'gulistan Colony no 2 Faisalabad',
            image:'blog-full-4.jpg',
            price:"$400",
            stars:3
          },
          {
            title:'Very Nice Home',
            address:'Housing Society Faisalabad',
            image:'blog-full-5.jpg',
            price:"$400",
            stars:3
          },
          {
            title:'Very Good House',
            address:'Mustafaabad Housing Society Faisalabad',
            image:'blog-full-4.jpg',
            price:"$405",
            stars:2
          },
          {
            title:'Very Good House',
            address:'Mustafaabad Housing Society Faisalabad',
            image:'blog-full-3.jpg',
            price:"$405",
            stars:2
          },
          {
            title:'Very Good House',
            address:'Mustafaabad Housing Society Faisalabad',
            image:'blog-full-5.jpg',
            price:"$405",
            stars:2
          },
          
      ]  
    }
  },
}
</script>
<style>

.r-property-box{border:1px solid #e9ebef;margin-bottom:30px;}
.r-property-box:hover .property-overlay {opacity: 1;}
.r-property-box:hover .popular-overlay{opacity:1}
body.blue .r-property-box:hover .r-property-price span {background:#6595ed;}
body.green .r-property-box:hover .r-property-price span {background:#1da720;}
body.orange .r-property-box:hover .r-property-price span {background:#ffae00;}
body.aqua .r-property-box:hover .r-property-price span {background:#007582;}
body.purple .r-property-box:hover .r-property-price span {background:#7f2346;}
body.maroon .r-property-box:hover .r-property-price span {background:#9f3224;}
body.gray .r-property-box:hover .r-property-price span {background:#919389;}
.r-property-detail{padding:17px 20px;position:relative;}
.r-property-detail .lable-tag{right:-5px;top:-1px}
.r-property-detail.rent .lable-tag{background:#75a2c7;}
.r-property-detail.rent .lable-tag:after{border-top-color:#4d779a;}
.r-property-text h4{color:#595f6f;font-size:21px;font-weight:500;margin:0 0 5px;}
.r-property-text h4 a{color:#595f6f;}
.r-property-text p{color:#868fa6;line-height:24px;padding-left:18px;position:relative;font-weight:500;margin-bottom:0;}
.r-property-text p i{position:absolute;left:0;font-size:15px;top:5px;}
.lable-tag{padding:8px 28px;font-size:12px;font-weight:500;color:#fff;background:#24b898;position:absolute;right:-5px;top:25px;text-transform: uppercase;}
.lable-tag:after{position:absolute;top:100%;right:0; width: 0; height: 0; border-left:0px solid transparent;border-right: 6px solid transparent;border-top: 6px solid #1e957b;content:'';}
.property-detail.rent .lable-tag{background:#75a2c7;}
.property-detail.rent .lable-tag:after{border-top-color:#4d779a;}
.r-property-detail .lable-tag{right:-5px;top:-1px}
.lable-tag:after{position:absolute;top:100%;right:0; width: 0; height: 0; border-left:0px solid transparent;border-right: 6px solid transparent;border-top: 6px solid #1e957b;content:'';}
.r-property-detail.rent .lable-tag{background:#75a2c7;}
.r-property-detail.rent .lable-tag:after{border-top-color:#4d779a;}
.new-box .lable-tag{right:auto;left:-6px;}
.new-box .lable-tag:after{right: auto;left:0;border-left: 6px solid transparent;border-right: 0px solid transparent;}
.blog-box .lable-tag{right:auto;left:-6px;}
.blog-box .lable-tag:after{right: auto;left:0;border-left: 6px solid transparent;border-right: 0px solid transparent;}
.list-page .lable-tag {top: 14px;}
.fblog-details .lable-tag{right:0;top:-33px}
.fblog-details .lable-tag:after{position:absolute;top:100%;right:0; width: 0; height: 0; border-left:0px solid transparent;border-right: 6px solid transparent;border-top: 6px solid #1e957b;content:'';display:none;}
body.blue .lable-tag {background: #2458b8;}
body.blue .lable-tag:after {border-top: 6px solid #3269d0;}
body.green .lable-tag {background: #1da720;}
body.green .lable-tag:after {border-top: 6px solid #39c93c;}
body.orange .lable-tag {background: #ffae00;}
body.orange .lable-tag:after {border-top: 6px solid #fcba2c;}
body.aqua .lable-tag {background: #007582;}
body.aqua .lable-tag:after {border-top: 6px solid #0d9aaa;}
body.purple .lable-tag {background: #7f2346;}
body.purple .lable-tag:after {border-top: 6px solid #f47aa9;}
body.maroon .lable-tag {background: #9f3224;}
body.maroon .lable-tag:after {border-top: 6px solid #ca6153;}
body.gray .lable-tag {background: #919389;}
body.gray .lable-tag:after {border-top: 6px solid #aaaba8;}
.r-property-image:hover .serves-hover{transform:scale(1) rotate(360deg);transition:all 0.3s ease 0s;}
.r-property-image{position:relative;overflow:hidden;}
.r-property-image img{-webkit-transition: all .3s ease-in-out;-moz-transition: all .3s ease-in-out;-ms-transition: all .3s ease-in-out;-o-transition: all .3s ease-in-out;transition: all .3s ease-in-out;}
.agent-property .r-property-image img{width:100%;}
.r-property-space .row>div {padding: 4px;float: left;width: 50%;}
.r-property-space{padding:10px 17px;color:#8e97ac;line-height:18px;text-align:center;font-size:13px;}
.r-property-space .row{margin:0;}
.r-property-space .row>div{padding:0;}
.r-property-space i{display:inline-block;width:20px;height:18px;/*background:url(../images/icons-2.png) no-repeat;*/vertical-align:middle;margin-right:3px;font-weight:500;font-size:15px;}
.r-property-space .fa{color:#249a80;}
.r-property-space i.bath{background-position:-144px -2px;}
.r-property-space i.bed{background-position:-286px -2px;}
.r-property-space i.garage{background-position:-429px -2px;}
.s-property-detail .r-property-space{text-align:left;padding: 15px 0 0;border-top:1px solid #e9ebef;margin-top:10px;margin-right: 13px;}
.s-property-detail .r-property-space .row > div{padding-top:3px;padding-top:3px;}
.s-property-detail .r-property-space i{-moz-transform: scale(.8);-webkit-transform: scale(.8);-o-transform: scale(.8);-ms-transform: scale(.8);transform: scale(.8);}
.s-property-detail .r-property-space{text-align:left;padding: 15px 0 0;border-top:1px solid #e9ebef;margin-top:10px;margin-right: 13px;}
body.blue .r-property-box:hover .r-property-price span {background:#6595ed;}
body.blue .r-property-price a:hover {color: #2458b8;}
.r-property-price{background:#384b5b;padding:0px;color:#fff;line-height:45px;text-align:center;}
.r-property-price:after{clear:both;content:' ';display:table;}
.r-property-price span{font-weight:700;font-size:20px;display:inline-block;width:50%;border-right:1px solid #4b6071;    vertical-align: top;-webkit-transition: all .3s ease-in-out;-moz-transition: all .3s ease-in-out;-ms-transition: all .3s ease-in-out;-o-transition: all .3s ease-in-out;transition: all .3s ease-in-out;}
.r-property-price a{display:inline-block;width:47%;color:#fff;}
.r-property-price a i{position:relative;top:12px;margin-left:3px;vertical-align:top;font-size:20px;display:inline-block;}
body.green .r-property-box:hover .r-property-price span {background:#1da720;}
body.green .r-property-price a:hover {color: #1da720;}
body.orange .r-property-box:hover .r-property-price span {background:#ffae00;}
body.orange .r-property-price a:hover {color: #ffae00;}
body.aqua .r-property-box:hover .r-property-price span {background:#007582;}
body.aqua .r-property-price a:hover {color: #007582;}
body.purple .r-property-box:hover .r-property-price span {background:#7f2346;}
body.purple .r-property-price a:hover {color: #f47aa9;}
body.maroon .r-property-box:hover .r-property-price span {background:#9f3224;}
body.maroon .r-property-price a{color: #fff;}
body.maroon .r-property-price a:hover {color: #ca6153;}
body.gray .r-property-box:hover .r-property-price span {background:#919389;}
body.gray .r-property-price a{color: #fff;}
body.gray .r-property-price a:hover {color: #aaaba8;}
.r-property-price span {width: 49.5%;}
</style>