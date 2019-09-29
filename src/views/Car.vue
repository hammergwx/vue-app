<template>
  <div class="App">
    <Head />
    <section>
      <CarItem v-for="(item,index) in list" :key="index" :item="item" />
    </section>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      list: []
    };
  },
  computed: {},
  methods: {},
  created() {
    this.list = JSON.parse(localStorage.getItem("arr"));
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.App {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>