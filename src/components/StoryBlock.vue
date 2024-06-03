<template>
    <section class="story" @click="nextSlide">
      <p>{{ slide.text }}</p>
    </section>
    <div class="setting-buttons">
      <button class="save-button" @click="saveGame">Сохранить</button>
      <router-link class="menu-button" :to="{name : 'menu'}">Меню</router-link>
      <button class="sound-button">Звук</button> 
    </div>
    
</template>
<script>
import { mapActions } from 'vuex';
export default {
    props : ['slide'],
    methods : {
        ...mapActions([
          'nextSlide',
          'save'
        ]),
        saveGame(){
          this.save(this.slide._id).then(result => {
            result ? alert("Успешно сохранено!") : alert("Произошла ошибка");
          })
        }
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
.setting-buttons{
  color: #8f8c8c;
  background-color: #00000000;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: small;
  background-color: rgba(255, 99, 71, 0.461);

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