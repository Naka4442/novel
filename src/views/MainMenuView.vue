<template>
    <main>
        <h1>Главное меню</h1>
        <section class="buttons">
            <div class="menu-buttons">
                <button class="menu-button">Новая игра</button>
                <button class="menu-button">Продолжить</button>
                <button class="menu-button">Сохранения</button>
            </div>
            <div class="loginout">
                <router-link :to="{name : 'authorization'}"><button class="login-button">Войти</button></router-link>
            </div>
        </section>
    </main>
</template>

<script>
export default{

}
</script>
<style scoped>
main{
    width: 100%;
    height: 100vh;
    background-image: url('../assets/backgrounds/morning.jpg');
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    font-family: "Everlasting";
    color: white;
    
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