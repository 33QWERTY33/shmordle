<template>
  <nav class="navbar navbar-expand-lg navbar-light justify-content-center">
    <a class="navbar-brand justify-content-left"><router-link to="/">Home</router-link></a>
    <a class="nav-link"><router-link to="/shmordle">Default</router-link></a>
    <a class="nav-link"><router-link to="/blue">Blue</router-link></a>
    <a class="nav-link"><router-link to="/6">Six</router-link></a>
    <a class="nav-link"><router-link to="/4">Four</router-link></a>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #497e4e;
  border: 3px solid #212b22
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #e8ee35;
}
</style>
