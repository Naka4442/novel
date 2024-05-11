<template>
    <section class="story">
      <p>{{ text }}</p>
      <ul class="answers">
        <li v-for="(answer, i) in answers" :key="i" @click="currentSlide(answer.way)">{{ answer.text }}</li>
      </ul>
    </section>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    props : ['text', 'answers'],
    methods : {
        ...mapActions(['currentSlide'])
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
.answers{
    display: flex;
    justify-content: center;
    gap: 20px;
}
.answers>li{
    list-style-type: none;
    width: 200px;
    height: 30px;
    background-color: #eee;
    border-radius: 5px;
    font-family: "Everlasting";
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>