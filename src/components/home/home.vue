<template>
    <div>
<appVideoSec></appVideoSec>
<BuyServicesTag>
  <h2 slot="title">Buy Services</h2>
  <p slot="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dignissimos quisquam unde. Quidem <br> illo velit, ex culpa earum iusto aspernatur repellat ipsam tempora dolorum distinctio inventore commodi totam optio magni!</p>
</BuyServicesTag>
<appServices></appServices>
<hr>
<BuyServicesTag>
  <h2 slot="title">How It Work</h2>
  <p slot="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dignissimos quisquam unde. Quidem <br> illo velit, ex culpa earum iusto aspernatur repellat ipsam tempora dolorum distinctio inventore commodi totam optio magni!</p>
</BuyServicesTag>
<appWorks></appWorks>
<hr>

<BuyServicesTag>
  <h2 slot="title">Our Services</h2>
  <p slot="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dignissimos quisquam unde. Quidem <br> illo velit, ex culpa earum iusto aspernatur repellat ipsam tempora dolorum distinctio inventore commodi totam optio magni!</p>
</BuyServicesTag>

<appSlider></appSlider>
</div>
</template>
<script>
import videoSec from './header_sec'
import BuyServicesTag from '../Services/buy-services-tag'
import Services from '../Services/services'
import slider from '../howitworks/slider'
import Works from '../howitworks/works'
export default {
    components:{
    appVideoSec:videoSec,
    BuyServicesTag,
    appServices:Services,
    appSlider:slider,
    appWorks:Works,
  },
    
}
</script>