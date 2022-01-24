<template>
  <div>
    <vue-loadmore
      :on-refresh="onRefresh"
      :on-loadmore="onLoad"
      :finished="finished"
      :error.sync="error"
    >
      <div v-for="(item, i) of list" :key="i"></div>
    </vue-loadmore>
  </div>
</template>

<script>
export default {
  name: "Vue2SampleAppMoreload",

  data() {
    return {
      list: [],
      page: 1,
      pageSize: 10,
      finished: false,

      error: false,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    onRefresh(done) {
      this.list = [];
      this.page = 1;
      this.finished = false;
      this.fetch();

      done();
    },

    onLoad(done) {
      if (this.page <= 10) {
        this.fetch();
      } else {
        // all data loaded
        this.finished = true;
      }
      done();
      // eslint-disable-next-line no-undef
      fetchSomeThing().catch(() => {
        this.error = true;
      });
    },

    fetch() {
      for (let i = 0; i < this.pageSize; i++) {
        this.list.push(this.list.length + 1);
      }
      this.page++;
    },
  },
};
</script>

<style lang="scss" scoped></style>
