<template>
  <div>
    <el-steps :active="step" finish-status="success">
      <el-step title="Выбор напитка"></el-step>
      <el-step title="Выбор основного блюда"></el-step>
      <el-step title="Выбор доп блюда"></el-step>
      <el-step title="Оплата"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  props:{
    step:{
      type:Number,
      required:true,
      default:100,
      //validator funct return true
    },
  },
  data:()=>{
    return{

    }
  }
}
</script>

<style>

</style>
