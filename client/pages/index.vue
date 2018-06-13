<template>
  <div>

    <choiseMenu />

  </div>
</template>

<script>
import choiseMenu from '../components/client/choiseMenu.vue'
import axios from 'axios'

export default {
  
    data: function(){
      return {
        msg: 'Hello Vue.js!',
        items: [],
        step:0,
        maxSteps:0,

        picked:{},

        id:'',
        name:'',
        price:0,
      }
    },
    asyncData (context) {
      return { project: 'nuxt' }
    },
    components:{
      choiseMenu
    },

    methods:{















        nextStep:function (){
          if(this.maxSteps === this.step + 1)
              return;
          this.step++;
        },
        paySuc:function(){
          this.$message({
            showClose: true,
            message: 'Оплата принята',
            type: 'success'
          });
        },
        getOne: function(){
          axios({
            method:'get',
            url:'http://localhost:3030/beverage',
            data: {id:this.id}
          })
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        },
        getInfo: function(){
          const url = `http://localhost:3030/beverage/${this.id}`
          axios({
            method:'get',
            url
          })
            .then((response) => {
              // console.log(response.data);
              if(this.id === '')
                this.items = response.data.data;
              else
                this.picked = response.data.data[0];
            })
            .catch((error) => {
              console.log(error);
            });
        },
        setInfo: function(){
          axios({
            method:'post',
            url:'http://localhost:3030/beverage',
            data: {name:this.name,price:this.price}
          })
            .then((response) => {
              // console.log(response.data);
              this.items.push(response.data.data)
            })
            .catch((error) => {
              console.log(error);
            });
        }
    }
    
}
</script>

<style>
h1 {
  font-size: 40px;
}

p {
  font-size: 20px;
}
</style>
