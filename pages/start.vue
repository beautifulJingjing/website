<template>
    <div class="start">
        <ul>
	        <li v-for="item in startData">
		        <router-link :to="{name:'list',params:{typeid:item.id}}">
			        <img :src="item.avatar">
			        <p v-text="item.name"></p>
			        <span v-text="item.description"></span>
		        </router-link>
	        </li>
        </ul>
    </div>
</template>
<style>
	.start li{padding-top:10px};
	.start li{padding:10px 15px;border-bottom:1px dashed #e3e3e3;clear:both}
	.start ul li p{color:#198bc2}
	.start ul li img{width:50px;display: inline-block;float: left;margin-right: 10px;}
	.start ul li span{color:#3f3f3f}
</style>
<script>

    export default{
        data(){
            return{
               startData:undefined
            }
        },
        mounted(){
			this.startData = [
				{id:1001,name:'王勃',avatar:'static/wangbo.jpg',description:'（649或650～676或675年），唐代诗人。汉族，字子安。绛州龙门(今山西河津)人。王勃与杨炯、卢照邻、骆宾王齐名，世称“初唐四杰”，其中王勃是“初唐四杰”之首。'},
				{id:1002,name:'杨炯',avatar:'static/yangjiong.jpg',description:'（650年－692年），汉族，弘农华阴（今属陕西）人，排行第七；唐朝诗人，初唐四杰之一。显庆六年（公元661年），年仅11岁的杨炯被举为神童，上元三年（676年）应制举及第，授校书郎。后又任崇文馆学士，迁詹事、司直。垂拱元年（685年），降官为梓州司法参军。天授元年（690年），任教于洛阳宫中习艺馆。如意元年（692年）秋后改任盈川县令，吏治以严酷著称，卒于任所。因此后人称他为“杨盈川”。'},
				{id:1003,name:'卢照邻',avatar:'static/luzhaolin.jpg',description:'初唐诗人。字升之，自号幽忧子，汉族，幽州范阳（治今河北省涿州市）人，其生卒年史无明载，卢照邻望族出身，曾为王府典签，又出任益州新都（今四川成都附近）尉，在文学上，他与王勃、杨炯、骆宾王以文词齐名，世称“王杨卢骆”，号为“初唐四杰”。有7卷本的《卢升之集》、明张燮辑注的《幽忧子集》存世。卢照邻尤工诗歌骈文，以歌行体为佳，不少佳句传颂不绝，如“得成比目何辞死，愿作鸳鸯不羡仙”等，更被后人誉为经典'},
				{id:1004,name:'骆宾王',avatar:'static/luobinwang.jpg',description:'（约619—约687年）字观光，汉族，婺州义乌人（今浙江义乌）。唐初诗人，与王勃、杨炯、卢照邻合称“初唐四杰”。又与富嘉谟并称“富骆”。高宗永徽中为道王李元庆府属，历武功、长安主簿，仪凤三年，入为侍御史，因事下狱，次年遇赦，调露二年除临海丞，不得志，辞官。有集。骆宾王于武则天光宅元年，为起兵扬州反武则天的徐敬业作《代李敬业传檄天下文》，敬业败，亡命不知所之，或云被杀，或云为僧'},
				{id:1005,name:'王绩',avatar:'static/wangji.jpg',description:'(约590～644)，字无功，号东皋子，绛州龙门(今山西河津)人。隋末举孝廉，除秘书正字。不乐在朝，辞疾，复授扬州六合丞。时天下大乱，弃官还故乡。唐武德中，诏以前朝官待诏门下省。贞观初，以疾罢归河渚间，躬耕东皋，自号“东皋子”。性简傲，嗜酒，能饮五斗，自作《五斗先生传》 ，撰 《酒经》 、《酒谱》 。其诗近而不浅，质而不俗，真率疏放，有旷怀高致，直追魏晋高风。律体滥觞于六朝，而成型于隋唐之际，无功实为先声'},
			];
			this.startData.forEach(function(item){
				item.description = item.description.length > 35 ? item.description.substring(0,35) + '...' : item.description;
			})
        },
        components:{

        }
    }
</script>
