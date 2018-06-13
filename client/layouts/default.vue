<template>
  <div >
    <nuxt class="container"/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~/components/footer.vue'

export default {
  components: {
    MyFooter
  }
}
</script>

<style>
  .container{
    margin: 50px;
  }
</style>
