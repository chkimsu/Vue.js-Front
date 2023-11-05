<template>
    <div class="modal--bg" v-if="isAct">
        <div class="modal--fg">
            <img :src="product.img"/>
            <h3>{{product.title}}</h3>
            <div>상품가 : {{product.price}} 원</div>
            <button class="modal--fg--btn" @click="closeModal">닫기</button>
        </div>
    </div>
  </template>
  
  <script>
  export default {
      name : 'ModalTest',
      methods : {
          closeModal(){
              this.$emit('closeModal');
          }
      },
      props : {
          product : Object,
          isAct : Boolean
      }
  }
  </script>
  
  <style>
      .modal--bg {
          display: flex;
          position: fixed;
          flex-direction: column;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.6);
          width : 100vw;
          height: 100vh;
      }
  
      .modal--fg {
          display : flex;
          position: absolute;
          border-radius: 10px;
          padding : 20px;
          top : 10%;
          flex-direction: column;
          align-items: center;
          background-color: whitesmoke;
          width : 80%;
          max-width: 450px;
          user-select: none;
      }
  
      .modal--fg--btn {
          margin-top : 10px;
          padding : 6px 12px;
          font-size : 19px;
      }
  </style>