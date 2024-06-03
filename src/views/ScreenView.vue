<template>
  <main v-if="story" :style="{backgroundImage : `url(${backgroundUrl})`}">
    <section class="heroes">
      <img v-for="(hero, i) in slide.heroes" :key="i" :src="heroUrl(hero)" alt="">
    </section>
    <p>{{ userName }}</p>
    <StoryBlock v-if="slide.type === 'history'" :slide="slide"/>
    <DialogBlock v-else-if="slide.type === 'dialog'" :slide="slide"/>
</main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
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
      if(this.story){
        let c = this.current;
        return this.story[c];
      }
      return {}
    },
    backgroundUrl(){
      if(this.story){
        return require(`../assets/backgrounds/${this.slide.background}`)
      }
      return false;
    }
  },
  methods : {
    ...mapActions([
      'getStory'
    ]),
    heroUrl(path){
      if(this.story){
        return require(`../assets/heroes/${path}`)
      }
      return false;
    }
  },
  created(){
    this.getStory();
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