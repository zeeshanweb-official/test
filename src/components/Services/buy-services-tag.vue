<template>
<div class="container cafter my-5">
    <h1 class="display-5 text-change"><slot name="title"></slot></h1>
    <p><slot name="paragraph"></slot></p>
    </div>
</template>
<style scoped>
.cafter{
    text-align: center;
}
.text-change{
    color:#576a7a;
    font-family: 'Raleway' sans-serif !important;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-bottom: .5rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    line-height: 1.2;
    color: inherit;
}
.cafter:after {
  display:inline-block;
  content: '';
  width: 45px;
  text-align: center;
  border-bottom: solid 2px #24b898;
}
p{
    color: #576a7a;
    margin-bottom: 0px;
}
</style>