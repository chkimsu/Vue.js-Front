<template>
    <li class="product">
        <img :src="product.img"/>
        <div class="product--content">
          <h3 class="content--title" @click="openModal(product.id)">{{product.title}}</h3>
          <div class="content--price">상품가 : {{product.price}} 원</div>
        </div>
    </li>
  </template>
  
  <script>
  export default {
      name : 'ProductTest',
      props : {
          product : Object
      },
      methods : {
          openModal(id){
              console.log('여긴 자식컴퍼넌트입니다. v-on : click을 통해 받은 product.id는 다음과 같습니다 : ', id)
              this.$emit('openModal',parseInt(id)+1);
              // 일부러 id+1을 해서 눌렀을때 아래것이 나오도록 했습니다. 당연히 마지막 사진을 클릭하면 에러가 나오겠죠 ?
          }
      }
  }
  </script>
  
  <style>
      .product {
          display : flex;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
          align-items: center;
          list-style: none;
          margin : 10px;
      }
  
      .product--content { 
          margin-left : 10px;
      }
  
      .content--title {
          cursor : pointer;
      }
  </style>