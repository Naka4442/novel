import { createStore } from 'vuex'

export default createStore({
  state: {
    current : 0,
    story : [
      {
        type : "history",
        text : "Текст 1",
        background : "morning.jpg",
        heroes : []
      },
      {
        type : "history",
        text : "Текст 2",
        background : "evening.jpg",
        heroes : ["Slave.png", "cat.png"]
      },
      {
        type : "dialog",
        text : "Текст выбора",
        answers : [
          {
            text : "Подобрать кота",
            way : 3
          },
          {
            text : "Отказаться",
            way : 4
          }
        ],
        background : "evening.jpg",
        heroes : ["Slave.png", "cat.png"]
      },
      {
        type : "history",
        text : "Вы решили подобрать кота",
        background : "evening.jpg",
        heroes : ["cat.png"]
      },
      {
        type : "history",
        text : "Вы решили отказаться",
        background : "evening.jpg",
        heroes : ["Slave.png"]
      },
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
    },
    currentSlide(ctx, index){
      ctx.state.current = index;
    }
  },
  modules: {
  }
})
