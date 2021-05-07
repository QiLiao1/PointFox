<template>
  <div id="app">
    <head1 />
<router-view></router-view>
    <footer1 />
     
  </div>
 
</template>

<script>
import head1 from "./components/head1";

import footer1 from "./components/footer1"

export default {
  name: "App",
  components: {
    head1,
   
    footer1
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
