<template>
  <div class="product-header-search" style="background: #e6ecef;padding: 16px 0px 0px 0px;">
    <form>
      <div class="container">

        <div class="row">

          <div class="col-md-2 btn p-0 newstyles">
            <div class="p-h-search-block" style="line-height: 1.4">
              <div class="form-group">
                <i class="fa fa-sliders" aria-hidden="true"></i> Filter
              </div>
            </div>
          </div>


          <div class="col-md-2">
            <div class="p-h-search-block">
              <div class="form-group">
                <input type="text" class="form-control" id="" placeholder="Search..." style="background: lightgray;">
              </div>
            </div>
          </div>

          <div class="col-md-2">
            <div class="p-h-search-block">
              <div class="form-group">
                <select class="form-control">
                  <option v-for="cat in categories" :key="cat.index" :value="cat">{{cat}}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="col-md-2">
            <div class="p-h-search-block">
              <div class="form-group">
                <select class="form-control">
                  <option v-for="type in types" :key="type.index" value="type">{{type}}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="col-md-2">
            <div class="p-h-search-block">
              <div class="form-group">
                <select class="form-control">
                  <option v-for="color in Colors" :key="color.index" value="color">{{color}}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="col-md-2">
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
    </form><!-- row -->
      <!-- <div class="p-h-search-block text-center">
    <input type="submit" name="" value="FIND PROPERTY">
  </div> -->
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
            ]
        }
    },
}
</script>
<style>
  .newstyles{
    background: #97be2e;height: 38px;text-align: center;font-size: 22px;color: white; border-radius:0px;
  }
  .form-control{
    border-radius:0px;
  }
</style>