<template>
  <div class="App">
    <header>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="img/banner-2.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="img/banner.jpg" alt />
          </div>
        </div>
      </div>
      <div class="text">
        <h3>爱时尚精品物</h3>
        <p>公告：京哈才把扩充卡死几次卡包括</p>
        <div class="nav">
          <p
            v-for="(item,index) in nav"
            :key="index"
            @click="find(item)"
          >{{item.name}}{{item.flag?"↑":"↓"}}</p>
        </div>
        <strong>
          <img src="img/avatar.jpg" alt />
        </strong>
      </div>
    </header>
    <section>
      <strong @click="router">
        <img src="img/cart.png" alt />
        <span>{{num}}</span>
      </strong>
      <div class="list">
        <Item v-for="(item,index) in list" :key="index" :item="item" :edit="edit" />
      </div>
    </section>
  </div>
</template>
<script>
import Swiper from "swiper";
import axios from "axios";
export default {
  props: {},
  components: {},
  data() {
    return {
      nav: [
        {
          name: "价格升序",
          flag: true,
          class: "price"
        },
        {
          name: "价格降序",
          flag: false,
          class: "price"
        },
        {
          name: "销量升序",
          flag: true,
          class: "buyCount"
        },
        {
          name: "销量降序",
          flag: false,
          class: "buyCount"
        }
      ],
      list: [],
      num: 0,
      main: []
    };
  },
  computed: {},
  methods: {
    find(item) {
      if (item.flag) {
        this.list.sort((a, b) => a[item.class] - b[item.class]);
      } else {
        this.list.sort((a, b) => b[item.class] - a[item.class]);
      }
    },
    edit(num) {
      this.num = num;
    },
    router() {
      this.$router.push("/car");
    }
  },
  created() {
    axios.get("https://yantianfeng.com/api/goodList").then(res => {
      this.list = res.data.goodList;
    });
    this.num = JSON.parse(localStorage.getItem("arr")).length;
  },
  mounted() {
    this.$nextTick(() => new Swiper(".swiper-container"));
  }
};
</script>
<style scoped lang="scss">
.App {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    .swiper-container {
      width: 100%;
      flex: 1;
      background: #fff;
      flex-shrink: 0;
      overflow: hidden;
      .swiper-wrapper {
        width: 200%;
        height: 100%;
        display: flex;
        .swiper-slide {
          width: 50%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .text {
      width: 100%;
      position: relative;
      padding-top: 2rem;
      flex-shrink: 0;
      h3,
      p {
        width: 100%;
        text-align: center;
        font-weight: normal;
        padding: 0.5rem 0;
      }
      p {
        font-size: 1rem;
      }
      .nav {
        width: 100%;
        height: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #000;
        margin-top: 1rem;
        padding: 0 0.5rem;
        box-sizing: border-box;
        p {
          padding: 0.1rem;
          display: flex;
          align-items: center;
        }
      }
      strong {
        width: 100%;
        text-align: center;
        position: absolute;
        box-sizing: border-box;
        top: -20%;
        img {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          overflow: hidden;
        }
      }
    }
  }
  section {
    width: 100%;
    flex: 1;
    overflow: hidden;
    padding-top: 0.5rem;
    box-sizing: border-box;
    position: relative;
    strong {
      position: absolute;
      bottom: 10%;
      right: 10%;
      width: 3.5rem;
      height: 3.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: skyblue;
      border-radius: 50%;
      img {
        width: 60%;
        height: 60%;
      }
      span {
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        right: -10%;
        top: -10%;
        background: red;
        text-align: center;
        line-height: 1.5rem;
        border-radius: 50%;
        color: #fff;
      }
    }
    .list {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: auto;
      flex-shrink: 0;
    }
  }
}
</style>