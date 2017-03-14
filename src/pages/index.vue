<template>
    <div>
	    <SwiperComponent :articleData = "articleData" v-if="articleData"></SwiperComponent>
	    <CategoryComponent></CategoryComponent>
    </div>
</template>
<style>

</style>
<script>
	import SwiperComponent from '../components/swiper.vue'
    import CategoryComponent from '../components/category.vue'
    import utilities from 'utilities'
    export default{
        data(){
            return{
				showSwiper:false,
				articleData:undefined
            }
        },
        mounted(){
            this.articleData = [
				{
					src:'static/timg1.jpg',
				},
				{
					src:'static/timg2.jpg',
				},
				{
					src:'static/timg3.jpg',
				}
			];
			this.articleData.forEach(function(item){
				item.style = {'background-image': 'url(' + item.src + ')', 'height': window.innerWidth * 0.5 + 'px'}
			})
			this.showSwiper = true;
        },
        components:{
			SwiperComponent,
            CategoryComponent
        }
    }
</script>
