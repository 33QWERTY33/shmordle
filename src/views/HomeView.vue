<template>
  <div class="container">
    <h1>Welcome to Shmordle!</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {
      bgColors: require("../assets/bg_colors.json")
    }
  },
  components: {
  },
  created() {
    const endPoint = window.location.pathname
    document.body.style.backgroundColor = this.bgColors[endPoint]
  }
}
</script>

<style scoped>
h1 {
	font-family: 'Dancing Script', cursive;
	font-size: 80px;
	margin-bottom: 30px;
}
</style>