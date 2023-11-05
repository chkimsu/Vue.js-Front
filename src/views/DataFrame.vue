<template>
    <div>
      <VueTable :headers="header" :data="data" :keys="keys" dark />
    </div>
</template>

<script setup>
import { VueTable } from "@harv46/vue-table"
// import "@harv46/vue-table/dist/style.css"

const header = ["Name", "Age"]
const keys=["name", "age"]
const data = [{
    name: "Example Name 1",
    age: 22
}, {
    name: "Example Name 2",
    age: 17
}]

</script>



