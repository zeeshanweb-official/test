<template>
<div>
    <navFilters></navFilters>
    <div class="container mt-5 p-0">
    <appServices></appServices>
    <br>
     <nav aria-label="Page navigation" style="margin-bottom:200px;">
                  <ul class="pagination">
                    <li class="prev"><a href="javascript:;"><i class="fa fa-caret-left"></i>Previous</a></li>
                    <li><a href="javascript:;">1</a></li>
                    <li><a href="javascript:;">2</a></li>
                    <li class="active"><a href="javascript:;">3</a></li>
                    <li><a href="javascript:;">4</a></li>
                    <li><a href="javascript:;">5</a></li>
                    <li><a href="javascript:;">6</a></li>
                    <li><a href="javascript:;">7</a></li>
                    <li><a href="javascript:;">8</a></li>
                    <li><a href="javascript:;">9</a></li>
                    <li><a href="javascript:;">10</a></li>
                    <li class="next p-0"><a href="javascript:;">Next<i class="fa fa-caret-right"></i></a></li>
                  </ul>
                </nav>
    </div>
</div>
</template>
<script>
import navFilters from "./navFilters"
import Services from './services'
export default {
    components:{
        navFilters,
        appServices:Services
    },
    data() {
        return {
            
        }
    },
}
</script>
<style>
.pagination>li{display: inline-block !important;}
.pagination>li>a{background-color: red;padding: 10px !important;background-color: #e5e9ed;padding-left: 15px !important;padding-right: 15px !important;}
.pagination>li:first-child>a, .pagination>li:first-child>span, .pagination>li:last-child>a, .pagination>li:last-child>span {border-radius: 0;background-color: white;padding: 0px !important;}
.pagination>li:last-child>a:focus, .pagination>li:first-child>a:focus{outline: none;border: none;}
.pagination>li:last-child>a:hover, .pagination>li:first-child>a:hover{text-decoration: none !important;border: none;}
    .pagination{font-size:16px;}
.pagination>li>a, .pagination>li>span{color:#9fa6b7;margin:0 2px;padding: 8px 12px;}
.pagination>li:first-child>a, .pagination>li:first-child>span,.pagination>li:last-child>a, .pagination>li:last-child>span{border-radius:0;}
.pagination>li>a:hover, .pagination>li>span:hover, .pagination>li>a:focus, .pagination>li>span:focus {background-color: #fff;border:1px solid #24b898;color:#9fa6b7;

    text-decoration: none;
    border: none;
    background-color: #9fa6b7;
    color: #4d4f52;
}
.pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {background-color: #24b898;border:1px solid #24b898;color:#fff;}
.pagination {display: block;text-align:center;}
.agent-property .pagination>li>a, .agent-property .pagination>li>span{float:none;}
body.blue .pagination>.active>a,body.blue  .pagination>.active>a:focus,body.blue  .pagination>.active>a:hover,body.blue  .pagination>.active>span,body.blue  .pagination>.active>span:focus,body.blue  .pagination>.active>span:hover {background-color: #2458b8;border: 1px solid #2458b8;}
body.blue .pagination>li>a:hover,body.blue  .pagination>li>span:hover,body.blue  .pagination>li>a:focus,body.blue  .pagination>li>span:focus {border: 1px solid #2458b8;color: #9fa6b7;}
body.green .pagination>.active>a,body.green  .pagination>.active>a:focus,body.green  .pagination>.active>a:hover,body.green  .pagination>.active>span,body.green  .pagination>.active>span:focus,body.green  .pagination>.active>span:hover {background-color: #1da720;border: 1px solid #1da720;}
body.green .pagination>li>a:hover,body.green  .pagination>li>span:hover,body.green  .pagination>li>a:focus,body.green  .pagination>li>span:focus {border: 1px solid #1da720;color: #9fa6b7;}
body.orange .pagination>.active>a,body.orange  .pagination>.active>a:focus,body.orange  .pagination>.active>a:hover,body.orange  .pagination>.active>span,body.orange  .pagination>.active>span:focus,body.orange  .pagination>.active>span:hover {background-color: #ffae00;border: 1px solid #ffae00;}
body.orange .pagination>li>a:hover,body.orange  .pagination>li>span:hover,body.orange  .pagination>li>a:focus,body.orange  .pagination>li>span:focus {border: 1px solid #ffae00;color: #9fa6b7;}
body.aqua .pagination>.active>a,body.aqua  .pagination>.active>a:focus,body.aqua  .pagination>.active>a:hover,body.aqua  .pagination>.active>span,body.aqua  .pagination>.active>span:focus,body.aqua  .pagination>.active>span:hover {background-color: #007582;border: 1px solid #007582;}
body.aqua .pagination>li>a:hover,body.aqua  .pagination>li>span:hover,body.aqua  .pagination>li>a:focus,body.aqua  .pagination>li>span:focus {border: 1px solid #007582;color: #9fa6b7;}
body.purple  .pagination>.active>a,body.purple   .pagination>.active>a:focus,body.purple   .pagination>.active>a:hover,body.purple   .pagination>.active>span,body.purple   .pagination>.active>span:focus,body.purple   .pagination>.active>span:hover {background-color: #7f2346;border: 1px solid #7f2346;}
body.purple  .pagination>li>a:hover,body.purple   .pagination>li>span:hover,body.purple   .pagination>li>a:focus,body.purple   .pagination>li>span:focus {border: 1px solid #7f2346;color: #9fa6b7;}
body.maroon  .pagination>.active>a,body.maroon   .pagination>.active>a:focus,body.maroon   .pagination>.active>a:hover,body.maroon   .pagination>.active>span,body.maroon   .pagination>.active>span:focus,body.maroon   .pagination>.active>span:hover {background-color: #9f3224;border: 1px solid #9f3224;}
body.maroon  .pagination>li>a:hover,body.maroon   .pagination>li>span:hover,body.maroon   .pagination>li>a:focus,body.maroon   .pagination>li>span:focus {border: 1px solid #9f3224;color: #9fa6b7;}
body.gray  .pagination>.active>a,body.gray   .pagination>.active>a:focus,body.gray   .pagination>.active>a:hover,body.gray   .pagination>.active>span,body.gray   .pagination>.active>span:focus,body.gray   .pagination>.active>span:hover {background-color: #919389;border: 1px solid #919389;}
body.gray  .pagination>li>a:hover,body.gray   .pagination>li>span:hover,body.gray   .pagination>li>a:focus,body.gray   .pagination>li>span:focus {border: 1px solid #919389;color: #9fa6b7;}

.pagination>li>a, .pagination>li>span {padding: 4px 6px;}
.blog-full-width .pagination>li>a, .blog-full-width .pagination>li>span{float:none;}
</style>