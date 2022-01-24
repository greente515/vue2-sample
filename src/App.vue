<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/sample1">sample1</router-link> |
      <router-link to="/sample2">sample2</router-link> |
      <router-link to="/sample3">sample3</router-link> |
      <router-link to="/sample4">sample4</router-link> |
      <router-link to="/sample5-1">sample5-1</router-link> |
      <router-link to="/sample5-2">sample5-2</router-link> |
      <router-link to="/sample6-1">sample6-1</router-link> |
      <router-link to="/sample6-2">sample6-2</router-link> |
      <router-link to="/markdown">markdown</router-link> |
      <router-link to="/transition">transition</router-link> |
      <router-link to="/player">player</router-link> |
      <router-link to="/moreLoad">moreLoad</router-link> |
    </div>
    <router-view />
    <spinner :loading="$store.state.LoadingStatus" />
  </div>
</template>

<script>
import Spinner from "@/components/Spinner";
export default {
  components: {
    Spinner,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
