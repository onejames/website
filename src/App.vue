<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

    .title {
        width: 100%;
    }

    .has-text-centered {
        text-align: center;
    }

    body {
      margin: 0px;
      height: 100%;
      background-image: linear-gradient(#ffffff, #82c8ff);
      background-attachment: fixed;
    }
</style>
