<template>
  <div id="app">
    <h1>Sales Product : cart({{ total }}) - {{ totalPrice }}원</h1>
    <div class="cart">
        <h3>구입목록</h3>
        <ul>
            <li v-for="(crr, i) in crrIndex" :key="i">
                <strong>{{ chips[crr].title }}</strong>
                <span>{{ chips[crr].price }}원</span>
                <a href="" @click.prevent="removeItem(crr, i)">삭제</a>
            </li>
        </ul>
    </div>

    <product-list 
        v-bind:items-data="chips"
        v-on:pick-up="parentWork"
    ></product-list>
    
  </div>
</template>

<script>
import productList from './components/ProductList.vue'

export default {
  name: 'App',
  components: {productList},
  data() {
    return {
      total: 0,
        totalPrice:0,
        crrIndex: [],
        chips:[{
            img:`mango.jpg`,
            title:`자연그대로 망고칩`,
            desc:`단맛이 그대로 살아있는 망고칩입니다.`,
            price:2500
          },
          {
            img:`apple.jpg`,
            title:`천연 오가닉 사과칩`,
            desc:`깨끗한 재료를 엄선하여 자연을 그대로 담았습니다.`,
            price:2000
          },
          {
            img:`jujube.jpg`,
            title:`아이깨끗 대추칩`,
            desc:`새콤함이 살아있는 반건조 대추그대로.`,
            price:3000
          }
        ]
    }
  },
  methods: {
    parentWork(index) {
      console.log('수신했다!');
      this.total++;
      this.totalPrice += this.chips[index].price;
      this.crrIndex.push(index);
    },
    removeItem(crr, index) {
      this.total -= 1;
      this.totalPrice -= this.chips[crr].price;
      this.crrIndex.splice(index, 1);
    }
  }
}
</script>

<style>
* {margin:0; padding:0}
li {list-style: none;}
body {padding:30px;}
.list {margin:20px 0;}
.list > li {width:200px; border:1px solid gray; padding:10px;}
.list > li > * {display:block}
.list > li > img {width:200px; margin-bottom:20px;}
.list > li > strong {font-size:20px; color:#666; margin-bottom:10px}
.list > li > span {margin-bottom:10px;}
.cart > ul > li {border-bottom:1px dotted #e4e4e4; line-height: 30px;}
</style>
