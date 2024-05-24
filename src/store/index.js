import { createStore } from 'vuex'

export default createStore({
  // Глобальные переменные проекта (состояние)
  state: {
    apiUrl : "http://141.8.194.105:3000",
    current : 0,
    story : false,
    token : localStorage.getItem("token") ? localStorage.getItem("token") : false,
    user : localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : false
  },
  // функции, выдающие в компоненты переменные из состояния
  getters: {
    current : (state) => state.current,
    story : (state) => state.story,
    userName : (state) => state.user ? state.user.name : false,
  },
  // функции, меняющие состояние
  mutations: {
    setUser(state, user){
      user ? localStorage.setItem("user", JSON.stringify(user)) : localStorage.removeItem("user");
      state.user = user;
    },
    setToken(state, token){
      token ? localStorage.setItem("token", token) : localStorage.removeItem("token");
      state.token = token;
    },
    setStory(state, story){
      state.story = story;
    }
  },
  // действия (функции, выполняющие какую-то логику, например авторизацию или регистрацию)
  actions: {
    nextSlide(ctx){
      ctx.state.current++;
    },
    currentSlide(ctx, index){
      ctx.state.current = index;
    },
    async registration(ctx, data){
      const req = await fetch(`${ctx.state.apiUrl}/users/registration/`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json;charset=utf-8"
        },
        body : JSON.stringify(data)
      });
      return req.ok;
    },
    async authorization(ctx, data){
      const req = await fetch(`${ctx.state.apiUrl}/users/authorization/`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json;charset=utf-8"
        },
        body : JSON.stringify(data)
      });
      if(req.ok){
        const result = await req.json();
        ctx.commit("setToken", result.token);
        await ctx.dispatch("me");
      }
      return req.ok;
    },
    async exit(ctx){
      ctx.commit("setUser", false);
      ctx.commit("setToken", false);
      return true;
    },
    async me(ctx){
      const req = await fetch(`${ctx.state.apiUrl}/users/me/`, {
        method : "GET",
        headers : {
          "Content-Type" : "application/json;charset=utf-8",
          "Authorization" : `Bearer ${ctx.state.token}`
        }
      });
      if(req.ok){
        const result = await req.json();
        ctx.commit("setUser", result.user);
      }
      return req.ok;
    },
    async getStory(ctx){
      const req = await fetch(`${ctx.state.apiUrl}/story/`, {
        method : "GET",
        headers : {
          "Content-Type" : "application/json;charset=utf-8"
        }
      });
      if(req.ok){
        const result = await req.json();
        console.log("История получена", JSON.parse(result.story))
        ctx.commit("setStory", JSON.parse(result.story));
      }
      return req.ok;
    }
  },
  modules: {
  }
})
