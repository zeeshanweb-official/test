<template>
<div class="row">
    <appService v-for="service in services" :index="service.index" :key="service.index" :value="service.index" :service="service"></appService>
</div>
</template> 
<script>
import Service from './service'
export default {
    components:{
        appService:Service
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