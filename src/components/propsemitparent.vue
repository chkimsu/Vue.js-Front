<!--UI-->
<template>
  <ModalTest :product="products[stateId]" :isAct="isModalAct" @closeModal="closeModal"/>
  <MenuTest :menu="menu"/>
  <nav>
    <ul>
      <ProductTest v-for="product,i in products" :key="i" v-bind:product="product" @openModal="openModal($event)"/>
    </ul>
  </nav>
</template>

<!--Script-->
<script>
import MenuTest from '@/components/propsemitchild1.vue';
import ProductTest from '@/components/propsemitchild2.vue';
import ModalTest from '@/components/propsemitchild3.vue';

export default {
  name : 'PropsEmit',
  data (){
    return {
      stateId : 0,
      isModalAct : false,
      menu : ['HOME','ABOUT' ,'PRODUCTS', 'ETC'],
      products : [
        {id : '0', title : 'Sample Product1', price : 10000, img : 'https://dummyimage.com/200/F6A9A9/464660'},
        {id : '1', title : 'Sample Product2', price : 50000, img : 'https://dummyimage.com/200/FFBF86/464660'},
        {id : '2', title : 'Sample Product3', price : 30000, img : 'https://dummyimage.com/200/FFF47D/464660'},
        {id : '3', title : 'Sample Product5', price : 70000, img : 'https://dummyimage.com/200/C2F784/464660'},
      ]
    }
  },
  methods : {
    openModal(id){
      console.log('상위 컴퍼넌트의 emit을 통해 받은 id 값은 다음과 같습니다 id : ', id)
      if(parseInt(id)==4){
        id = 0;
      }
      this.stateId = id;
      this.isModalAct = true;
    },
    closeModal(){
      this.stateId = 0;
      this.isModalAct = false;
    }
  },
  components : {
    //ES6 부터 key, value의 변수명이 같을때 생략이 가능하다
    //Menu : Menu, Product : Product, Modal : Modal
    MenuTest,ProductTest,ModalTest
  }
}
</script>

<!--CSS-->
<style>

</style>