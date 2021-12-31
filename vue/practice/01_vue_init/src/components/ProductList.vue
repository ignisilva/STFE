<template>
    <ul class="list" >
        <li v-for="(item, i) in itemsData" v-bind:key="i">
            <img v-bind:src=" require(`@/assets/${item.img}`) " />
            <strong>{{ item.title }}</strong>
            <span>{{ item.desc }}</span>
            <b>{{ item.price }} 원</b>
            <button v-on:click="childWork(i)">구입</button>
        </li>
    </ul>
</template>

<script>
export default {
    name:'product-list',
    props:['itemsData'],
    methods: {
        childWork(index) {
            this.$emit('pick-up', index);
        }
    }
}
</script>

<style scoped>

</style>