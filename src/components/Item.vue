<template>
  <dl>
    <dt>
      <img :src="item.pic" alt />
    </dt>
    <dd>
      <h4>{{item.name}}</h4>
      <div class="content">
        <p>
          <span>已售：{{item.buyCount}}</span>
        </p>
        <p>
          <span>价格：{{item.price}}</span>
          <b @click="btn(item)">加入购物车</b>
        </p>
      </div>
    </dd>
  </dl>
</template>
<script>
import Vue from "vue";

export default {
  props: {
    item: {
      type: Object | Array
    },
    edit: {
      type: Function
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    btn(item) {
      let arr = JSON.parse(localStorage.getItem("arr"));
      Vue.set(item, "num", 1);
      if (
        !JSON.parse(localStorage.getItem("arr")).find(a => a.id === item.id)
      ) {
        arr.push(item);
      } else {
        let id = arr.findIndex(a => a.id === item.id);
        arr[id].num++;
        arr.splice(id, 1, arr[id]);
      }
      localStorage.setItem("arr", JSON.stringify(arr));
      this.edit(JSON.parse(localStorage.getItem("arr")).length);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
dl {
  width: 100%;
  display: flex;
  padding: 0.5rem;
  box-sizing: border-box;
  dt {
    width: 5rem;
    height: 5rem;
    box-sizing: border-box;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  dd {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 0.5rem;
    box-sizing: border-box;
    h4 {
      width: 10rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .content {
      width: 100%;
      display: flex;
      flex: 1;
      flex-direction: column;
      p {
        width: 100%;
        flex: 1;
        display: flex;
        align-items: center;
        span {
          flex: 1;
        }
        b {
          padding: 0.2rem 0.5rem;
          background: red;
          color: #fff;
        }
      }
    }
  }
}
</style>