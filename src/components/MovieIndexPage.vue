<template>
    <div class="wrap">
      <h1>5월 마지막주 영화 예매 순위</h1>
      <ul class="movies">
        <li v-for="movie in movies" class="item" :key="movie.id">
          <span class="rank">{{movie.id}}</span>
          <router-link :to="{ name: 'show', params: { id: movie.id }}">
            <img v-bind:src="movie.poster" class="poster">
          </router-link>
          <div class="detail">
            <strong class="tit">{{movie.name}}</strong><br>
            <span class="rate">예매율 <span class="num">{{movie.rate}}</span></span><br>
            <router-link :to="{ name: 'show', params: { id: movie.id }}" class="link">자세히보기</router-link>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    created () {   
      console.log('==== 이게 먼저 실행됬어야 한다. ');      
      this.$http.get('/api/')
          .then((response) => {
            this.movies = response.data
          }).catch((err) => console.log('근데 이게 실행되었네? ' , err))
    },
    data () {
      return {
        movies: []
      }
    }
  }
  </script>
  
  <style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>