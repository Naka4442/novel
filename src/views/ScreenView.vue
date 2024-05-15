<template>
  <main :style="{backgroundImage : `url(${backgroundUrl})`}">
    <section class="heroes">
      <img v-for="(hero, i) in slide.heroes" :key="i" :src="heroUrl(hero)" alt="">
    </section>
    <p>{{ userName }}</p>
    <StoryBlock v-if="slide.type === 'history'" :text="slide.text" />
    <DialogBlock v-else-if="slide.type === 'dialog'" :text="slide.text" :answers="slide.answers" />
</main>
</template>

<script>
import { mapGetters } from 'vuex';
import StoryBlock from '@/components/StoryBlock.vue';
import DialogBlock from '@/components/DialogBlock.vue';
export default {
  data(){
    return {

    }
  },
  components : {
    StoryBlock,
    DialogBlock
  },
  computed : {
    ...mapGetters([
      'current',
      'story',
      'userName'
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
    heroUrl(path){
      return require(`../assets/heroes/${path}`)
    }
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
</style>