<template>
<div class="container mb-5">
    <div class="row">
        <appwork v-for="work in works" :key="work.index" :work="work"></appwork>
    </div>
</div>
</template>
<script>
import work from './work'
export default {
    data() {
        return {
            works:[
                {
                    title:'Share',
                    text:"Post a job to tell us about your project. We'll quickly match you with the right freelancers.",
                    class:'fa fa-heart'
                },
                {
                    title:'Compare',
                    text:"Browse profiles, reviews, and proposals then interview top candidates. Hire a favorite and begin your project.",
                    class:'fa fa-crosshairs'
                },
                {
                    title:'Work',
                    text:'Use the "Freelancer Guru" platform to chat, share files, and collaborate from your desktop or on the go.',
                    class:'fa fa-suitcase'
                },
                {
                    title:'Pay',
                    text:"Invoicing and payments happen through Freelancer Guru. With Freelancer Guru Protection, only pay for work you authorize.",
                    class:'fa fa-money'
                }
                ]
        }
    },
    components:{
        appwork:work,
    }
}
</script>
