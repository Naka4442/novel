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
  flex-direction: column;
  padding: 20px;
}
.story>p{
  font-family: "Everlasting";
  font-size: 25px;
  text-align: center;

}
.answers{
    gap: 20px;
    list-style: lower-alpha;
}
.answers>li{
    border-radius: 5px;
    font-family: "Everlasting";
    cursor: pointer;
    transition: 0.3s;
}
.answers>li:hover{
  transition: 0.3s;
  color: #4acf4a;
}
</style>