<template>
	<div class="start">
		<ul>
			<li v-for="item in startData">
				<router-link :to="{name:'detail',params:{id:item.id}}">
					<p v-text="item.title"></p>
					<span>{{'作者：' + item.author}}</span>
					<div v-text="item.content"></div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<style>
	.start li{padding-top:10px};
	.start li{padding:10px 15px;border-bottom:1px dashed #e3e3e3}
	.start ul li p{color:#198bc2}
	.start ul li span{color:#3f3f3f}
</style>
<script>

    export default{
        data(){
            return{
               startData:[],
               params:this.$route.params
            }
        },
        mounted(){
            var $this = this;
            $this.allData = [
                {authorid:1001,id:1000,title:'送杜少府之任蜀州',author:'王勃',content:'城阙辅三秦，风烟望五津。与君离别意，同是宦游人。海内存知已，天涯若比邻。无为在歧路，儿女共沾巾。'},
                {authorid:1001,id:1001,title:'滕王阁诗',author:'王勃',content:'滕王高阁临江渚，佩玉鸣鸾罢歌舞。画栋朝飞南浦云，珠帘暮卷西山雨。闲云潭影日悠悠，物换星移几度秋。阁中帝子今何在？槛外长江空自流。'},
                {authorid:1004,id:1002,title:'咏鹅',author:'骆宾王',content:'鹅 鹅 鹅，曲项向天歌。白毛浮绿水，红掌拨清波。'},
                {authorid:1004,id:1003,title:'于易水送人',author:'骆宾王',content:'此地别燕丹，壮士发冲冠。昔时人已没，今日水犹寒。在狱咏蝉。'},
                {authorid:1004,id:1004,title:'在狱咏蝉',author:'骆宾王',content:'在狱咏蝉西陆蝉声唱，南冠客思深。不堪玄鬓影，来对白头吟。露重飞难进，风多响易沉。无人信高洁，谁为表余心。'},
                {authorid:1004,id:1005,title:'途中有怀',author:'骆宾王',content:'睠然怀楚奏，怅矣背泰关。涸鳞惊煦辙，坠羽怯虚弯。素服三川化，乌裘十上还。莫言无皓齿，时俗薄朱颜！'},
            ]
            $this.allData.forEach(function(item){
                item.authorid == $this.params.typeid && ($this.startData.push(item))
            })

        },
        components:{

        }
    }
</script>
