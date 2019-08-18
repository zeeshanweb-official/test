<template>
                   <div class="col-sm-3">
                    <div class="r-property-box">
                      <div class="r-property-image"><img :src="require(`../../assets/images/our/${image}`)" width="369" height="300" alt=""
                          class="img-responsive">
                          <div class="popular-overlay">
                            <strong>Logo Design</strong>
                          </div>
                      </div>
                    </div>
                   </div>
             
</template>

<script>
export default {
  props:['image'],
  created() {
    console.log(this.image)
  },
  }
  
</script>
<style>

.r-property-box{
  text-align:left !important;
}

.agent-property .r-property-image img{width:100%;}
.pagination {display: block;text-align:center;}
.agent-property .pagination>li>a, .agent-property .pagination>li>span{float:none;}
.agent-property .prev span,.agent-property .next span,.agent-property .prev a,.agent-property .next a{border-color:#fff;background:none;}
.agent-property .prev span i,.agent-property .prev a i{margin-right:3px;}
.agent-property .next span i,.agent-property .next a i{margin-left:3px;}
.agent-property .prev span:hover,.agent-property .next span:hover,.agent-property .prev a:hover,.agent-property .next a:hover{border-color:#fff;background:none;}

body.blue .r-property-box:hover .r-property-price span {background:#6595ed;}

.r-property-box{border:1px solid #e9ebef;margin-bottom:30px;}
body.green .r-property-box:hover .r-property-price span {background:#1da720;}
.r-property-image{position:relative;overflow:hidden;}
.r-property-image img{-webkit-transition: all .3s ease-in-out;-moz-transition: all .3s ease-in-out;-ms-transition: all .3s ease-in-out;-o-transition: all .3s ease-in-out;transition: all .3s ease-in-out;}
.property-overlay{position:absolute;left:0;right:0;top:0;bottom:0;opacity:100;-webkit-transition: all .3s ease-in-out;-moz-transition: all .3s ease-in-out;-ms-transition: all .3s ease-in-out;-o-transition: all .3s ease-in-out;transition: all .3s ease-in-out;background: #80808094;opacity: 0;text-align:center;}
.pro-over-ul{position: absolute;top:50%;left:45%;transform:translate(-50%,-50%);}
.pro-over-ul ul li {list-style: none;display: inline-block;}
.pro-over-ul ul li i{   
    color: #fff;
    font-size: 25px;
    padding: 10px;
    border-radius: 7px;
    background: #97be2e;
    transition: all 0.3s;
}
 .pro-over-ul ul li i:hover {
    background: #fff;
    color: #97be2e;
 }
 .r-property-image:hover .serves-hover{transform:scale(1) rotate(360deg);transition:all 0.3s ease 0s;}

.agent-property .r-property-image img{width:100%;}
.r-property-box:hover .popular-overlay{opacity:1}
.r-property-box:hover .property-overlay {opacity: 1;}

.r-property-box:hover .popular-overlay{opacity:1}
.section-popular-properties{padding-bottom:75px;}
.p-property-box{position:relative;}
.popular-overlay{position:absolute;left:0;right:0;top:0;bottom:0;text-align:center;background:rgba(44,62,84,.9);color:#fff;padding:20px;opacity:0;-webkit-transition: all .3s ease-in-out;-moz-transition: all .3s ease-in-out;-ms-transition: all .3s ease-in-out;-o-transition: all .3s ease-in-out;transition: all .3s ease-in-out;}
.p-property-box:hover .popular-overlay{opacity:1;}
.popular-overlay strong{display:block;font-size:30px;font-weight:800;padding:10px 0;}
.popular-space{padding:10px 0;}
.popular-space span{display:inline-block;padding:0 10px;}
.popular-space i {display: inline-block;width: 28px;height: 18px;background: url(../../assets/images/icons-3.png) no-repeat;vertical-align: top;margin-right: 4px;font-weight: 500;}

.popular-space i.bath{background-position:-144px -2px;}
.popular-space i.bed{background-position:-286px -2px;}
.popular-space i.garage{background-position:-429px -2px;}

.popular-overlay .more-over{color:#fff;}
.popular-overlay .more-over:hover{color:#24b898;}
.popular-overlay .more-over i{position:relative;top:1px;}

</style>
