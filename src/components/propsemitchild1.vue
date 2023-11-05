<!-- 지금 여기는 props만 받는 로직.  -->

<template>
  <nav>
    <ul class="menu">
      <li class="menu--item" v-for="item,i in menu" :key="i"> 
        <!-- 이렇게 v-for에서 나온 값을 <script>에서 정의할 피료 없이 바로 v-bind:href처럼 밑에 적용가능.  -->
        <a :href="'/'+item">{{item}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name : 'MenuTest',
  props : {
    menu : Array
  } 
}
</script>

<style>
  .menu {
    display : flex;
    justify-content: center;
    padding : 10px;
    border-radius: 5px;
    background: steelblue;
    list-style: none;
  }

  .menu--item {
    padding : 10px;
  }

  .menu--item a {
    color : white;
    text-decoration: none;
  }
</style>