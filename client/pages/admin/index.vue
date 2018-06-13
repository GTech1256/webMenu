<template>
  <div>
    <adminPanel />
    {{msg}}
  </div>
 
</template>
<script>
import adminPanel from '../../components/admin/adminPanel.vue'


export default {
  data:()=>{
    return{
      msg:'hi admin'
    }
  },
  components:{
    adminPanel
  }
}
</script>
<style>

</style>


