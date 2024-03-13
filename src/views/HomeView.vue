<template>
  <div class="container">
    <h1>Welcome to Shmordle!</h1>
    <h2>RULES!</h2>
    <P>You got 6 guesses on each one.</P>
    <p>Grey = not in the word</p>
    <p>Yellow = The right letter in the wrong place</p>
    <p>Green = The correct letter in the correct place</p>
    <h2>Game Modes</h2>
    <p>DEFAULT - Standard game</p>
    <p>BLUE - Standard game with unquie colors</p>
    <p>THREE - Three letter games</p>
    <p>FOUR - Four letter games</p>
    <p>SIX - Six letter games</p>
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
