<template>
  <el-button>{{allPrice}}</el-button>
</template>
<script>

const reducer = (allSumm, newVal) => allSumm + newVal.price;

export default {
  props:{
    itemsInBask:{
      type:Array,
      default:[],
      reqiored:true
    }
  },
  data(){
    return{
    }
  },
  computed:{
    allPrice(){
      
      /*
      console.log(this.itemsInBask)

      if (this.itemsInBask.length === 0)
        return 0
      else if (this.itemsInBask.length === 1)
        return this.itemsInBask[0].price
      else if (this.itemsInBask.length === 2)
        return this.itemsInBask[0].price + this.itemsInBask[1].price
      */
      let sum = 0;

      this.itemsInBask.forEach(element => {
        sum += element.price
      });

      return sum;
      /*
      const value = this.itemsInBask.reduce(reducer)

      console.log(value)

      return value;
      */
    }
  }
}
</script>

