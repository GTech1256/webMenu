<template>
  <div>
    {{messageFromServer}}

    <div v-show="canInput">
      <el-input v-model="codeInput" required placeholder="Код из Google Authinicator" clearable />
      <el-button @click="sendCode(codeInput)" >Отправить</el-button>
    </div>

    <div v-show="!canInput">
      {{textTime}}
    </div>


  </div>
</template>

<script>

import axios from 'axios'

export default {  
  
  data(){
    return{
      canInput:true,
      unixTimeOut:0,
      codeInput:'',
      messageFromServer: '',
      interval: null,
      textTime: ''
    }
  },
  methods:{
    async sendCode(code){
      try{
        const res = await axios({
          method:'post',
          url:`http://localhost:3030/admin/code`,
          data:{token:code}
        })

        const { data } = res.data

        console.log(data)

        this.canInput = data.login
        this.unixTimeOut = data.unixTimeOut
        this.messageFromServer = data.message

        if(!data.login && !this.interval){
          this.timerCount()
          this.interval = setInterval(this.timerCount,1000)
        }
        
      }catch(e){
        // return []
        console.log(e)
      }
    },
    timerCount(){
      const unixNow = Math.round( new Date().getTime() / 1000.0 )
      const timeDifference = this.unixTimeOut - unixNow

      console.log(timeDifference)

      if(timeDifference < 0){
        this.canInput = true
        clearInterval(this.interval)
        this.interval = null
        // this.messageFromServer = ''
        return
      }
        

      const minutesLeft = Math.floor( timeDifference / 60 ) 
      const secondsLeft = timeDifference % 60

      let textTime = `Осталось ${minutesLeft} минут ${secondsLeft} секунд`;
      this.textTime = textTime 
    }
  },
  computed:{
    
  }
}
</script>


<style>

</style>

