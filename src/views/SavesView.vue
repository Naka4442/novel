<template>
    <main>
        <header>
            <h1>Сохранения</h1>
            <div v-if="userName" class="profile-name">
                <h4>{{ userName }}</h4>
            </div>
        </header>
        <section>
            <div class="save-buttons" v-if="saves">
                <div class="save-button" v-for="save in saves" :key="save._id">
                    <span @click="loadSave(save.frame)">{{ textFromFrame(save.frame) }}</span>
                    <button @click="deleteSave(save._id)">x</button>
                </div>
            </div>
        </section>
        <section class="buttons">
            <div class="button">
                <router-link class="button" :to="{name : 'menu'}">Назад</router-link>
            </div>
        </section>
    </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default{
    computed : {
        ...mapGetters([
            "userName",
            "saves",
            "story"
        ])
    },
    methods : {
        ...mapActions([
            "me",
            "getSaves",
            "getSlideIndex",
            "deleteSave",
            "goToSlide"
        ]),
        textFromFrame(id){
            return this.story.find(f => f._id == id).text.slice(0, 50);
        },
        loadSave(id){
            this.goToSlide(id);
            this.$router.push({name : "game"});
        }
    },
    created(){
        if(!this.userName){
            this.me();
        }
        if(!this.saves){
            this.getSaves();
        }
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
    height: 100px;
}
.buttons{
    width: 100%;
    display: flex-end;
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
.loginout{
    padding: 20px;
    display: flex;
    align-items: flex-end;
}

.save-buttons{
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: calc(100vh - 200px);
}
.save-button{
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
    display: flex;
    justify-content: space-between;
}

.buttons{
    height: 50px;
}
</style>