<template>
<div>
    <NavSearch></NavSearch>
    <div class="container projectRow py-3 mt-3">
        <div class="container mx-0 px-0">
           <tableRows v-for="i in 2" :key="i" ></tableRows>
        </div>
    </div>
</div>
</template>
<script>
import NavSearch from './navSearch'
import tableRows from './tableRows'
export default {
    components:{
        NavSearch,
        tableRows,
    },
}
</script>
<style scoped>
    .projectRow{
        border:1px solid rgb(238, 238, 238);
        margin-left:70px;
        min-width: 1220px;
        height: 400px;
    }
</style>