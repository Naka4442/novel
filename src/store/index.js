import { createStore } from 'vuex'

export default createStore({
  state: {
    current : 0,
    story : [
      {
        type : "history",
        text : "Текст 1",
        background : "morning.jpg",
        heroes : ["Slave.png", "cat.png"]
      },
      {
        type : "history",
        text : "Текст 2",
        background : "evening.jpg",
        heroes : []
      }
    ]
  },
  getters: {
    current : (state) => state.current,
    story : (state) => state.story,
  },
  mutations: {
  },
  actions: {
    nextSlide(ctx){
      ctx.state.current++;
    }
  },
  modules: {
  }
})
