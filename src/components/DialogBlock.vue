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
  background-color:rgba(0, 0, 0, 0.6); 
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
  color:#ffffff;
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
    color: #ffffff;
}
.answers>li:hover{
  transition: 0.3s;
  color: #4ab2cf;
}
.setting-buttons{
  color: #8f8c8c;
  background-color: #00000000;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: small;
  background-color: rgba(0, 0, 0, 0.6); 

}
.save-button{
  color: #dad7d7;
  background-color: #00000000;
  border-color: #00000000;
  font-family: "Everlasting";
}
.sound-button{
  color: #dad7d7;
  background-color: #00000000;
  border-color: #00000000;
  font-family: "Everlasting";
}
.menu-button{
  color: #dad7d7;
  background-color: #00000000;
  border-color: #00000000;
  text-decoration: none;
  font-family: "Everlasting";
  padding-bottom: 3px;
  
}
.save-button:hover{
  color: #ffffff;
}
.sound-button:hover{
  color: #ffffff;
}
.menu-button:hover{
  color: #ffffff;
  
}

</style>