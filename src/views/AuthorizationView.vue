<template>
    <main>
        <form action="">
            <h2>Авторизация</h2>
            <input type="email" placeholder="E-mail" v-model="user.email">
            <input type="password" placeholder="Пароль" v-model="user.password">
            <button @click="makeAuthorization">Авторизация</button>
            
        </form>
    </main>
</template>
  
<script>
import { mapActions } from 'vuex';
export default {
data(){
    return {
    user : {
        email : "",
        password : ""
    }
    }
},
methods : {
    ...mapActions(["authorization"]),
    makeAuthorization(event){
        event.preventDefault();
        const data = this.user;
        console.log("Данные авторизации", data);
        this.authorization(data).then(result => {
            if(result){
                this.$router.push({name : "menu"});
            }
            else{
                alert("Неверные данные");
            }
        })
    }
}
}
</script>
<style scoped>
main{
    width: 100vw;
    height: 100vh;
    background-color: rgb(69, 212, 252);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
}
form{
    width: 400px;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    box-shadow: 0 0 10px black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
input{
    width: 330px;
    height: 25px;
    border-radius: 5px;
    border: 2px solid #00075e;
    outline: none;
    padding-left: 20px;
    transition: 0.5s;
}
input:focus{
    box-shadow: 0 0 5px #00075e;
    transition: 0.5s;
}
button{
    width: 350px;
    height: 30px;
    background-color: rgb(253, 254, 251);
    border: none;
    border-bottom: 3px solid #9d9e9c;
    cursor: pointer;
    border-radius: 5px;
}
h2{
    font-family: "Everlasting";
    font-size: 30px;
    color: aliceblue;
}
</style>