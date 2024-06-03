<template>
    <main>
        <header>
            <h1>Главное меню</h1>
            <div v-if="userName" class="profile-name">
                <h4>{{ userName }}</h4>
            </div>
        </header>
        <section class="buttons">
            <div class="menu-buttons">
                <button class="menu-button" @click="newGame" @mouseenter="playSound">Новая игра</button>
                <button v-if="userName" class="menu-button" @click="continueGame" @mouseenter="playSound">Продолжить</button>
                <router-link v-if="userName" class="menu-button" :to="{name : 'saves'}" @mouseenter="playSound">Сохранения</router-link>
            </div>
            <div class="loginout">
                <button v-if="userName" class="login-button" @click="exit()">Выйти</button>
                <router-link v-else :to="{name : 'authorization'}"><button class="login-button">Войти</button></router-link>
            </div>
        </section>
    </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default{
    data(){
        return {
            audio : false
        }
    },
    computed : {
        ...mapGetters([
            "userName",
            "saves"
        ])
    },
    methods : {
        ...mapActions([
            "me",
            "exit",
            "goToSlide",
            "goToFirstSlide"
        ]),
        continueGame(){
            if(this.saves){
                let lastSave = this.saves[this.saves.length - 1];
                this.goToSlide(lastSave.frame);
                this.$router.push({name : "game"});
            }
        },
        newGame(){
            this.goToFirstSlide();
            this.$router.push({name : "game"});
        },
        playSound(){
          this.audio.play();
        }
    },
    created(){
        if(!this.userName){
            this.me();
        }
    },
    mounted(){
      this.audio = new Audio(require("../assets/sound/button.mp3"));
    }
}
</script>
<style scoped>
main{
    width: 100%;
    height: 100vh;
    background-image: url("../assets/backgrounds/morning.jpg");
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    font-family: "Everlasting";
    color: white;
    
}
header{
    width: calc(100% - 100px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
}
.buttons{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.menu-buttons{
    display: flex;
    flex-direction: column;
    padding: 50px;
    gap: 10px;
}
.menu-button:hover {
    border: solid;
	color: white;
}
.login-button:hover {
    border: solid;
	color: white;
}
.menu-button{
    box-sizing: content-box;
    border: none;
    text-decoration: none;
    font-weight: normal;
    font-size: 25px;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    width: 22vw;
    padding: 10px 20px;
    width: 300px;
    font-family: "Everlasting";
    border-radius: 5px;
    text-align: center;
}
.loginout{
    padding: 20px;
    display: flex;
    align-items: flex-end;
}
.login-button{
    width: 100px;
    height: 50px;
    border-radius: 30px;
    font-family: "Everlasting";
    border: none;
    font-size: 20px;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
}
</style>