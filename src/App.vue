<template>
  <div id="app">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/propsemit">propsemit</router-link> |
    <router-link to="/dataframe">dataframe</router-link> |
    <router-link to="/csv_reader">csv_reader</router-link> |
    <router-link to="/csv_final">csv_final</router-link> |
    <router-link to="/button_test">button_test</router-link> |
    <router-link to="/board">board</router-link> |
    <router-link to="/movie">movie</router-link> |

  </nav>
  <router-view /> 


</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>