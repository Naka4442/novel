import { createStore } from 'vuex'

export default createStore({
  // Глобальные переменные проекта (состояние)
  state: {
    apiUrl : "http://141.8.194.105:3000",
    current : 0,
    story : false,
    token : localStorage.getItem("token") ? localStorage.getItem("token") : false,
    user : localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : false,
    saves : localStorage.getItem("saves") ? JSON.parse(localStorage.getItem("saves")) : false
  },
  // функции, выдающие в компоненты переменные из состояния
  getters: {
    current : (state) => state.current,
    story : (state) => state.story,
    userName : (state) => state.user ? state.user.name : false,
    saves : (state) => state.saves
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
    },
    setSaves(state, saves){
      saves ? localStorage.setItem("saves", JSON.stringify(saves)) : localStorage.removeItem("saves");
      state.saves = saves;
    }
  },
  // действия (функции, выполняющие какую-то логику, например авторизацию или регистрацию)
  actions: {
    nextSlide(ctx){
      let story = ctx.getters.story;
      let currentSlide = story[ctx.getters.current];
      let nextFrame = story.find(frame => frame._id == currentSlide.way);
      ctx.state.current = story.indexOf(nextFrame);
    },
    goToSlide(ctx, id){
      let story = ctx.getters.story;
      let slide = story.find(frame => frame._id == id);
      ctx.state.current = story.indexOf(slide);
    },
    goToFirstSlide(ctx){
      ctx.state.current = 0;
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
    },
    async getSaves(ctx){
      const req = await fetch(`${ctx.state.apiUrl}/users/saves/`, {
        method : "GET",
        headers : {
          "Content-Type" : "application/json;charset=utf-8",
          "Authorization" : `Bearer ${ctx.state.token}`
        }
      });
      if(req.ok){
        const result = await req.json();
        console.log("Сохранения получены", result.saves);
        ctx.commit("setSaves", result.saves);
      }
      return req.ok;
    },
    async save(ctx, frame){
      const req = await fetch(`${ctx.state.apiUrl}/users/save/`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json;charset=utf-8",
          "Authorization" : `Bearer ${ctx.state.token}`
        },
        body : JSON.stringify({ frame })
      });
      await ctx.dispatch("getSaves");
      return req.ok;
    },
    async deleteSave(ctx, id){
      console.log(id);
      const req = await fetch(`${ctx.state.apiUrl}/users/saves/`, {
        method : "DELETE",
        headers : {
          "Content-Type" : "application/json;charset=utf-8",
          "Authorization" : `Bearer ${ctx.state.token}`
        },
        body : JSON.stringify({ id })
      });
      await ctx.dispatch("getSaves");
      return req.ok;
    }
  },
  modules: {
  }
})
