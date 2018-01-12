<template>
  <div>
    <!-- 1.0 头部 -->
    <v-header :seller='seller'></v-header>
    <!-- 2.0 主体 -->
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link v-bind:to="'/goods'">
          商品
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">
          评论
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">
          商家
        </router-link>
      </div>
    </div>
    <!-- 3.0  -->
    <router-view :seller='seller'></router-view>
  </div>
</template>
   
<style scoped lang='stylus' rel="stylesheet/stylus">
@import './common/stylus/mixin.styl';

.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: 1px solid rgba(7, 17, 27, 0.1);
}

.tab .tab-item {
  flex: 1;
  text-align: center;
}

.tab .tab-item a {
  display: block;
  font-size: 14px;
  color: rgb(77, 85, 93);
  text-decoration: none;
}

.tab .tab-item .active {
  color: rgb(240, 20, 20);
}
</style>
   
<script>
import data from "./common/json/data.json";
import header from "./components/header/header.vue";

export default {
  data() {
    return {
      seller: {},
      active: "tab-container1"
    };
  },
  created() {
    this.seller = data.seller;
  },
  methods: {},
  components: {
    "v-header": header
  }
};
</script>