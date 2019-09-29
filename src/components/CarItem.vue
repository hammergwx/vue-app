<template>
  <dl>
    <dt>
      <img :src="item.pic" alt />
    </dt>
    <dd>
      <h4>{{item.name}}</h4>
      <div class="content">
        <span>单价：{{item.price}}</span>
        <b class="input">
          <span>-</span>
          <input type="text" />
          <span>+</span>
        </b>
      </div>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    item: {
      type: Object | Array
    }
  },
  components: {}, 
  data() {
    return {};
  },
  computed: {},
  methods: {},
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
      align-items: center;
    }
    span {
      flex: 1;
    }
    b {
      display: flex;
      width: 5rem;
      padding: 0.2rem 0.5rem;
      color: #fff;
      span {
        width: 2rem;
      }
    }
    // p {
    //   width: 100%;
    //   flex: 1;
    //   display: flex;
    //   align-items: center;
    // }
  }
}
</style>