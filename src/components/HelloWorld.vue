<template>
  <div class="hello">
    <van-search
      v-model="value"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
    />
    <h1>{{ msg }}</h1>
    <a-button type="primary"> Primary </a-button>
    <van-image
      round
      width="3rem"
      height="3rem"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <router-view></router-view>
   
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item icon="music-o" replace to="/login" >流行</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/about"> 标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" >我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import api from "@/util/api";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      value:'周傑倫',
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
