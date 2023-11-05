<template>
    <button v-on:click="[csbrouter(), countclick()]">{{ d }} test용 버튼입니다.  </button>
    <h3> 새로고침할때까지 이 count는 유지됩니다, data 확인하세요 : {{ count }}</h3>
    <input v-model="d" placeholder="여기 데이터에 따라 변합니다." size="30">
</template>


<script>

export default{
    name : 'csb_button',
    data(){
            let a = 3
            let b = 2
        return{
            c : a+b,
            count : 0,
            d : null
        }
    },
    methods : {
        csbrouter(){
        // this.$router.push('/about')

        console.log(this.$route.name)
        console.log(this.$route.path)

        },
        countclick(){
            this.count = this.count+1
        }
    }
}

</script>

