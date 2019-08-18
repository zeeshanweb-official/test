<template>
    <div class="col-sm-4 wow fadeInDown" data-wow-delay="100ms">
              <div class="r-property-box">
                <div class="r-property-detail">
                  <div class="r-property-text">
                    <h4>{{service.title}}</h4>
                    <p><i class="fa fa-map-marker" aria-hidden="true"></i>{{service.address}}</p>
                  </div>
                  <span class="lable-tag">For Sale</span>
                </div>
                <div class="r-property-image"><img :src="require(`../../assets/images/${service.image}`)" width="369" height="202" alt=""
                    class="img-responsive" /><a href="javascript:;"></a></div>
                <div class="r-property-space">
                  <div class="row">
                    <div class="col-sm-6">
                      <i v-for="star in service.stars" :key="star.index" class="fa fa-star"></i>
                    </div>
                    <div class="col-sm-6"><a href="javascript:;" class="favorite-heart"><i class="fa fa-heart"></i> +
                        Favorite</a></div>
                  </div>
                </div>
                <div class="r-property-price"> <span class="">{{service.price}}</span> <a href="javascript:;"><i
                      class="fa fa-shopping-cart"> &nbsp;</i> Buy Now </a> </div>
              </div>
            </div>
</template>

<script>
export default {
    props:['service'],
}
</script>
<style>

.r-property-box{
  text-align:left !important;
}
</style>
