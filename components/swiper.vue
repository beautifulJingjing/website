<template>
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides">
        <span :style="slide.style" class="img"></span>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>
<style>
.swiper-container .img {
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    display: block;
    background-size: 100% 100%;
}
.swiper-pagination{text-align:right}
</style>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default{
        props:['articleData'],
        data(){
            return{
                swiperOption: {
                    autoplay: 2000,
                    setWrapperSize :true,
                    pagination : '.swiper-pagination',
                    paginationClickable :true,
                    mousewheelControl : true,
                    loop:true,
                    autoplayDisableOnInteraction : false,
                },
                swiperSlides: this.articleData
            }
        },
        created(){
            console.log()
        },
        mounted(){

        },
        components:{
            swiper,
            swiperSlide
        },
    }
</script>
