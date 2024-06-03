<template>
  <router-view/>
</template>
<!-- стили действуют на всё -->
<script>
import { mapActions } from 'vuex';
export default{
  methods : {
    ...mapActions([
      "getStory"
    ])
  },
  created(){
    this.getStory();
  }
}
</script>
<style>
  @font-face {
    font-family: "Everlasting";
    src: url("./assets/fonts/Everlasting.ttf");
  }
  body{
    margin: 0;
  }
</style>
