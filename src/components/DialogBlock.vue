<template>
    <section class="story">
      <p>{{ slide.text }}</p>
      <ul class="answers">
        <li 
          v-for="(answer, i) in slide.answers" 
          :key="i" 
          @click="goToSlide(answer.way)"
          @mouseenter="playSound"
          >{{ answer.text }}</li>
      </ul>
      <div class="setting-buttons">
        <button class="save-button" @click="saveGame">Сохранить</button>
        <router-link class="menu-button" :to="{name : 'menu'}">Меню</router-link>
        <button class="sound-button">Звук</button> 
      </div>
    </section>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data(){
      return {
        audio : false
      }
    },
    props : ['slide'],
    methods : {
        ...mapActions([
          'goToSlide',
          'save'
        ]),
        saveGame(){
          this.save(this.slide._id).then(result => {
            result ? alert("Успешно сохранено!") : alert("Произошла ошибка");
          })
        },
        playSound(){
          this.audio.play();
        }
    },
    mounted(){
      this.audio = new Audio(require("../assets/sound/button.mp3"));
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
.setting-buttons{
  color: #8f8c8c;
  background-color: #00000000;
  display: flex;
  justify-content: center;
  align-items: end;

}
.setting-buttons:hover{
  color: #ffffff;
}
</style>