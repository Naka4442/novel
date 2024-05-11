<template>
  <main :style="{backgroundImage : `url(${backgroundUrl})`}">
    <section class="heroes">
      <img v-for="(hero, i) in slide.heroes" :key="i" :src="heroUrl(hero)" alt="">
    </section>
    <section class="story" @click="nextSlide">
      <p>{{ slide.text }}</p>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data(){
    return {

    }
  },
  computed : {
    ...mapGetters([
      'current',
      'story'
    ]),
    slide(){
      let c = this.current;
      return this.story[c];
    },
    backgroundUrl(){
      return require(`../assets/backgrounds/${this.slide.background}`)
    }
  },
  methods : {
    ...mapActions(['nextSlide']),
    heroUrl(path){
      return require(`../assets/heroes/${path}`)
    }
  },
  name: 'HomeView',
  components: {
  }
}
</script>
<style scoped>
main{
  width: 100vw;
  height: 100vh;
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
}
.heroes{
  display: flex;
  justify-content: center;
  gap: 10px;
}
.heroes>img{
  width: 200px;
  
}
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

</style>