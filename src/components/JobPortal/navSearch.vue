<template>
<div>
    <div class="product-header-search" style="background: #e6ecef;">
    <form>
      <div class="container-fluid" style="max-height:75px;">

        <div class="row">
          <div class="col-md-4 row">
          <div class="col-md-6 btn p-0 pt-2 newstyles" v-bind:class="{'active': activeBtn=='shani', 'class2': !activeBtn=='shani'}">
            <div class="p-h-search-block"  style="line-height: 2.4">
              <div class="form-group" v-on:click="clickedbtn('shani')">
                <i class="fa fa-search" aria-hidden="true"></i> Search Job
              </div>
            </div>
          </div>


         <div class="col-md-6 btn p-0 pt-2 newstyles" v-bind:class="{'active': activeBtn=='Kamboh', 'class2': !activeBtn=='Kamboh'}">
            <div class="p-h-search-block" style="line-height: 2.4">
              <div class="form-group" v-on:click="clickedbtn('Kamboh')">
                Job Offers
              </div>
            </div>
          </div>
          </div>
          <div class="col-md-8 pt-3 ml-1 row px-0">
          <div class="col-md-3 pr-0">
            <div class="p-h-search-block">
              <div class="form-group">
                <select class="form-control">
                  <option v-for="cat in categories" :key="cat.index" :value="cat">{{cat}}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="col-md-3 pr-0">
            <div class="p-h-search-block">
              <div class="form-group">
                <select class="form-control">
                  <option v-for="type in types" :key="type.index" value="type">{{type}}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="col-md-3 pr-0">
            <div class="p-h-search-block">
              <div class="form-group">
                <select class="form-control">
                  <option v-for="color in Colors" :key="color.index" value="color">{{color}}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="col-md-3 pr-0">
            <div class="p-h-search-block">
              <div class="form-group">
                <select class="form-control">
                  <option v-for="price in Prices" :key="price.index" value="price">{{price}}</option>
                </select>
              </div>
            </div>
          </div>
          </div>


        </div>


      </div>
    </form>
  </div>
</div>

</template>
<script>
export default {
    data() {
        return {
            categories:[
              'Select Category',
              'Property',
              'Cars',
              'Homage Goods',
              'Banglow'
            ],
            types:[
              'Select Type',
              'For Sale',
              'Any',
              'New',
              'Free'
            ],
            Colors:[
              'Select Color',
              'Black',
              'White',
              'Light Red',
              'Dark Colors'
            ],
            Prices:[
              'Select Price',
              '10000 to 20000',
              '21000 to 50000',
              '51000 to 100000',
              '101000 to 200000',
              '201000 and Above'
            ],
            activeBtn:'shani'
        }
    },
    methods: {
      clickedbtn(e){
        this.activeBtn=e;
      },
    },
}
</script>
<style scoped>
.projectRow{
  background-color: red;

}
  .newstyles{
    background: grey;height: 75px;text-align: center;font-size: 22px;color: white; border-radius:0px;
  }
  .form-control{
    border-radius:0px;
  }
  .active{
    background-color: #97be2e;
    border-bottom: 3px solid red;
  }
  .fixstyle{
    box-sizing: border-box;
  }
</style>