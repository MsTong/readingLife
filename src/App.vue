<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

*{
  padding: 0;
  margin: 0;
}
body{
  background: #eee;
}
ul,ol{
  list-style: none;
}
img{
  display: block;
}
a{
  text-decoration: none;
}

.clearfloat:after{
    content: '';
    display: block;
    line-height: 0;
    height: 0;
    visibility: inherit;
    clear: both;
  }
</style>
