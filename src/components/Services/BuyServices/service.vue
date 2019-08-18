<template>
<div class="col-sm-4">
                    <div class="r-property-box">
                      <div class="r-property-detail">
                        <div class="r-property-text">
                          <h4>{{service.title}}</h4>
                          <p><i class="fa fa-map-marker" aria-hidden="true"></i>{{service.address}}</p>
                        </div>

                        <span class="lable-tag">For Sale</span>
                      </div>
                      <div class="r-property-image"><img :src="require(`../../../assets/images/${service.image}`)" width="369" height="202" alt=""
                          class="img-responsive">

                        <div class="serves-hover">
                          <div class="hover-ser">

                            <div class="col-md-12">
                                <router-link tag="li" class="hover-eye" :to="'/contacts/' + index">
                                    <a  class="navcolor" data-toggle="tooltip"
                                    title="" data-original-title="View Detail"> <i class="fa fa-eye"></i></a>
                                </router-link>
                                <i href="javascript:;" data-toggle="modal" data-target="#sendgiftmethod"
                                title="Sent it as Gift " class="service_box_fav_btn favourite_serv_btn fa fa-gift"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div class="r-property-price">
                        <span class="">{{ service.price }}</span>
                        <a href="#" data-toggle="modal" data-target="#paymentmethod" class="by-now"><i class="fa fa-shopping-cart"></i> Buy now</a>
                      </div>
                    </div>

    </div>
</template>
<script>
export default {
    props:['service','index']
}
</script>
<style>
.fa-eye{
    color:white;
}

.fa-eye:hover{
    color:#9ac034;
}
    .serves-hover{background:rgba(0, 0, 0, 0.64) none repeat scroll 0 0;height:100%;left:0;position:absolute;top:0;transform:scale(0)rotate(-60deg);transition:all 0.3s ease 0s;width:100%;}
.serves-hover .hover-ser{background:rgba(0, 0, 0, 0) none repeat scroll 0 0;border:medium none;border-radius:2px;left:0;position:absolute;right:0;text-align:center;text-transform:uppercase;top:50%;transform:translate(0%, -50%);transition:all 0.3s ease 0s;}
.hover-ser .btn{border:medium none;display:inline-block;margin:0 3px;padding:5px;position:relative;width:auto;}
.serves-hover .btn:hover{background:#ffffff none repeat scroll 0 0;color:#9ac034;transition:all 0.3s ease 0s;}
.r-property-image:hover .serves-hover{transform:scale(1) rotate(360deg);transition:all 0.3s ease 0s;}
.hover-eye .fa {    
    line-height: 40px;
}.service_box_fav_btn {
    background: #97be2e none repeat scroll 0 0;
    border-radius: 4px;
    bottom: 0;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 19px;
    height: 40px;
    line-height: 40px;
    position: inherit;
    transition: all 0.3s ease 0s;
    width: 40px;
}.service_box_fav_btn:hover, .service_box_fav_btn:focus {
    background: #ffffff none repeat scroll 0 0;
    color: #97be2e;
    transition: all 0.3s ease 0s;}
    .hover-eye {
        background: #97be2e none repeat scroll 0 0;
        border-radius: 4px;
        color: #ffffff;
        display: inline-block;
        font-size: 19px;
        height: 40px;
        margin-right: 5px;
        transition: all 0.3s ease 0s;
        width: 40px;
        cursor: pointer;}
        .hover-eye:hover, .hover-eye:focus {
            background: #ffffff none repeat scroll 0 0;
            transition: all 0.3s ease 0s;
            color:#97be2e !important;
        }
</style>