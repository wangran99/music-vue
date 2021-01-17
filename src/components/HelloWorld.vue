<template>
  <div class="hello">
    <van-search
      v-model="value"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
    />
    <h1>{{ msg }}</h1>
    <aplayer
      autoplay showLrc mimi
      :music="{
        title: 'secret base~君がくれたもの~',
        artist: 'Silent Siren',
            lrc: '[00:00.00] (,,•́ . •̀,,) 刚刚开始学钢琴弹的hhhh[00:13.230]一直以来都有人这样让我↵[00:16.190]焦躁不安↵[00:20.220]最近我开始关心↵[00:22.480]想往日一般浓妆盛容↵[00:26.220]但突然你闯入我的世界↵[00:27.990]让我随你而去↵[00:29.370]你让我在空中漂浮↵[00:31.120]我从未有过如此的感受↵[00:33.550]因为你就是我的空气给我生命↵[00:35.160]没有你我什么都不是,只有顿步慢行↵[00:39.730]亲爱的,难道你不愿留下↵[00:43.780]请你陪伴在我的身边↵[00:46.100]亲爱的,难道你不愿留下↵[00:52.930]亲爱的,请你留在我的身边↵[00:56.350]你的每一句话都让我噤若寒蝉↵[01:01.620]蒙娜丽莎, 艺术品↵[01:04.030]我们能经受成天的寒冷↵[01:06.330]亲爱的请你现在留在我身边↵[01:12.850]亲爱的,难道你不愿留下↵[01:19.210]我还在奢求你的全部↵[01:22.070]不情愿所以才要拼命',
        src: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%A9%BA%E4%B9%8B%E5%9F%8E.m4a',
        pic: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720200713203148.jpg',
      }"
      :list="[{
        title: 'secret base~君がくれたもの~',
        artist: 'Silent Siren',
            lrc: '[00:00.00] (,,•́ . •̀,,) 刚刚开始学钢琴弹的hhhh[00:13.230]一直以来都有人这样让我↵[00:16.190]焦躁不安↵[00:20.220]最近我开始关心↵[00:22.480]想往日一般浓妆盛容↵[00:26.220]但突然你闯入我的世界↵[00:27.990]让我随你而去↵[00:29.370]你让我在空中漂浮↵[00:31.120]我从未有过如此的感受↵[00:33.550]因为你就是我的空气给我生命↵[00:35.160]没有你我什么都不是,只有顿步慢行↵[00:39.730]亲爱的,难道你不愿留下↵[00:43.780]请你陪伴在我的身边↵[00:46.100]亲爱的,难道你不愿留下↵[00:52.930]亲爱的,请你留在我的身边↵[00:56.350]你的每一句话都让我噤若寒蝉↵[01:01.620]蒙娜丽莎, 艺术品↵[01:04.030]我们能经受成天的寒冷↵[01:06.330]亲爱的请你现在留在我身边↵[01:12.850]亲爱的,难道你不愿留下↵[01:19.210]我还在奢求你的全部↵[01:22.070]不情愿所以才要拼命',
        src: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%A9%BA%E4%B9%8B%E5%9F%8E.m4a',
        pic: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720200713203148.jpg',
      },{
        title: 'secret base~君がくれたもの~',
        artist: 'Silent Siren',
            lrc: '[00:00.00] (,,•́ . •̀,,) 刚刚开始学钢琴弹的hhhh[00:13.230]一直以来都有人这样让我↵[00:16.190]焦躁不安↵[00:20.220]最近我开始关心↵[00:22.480]想往日一般浓妆盛容↵[00:26.220]但突然你闯入我的世界↵[00:27.990]让我随你而去↵[00:29.370]你让我在空中漂浮↵[00:31.120]我从未有过如此的感受↵[00:33.550]因为你就是我的空气给我生命↵[00:35.160]没有你我什么都不是,只有顿步慢行↵[00:39.730]亲爱的,难道你不愿留下↵[00:43.780]请你陪伴在我的身边↵[00:46.100]亲爱的,难道你不愿留下↵[00:52.930]亲爱的,请你留在我的身边↵[00:56.350]你的每一句话都让我噤若寒蝉↵[01:01.620]蒙娜丽莎, 艺术品↵[01:04.030]我们能经受成天的寒冷↵[01:06.330]亲爱的请你现在留在我身边↵[01:12.850]亲爱的,难道你不愿留下↵[01:19.210]我还在奢求你的全部↵[01:22.070]不情愿所以才要拼命',
        src: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E5%A4%A9%E7%A9%BA%E4%B9%8B%E5%9F%8E.m4a',
        pic: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720200713203148.jpg',
      }]"
    />
    <a-button type="primary"> Primary </a-button>
    <van-image
      round
      width="3rem"
      height="3rem"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <router-view></router-view>

    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item icon="music-o" replace to="/login">流行</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/about"> 标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import api from "@/util/api";
import Aplayer from "vue-aplayer";

export default {
  name: "HelloWorld",
  components: {
    Aplayer,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      value: "周傑倫",
      active: 0,
      playlist: [
        {
          songName: "Agnes",
          songLive: "/static/agnes.mp3",
          artistName: "Glass Animals",
          songImg:
            "https://pbs.twimg.com/profile_images/765322021060354048/0ppD4P6Y_400x400.jpg",
          songDuration: "3:55",
        },
        {
          songName: "TaKillya (Baby Driver Soundtrack)",
          songLive: "/static/takillya.mp3",
          artistName: "Vinnie Maniscalco",
          songImg:
            "https://adamology.net/wp-content/uploads/2017/07/Baby-Driver.jpg",
          songDuration: "3:46",
        },
        {
          songName: "Kipod",
          songLive: "/static/kipod.mp3",
          artistName: "Infected Mushrrom",
          songImg:
            "https://is4-ssl.mzstatic.com/image/thumb/Music/45/71/ff/mzi.mtqdovgf.jpg/1200x630bb.jpg",
          songDuration: "5:48",
        },
        {
          songName: "Spitfire",
          songLive: "/static/spitfire.mp3",
          artistName: "Infected Mushrrom",
          songImg:
            "https://is4-ssl.mzstatic.com/image/thumb/Music/45/71/ff/mzi.mtqdovgf.jpg/1200x630bb.jpg",
          songDuration: "7:15",
        },
      ],
    };
  },
  mounted() {
    api.login("ew", "ew");
    api.test();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #45b884;
}
</style>
