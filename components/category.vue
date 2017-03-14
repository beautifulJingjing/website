<template>
	<div class="history">
		<div class="history-title">唐诗画卷</div>
		<div class="history-list">
			<ul>
				<li v-for="item in historyData" @click="goList(item)">
					<img :src="item.src">
					<span v-text="item.name"></span>
				</li>
			</ul>
		</div>
		<div class="group-title">唐诗异彩</div>
		<div class="group-list">
			<ul>
				<li v-for="(item,index) in groupData" :class="{true:'border-right'}[index % 2 == 0]">
					<span v-text="item.title"></span>
				</li>
			</ul>
		</div>
		<div class="important-title">唐诗奇葩</div>
		<div class="important-list">
			<ul>
				<li v-for="item in importantData">
					<img :src="item.src">
					<span v-text="item.title"></span>
					<span v-text="item.author"></span>
					<i class="iconfont icon-right"></i>
				</li>
			</ul>
		</div>
	</div>
</template>
<style>
.history-title,.group-title,.important-title{font-size:16px;padding:15px;}
.history-list,.group-list,.important-list{background-color:#f1f1f1;}
.history-list{height:115px;padding:15px;border-bottom:1px solid #e3e3e3;border-top:1px solid #e3e3e3;}
.history-list ul{width:100%;}
.history-list ul li{width:25%;float:left;padding-top: 5px;}
.history-list ul li img{width:54px;height:54px;border-radius:4px;display:block;margin:0 auto;}
.history-list ul li span{text-align:center;display: block;margin-top: 5px;}
.group-list,.important-list{overflow:hidden;}
.group-list ul{width:100%;border-top:1px solid #e3e3e3;}
.group-list ul li{width:50%;float:left;line-height:40px;border-bottom:1px solid #e3e3e3;}
.group-list ul li span{text-align:center;display: block;}
.important-list ul li{width:100%;line-height:40px;border-top:1px solid #e3e3e3;padding:0 15px;margin-right: 10px;}
.important-list ul li img{width:30px;height:30px;display:inline-block; border-radius: 50%;vertical-align: middle;}
.important-list ul li i{display:inline-block;float:right}
.border-right{border-right:1px solid #e3e3e3;}
</style>
<script>
	import router from '../router/index.js'
    export default{
        data(){
            return{
                historyData:[
                    {src:'static/wangbo.jpg',name:'初唐',path:'start'},
                    {src:'static/libai.jpg',name:'盛唐',path:'start'},
                    {src:'static/wangwei.jpg',name:'中唐',path:'start'},
                    {src:'static/dufu.jpg',name:'晚唐',path:'start'},
                ],
                groupData:[
                    {title:'山水田园'},
                    {title:'浪漫主义'},
                    {title:'现实主义'},
                    {title:'边塞诗'},
                ],
                importantData:[
                    {title:'《登幽州台歌》',author:'陈子昂',src:'static/poet1.jpg'},
                    {title:'《春江花月夜》',author:'张若虚',src:'static/poet2.jpg'},
                    {title:'《凉州词》',author:'王之涣',src:'static/poet3.jpg'},
                ]
            }
        },
        methods:{
            goList:function(item){
                router.push({name:item.path})
            }
        },
        components:{

        }
    }
</script>
