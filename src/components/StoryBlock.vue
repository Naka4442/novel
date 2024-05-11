<template>
    <section class="story" @click="nextSlide">
      <p>{{ text }}</p>
    </section>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    props : {
        text : String
    },
    methods : {
        ...mapActions(['nextSlide'])
    }
}
</script>
<style scoped>
.story{
  width: calc(100% - 40px);
  min-height: 130px;
  background-color: rgba(255, 99, 71, 0.461);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}
.story>p{
  font-family: "Everlasting";
  font-size: 25px;
  text-align: center;

}
</style>