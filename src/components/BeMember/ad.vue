<template>
 <div class="wrapper py-1">
     <div class="card shani">
    <h4 class="card-title text-center">{{ad.title}}</h4>
  <img v-if="ad.type === 'image'" class="card-img-top" src="@/assets/images/SmartStaff-Logo-Rohan-02_1.png" alt="Card image">
    <div class="shield" v-else>
        <i class="fa fa-shield"></i>
    </div>
  <div class="card-body">
    <p class="card-text text-muted text-center">{{ad.text_muted}}
    <span style="display:block" v-if="ad.text_muted2" class="text-muted text16px text-center">{{ad.text_muted2}}</span>
    </p>
  </div>
</div>
</div>
</template>
<script>
export default {
        props:[
            'ad'
        ],
    
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
.fa-shield{
    color:#97be2e ;
    font-size: 90px;
    margin-left: 90px;
}
.text16px{
    font-size: 16px !important;
}




.text-muted{
    color:#777;
    font-size: 21px;
    font-family: 'Raleway', sans-serif;
}
.card-title{
    font-family: 'Raleway', sans-serif;
    font-size: 21px;
    font-weight: 500;
    margin-top: 4px;
}
.card-img-top{
    height: 150px;
    width: 190px;
    margin-left: 30px;
    margin-top: -10px;
}
.card{
    width: 95%;
    border-top: 3px solid #3c8dbc;
}
</style>
