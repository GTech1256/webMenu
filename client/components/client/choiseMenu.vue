<template>
  <div>
    <basket :itemsInBask="itemsInBask"/>
    <step v-show="!this.payed" :step="step"/>

    <div v-if="this.step !== this.maxSteps" class="menu">
    
      <ul v-if="itemsByStep.length > 0"> <!-- itemsByStep.length > 0 -->
          
        <li @click="addToBasket(item)" v-for="item in itemsByStep" :key="item._id">
        {{item}}  {{item.name}}   {{item.price}} руб
        </li>

      </ul>
      <p v-else>Нет Данных</p>
      <el-button @click="nextStep">далее</el-button>
      </div>

      <div v-else-if="!this.payed" class="pay">
          <h1>Оплата</h1>
          <el-button :plain="true" @click="paySuc">Оплатить</el-button>
      </div>

  </div>
</template>

<script>

import step from './step.vue'
import basket from './basket.vue'
import axios from 'axios'


async function getData(nameProduct='allProducts'){
  try{
    const res = await axios({
      method:'get',
      url:`http://localhost:3030/api/${nameProduct}`
    });
    return res.data.data;
  }catch(e){
    console.log(e);
    return [];
    
  }
}

export default {
  created:async function(){
    const data = await getData(/*this.productsName[this.step]*/);
    this.items = data;
    this.productsName = Object.keys(data);

  },
  components:{
    step,
    basket
  },
  data:function(){
    return{
      itemsInBask:[],
      items:null,
      productsName: ['beverage','fCourse','sCourse'],
      step:0,
      maxSteps:3,
      payed:false
    }
  },
  methods:{
    nextStep: async function () {
        if (this.maxSteps === this.step) { return }
        this.step++
        // this.items = await getData(this.productsName[this.step]);
      },
      paySuc: function () {
        this.payed=true;
        this.$message({
          showClose: true,
          message: 'Оплата принята',
          type: 'success'
        })
      },
      addToBasket(item){
        
        this.itemsInBask.push(item)
      }
  },
  computed:{
    itemsByStep(){
      if( !this.items)
        return { lenght:0 }
      const items = this.items[this.productsName[this.step]]
      console.log(  items )
      console.log(  typeof items )
      console.log(  items.lenght )
      //  items.length = Object.keys(items).length
      return items
    }
  }

}
</script>
<style>
li{
  margin: 10px 0px;
  padding: 5px;
  border:1px solid gray;
  border-radius:50px;
}
li:hover{
  background: gray
}
</style>


